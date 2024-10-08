import { FormContainer } from '../components/FormContaier/FormContainer'
import { BackBtn } from '../components/BackBtn/BackBtn'
import CheckoutForm from '../components/Forms/CheckoutForm/CheckoutForm'
import StripeProvider from '@/components/stripe-provider/StripeProvider'

import { cookies } from 'next/headers'

export default async function Payment() {
    const cookieStroe = cookies()
    const amount = cookieStroe.get('price_token')

    if (!amount) return null

    const paymentData = await fetch(process.env.PAYMENT_INTENT_URL as string, {
        cache: 'no-store',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            amount: amount.value,
        }),
    })
    const { clientSecret, amount: decodeAmount } = await paymentData.json()

    const options = {
        clientSecret,
    }

    return (
        <FormContainer>
            <BackBtn href="/pickup-details" />
            <StripeProvider options={options}>
                <CheckoutForm amount={decodeAmount} />
            </StripeProvider>
        </FormContainer>
    )
}
