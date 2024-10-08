import { from } from '@apollo/client'
import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '587',
    secure: false,
    // auth: {
    //     user: 'webstudio.fractal@gmail.com',
    //     pass: 'irvz ljhc hfpo uoll',
    // },
    auth: {
        user: '29453komandor@gmail.com',
        pass: 'jsya ybck fcpz gwgw',
    },
    // auth: {
    //     user: 'moveyourcarinfo@gmail.com',
    //     pass: 'ygdp ksdd cwga rlwa',
    // },
} as unknown as SMTPTransport.Options)

export const mailOptions = {
    from: 'Move Your Car moveyourcarinfo@gmail.com',
    // to: ['webstudio.fractal@gmail.com', 'moveyourcarorder@gmail.com'],
    to: ['29453komandor@gmail.com'],
    subject: 'New moving request',
}

export const mailOptionsForFounder = {
    from: 'Move Your Car moveyourcarinfo@gmail.com',
    // to: ['webstudio.fractal@gmail.com', 'moveyourcarorder@gmail.com'],
    to: ['webstudio.fractal@gmail.com', '29453komandor@gmail.com'],
    subject: 'New moving request',
}
