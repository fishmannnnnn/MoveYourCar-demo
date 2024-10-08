'use server'

import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const response = NextResponse.redirect(new URL('/complete', request.url))

    response.cookies.delete('price_token')

    return response
}
