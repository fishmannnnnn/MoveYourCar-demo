'use client'
import React from 'react'
import styles from './PriceTable.module.scss'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import img from '../../../public/images/speedometr.png'
import Image from 'next/image'
import { InfoButton } from '../info-btn/InfoButton'

export const PriceTable = () => {
    const { distance, price, transportTypeTax } = useAppSelector(
        (state) => state.formSlice
    )

    const {
        fromDisplayName,
        toDisplayName,
        radio: isOpened,
    } = useAppSelector((state) => state.formFirstStepSlice)

    const {
        radio: inoperation,
        year,
        model,
        make,
    } = useAppSelector((state) => state.formSecondStepSlice)

    return (
        <section className={styles.detailes}>
            <div className={styles.bt} />
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <span className={styles.detailesSpan}>Details</span>
                    <Image
                        src={img}
                        alt="decor-img"
                        className={styles.decorImg}
                    />
                </div>

                <ul className={styles.detailesList}>
                    <li className={styles.listElem}>
                        <span className={styles.regular}>
                            {'[ Regular price ]'}
                        </span>
                        <div className={styles.priceWrapper}>
                            <p className={styles.big}>
                                {price} <span>USD</span>
                            </p>

                            <p className={styles.text}>
                                Once the order is assigned to a carrier,
                                one-time payment in full by using your credit
                                card or debit card will be charged.
                            </p>
                        </div>
                    </li>
                    <li className={styles.listElem}>
                        <span className={styles.regular}>{'[ Distance ]'}</span>

                        <p className={styles.big}>
                            {distance.toFixed(2)} <span>MI</span>
                        </p>
                    </li>
                    <li className={styles.listElem}>
                        <span className={styles.regular}>
                            {'[ Transit time ]'}
                        </span>
                        <p className={styles.big}>
                            3-5 <span>DAYS</span>
                        </p>
                        <InfoButton text="Transit time is calculated from the time the vehicle is picked up." />
                    </li>
                    <li className={styles.listElem}>
                        <span className={styles.regular}>
                            {'[ First avail. date ]'}
                        </span>
                        <p className={styles.text}>
                            {new Date().toLocaleDateString()}
                        </p>

                        <InfoButton text="Your First available date is the first date that we would try to pickup your vehicle. The majority of our customers have their vehicles picked up within 1-5 days of their first available date. If time is a critical factor for your move, please call and ask about our Guaranteed Pickup Service. Price can vary based on date." />
                    </li>
                    <li className={styles.listElem}>
                        <span className={styles.regular}>{'[ Vehicle ]'}</span>
                        <p className={styles.text}>
                            {year + ' ' + make + ' ' + model}
                        </p>
                    </li>
                    <li className={styles.listElem}>
                        <span className={styles.regular}>
                            {'[ Ship from ]'}
                        </span>
                        <p className={styles.text}>{fromDisplayName}</p>
                    </li>
                    <li className={styles.listElem}>
                        <span className={styles.regular}>{'[ Ship to ]'}</span>
                        <p className={styles.text}>{toDisplayName}</p>
                    </li>
                    <li className={styles.listElem}>
                        <span className={styles.regular}>
                            {'[ Vehicle condition ]'}
                        </span>
                        <div className={styles.radioGroup}>
                            {inoperation ? (
                                <div className={styles.radioBtn}>
                                    <span className={styles.text}>Running</span>
                                </div>
                            ) : (
                                <div className={styles.radioBtn}>
                                    <span className={styles.text}>
                                        Non-running
                                    </span>
                                </div>
                            )}
                        </div>
                        <InfoButton text="Running The ability of the vehicle to move under its own power to be driven on and off the Bentay transport trailer Gretna, FL 32332. Non-Running The vehicle doesn't move under its own power, but it must roll, break and steer." />
                    </li>
                    <li className={styles.listElem}>
                        <span className={styles.regular}>
                            {'[ Transport type ]'}
                        </span>
                        <div className={styles.radioGroup}>
                            {isOpened ? (
                                <div className={styles.radioBtn}>
                                    <span className={styles.text}>
                                        Open{' '}
                                        <span
                                            style={{ color: '#657981' }}
                                        >{` (-${transportTypeTax}$)`}</span>
                                    </span>
                                </div>
                            ) : (
                                <div className={styles.radioBtn}>
                                    <span className={styles.text}>
                                        Enclosed
                                    </span>
                                </div>
                            )}
                        </div>
                        <InfoButton
                            text="Open trailers are the most cost-effective
                                and popular method to transport vehicles.
                                Most new vehicles being sent to car
                                dealerships are transported in open, FL 32332
                                trailers.
                                Enclosed trailers protect vehicles from
                                weather, dirt and rock chips during ning
                                transport. They are popular for high value
                                vehicles."
                        />
                    </li>

                    <li className={styles.listElem}>
                        <span className={styles.regular}>
                            {'[ Service type ]'}
                        </span>
                        <p className={styles.text}>Door to door</p>
                        <InfoButton
                            text="The car will be pick up and delivered as
                                    close as legally and safely possible to any
                                    residential and/or business address."
                        />
                    </li>
                    <li className={styles.listElem}>
                        <span className={styles.regular}>
                            {'[ Insurance ]'}
                        </span>
                        <p className={styles.text}>Included</p>
                        <InfoButton
                            text="Your vehicle is insured from pick up to
                                            delivery. See terms & conditions for
                                            details."
                        />
                    </li>
                </ul>
            </div>
            <div className={styles.bb} />
        </section>
    )
}
