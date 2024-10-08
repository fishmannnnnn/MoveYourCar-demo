'use client'

import { onDeliverySubmited } from '@/app/redux/features/delivery-slice'
import { onPickupSubmited } from '@/app/redux/features/pickup-slice'
import { onTransportSubmited } from '@/app/redux/features/transport-slice'
import { useAppDispatch } from '@/app/redux/hooks'
import { Action, Dispatch } from '@reduxjs/toolkit'
import { useRouter } from 'next/navigation'
import { FormEvent, useCallback } from 'react'

type FormE = FormEvent<HTMLFormElement>

interface UseBookingFormProps {
    next: string
    currentForm: 'transport' | 'delivery' | 'pickup'
}

interface UseBookingFormHookReturnValue {
    onSubmit: (e: FormE) => void
    dispatch: Dispatch<Action>
}

export default function useBookingForm({
    next,
    currentForm,
}: UseBookingFormProps): UseBookingFormHookReturnValue {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const onSubmit = useCallback(
        (e: FormE) => {
            e.preventDefault()
            switch (currentForm) {
                case 'transport':
                    dispatch(onTransportSubmited(true))
                    break
                case 'delivery':
                    dispatch(onDeliverySubmited(true))
                    break
                case 'pickup':
                    dispatch(onPickupSubmited(true))
                    break
                default:
                    break
            }
            router.push(next)
        },
        [dispatch, router, currentForm, next]
    )

    return {
        onSubmit,
        dispatch,
    }
}
