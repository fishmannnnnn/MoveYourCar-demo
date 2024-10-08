'use client'

import styles from './RadioBtn.module.scss'

export interface RadioBtnProps {
    data: boolean
    value: string
    label: string
    name: string
    onChange: () => void
}

export const RadioBtn = ({
    data,
    value,
    name,
    onChange,
    label,
}: RadioBtnProps) => {
    return (
        <label
            onClick={onChange}
            htmlFor="open"
            className={data ? 'radio-label--checked' : 'radio-label'}
        >
            <input type="radio" value={value} name={name} />
            <span className={styles.radioSpan}>{label}</span>
        </label>
    )
}
