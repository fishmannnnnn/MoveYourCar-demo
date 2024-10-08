'use client'

interface UseProgressBarReturnValue {
    step: string
}

import { usePathname } from 'next/navigation'
export const useProgressBar = (
    styles: any,
    currentPath: string
): UseProgressBarReturnValue => {
    let step: string

    switch (currentPath) {
        case '/transport':
            step = styles.firstStep
            break
        case '/pickup-details':
            step = styles.secondStep
            break
        case '/delivery-details':
            step = styles.thirdStep
            break
        case '/payment':
            step = styles.finalStep
            break
        default:
            step = ''
            break
    }

    return {
        step,
    }
}
