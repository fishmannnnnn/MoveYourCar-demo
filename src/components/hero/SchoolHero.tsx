'use client'
import Link from 'next/link'
import styles from './SchoolHero.module.scss'
import classNames from 'classnames'
import { roboto, robotoCondensed } from '@/styles/fonts'
import SchoolNavbar from '@/components/navbar/SchoolNavbar'
import ButtonFilled from '../buttons/buttonFilled/ButtonFilled'
import clsx from 'clsx'

const Hero = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.navbarWrapper}>{/* <SchoolNavbar /> */}</div>
            <div className={clsx('container', styles.cont1)}>
                <div className={styles.section}>
                    <div
                        className={classNames(
                            styles.sectionHead,
                            robotoCondensed.className
                        )}
                    >
                        <h3 className={'section-header'}>
                            School pickup driver
                        </h3>
                        <div>
                            <p className={styles.sectionDescription}>
                                None cdl pickup <br /> driver course
                            </p>
                            <div
                                className={classNames(
                                    roboto.className,
                                    styles.contentContainer
                                )}
                            >
                                <p className={styles.text}>
                                    Pickup truck driver training for auto and
                                    motorcycle transportation in the USA Closed
                                    and open trailers
                                </p>
                                <Link
                                    href="#contact-us"
                                    className={styles.btnContainer}
                                >
                                    <ButtonFilled
                                        text="Start the course"
                                        type="primary"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
