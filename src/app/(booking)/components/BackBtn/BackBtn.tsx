import Link from 'next/link'
import React from 'react'
import styles from './BackBtn.module.scss'

interface BackBtnProps {
    href: string;
}

const Arrow = () => <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9L13 7ZM0.292893 8.70711C-0.0976314 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928933C7.04738 0.538408 7.68054 0.538408 8.07107 0.928933C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292893 8.70711ZM13 9L1 9L1 7L13 7L13 9Z" fill="#FE470D"/>
</svg>


export const BackBtn = ({href}: BackBtnProps) => {
  return (
    <Link className={styles.linkBtn} href={href}>
        <Arrow />
    </Link>
  )
}
