'use client'

import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useState } from 'react'
import styles from './CheckoutForm.module.scss'
import { SubmitBtn } from '../../SubmitBtn/SubmitBtn'
import { selectIsAllFormsSubmited, useAppSelector } from '@/app/redux/hooks'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import ClipLoader from 'react-spinners/ClipLoader'
import { usePaymentFormData } from '@/app/(booking)/hooks/usePaymentFormData'
import { sendFormPayment } from '@/app/(booking)/actions/send-form-full'

interface CheckoutFormProps {
    amount: number
}

const CheckoutForm = ({ amount }: CheckoutFormProps) => {
    const { isSubmited } = useAppSelector(selectIsAllFormsSubmited)
    const router = useRouter()
    const [isPayed, setIsPayed] = useState(false)
    const [isFormLoading, setIsFormLoading] = useState(false)
    const data = usePaymentFormData()

    const stripe = useStripe()

    const elements = useElements()

    const [message, setMessage] = useState<string>()
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (!isSubmited) {
            toast('Complete the previous steps first!', {
                position: 'bottom-right',
                hideProgressBar: true,
                type: 'error',
            })
            return
        }

        if (!stripe || !elements) {
            return
        }

        setIsLoading(true)

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required',
        })

        if (error) {
            if (
                error.type === 'card_error' ||
                error.type === 'validation_error'
            ) {
                setMessage(error.message)
            } else {
                setMessage('An unexpected error occurred.')
            }
        }

        if (paymentIntent && paymentIntent.status === 'succeeded') {
            setIsFormLoading(true)
            await sendFormPayment(data)
                .then(() => {
                    setIsPayed(true)
                    router.push('/complete')
                })
                .finally(() => setIsFormLoading(false))
        }

        setIsLoading(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            {message && <p className={styles.errorMessage}>{message}</p>}
            {isLoading || isFormLoading ? (
                <div className={styles.loaderWrapper}>
                    <ClipLoader loading />
                </div>
            ) : (
                <SubmitBtn
                    text={`Pay ${amount} $`}
                    className={styles.PayBtn}
                    disabled={!stripe || isLoading || isFormLoading || isPayed}
                />
            )}
        </form>
    )
}

export default CheckoutForm
