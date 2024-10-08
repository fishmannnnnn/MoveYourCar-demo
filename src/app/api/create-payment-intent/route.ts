'use server'

import { NextRequest, NextResponse } from 'next/server'

import { Base64 } from 'js-base64'

const stripe = require('stripe')(process.env.STRIPE_SECRET)

// For some reason Stripe devides current amount by 100, so in order to fix it this function exists

const transformToUsdCurrency = (amount: number): number => {
    return amount * 100
}

// We also return the amount of the order in this handler, so in order to render a correct amount
// we need to devide it back

const transformCurrencyBack = (amount: number): number => {
    return amount / 100
}

export async function POST(request: NextRequest) {
    try {
        const { amount } = await request.json()

        console.log('amount', amount)

        const decreptedAmount = transformToUsdCurrency(
            Number(Base64.decode(amount))
        )

        const paymentIntent = await stripe.paymentIntents.create({
            amount: decreptedAmount,
            currency: 'usd',
            automatic_payment_methods: { enabled: true },
        })

        console.log('response: ', paymentIntent.client_secret)
        console.log('amount: ', transformCurrencyBack(decreptedAmount))

        return NextResponse.json({
            clientSecret: paymentIntent.client_secret,
            amount: transformCurrencyBack(decreptedAmount),
        })
    } catch (error) {
        console.log('Internal Error:', error)
        return NextResponse.json(
            {
                error: `Internal Server Error: ${error}`,
            },
            { status: 500 }
        )
    }
}
