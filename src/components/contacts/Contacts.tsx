'use client'
import classNames from 'classnames'
import styles from './Contacts.module.scss'
import { robotoCondensed } from '@/styles/fonts'
import Image from 'next/image'
import f from '@/icons/f-accent.svg'
import insta from '@/icons/insta-accent.svg'
import x from '@/icons/x-accent.svg'
import { useState, useRef, FormEvent } from 'react'
import ButtonFilled from '../buttons/buttonFilled/ButtonFilled'
import clsx from 'clsx'
import { toast } from 'react-toastify'
const Contacts = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const phoneInput = useRef<HTMLInputElement>(null)
    const [isFormLoading, setIsFormLoading] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const request = JSON.stringify({
            formType: 'footer',
            name,
            email,
            phone,
            message,
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
                setMessage('')
                setPhone('')
                setName('')
                setIsFormLoading(false)
            })
    }

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
        <section className="container" id="contact-us">
            <div className={styles.section}>
                <div
                    className={classNames(
                        styles.sectionHead,
                        robotoCondensed.className
                    )}
                >
                    <h3 className={'section-header'}>Contacts</h3>
                    <p className={styles.sectionDescription}>Contact us now</p>
                </div>
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <div className={styles.contactsBlock}>
                        <div className={styles.contactsContainer}>
                            <div className={styles.contacts}>
                                <a
                                    className={styles.email}
                                    href="mailto:moveyourcarinfo@gmail.com"
                                >
                                    moveyourcarinfo<span>@</span>gmail
                                    <span>.</span>com
                                </a>
                                <a
                                    className={styles.number}
                                    href="tel:+1 (888) 699-11-91"
                                >
                                    <span>+</span>1 ­<span>[</span>888
                                    <span>] ­</span> 699<span>-</span>11
                                    <span>-</span>91
                                </a>
                            </div>
                            <div className={styles.socials}>
                                <a href="http://www.facebook.com">
                                    <Image src={f} alt="facebook" />
                                </a>
                                <a href="http://www.instagram.com">
                                    <Image src={insta} alt="instagram" />
                                </a>
                                <a href="http://www.x.com">
                                    <Image src={x} alt="x" />
                                </a>
                            </div>
                        </div>
                        <p className={styles.address}>
                            40 W 2nd St Suite 200, Dayton, OH 45402
                        </p>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.credentials}>
                            <div className={styles.nameInputContainer}>
                                <input
                                    className={styles.nameInput}
                                    type="text"
                                    placeholder="Your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.emailInputContainer}>
                                <input
                                    className={styles.emailInput}
                                    type="email"
                                    placeholder="Your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
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
                                <span className={styles.countryCode}>+1</span>
                            </div>
                        </div>
                        <textarea
                            className={styles.message}
                            placeholder="Message"
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            minLength={5}
                            value={message}
                        />
                        <div className={styles.submit}>
                            <ButtonFilled
                                className={clsx(
                                    isFormLoading ? styles.disabled : ''
                                )}
                                btnType="submit"
                                text="Send request"
                                type="secondary"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Contacts
