import React from 'react'
import styles from './FormTitle.module.scss'
import clsx from 'clsx'

interface FormTitleProps {
    title: string
    subtitle?: string
}

export const FormTitle = ({ title, subtitle }: FormTitleProps) => {
    return (
        <div className={styles.titleWrapper}>
            <h1 className={clsx(styles.title, 'roboto')}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
    )
}
