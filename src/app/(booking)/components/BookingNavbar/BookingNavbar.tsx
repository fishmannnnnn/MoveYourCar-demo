'use client'
import React, { useMemo } from 'react'
import styles from './BookingNavbar.module.scss'
import logo from '@/icons/logo-light.svg'
import Image from 'next/image'
import Link from 'next/link'
import { NavArrow, NavArrowIconMobile } from '../icons/NavArrow'
import { NavbarProgressLine } from '../NavbarProgressLine/NavbarProgressLine'
import { selectIsFormSubmited, useAppSelector } from '@/app/redux/hooks'
import useEmblaCarousel from 'embla-carousel-react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

interface LinkProps {
    title: string
    href: string
}

const LINKS: LinkProps[] = [
    {
        href: '/transport',
        title: 'Transport',
    },
    {
        href: '/pickup-details',
        title: 'Pickup',
    },
    {
        href: '/delivery-details',
        title: 'Delivery',
    },
    {
        href: '/payment',
        title: 'Book shipment',
    },
]

const Index = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className={styles.text}>
            <span className={styles.decor}>{'['}</span>
            {children}
            <span className={styles.decor}>{']'}</span>
        </p>
    )
}

const isLinkDisabled = (
    name: string,
    trasport: boolean,
    delivery: boolean,
    pickup: boolean
): boolean => {
    switch (name) {
        case 'Transport':
            return false
        case 'Pickup':
            return !trasport
        case 'Delivery':
            return !pickup
        case 'Book shipment':
            return !delivery
        default:
            return false
    }
}

const StepSlider = ({
    children,
    scollToSlideIndex,
}: {
    children: React.ReactNode
    scollToSlideIndex?: number
}) => {
    const [emblaRef] = useEmblaCarousel({
        loop: false,
        dragFree: true,
        startIndex: scollToSlideIndex ?? 0,
    })

    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>{children}</div>
        </div>
    )
}

export const BookingNavbar = () => {
    const { delivery, pickup, transport } = useAppSelector(selectIsFormSubmited)
    const currentPath = usePathname()

    const ScrollToIndex = useMemo(() => {
        return LINKS.findIndex((el) => el.href === currentPath)
    }, [currentPath])

    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <Link className={styles.logo} href={'/'}>
                    <Image src={logo} alt="logo" />
                </Link>
                <nav className={styles.nav}>
                    {LINKS.map((el, i) => (
                        <div key={i} className={styles.elWrapper}>
                            <Link
                                className={
                                    isLinkDisabled(
                                        el.title,
                                        transport,
                                        delivery,
                                        pickup
                                    )
                                        ? styles.disabled
                                        : ''
                                }
                                key={i}
                                href={el.href}
                            >
                                <Index>{`0${i + 1}`}</Index>
                                {el.title}
                            </Link>
                            {i < 3 ? <NavArrow /> : null}
                        </div>
                    ))}
                </nav>
                <StepSlider scollToSlideIndex={ScrollToIndex}>
                    {LINKS.map((el, i) => (
                        <div key={i} className={styles.elWrapper}>
                            <Link
                                className={clsx(
                                    styles.emblaSlide,
                                    isLinkDisabled(
                                        el.title,
                                        transport,
                                        delivery,
                                        pickup
                                    )
                                        ? styles.disabled
                                        : ''
                                )}
                                key={i}
                                href={el.href}
                            >
                                <Index>{`0${i + 1}`}</Index>
                                {el.title}
                            </Link>
                            {i < 3 ? <NavArrowIconMobile /> : null}
                        </div>
                    ))}
                </StepSlider>
                <Link href={'driving-school'} className={styles.schoolLink}>
                    Driving school
                </Link>
            </div>
            <NavbarProgressLine currentPath={currentPath} />
        </div>
    )
}
