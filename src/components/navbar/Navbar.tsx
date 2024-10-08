'use client'
import styles from './Navbar.module.scss'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/logo-light.svg'
import logoDark from '../../../public/logo-dark.svg'

import classNames from 'classnames'
import { LINKS as MAIN_LINKS } from '@/constants'
import { LINKS_SCHOOL } from '@/constants'
import LanguageSelect from '../language-select/LanguageSelect'
import ButtonTransparent from '../buttons/buttonTransparent/ButtonTransparent'
import { useOnClickOutside } from 'usehooks-ts'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useNavbarContext } from '@/app/context/NavbarContext/NavbarContext'

const Facebook = () => (
    <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_488_64)">
            <path
                d="M16 8.52005C16 4.09298 12.416 0.5 8 0.5C3.584 0.5 0 4.09298 0 8.52005C0 12.4018 2.752 15.6338 6.4 16.3797V10.9261H4.8V8.52005H6.4V6.51504C6.4 4.96717 7.656 3.70802 9.2 3.70802H11.2V6.11404H9.6C9.16 6.11404 8.8 6.47494 8.8 6.91604V8.52005H11.2V10.9261H8.8V16.5C12.84 16.099 16 12.6825 16 8.52005Z"
                fill="white"
            />
        </g>
        <defs>
            <clipPath id="clip0_488_64">
                <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                />
            </clipPath>
        </defs>
    </svg>
)

const Instagram = () => (
    <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_488_66)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5219 0.5C13.9952 0.5 16 2.5064 16 4.97808V12.0219C16 14.4952 13.9936 16.5 11.5219 16.5H4.47808C2.0048 16.5 0 14.4936 0 12.0219V4.97808C0 2.5048 2.0064 0.5 4.47808 0.5H11.5219ZM8 4.34C5.7024 4.34 3.84 6.2024 3.84 8.5C3.84 10.7976 5.7024 12.66 8 12.66C10.2976 12.66 12.16 10.7976 12.16 8.5C12.16 6.2024 10.2976 4.34 8 4.34ZM8 5.62C8.37821 5.62 8.75271 5.69449 9.10213 5.83923C9.45155 5.98396 9.76903 6.1961 10.0365 6.46353C10.3039 6.73097 10.516 7.04845 10.6608 7.39787C10.8055 7.74729 10.88 8.12179 10.88 8.5C10.88 8.87821 10.8055 9.25271 10.6608 9.60213C10.516 9.95155 10.3039 10.269 10.0365 10.5365C9.76903 10.8039 9.45155 11.016 9.10213 11.1608C8.75271 11.3055 8.37821 11.38 8 11.38C7.23618 11.38 6.50364 11.0766 5.96353 10.5365C5.42343 9.99636 5.12 9.26382 5.12 8.5C5.12 7.73618 5.42343 7.00364 5.96353 6.46353C6.50364 5.92343 7.23618 5.62 8 5.62ZM12.64 2.74C12.343 2.74 12.0581 2.858 11.848 3.06804C11.638 3.27808 11.52 3.56296 11.52 3.86C11.52 4.15704 11.638 4.44192 11.848 4.65196C12.0581 4.862 12.343 4.98 12.64 4.98C12.937 4.98 13.2219 4.862 13.432 4.65196C13.642 4.44192 13.76 4.15704 13.76 3.86C13.76 3.56296 13.642 3.27808 13.432 3.06804C13.2219 2.858 12.937 2.74 12.64 2.74Z"
                fill="white"
            />
        </g>
        <defs>
            <clipPath id="clip0_488_66">
                <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                />
            </clipPath>
        </defs>
    </svg>
)

const Twitter = () => (
    <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_488_68)">
            <mask
                id="mask0_488_68"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="17"
            >
                <path d="M0 0.5H16V16.5H0V0.5Z" fill="white" />
            </mask>
            <g mask="url(#mask0_488_68)">
                <path
                    d="M12.6 1.24976H15.0537L9.69372 7.39147L16 15.7503H11.0629L7.19314 10.6818L2.77029 15.7503H0.314286L6.04686 9.1789L0 1.2509H5.06286L8.55543 5.8829L12.6 1.24976ZM11.7371 14.2783H13.0971L4.32 2.64518H2.86171L11.7371 14.2783Z"
                    fill="white"
                />
            </g>
        </g>
        <defs>
            <clipPath id="clip0_488_68">
                <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                />
            </clipPath>
        </defs>
    </svg>
)

const TwitterDark = () => (
    <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_765_527)">
            <mask
                id="mask0_765_527"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="17"
            >
                <path
                    d="M0 0.5H16V16.5H0V0.5Z"
                    style={{ fill: 'white' }}
                    fill="white"
                />
            </mask>
            <g mask="url(#mask0_765_527)">
                <path
                    d="M12.6 1.24976H15.0537L9.69372 7.39147L16 15.7503H11.0629L7.19314 10.6818L2.77029 15.7503H0.314286L6.04686 9.1789L0 1.2509H5.06286L8.55543 5.8829L12.6 1.24976ZM11.7371 14.2783H13.0971L4.32 2.64518H2.86171L11.7371 14.2783Z"
                    fill="#11252C"
                />
            </g>
        </g>
        <defs>
            <clipPath id="clip0_765_527">
                <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                />
            </clipPath>
        </defs>
    </svg>
)

const EXEPTIONS_PATHS: string[] = [
    '/transport',
    '/payment',
    '/pickup-details',
    '/delivery-details',
]

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false)
    const navRef = useRef<HTMLElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const path = usePathname()
    const { isBooking, isLoading } = useNavbarContext()

    const LINKS = path === '/' ? MAIN_LINKS : LINKS_SCHOOL

    const handleMenuClick = () => {
        let navEl: HTMLElement | null = navRef.current
        if (navEl) {
            if (!menuVisible) {
                navEl.classList.add(styles.navMobile)
            } else {
                navEl.classList.remove(styles.navMobile)
            }
            setMenuVisible(!menuVisible)
        }
    }
    const hideMenu = () => {
        setMenuVisible(false)
        let navEl: HTMLElement | null = navRef.current
        if (navEl) {
            navEl.classList.remove(styles.navMobile)
        }
    }
    const handleClickOutside = () => {
        hideMenu()
    }
    useOnClickOutside(headerRef, handleClickOutside)

    const isDarkTheme = path === '/calculations' || isBooking || path === '/404'

    if (isLoading && EXEPTIONS_PATHS.find((el) => el === path)) return null

    const isHidden = path === '/complete'

    if (isHidden) return null

    return (
        <div
            className={clsx(styles.header, isDarkTheme && styles.headerDark)}
            id="header"
        >
            <div
                className={clsx(
                    styles.headerTop,
                    isDarkTheme && styles.darkTop
                )}
            >
                <div className={styles.headerTopInner}>
                    <div className={styles.contacts}>
                        <div
                            className={clsx(
                                styles.socials,
                                isDarkTheme && styles.dark
                            )}
                        >
                            <a href="http://www.facebook.com">
                                <Facebook />
                            </a>
                            <a href="http://www.instagram.com">
                                <Instagram />
                            </a>
                            <a href="http://www.x.com">
                                {isDarkTheme ? <TwitterDark /> : <Twitter />}
                            </a>
                        </div>
                        <a
                            className={clsx(
                                styles.number,
                                isDarkTheme && styles.darkNumber
                            )}
                            href="tel:+1 (888) 699-11-91"
                        >
                            <span>+</span>1 ­<span>[</span>888<span>]</span>­
                            699<span>-</span>11<span>-</span>91
                        </a>
                    </div>

                    {/* <LanguageSelect /> */}
                </div>
            </div>
            <div
                className={clsx(
                    styles.headerBottom,
                    isBooking && styles.hidden
                )}
                ref={headerRef}
            >
                <div className={styles.headerBottomInner}>
                    {/* <div className={styles.logo}> */}
                    <Link href="/">
                        <Image
                            className={styles.logo}
                            src={isDarkTheme ? logoDark : logo}
                            alt="logo"
                        />
                    </Link>
                    {/* </div> */}
                    <nav className={styles.nav} ref={navRef}>
                        <div
                            className={clsx(
                                styles.contactsMobile,
                                isDarkTheme && styles.mobileDark
                            )}
                        >
                            <div className={styles.contacts}>
                                <div className={styles.socials}>
                                    <a href="http://www.facebook.com">
                                        <Facebook />
                                    </a>
                                    <a href="http://www.instagram.com">
                                        <Instagram />
                                    </a>
                                    <a href="http://www.x.com">
                                        {isDarkTheme ? (
                                            <TwitterDark />
                                        ) : (
                                            <Twitter />
                                        )}
                                    </a>
                                </div>
                                <a
                                    className={clsx(
                                        styles.number,
                                        isDarkTheme && styles.darkNumber
                                    )}
                                    href="tel:+1 (888) 699-11-91"
                                >
                                    <span>+</span>1 ­<span>[</span>888
                                    <span>]</span>­ 699<span>-</span>11
                                    <span>-</span>91
                                </a>
                            </div>
                            {/* <div className={styles.languageSelect}>
								<LanguageSelect />
							</div> */}
                        </div>
                        <ul
                            className={clsx(
                                path === '/calculations' && styles.ulDark
                            )}
                        >
                            {LINKS.map((link) => (
                                <li
                                    className={clsx(
                                        styles.navLink,
                                        path === '/calculations' &&
                                            styles.darkLink
                                    )}
                                    key={link.key}
                                >
                                    <Link href={link.href} onClick={hideMenu}>
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className={styles.navRight}>
                        <Link href={'/driving-school'}>
                            <ButtonTransparent
                                isDark={path === '/calculations'}
                                text="Driving school"
                            />
                        </Link>
                        <button
                            className={
                                menuVisible
                                    ? styles.closeMenuButton
                                    : styles.menuButton
                            }
                            onClick={handleMenuClick}
                        >
                            <span
                                className={classNames(
                                    !menuVisible
                                        ? styles.line
                                        : styles.lineFirst,
                                    styles.animatedLine
                                )}
                            ></span>
                            <span
                                className={classNames(
                                    !menuVisible
                                        ? styles.line
                                        : styles.lineInvisible,
                                    styles.animatedLine
                                )}
                            ></span>
                            <span
                                className={classNames(
                                    !menuVisible
                                        ? styles.line
                                        : styles.lineLast,
                                    styles.animatedLine
                                )}
                            ></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar
