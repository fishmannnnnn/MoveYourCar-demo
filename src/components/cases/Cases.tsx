'use client'

import classNames from 'classnames'
import styles from './Cases.module.scss'
import { robotoCondensed } from '@/styles/fonts'
import Image from 'next/image'
import speedometer from '@/images/cases-speedometer.svg'
import EmblaCarousel from '../embla-carousel/EmblaCarousel'
import EmblaButtons from '../embla-carousel/EmblaButtons'
import { CasesEmblaProvider } from '../embla-carousel/useCasesEmbla'
import { CASES, ICase } from '@/constants'
import CaseItem from './CaseItem'

interface CasesProps {
    data: ICase[]
}

const Cases = ({ data }: CasesProps) => {
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
                                    Our cases, which we are very proud of
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
                                <EmblaCarousel
                                    data={data.map((el, i) => (
                                        <CaseItem
                                            data={{
                                                image: el.image,
                                                description: el.description,
                                                title: el.title,
                                                caseItem: {
                                                    name: el.title ?? '',
                                                    text: el.description ?? '',
                                                    photos:
                                                        el.caseItem?.photos ??
                                                        [],
                                                },
                                            }}
                                            key={i}
                                        />
                                    ))}
                                />
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
