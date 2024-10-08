'use server'

import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { Base64 } from 'js-base64'

export async function POST(request: NextRequest) {
    try {
        const { price } = await request.json()

        const priceToken = Base64.encode(price)

        const cookiesStore = cookies()
        cookiesStore.set('price_token', priceToken, {
            secure: true,
            httpOnly: true,
        })

        return NextResponse.json({ price })
    } catch (error) {
        return NextResponse.json(
            {
                error: `Internal Server Error: ${error}`,
            },
            { status: 500 }
        )
    }
}
