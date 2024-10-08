'use client'

import { FormTitle } from '../../FormTitle/FormTitle'
import styles from './TransportForm.module.scss'
import { ChangeE, CombinedInput } from '../../CombimedInput/CombinedInput'
import { PhoneInput } from '../../PhoneInput/PhoneInput'
import { useState } from 'react'
import { RadioBtn } from '../../RadioBtn/RadioBtn'
import { CrossIcon } from '../../icons/CrossIcon'
import { SubmitBtn } from '../../SubmitBtn/SubmitBtn'
import useBookingForm from '@/app/(booking)/hooks/useBookingForm'
import { useAppSelector } from '@/app/redux/hooks'
import {
    onExtraPhoneCnahge,
    onNameChange,
    onRepresentationChange,
} from '@/app/redux/features/transport-slice'
import {
    onEmailChange,
    onPhoneChange,
} from '@/app/redux/features/form-third-step-slice'

export const TransportForm = () => {
    const { onSubmit, dispatch } = useBookingForm({
        next: '/pickup-details',
        currentForm: 'transport',
    })
    const { name, representation, extraPhoneNumber } = useAppSelector(
        (state) => state.transport
    )
    const { email, phone } = useAppSelector((state) => state.formThirdStepSlice)
    const [radio, setRadio] = useState(representation === 'individual')
    const [secondPhone, setSecondPhone] = useState(Boolean(extraPhoneNumber))

    const addSecondPhone = () => {
        setSecondPhone(true)
    }

    const handleName = (e: ChangeE) => {
        dispatch(onNameChange(e.target.value))
    }

    const handleEmail = (e: ChangeE) => {
        dispatch(onEmailChange(e.target.value))
    }

    const handlePhone = (e: ChangeE) => {
        dispatch(onPhoneChange(e.target.value))
    }

    const handleExtraPhoneChange = (e: ChangeE) => {
        dispatch(onExtraPhoneCnahge(e.target.value))
    }

    const handleRepresentation = (e: ChangeE) => {
        const value = e.target.value
        if (value === 'individual') {
            setRadio(true)
        } else setRadio(false)
        dispatch(onRepresentationChange(value))
    }

    return (
        <div className={styles.formWrapper}>
            <FormTitle
                title="Transport"
                subtitle="A couple more specifics, we want to get everything right!"
            />
            <form onSubmit={onSubmit} className={styles.form}>
                <CombinedInput
                    first={{
                        placeholder: 'Your full name *',
                        required: true,
                        type: 'text',
                        value: name,
                        onChange: handleName,
                    }}
                    second={{
                        placeholder: 'Your email *',
                        required: true,
                        type: 'email',
                        value: email,
                        onChange: handleEmail,
                    }}
                />
                <div className={styles.phone}>
                    <PhoneInput
                        className={styles.phoneInput}
                        required
                        value={phone}
                        onChange={handlePhone}
                    />
                    {secondPhone ? (
                        <PhoneInput
                            className={styles.phoneInput}
                            required
                            value={extraPhoneNumber}
                            onChange={handleExtraPhoneChange}
                        />
                    ) : null}
                    <button
                        onClick={addSecondPhone}
                        type="button"
                        className={styles.addNubmberBtn}
                    >
                        <CrossIcon /> Another number
                    </button>
                </div>
                <div className={styles.youAre}>
                    <span>You are</span>
                    <div className={styles.radioGroup}>
                        <RadioBtn
                            name="first"
                            onClick={handleRepresentation}
                            title="An individual"
                            checked={radio}
                            value="individual"
                        />
                        <RadioBtn
                            name="second"
                            onClick={handleRepresentation}
                            title="Representing a business"
                            checked={!radio}
                            value="representing a business"
                        />
                    </div>
                </div>
                <SubmitBtn text="Pickup info" />
            </form>
        </div>
    )
}
