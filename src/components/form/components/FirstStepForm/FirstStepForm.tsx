'use client'
import { useFirstStep } from '@/app/Hooks'
import { FormEvent, useMemo } from 'react'
import { useDebounce } from 'use-debounce'
import styles from './FirstStepForm.module.scss'
import { RadioBtn } from '../RadioBtn/RadioBtn'
import ButtonFilled from '@/components/buttons/buttonFilled/ButtonFilled'
import { InputWithSuggestList } from '../InputWithSuggest/InputWithSuggest'
import { toast } from 'react-toastify'

export interface City {
    city: string
    county: string
    latitude: number
    longitude: number
    state: string
    zip_code: number
}

export interface FirstStepProps {
    cities?: City[]
    goNext: () => void
}

const filterCities = (
    value: string,
    cities?: City[]
): { toShow: string; toClick: string }[] | undefined => {
    if (cities && value) {
        return cities
            .filter((city) => city.zip_code.toString().includes(value))
            .slice(0, 20)
            .map((el) => {
                const data = el.city + ', ' + el.state + ' ' + el.zip_code
                return {
                    toShow: data,
                    toClick: data,
                }
            })
    } else return
}

export const FirstStepForm = ({ cities, goNext }: FirstStepProps) => {
    const { data, eventHandlers } = useFirstStep()
    const [indexFrom] = useDebounce(data.from, 250)
    const [indexTo] = useDebounce(data.to, 250)

    const SuggestTo = useMemo(
        () => filterCities(indexTo, cities),
        [indexTo, cities]
    )

    const SuggestFrom = useMemo(
        () => filterCities(indexFrom, cities),
        [indexFrom, cities]
    )

    const handleForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (cities) {
            const tmpFrom = data.from.split(' ')
            const tmpTo = data.to.split(' ')
            const from = tmpFrom.length > 1 ? tmpFrom.at(-1) : tmpFrom[0]
            const to = tmpTo.length > 1 ? tmpTo.at(-1) : tmpTo[0]

            const fromData = cities.find(
                (city) => city.zip_code.toString() === from
            )
            const toData = cities.find(
                (city) => city.zip_code.toString() === to
            )

            if (!fromData) {
                toast('Incorrect from zip-code', {
                    position: 'bottom-right',
                    hideProgressBar: true,
                    type: 'error',
                })
                eventHandlers.handleFrom('')
                return
            }
            if (!toData) {
                toast('Incorrect to zip-code', {
                    position: 'bottom-right',
                    hideProgressBar: true,
                    type: 'error',
                })
                eventHandlers.handleTo('')
                return
            }

            if (fromData.zip_code === toData.zip_code) {
                toast("Can't select the same place", {
                    position: 'bottom-right',
                    hideProgressBar: true,
                    type: 'error',
                })
                eventHandlers.handleFrom('')
                eventHandlers.handleTo('')
                return
            }

            eventHandlers.handleSubmit(
                {
                    latitude: fromData.latitude,
                    cityName: fromData.city,
                    longitude: fromData.longitude,
                    zipCode: fromData.zip_code.toString(),
                },
                {
                    latitude: toData.latitude,
                    cityName: toData.city,
                    longitude: toData.longitude,
                    zipCode: toData.zip_code.toString(),
                }
            )
            goNext()
        }
    }

    return (
        <form onSubmit={handleForm} className={styles.form} method="post">
            <div className={styles.search}>
                <div className={styles.firstWrapper}>
                    <InputWithSuggestList
                        className={styles.firstInpt}
                        type="text"
                        listData={SuggestFrom}
                        placeholder="Delivery from"
                        value={data.from}
                        // pattern="[0-9]+"
                        maxLength={5}
                        onChange={eventHandlers.handleFrom}
                    />
                </div>
                <div className={styles.firstWrapper}>
                    <InputWithSuggestList
                        className={styles.firstInpt}
                        type="text"
                        listData={SuggestTo}
                        placeholder="Delivery to"
                        // pattern="[0-9]+"
                        maxLength={5}
                        value={data.to}
                        onChange={eventHandlers.handleTo}
                    />
                </div>
            </div>
            <div className={styles.transportOptions}>
                <RadioBtn
                    data={data.radio}
                    label="Open transport"
                    value="open"
                    name="transport"
                    onChange={() => eventHandlers.handleRadio(true)}
                />
                <RadioBtn
                    data={!data.radio}
                    label="Enclosed transport"
                    value="enclosed"
                    name="transport"
                    onChange={() => eventHandlers.handleRadio(false)}
                />
            </div>
            <div className={styles.submit}>
                <ButtonFilled
                    btnType="submit"
                    text={'Vehicle details'}
                    type="primary"
                />
            </div>
        </form>
    )
}
