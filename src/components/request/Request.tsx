'use client'
import styles from './Request.module.scss'
import { roboto, robotoCondensed } from '@/styles/fonts'
import Image from 'next/image'
import usaFlag from '@/icons/usa.svg'
import { useState, useRef, FormEvent } from 'react'
import ButtonFilled from '../buttons/buttonFilled/ButtonFilled'
import classNames from 'classnames'
import { toast } from 'react-toastify'
import clsx from 'clsx'
const Request = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [isFormLoading, setIsFormLoading] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const request = JSON.stringify({
            formType: 'request',
            name,
            email,
            phone,
        })
        setIsFormLoading(true)

        await fetch('/form', {
            method: 'POST',
            body: request,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .catch((err) =>
                toast('something goes wrong', {
                    position: 'bottom-right',
                    hideProgressBar: true,
                    type: 'error',
                })
            )
            .finally(() => {
                setEmail('')
                setPhone('')
                setName('')
                setIsFormLoading(false)
            })
    }

    const phoneInput = useRef<HTMLInputElement>(null)
    const handleChange = () => {
        if (phoneInput.current) {
            const phoneValue = phoneInput.current.value
                .replace(/\D/g, '')
                .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)

            let formattedValue = ''
            if (phoneValue) {
                if (phoneValue[1]) {
                    formattedValue += `[${phoneValue[1]}`
                }

                if (phoneValue[2]) {
                    formattedValue += `] ${phoneValue[2]}`
                }

                if (phoneValue[3]) {
                    formattedValue += `-${phoneValue[3]}`
                }

                if (phoneValue[4]) {
                    formattedValue += `-${phoneValue[4]}`
                }

                setPhone(formattedValue)
                phoneInput.current.value = formattedValue
            }
        }
    }
    return (
        <section className="container" id="request">
            <div className={styles.section}>
                <div
                    className={classNames(
                        styles.sectionHead,
                        robotoCondensed.className
                    )}
                >
                    <h3 className={'section-header'}>Request</h3>
                    <div className={styles.contentContainer}>
                        <p className={styles.sectionDescription}>
                            Sign up for a course now
                        </p>
                        <div
                            className={classNames(
                                roboto.className,
                                styles.content
                            )}
                        >
                            <p className={styles.description}>
                                We will contact you for payment
                            </p>
                            <form
                                onSubmit={handleSubmit}
                                className={styles.form}
                            >
                                <div className={styles.credentials}>
                                    <div className={styles.nameInputContainer}>
                                        <input
                                            className={styles.nameInput}
                                            type="text"
                                            placeholder="Your name"
                                            value={name}
                                            required
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className={styles.emailInputContainer}>
                                        <input
                                            className={styles.emailInput}
                                            type="email"
                                            placeholder="Your email"
                                            value={email}
                                            required
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className={styles.phoneInputContainer}>
                                        <input
                                            className={styles.phoneInput}
                                            ref={phoneInput}
                                            type="tel"
                                            placeholder="[000] 000-00-00"
                                            value={phone}
                                            onChange={handleChange}
                                            maxLength={15}
                                            required
                                        />
                                        <span className={styles.countryCode}>
                                            +1
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.submit}>
                                    <ButtonFilled
                                        className={clsx(
                                            isFormLoading && styles.disabled
                                        )}
                                        btnType="submit"
                                        text="Sign up for the course"
                                        type="secondary"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Request
