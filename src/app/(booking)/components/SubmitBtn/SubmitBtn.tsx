import ButtonFilled from '@/components/buttons/buttonFilled/ButtonFilled'
import clsx from 'clsx'
import React from 'react'
import styles from './SubmitBtn.module.scss'

interface SubmitBtnProps {
    text: string
    className?: string
    disabled?: boolean
}

export const SubmitBtn = ({ text, className, disabled }: SubmitBtnProps) => {
    return (
        <ButtonFilled
            className={clsx(styles.btn, className)}
            btnType="submit"
            text={text}
            disabled={disabled}
            type="secondary"
        />
    )
}
