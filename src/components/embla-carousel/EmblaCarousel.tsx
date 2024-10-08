import styles from './EmblaCarousel.module.scss'
import { useCasesEmblaContext } from './useCasesEmbla'
import React from 'react'

const EmblaCarousel = ({ data }: { data: React.ReactNode[] }) => {
    const { emblaRef } = useCasesEmblaContext()
    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
                {data &&
                    data.map((item, i) => (
                        <div className={styles.emblaSlide} key={i}>
                            {item}
                        </div>
                    ))}
            </div>
        </div>
    )
}
export default EmblaCarousel
