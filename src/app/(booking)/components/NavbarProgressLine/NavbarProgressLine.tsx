'use client'
import React from 'react'
import styles from './NavbarProgressLine.module.scss'
import clsx from 'clsx'
import { useProgressBar } from '../../hooks/useProgressLine'

interface NavbarProgressLineProps {
    currentPath: string
}

export const NavbarProgressLine = ({
    currentPath,
}: NavbarProgressLineProps) => {
    const { step } = useProgressBar(styles, currentPath)
    return <div className={clsx(styles.progressLine, step && step)} />
}
