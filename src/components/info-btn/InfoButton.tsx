'use client'
import React, { useState } from 'react'
import styles from './InfoButton.module.scss'
import { AnimatePresence, motion } from 'framer-motion'

interface InfoButtonProps {
    text: string
}

export const InfoButton = ({ text }: InfoButtonProps) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div className={styles.infoIcon}>
            <div className={styles.wrapper}>
                <svg
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.25 10.5H12V17.25H12.75M21.75 12C21.75 14.5859 20.7228 17.0658 18.8943 18.8943C17.0658 20.7228 14.5859 21.75 12 21.75C9.41414 21.75 6.93419 20.7228 5.10571 18.8943C3.27723 17.0658 2.25 14.5859 2.25 12C2.25 9.41414 3.27723 6.93419 5.10571 5.10571C6.93419 3.27723 9.41414 2.25 12 2.25C14.5859 2.25 17.0658 3.27723 18.8943 5.10571C20.7228 6.93419 21.75 9.41414 21.75 12Z"
                        stroke="#657981"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.75 7.125C12.75 7.32391 12.671 7.51468 12.5303 7.65533C12.3897 7.79598 12.1989 7.875 12 7.875C11.8011 7.875 11.6103 7.79598 11.4697 7.65533C11.329 7.51468 11.25 7.32391 11.25 7.125C11.25 6.92609 11.329 6.73532 11.4697 6.59467C11.6103 6.45402 11.8011 6.375 12 6.375C12.1989 6.375 12.3897 6.45402 12.5303 6.59467C12.671 6.73532 12.75 6.92609 12.75 7.125Z"
                        fill="#657981"
                        stroke="#657981"
                    />
                </svg>
                <AnimatePresence>
                    {isHovered ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={styles.popover}
                        >
                            <div className={styles.secondWrapper}>
                                <p>{text}</p>
                                <svg
                                    className={styles.triangle}
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 0H20V20L0 0Z" fill="#11252C" />
                                </svg>
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>
        </div>
    )
}
