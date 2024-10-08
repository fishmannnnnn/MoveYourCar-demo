'use client'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './SuggestList.module.scss'
import { useState } from 'react'
import clsx from 'clsx'

export interface SuggestListProps {
    data?: {
        toShow: string
        toClick: string
    }[]
    onClick: (str: string) => void
    isVisible: boolean
    withScroll?: boolean
}

interface useSuggestListRetunrValue {
    isVisible: boolean
    setIsVisible: (val: boolean) => void
}

export const useSuggest = (): useSuggestListRetunrValue => {
    const [isVisible, setIsVisible] = useState(false)

    return {
        isVisible,
        setIsVisible,
    }
}

export const SuggestList = ({ data, onClick, isVisible, withScroll }: SuggestListProps) => {
    return (
        <AnimatePresence>
            {isVisible && data && data.length ? (
                <motion.ul
                    className={clsx(withScroll ? styles.suggestWithScroll : styles.suggest)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {data.map((el, key) => (
                        <li key={key}>
                            <button
                                type="button"
                                onClick={() => {
                                    onClick(el.toClick)
                                }}
                            >
                                {el.toShow}
                            </button>
                        </li>
                    ))}
                </motion.ul>
            ) : null}
        </AnimatePresence>
    )
}
