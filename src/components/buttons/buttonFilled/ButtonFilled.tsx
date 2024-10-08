'use client'
import styles from './ButtonFilled.module.scss'
import arrow from '@/icons/arrow.svg'
import { roboto } from '@/styles/fonts'
import classNames from 'classnames'
import Image from 'next/image'

const ButtonFilled = ({
    text,
    type,
    onCLick,
    btnType,
    className,
    disabled,
}: {
    text: string
    type: string
    onCLick?: () => void
    btnType?: 'button' | 'submit' | 'reset'
    className?: string
    disabled?: boolean
}) => {
    return (
        <button
            disabled={disabled}
            className={classNames(
                roboto.className,
                styles.button,
                type == 'secondary'
                    ? styles['button--secondary']
                    : styles['button--primary'],
                className
            )}
            onClick={btnType !== 'submit' ? onCLick : undefined}
            type={btnType ?? 'button'}
        >
            <span>{text}</span>
            <Image
                className={styles.arrow}
                src={arrow}
                alt="submit-icon"
            ></Image>
        </button>
    )
}
export default ButtonFilled
