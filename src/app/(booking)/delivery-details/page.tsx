import React from 'react'
import { FormContainer } from '../components/FormContaier/FormContainer'
import { BackBtn } from '../components/BackBtn/BackBtn'
import { DeliveryDetailsForm } from '../components/Forms/DeliveryDetails/DeliveryDetails'

export default function DeliveryDetails() {
    return (
        <FormContainer>
            <BackBtn href="/pickup-details" />
            <DeliveryDetailsForm />
        </FormContainer>
    )
}
