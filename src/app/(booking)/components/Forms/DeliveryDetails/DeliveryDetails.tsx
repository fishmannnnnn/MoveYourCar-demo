'use client'

import React, { ChangeEvent, useState } from 'react'
import { FormTitle } from '../../FormTitle/FormTitle'
import styles from './DeliveryDetails.module.scss'
import { ChangeE, CombinedInput } from '../../CombimedInput/CombinedInput'
import { RadioBtn } from '../../RadioBtn/RadioBtn'
import { SubmitBtn } from '../../SubmitBtn/SubmitBtn'
import useBookingForm from '@/app/(booking)/hooks/useBookingForm'
import {
    onRepresentationChange,
    onSpecialInsctuctionsChange,
    onStreetAddressChange,
    onStreetDetailsChange,
    onWhoToContactChange,
} from '@/app/redux/features/delivery-slice'
import { useAppSelector } from '@/app/redux/hooks'

type ChangeESpecial = ChangeEvent<HTMLTextAreaElement>

export const DeliveryDetailsForm = () => {
    const { onSubmit, dispatch } = useBookingForm({
        next: '/payment',
        currentForm: 'delivery',
    })

    const {
        representation,
        streetDetails,
        streetAddress,
        whoToContact,
        specialInsctructions,
    } = useAppSelector((state) => state.delivery)

    const to = useAppSelector((state) => state.formFirstStepSlice.toDisplayName)

    const [buisiness, setBusiness] = useState(
        representation === 'Residential business'
    )
    const [contact, setContact] = useState(whoToContact === 'Contact me')

    const handleStreetAddress = (e: ChangeE) => {
        dispatch(onStreetAddressChange(e.target.value))
    }

    const handleStreeDetails = (e: ChangeE) => {
        dispatch(onStreetDetailsChange(e.target.value))
    }

    const handleRepresentationChange = (e: ChangeE) => {
        const value = e.target.value
        if (value === 'Residential business') {
            setBusiness(true)
        } else {
            setBusiness(false)
        }
        dispatch(onRepresentationChange(e.target.value))
    }

    const handleContactChange = (e: ChangeE) => {
        const value = e.target.value
        if (value === 'Contact me') {
            setContact(true)
        } else {
            setContact(false)
        }
        dispatch(onWhoToContactChange(e.target.value))
    }

    const handleSpecialInsturctionsChange = (e: ChangeESpecial) => {
        dispatch(onSpecialInsctuctionsChange(e.target.value))
    }

    return (
        <div className={styles.formWrapper}>
            <FormTitle title="Vehicle delivery details" />
            <form onSubmit={onSubmit} className={styles.form}>
                <div className={styles.inputWrapper}>
                    <CombinedInput
                        first={{
                            placeholder: 'Street address *',
                            required: true,
                            type: 'text',
                            value: streetAddress,
                            onChange: handleStreetAddress,
                        }}
                        second={{
                            placeholder: 'Apt, Suite, etc.',
                            type: 'text',
                            value: streetDetails,
                            onChange: handleStreeDetails,
                        }}
                    />
                    <span className={styles.address}>
                        {to ? to : 'Golden, CO 80402'}
                    </span>
                </div>
                <div className={styles.radioWrapper}>
                    <div className={styles.group}>
                        <span>This is a</span>
                        <div className={styles.radioGroup}>
                            <RadioBtn
                                isSpecial
                                name="Residential business"
                                onClick={handleRepresentationChange}
                                title="Residential business"
                                checked={buisiness}
                                value="Residential business"
                            />
                            <RadioBtn
                                isSpecial
                                name="Business address"
                                onClick={handleRepresentationChange}
                                title="Business address"
                                checked={!buisiness}
                                value="Business address"
                            />
                        </div>
                    </div>
                    <div className={styles.group}>
                        <span>Who do we contact about pickup?</span>
                        <div className={styles.radioGroup}>
                            <RadioBtn
                                isSpecial
                                name="Contact me"
                                onClick={handleContactChange}
                                title="Contact me"
                                checked={contact}
                                value="Contact me"
                            />
                            <RadioBtn
                                isSpecial
                                name="Contact someone else"
                                onClick={handleContactChange}
                                title="Contact someone else"
                                checked={!contact}
                                value="Contact someone else"
                            />
                        </div>
                    </div>
                </div>
                <textarea
                    value={specialInsctructions}
                    className={styles.textArea}
                    placeholder="Special instructions"
                    onChange={handleSpecialInsturctionsChange}
                />
                <SubmitBtn className={styles.btn} text="Book shipment info" />
            </form>
        </div>
    )
}
