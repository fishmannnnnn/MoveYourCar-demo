'use client'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js'
import React from 'react'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string)

interface StripeProviderProps {
    children: React.ReactNode
    options: StripeElementsOptions
}

export default function StripeProvider({
    children,
    options,
}: StripeProviderProps) {
    return (
        <Elements stripe={stripePromise} options={options}>
            {children}
        </Elements>
    )
}
