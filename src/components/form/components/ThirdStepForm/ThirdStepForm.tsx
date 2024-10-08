'use client'
import { useThirdStep } from '@/app/Hooks'
import styles from './ThirdStepForm.module.scss'
import { InputWithSuggestList } from '../InputWithSuggest/InputWithSuggest'
import Link from 'next/link'
import ButtonFilled from '@/components/buttons/buttonFilled/ButtonFilled'
import { useMask } from '@react-input/mask'
import {
    getThridFormDataSelector,
    useAppDispatch,
    useAppSelector,
} from '@/app/redux/hooks'
import { FormEvent } from 'react'
import { toast } from 'react-toastify'
import clsx from 'clsx'
import { calculateCost } from '@/app/redux/thunks/calculate-cost'
import { enableCalculation } from '@/app/redux/features/form-slice'
import { onSubmit } from '@/app/redux/features/form-third-step-slice'

interface ThirdStepProps {
    goNext: () => void
}

const DATES: string[] = [
    'As soon as possible',
    'Within 2 Weeks',
    'Within 30 Days',
    'More than 30 Days',
]

export const ThirdStepForm = ({ goNext }: ThirdStepProps) => {
    const dispatch = useAppDispatch()

    const {
        from: dFrom,
        to: dTo,
        isLoading: isPriceLoading,
    } = useAppSelector(getThridFormDataSelector)

    const { data, eventHandlers } = useThirdStep()
    const phoneInputRef = useMask({
        mask: '+1 [___] ___-__-__',
        replacement: { _: /\d/ },
        showMask: false,
    })

    const isLoading = isPriceLoading

    const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const from = {
            latitude: dFrom.latitude!,
            longitude: dFrom.longitude!,
        }
        const to = {
            latitude: dTo.latitude!,
            longitude: dTo.longitude!,
        }
        dispatch(enableCalculation())
        const data = await dispatch(calculateCost({ from, to }))
        if (calculateCost.fulfilled.match(data)) {
            dispatch(onSubmit(true))
            goNext()
        } else {
            if (data.payload) {
                const erros = `${data.payload.code}: ${data.payload.message}`
                toast(erros, {
                    position: 'bottom-right',
                    hideProgressBar: true,
                    type: 'error',
                })
            } else {
                toast('Something gone wrong...', {
                    position: 'bottom-right',
                    hideProgressBar: true,
                    type: 'error',
                })
            }
        }
    }

    return (
        <form onSubmit={onSubmitForm} className={styles.form} method="post">
            <div className={styles.secondStep}>
                <input
                    className={styles.inpt}
                    type="email"
                    required
                    placeholder="Your email"
                    value={data.email}
                    onChange={eventHandlers.handleEmail}
                />

                <div className={styles.selectWrapp}>
                    <InputWithSuggestList
                        placeholder="First available date"
                        value={data.date}
                        onChange={eventHandlers.handleDate}
                        isDate
                        listData={DATES.map((date) => ({
                            toShow: date,
                            toClick: date,
                        }))}
                    />
                </div>
                <input
                    className={styles.inpt}
                    placeholder="Your phone"
                    required
                    type="tel"
                    minLength={18}
                    ref={phoneInputRef}
                    value={data.phone}
                    onChange={eventHandlers.handlePhone}
                />
            </div>
            <p className={styles.privacyPolicy}>
                By providing your phone number and clicking through, you agree
                to our 
                <Link href={'/terms'} className={styles.link}>
                    Terms
                </Link>
                ,
                <Link href={'/privacy-and-policy'} className={styles.link}>
                    Privacy Policy
                </Link>
                , and authorize us to make or initiate sales calls, text msgs,
                and prerecorded voicemails to that number using an automated
                system. Your agreement is not a condition of purchasing
                products, goods or services. You may opt out at any time.
            </p>
            <div className={styles.submit}>
                <ButtonFilled
                    className={clsx(isLoading && styles.disabled)}
                    btnType="submit"
                    text={'Calculate cost'}
                    type="primary"
                />
            </div>
        </form>
    )
}
