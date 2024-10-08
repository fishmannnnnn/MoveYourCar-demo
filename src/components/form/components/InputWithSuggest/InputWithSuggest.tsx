'use client'
import clsx from 'clsx'
import { ChangeEvent } from 'react'
import { SuggestList, useSuggest } from '../SuggestList/SuggestList'
import styles from './InputWithSuggets.module.scss'

export interface InputWithSuggestListProps {
    type?: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement> | string) => void
    listData?: {
        toShow: string
        toClick: string
    }[]
    placeholder: string
    maxLength?: number
    minLength?: number
    className?: string
    pattern?: string
    isDate?: boolean
    disabled?: boolean
    withScroll?: boolean;
}

export const InputWithSuggestList = ({
    maxLength,
    minLength,
    onChange,
    placeholder,
    value,
    type,
    listData,
    className,
    pattern,
    isDate,
    disabled,
    withScroll
}: InputWithSuggestListProps) => {
    const { isVisible, setIsVisible } = useSuggest()
    return (
        <>
            <input
                className={clsx(
                    styles.inpt,
                    className,
                    disabled && styles.disabled
                )}
                type={type ?? 'text'}
                required
                pattern={pattern}
                maxLength={maxLength}
                minLength={minLength}
                placeholder={placeholder}
                value={value}
                onChange={isDate ? () => {} : onChange}
                onFocus={() => setIsVisible(true)}
                onBlur={() => setIsVisible(false)}
                disabled={disabled}
            />
            <SuggestList
                data={listData}
                isVisible={isVisible}
                onClick={onChange}
                withScroll={withScroll}
            />
        </>
    )
}
