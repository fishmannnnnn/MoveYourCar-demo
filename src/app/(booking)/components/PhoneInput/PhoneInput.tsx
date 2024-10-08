'use client'
import React from 'react'
import { InputProps } from '../CombimedInput/CombinedInput'
import { useMask } from '@react-input/mask'
import styles from './PhoneInput.module.scss'
import clsx from 'clsx'

interface PhoneInputProps extends InputProps {
    className?: string
}

export const PhoneInput = ({
    onChange,
    placeholder,
    required,
    type,
    value,
    className,
}: PhoneInputProps) => {
    const phoneInputRef = useMask({
        mask: '+1 [000] 000-00-00',
        replacement: { '0': /\d/ },
        showMask: false,
    })
    return (
        <input
            className={clsx(styles.inpt, className)}
            placeholder={placeholder ?? '+1 [000] 000-00-00 *'}
            required={required}
            type={type ?? 'tel'}
            minLength={18}
            value={value}
            onChange={onChange}
            ref={phoneInputRef}
        />
    )
}
