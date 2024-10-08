'use client'
import clsx from 'clsx'
import { ChangeE } from '../CombimedInput/CombinedInput'
import styles from './RadioBtn.module.scss'

interface RadioBtnProps {
    title: string
    value: string
    onClick: (e: ChangeE) => void
    name: string
    checked: boolean
    isSpecial?: boolean
}

export const RadioBtn = ({
    name,
    onClick,
    title,
    value,
    checked,
    isSpecial,
}: RadioBtnProps) => (
    <label className={styles.radioBtn} htmlFor={name}>
        <input
            checked={checked}
            className={clsx(styles.radioInput, isSpecial && styles.special)}
            type="radio"
            value={value}
            id={name}
            onChange={onClick}
        />
        <span>{title}</span>
    </label>
)
