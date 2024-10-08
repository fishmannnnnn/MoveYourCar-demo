import React, { ChangeEvent } from 'react'
import styles from './CombinedInput.module.scss'

export type ChangeE = ChangeEvent<HTMLInputElement>

export interface InputProps {
    required?: boolean
    placeholder?: string
    value?: string
    onChange?: (e: ChangeE) => void
    type?: string
}

interface CombinedInputProps {
    first: InputProps
    second: InputProps
}

export const CombinedInput = ({ first, second }: CombinedInputProps) => {
    return (
        <div className={styles.combinedWrapper}>
            <input {...first} />
            <input {...second} />
        </div>
    )
}
