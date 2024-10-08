import classNames from 'classnames'
import styles from './CaseItem.module.scss'
import Image from 'next/image'
import { robotoCondensed } from '@/styles/fonts'
import clickIcon from '@/icons/click-icon.svg'
import { useState } from 'react'
import PopupBackdrop from './PopupBackdrop'
import CasePopup from './CasePopup'
import { ICase } from '@/constants'
import { AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'

const CaseItem = ({ data }: { data: ICase }) => {
    const [showPopup, setShowPopup] = useState(false)
    const handlePopup = (val: boolean) => setShowPopup(val)

    return (
        <>
            {/* <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}
            > */}

            {data.caseItem &&
                typeof window === 'object' &&
                createPortal(
                    showPopup && (
                        <CasePopup
                            showPopup={showPopup}
                            handlePopup={handlePopup}
                            caseItem={data.caseItem}
                        />
                    ),
                    document.body
                )}
            {/* </AnimatePresence> */}
            <div className={styles.caseItem}>
                {data.image.url && (
                    <Image
                        className={styles.itemImg}
                        src={data.image.url}
                        width={data.image.width}
                        height={data.image.height}
                        alt="Case image"
                    />
                )}
                {data.title && (
                    <div
                        className={styles.contentContainer}
                        onClick={() => setShowPopup(true)}
                    >
                        <div className={styles.content}>
                            <h3 className={styles.title}>
                                Delivery on enclosed trailers
                            </h3>
                            <p
                                className={classNames(
                                    robotoCondensed.className,
                                    styles.text
                                )}
                            >
                                Lorem ipsum dolor sit amet consectetur. A donec
                                at consequat faucibus nisl quis suspendisse.
                                Scelerisque lectus neque ac hendrerit feugiat
                                gravida at posuere. Ut et eu ut morbi. Vitae
                                quis sed pharetra mi.
                            </p>
                        </div>
                        <Image
                            className={styles.clickIcon}
                            src={clickIcon}
                            alt=""
                            onClick={() => setShowPopup(true)}
                        />
                    </div>
                )}
            </div>
        </>
    )
}
export default CaseItem
