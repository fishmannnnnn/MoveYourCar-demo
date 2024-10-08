'use server'

import {
    mailOptions,
    mailOptionsForFounder,
    transporter,
} from '@/utils/nodemailer'
import { NextResponse } from 'next/server'
import { render } from '@react-email/components'
import React from 'react'
import {
    ClientFormOrder,
    EmailOrder,
} from '@/components/email-templates/EmailOrder'

export async function POST(req: Request) {
    const data = await req.json()
    const props = data as ClientFormOrder
    const emailHtml = await render(React.createElement(EmailOrder, props))
    const emailHtmlFounder = `
                        <p>id: ${props.id}</p>
                        <p>from: ${props.from}</p>
                        <p>to: ${props.to}</p>
                        <p>transport-type: ${props.transportType}</p>
                        <p>vechicle: ${props.vechicle}</p>
                        <p>operable: ${props.conditions}</p>
                        <p>user-email: ${props.email}</p>
                        <p>selected-date: ${props.date}</p>
                        <p>user-phone: ${props.phone}</p>
    `
    try {
        switch (data.formType) {
            case 'main': {
                await Promise.all([
                    transporter.sendMail({
                        ...mailOptions,
                        to: [...mailOptions.to, props.email],

                        html: emailHtml,
                    }),
                    transporter.sendMail({
                        ...mailOptionsForFounder,
                        html: emailHtmlFounder,
                    }),
                ])
                break
            }
            case 'footer':
                await transporter.sendMail({
                    ...mailOptions,
                    html: `
                    <p>user-name: ${data.name}</p>
                    <p>user-email: ${data.email}</p>
                    <p>user-phone: ${data.phone}</p>
                    <p>user-message: ${data.message}</p>
                    `,
                })
                break
            case 'request':
                await transporter.sendMail({
                    ...mailOptions,
                    html: `
                        <p>user-name: ${data.name}</p>
                        <p>user-email: ${data.email}</p>
                        <p>user-phone: ${data.phone}</p>
                        `,
                })
                break
        }
        return new NextResponse(data, { status: 200 })
    } catch (error) {
        return new NextResponse('Something goes wrong', { status: 400 })
    }
}
