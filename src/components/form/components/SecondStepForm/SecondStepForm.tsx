'use client'
import { useSecondStep } from '@/app/Hooks'
import styles from './SecondStepForm.module.scss'
import { RadioBtn } from '../RadioBtn/RadioBtn'
import ButtonFilled from '@/components/buttons/buttonFilled/ButtonFilled'
import { InputWithSuggestList } from '../InputWithSuggest/InputWithSuggest'
import { toast } from 'react-toastify'
import { useDebounce } from 'use-debounce'
import { FormEvent, useEffect, useMemo } from 'react'
import { useAppDispatch } from '@/app/redux/hooks'
import { onSubmit } from '@/app/redux/features/form-second-step-slice'

export interface Car {
    brand: string
    models: string[]
}

interface FiltredCarsReturnValue {
    filtredCars: Car[]
    suggestListData: {
        toClick: string
        toShow: string
    }[]
}

const FilterCars = (
    value: string,
    cars?: Car[]
): FiltredCarsReturnValue | undefined => {
    if (cars) {
        const filtredCars = cars.filter((car) =>
            car.brand.toLowerCase().includes(value.toLowerCase())
        )
        const suggestListData = filtredCars.map((el) => ({
            toClick: el.brand,
            toShow: el.brand,
        }))
        return {
            filtredCars,
            suggestListData,
        }
    }
    return undefined
}
const FilterModels = (
    model: string,
    filtredCars?: Car[]
): { toShow: string; toClick: string }[] | undefined => {
    if (filtredCars && filtredCars.length) {
        const models_ = filtredCars[0].models
        if (!model) {
            return models_.map((el) => ({
                toClick: el,
                toShow: el,
            }))
        } else {
            return models_
                .filter((m) => m.includes(model))
                .slice(0, 20)
                .map((el) => ({
                    toClick: el,
                    toShow: el,
                }))
        }
    }
    return undefined
}

interface SecondStepProps {
    goNext: () => void
    cars?: Car[]
}

const YEARS: string[] = Array.from({ length: 125 }, (_, index) =>
    (2024 - index).toString()
)

export const SecondStepForm = ({ goNext, cars }: SecondStepProps) => {
    const { data, eventHandlers } = useSecondStep()
    const dispatch = useAppDispatch()

    const [make] = useDebounce(data.make, 250)
    const [model] = useDebounce(data.model, 250)

    const SuggestMake = useMemo(() => FilterCars(make, cars), [make, cars])

    const isModelInputDisabled = Boolean(!data.make || data.make.length <= 2)

    const SuggestModels = useMemo(
        () => FilterModels(model, SuggestMake?.filtredCars),
        [model, SuggestMake]
    )

    useEffect(() => {
        if (isModelInputDisabled) {
            eventHandlers.handleModel('')
        }
    }, [isModelInputDisabled, eventHandlers])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (parseInt(data.year) < 1900 || parseInt(data.year) > 2024) {
            eventHandlers.handleYear('')
            toast('Incorrect year', {
                position: 'bottom-right',
                hideProgressBar: true,
                type: 'error',
            })
            return
        }
        dispatch(onSubmit(true))
        goNext()
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form} method="post">
            <div className={styles.secondStep}>
                <div className={styles.dateInputWrapper}>
                    <InputWithSuggestList
                        listData={YEARS.map((e) => ({ toShow: e, toClick: e }))}
                        minLength={4}
                        maxLength={4}
                        pattern="[0-9]+"
                        placeholder="Vehicle year"
                        value={data.year}
                        onChange={eventHandlers.handleYear}
                        withScroll
                    />
                </div>
                <div className={styles.selectWrapp}>
                    <InputWithSuggestList
                        placeholder="Vehicle make"
                        value={data.make}
                        onChange={eventHandlers.handleMake}
                        pattern="[a-zA-Z\s\-]+"
                        listData={SuggestMake?.suggestListData}
                        withScroll
                    />
                </div>

                <div className={styles.selectWrapp}>
                    <InputWithSuggestList
                        placeholder="Vehicle model"
                        value={data.model}
                        onChange={eventHandlers.handleModel}
                        listData={SuggestModels}
                        disabled={isModelInputDisabled}
                        withScroll
                    />
                </div>
            </div>
            <div className={styles.transportOptions}>
                <RadioBtn
                    data={data.radio}
                    label="Operable"
                    value="operable"
                    name="condition"
                    onChange={() => eventHandlers.handleRadio(true)}
                />
                <RadioBtn
                    data={!data.radio}
                    label="Non-operable"
                    value="non-operable"
                    name="condition"
                    onChange={() => eventHandlers.handleRadio(false)}
                />
            </div>
            <div className={styles.submit}>
                <ButtonFilled
                    btnType="submit"
                    text={'Confirmation details'}
                    type="primary"
                />
            </div>
        </form>
    )
}
