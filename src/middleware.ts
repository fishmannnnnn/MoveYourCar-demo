import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname

    if (
        path === '/calculations' ||
        path === '/transport' ||
        path === '/pickup-details' ||
        path === '/delivery-details' ||
        path === '/payment'
    ) {
        if (!req.cookies.get('price_token')) {
            const response = NextResponse.redirect(new URL('/', req.url))

            return response
        }
    }
    if (path === '/complete' && req.cookies.get('price_token')) {
        const response = NextResponse.redirect(new URL('/complete', req.url))

        response.cookies.delete('price_token')

        return response
    }
}
