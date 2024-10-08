'use client'

import React, { useState } from 'react'
import { FormTitle } from '../../FormTitle/FormTitle'
import styles from './PickupDetails.module.scss'
import { ChangeE, CombinedInput } from '../../CombimedInput/CombinedInput'
import { RadioBtn } from '../../RadioBtn/RadioBtn'
import { SubmitBtn } from '../../SubmitBtn/SubmitBtn'
import useBookingForm from '@/app/(booking)/hooks/useBookingForm'
import {
    onRepresentationChange,
    onStreetAddressChange,
    onStreetDetailsChange,
    onWhoToContactChange,
} from '@/app/redux/features/pickup-slice'
import { useAppSelector } from '@/app/redux/hooks'

export const PickupDetailsForm = () => {
    const { onSubmit, dispatch } = useBookingForm({
        next: '/delivery-details',
        currentForm: 'pickup',
    })

    const { representation, streetDetails, streetAddress, whoToContact } =
        useAppSelector((state) => state.pickup)

    const from = useAppSelector(
        (state) => state.formFirstStepSlice.fromDisplayName
    )

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

    return (
        <div className={styles.formWrapper}>
            <FormTitle title="Vehicle pickup details" />
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
                        {from ? from : 'Danville, AR 72833'}
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
                <SubmitBtn text="Delivery info" />
            </form>
        </div>
    )
}
