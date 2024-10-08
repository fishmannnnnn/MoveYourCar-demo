'use client'

import { useAppSelector } from '@/app/redux/hooks'
import { useRouter } from 'next/navigation'
import React from 'react'

export const FormSubmitedProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const { canBeCalculated } = useAppSelector((state) => state.formSlice)
    const router = useRouter()

    if (!canBeCalculated) {
        router.push('/404')
    }

    return <>{children}</>
}
