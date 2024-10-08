'use client'

import styles from './CasePopup.module.scss'
import { ICaseItem } from '@/constants'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useOnClickOutside } from 'usehooks-ts'
import { CasesEmblaProvider } from '../embla-carousel/useCasesEmbla'
import EmblaCarousel from '../embla-carousel/EmblaCarousel'
import EmblaButtons from '../embla-carousel/EmblaButtons'
import classNames from 'classnames'
import { robotoCondensed } from '@/styles/fonts'
import { motion, AnimatePresence } from 'framer-motion'
// import PopupBackdrop from './PopupBackdrop'
import { useMediaQuery } from 'usehooks-ts'
import Image from 'next/image'

const CasePopup = ({
    handlePopup,
    caseItem,
    showPopup,
}: {
    handlePopup: any
    caseItem: ICaseItem
    showPopup: any
}) => {
    const isDesktop = useMediaQuery('(min-width: 768px)')
    const bg = {
        visible: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
        },
    }
    const popup = isDesktop
        ? {
              hidden: {
                  x: '100vw',
              },
              visible: {
                  x: '0vw',
                  transition: { duration: 0.3 },
              },
          }
        : {
              hidden: {
                  y: '100vw',
              },
              visible: {
                  y: '0vw',
                  transition: { duration: 0.3 },
              },
          }
    const popupRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(showPopup)

    const closePopup = () => {
        // setIsOpen(false)
        popupRef && handlePopup(false)
    }

    useEffect(() => {
        const html = document.querySelector('html')
        if (showPopup && html) {
            html?.classList.add('no-scroll')
        }
        return () => {
            if (html) {
                html?.classList.remove('no-scroll')
            }
        }
    }, [showPopup])

    useOnClickOutside(popupRef, closePopup)

    return (
        <CasesEmblaProvider>
            {/* <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}
            > */}
            {showPopup && (
                <motion.div
                    className={styles.popupBg}
                    variants={bg}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div
                        className={styles.popup}
                        ref={popupRef}
                        variants={popup}
                    >
                        <div className={styles.container}>
                            <div className={styles.popupInner}>
                                <div className={styles.closeContainer}>
                                    <h3
                                        className={classNames(
                                            robotoCondensed.className,
                                            styles.name
                                        )}
                                    >
                                        {caseItem.name}
                                    </h3>
                                    <button
                                        className={styles.close}
                                        onClick={closePopup}
                                    >
                                        Close
                                    </button>
                                </div>
                                <p className={styles.text}>{caseItem.text}</p>
                                <div className={styles.carousel}>
                                    <div className={styles.carouselControls}>
                                        <EmblaButtons />
                                    </div>
                                    {caseItem.photos && (
                                        <EmblaCarousel
                                            data={caseItem.photos.map(
                                                (el, i) => {
                                                    return el.url ? (
                                                        <div
                                                            className={
                                                                styles.caseItem
                                                            }
                                                        >
                                                            <Image
                                                                src={el.url}
                                                                key={i}
                                                                className={
                                                                    styles.img
                                                                }
                                                                width={el.width}
                                                                height={
                                                                    el.height
                                                                }
                                                                alt="case-img"
                                                            />
                                                        </div>
                                                    ) : null
                                                }
                                            )}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
            {/* </AnimatePresence> */}
        </CasesEmblaProvider>
    )
}
export default CasePopup
