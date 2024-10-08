import React from 'react'
import { FormContainer } from '../components/FormContaier/FormContainer'
import { BackBtn } from '../components/BackBtn/BackBtn'
import { TransportForm } from '../components/Forms/Transport/TransportForm'

export default function Transport() {
  return (
    <FormContainer>
        <BackBtn href='/calculations' />
        <TransportForm />
    </FormContainer>
  )
}
