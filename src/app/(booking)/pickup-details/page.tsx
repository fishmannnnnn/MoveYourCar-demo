import React from 'react'
import { FormContainer } from '../components/FormContaier/FormContainer'
import { BackBtn } from '../components/BackBtn/BackBtn'
import { PickupDetailsForm } from '../components/Forms/PickupDetails/PickupDetails'

export default function PickupDetails() {
    return (
        <FormContainer>
            <BackBtn href="/transport" />
            <PickupDetailsForm />
        </FormContainer>
    )
}
