'use client'

import constate from 'constate'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'

function useCasesEmbla() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    return { emblaRef, scrollNext, scrollPrev }
}

const [CasesEmblaProvider, useCasesEmblaContext] = constate(useCasesEmbla)

export { CasesEmblaProvider, useCasesEmblaContext }
