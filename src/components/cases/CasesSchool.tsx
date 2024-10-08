'use client'

import styles from './Cases.module.scss'
import classNames from 'classnames'
import { robotoCondensed } from '@/styles/fonts'
import Image from 'next/image'
import speedometer from '@/images/cases-speedometer.svg'
import EmblaCarousel from '../embla-carousel/EmblaCarousel'
import EmblaButtons from '../embla-carousel/EmblaButtons'
import { CasesEmblaProvider } from '../embla-carousel/useCasesEmbla'
// import { PHOTOS } from '@/constants'
import { StrapiImage } from '@/constants'

interface CasesProps {
    data: StrapiImage[]
}

const Cases = ({data} : CasesProps) => {
    return (
        <CasesEmblaProvider>
            <section className={styles.sectionContainer} id="cases">
                <div className="container">
                    <div className={styles.section}>
                        <div
                            className={classNames(
                                styles.sectionHead,
                                robotoCondensed.className
                            )}
                        >
                            <h3 className={'section-header'}>Cases</h3>
                            <div className={styles.sectionDescriptionContainer}>
                                <p className={styles.sectionDescription}>
                                    Case studies and photos from the course
                                </p>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.contentLeft}>
                                <Image
                                    className={styles.speedometer}
                                    src={speedometer}
                                    alt=""
                                />
                            </div>
                            <div className={styles.contentRight}>
                                { data && (
                                    <EmblaCarousel
                                        data={data.map((el, i) => (
                                            <div className={styles.wrapper} key={i}>
                                                {el.url && (
                                                    <Image
                                                    className={styles.img}
                                                    src={el.url}
                                                    width={el.width}
                                                    height={el.height}
                                                    alt="case-img"
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    />
                                )}
                                <div className={styles.carouselControls}>
                                    <EmblaButtons />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </CasesEmblaProvider>
    )
}
export default Cases
