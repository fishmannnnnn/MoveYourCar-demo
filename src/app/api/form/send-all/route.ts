'use server'

import {
    ClientFormPayment,
    EmailPayment,
} from '@/components/email-templates/EmailPayment'
import {
    mailOptions,
    mailOptionsForFounder,
    transporter,
} from '@/utils/nodemailer'
import { render } from '@react-email/components'
import { NextResponse } from 'next/server'
import React from 'react'

export async function POST(req: Request) {
    const data = await req.json()
    const props = data as ClientFormPayment
    const emailHtml = await render(React.createElement(EmailPayment, props))

    const founderHtml = `
                <h1>Moving request payed and confirmed: Price ${props.price}$</h1>
                <p>id: ${props.id}</p>
                <p>from: ${props.from}</p>
                <p>to: ${props.to}</p>
                <p>transport-type: ${props.transportType}</p>
                <p>vechicle: ${props.vechicle}</p>
                <p>operable: ${props.conditions}</p>
                <p>user-email: ${props.email}</p>
                <p>selected-date: ${props.date}</p>
                <p>user-phone: ${props.phone}</p>
                <div>
                    <h2>transport-data</h2>
                    <p>full name: ${props.name}</p>
                    ${props.extraPhone ? `<p>extra-phone: ${data.extraPhone}</p>` : ''}
                    <p>representation: ${props.representation}</p>
                </div>
                 <div>
                    <h2>pickup-data</h2>
                    <p>address: ${props.pickup.address}</p>
                    <p>details: ${props.pickup.details}</p>
                    <p>representation: ${props.pickup.representation}</p>
                    <p>who to contact: ${props.pickup.whoToContact}</p>
                </div>
                <div>
                    <h2>delivery-data</h2>
                    <p>address: ${props.delivery.address}</p>
                    <p>details: ${props.delivery.details}</p>
                    <p>representation: ${props.delivery.representation}</p>
                    <p>who to contact: ${props.delivery.whoToContact}</p>
                    ${props.delivery.specialInstruction ? `<p>special instructions: ${props.delivery.specialInstruction}</p>` : ''}
                </div>
                `

    try {
        await Promise.all([
            transporter.sendMail({
                ...mailOptions,
                to: [...mailOptions.to, props.email],
                html: emailHtml,
            }),
            transporter.sendMail({
                ...mailOptionsForFounder,
                html: founderHtml,
            }),
        ])

        return new NextResponse(data, { status: 200 })
    } catch (error) {
        return new NextResponse('Something goes wrong', { status: 400 })
    }
}
