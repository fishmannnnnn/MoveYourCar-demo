'use client'
import ButtonFilled from '@/components/buttons/buttonFilled/ButtonFilled'
import React from 'react'
import styles from './CompletaBanner.module.scss'
import { useRouter } from 'next/navigation'

export const CompleteBanner = () => {
    const router = useRouter()

    return (
        <>
            <h1 className={styles.title}>THANKS FOR YOUR PAYMENT!</h1>
            <p className={styles.description}>
                We will contact you as soon as possible
            </p>
            <ButtonFilled
                className={styles.btn}
                text={'Go back'}
                onCLick={() => router.push('/')}
                type="secondary"
            />
        </>
    )
}
