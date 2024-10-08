'use client'

import clsx from 'clsx'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { CallIcon } from '../icons/CallIcon'
import Link from 'next/link'
import styles from './CallBtn.module.scss'

export const CallBtn = () => {
    const handleCopyPhone = () => {
        navigator.clipboard.writeText('+1 (937) 272-37-44')
        toast('Phone number copied', {
            position: 'bottom-right',
            hideProgressBar: true,
            type: 'info',
        })
    }

    const [isMousePressed, setIsMousePressed] = useState(false)

    return (
        <>
            <button
                onClick={handleCopyPhone}
                className={clsx(
                    styles.phoneWrapper,
                    styles.desktop,
                    isMousePressed && styles.pressed
                )}
                onMouseDown={() => setIsMousePressed(true)}
                onMouseUp={() => setIsMousePressed(false)}
            >
                <CallIcon />
            </button>
            <Link
                 href="tel:+1 (888) 699-11-91"
                className={clsx(styles.phoneWrapper, styles.mobile)}
            >
                <CallIcon />
            </Link>
        </>
    )
}
