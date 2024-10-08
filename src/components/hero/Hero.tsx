'use client'

import styles from './Hero.module.scss'
import classNames from 'classnames'
import { robotoCondensed } from '@/styles/fonts'
import Navbar from '@/components/navbar/Navbar'
import { useState } from 'react'
import { Form } from '../form/Form'
import clsx from 'clsx'
const Hero = () => {
    const [radioValue, setRadioValue] = useState('open')
    return (
        <section className={styles.section}>
            <div className={styles.navbarWrapper}>{/* <Navbar /> */}</div>
            <div className={clsx('container', styles.container1)}>
                <div className={styles.container}>
                    <h1
                        className={classNames(
                            styles.heading,
                            robotoCondensed.className
                        )}
                    >
                        MOVEYOURCAR
                    </h1>
                    <p className={styles.text}>
                        Moveyourcar is your trusted partner in moving vehicles
                        and motorized equipment.
                    </p>
                    {/* <h2
                        className={classNames(
                            styles.formTitle,
                            robotoCondensed.className
                        )}
                    >
                        Start your free quote
                    </h2> */}
                    <Form />
                </div>
            </div>
        </section>
    )
}
export default Hero
