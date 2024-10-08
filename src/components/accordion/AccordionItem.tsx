import classNames from 'classnames'
import styles from './AccordionItem.module.scss'
import Image from 'next/image'
import { robotoCondensed } from '@/styles/fonts'
import chevron from '@/icons/chevron-right.svg'
import { IAccordion } from '@/constants'

const AccordionItem = ({
    toggle,
    selected,
    data,
    index,
    darkBg,
}: {
    toggle: any
    selected: any
    data: IAccordion
    index: number
    darkBg: boolean
}) => {
    return (
        <div
            className={classNames(
                styles.accordionItem,
                darkBg ? styles.accordionItemDarkBg : ''
            )}
            onClick={() => toggle(index)}
        >
            {/* <div className={styles.invisibleClickZone}></div> */}
            <div
                className={classNames(
                    styles.itemContent
                    // selected !== index ? styles.itemContentMinified : ''
                )}
                onClick={() => toggle(index)}
            >
                <div className={styles.itemHead}>
                    <div
                        className={classNames(
                            styles.itemNumber,
                            darkBg ? styles.itemNumberDarkBg : ''
                        )}
                    >
                        <span>[</span> 0{index + 1} <span>]</span>
                    </div>
                    <h3
                        className={classNames(
                            robotoCondensed.className,
                            styles.itemTitle,
                            darkBg ? styles.itemTitleDarkBg : ''
                        )}
                    >
                        {data.title}
                    </h3>
                </div>
                <div
                    className={classNames(
                        styles.itemBody,
                        selected !== index ? styles.itemBodyInvisible : ''
                    )}
                >
                    {data.image.url ? (
                        <Image
                            className={classNames(
                                styles.itemImg,
                                selected !== index
                                    ? styles.itemImgInvisible
                                    : ''
                            )}
                            src={'https://myc.fractal-web.com' + data.image.url}
                            alt=""
                            width={data.image.width}
                            height={data.image.height}
                            sizes="100vw"
                        />
                    ) : null}
                    <p
                        className={classNames(
                            styles.itemDescription,
                            darkBg ? styles.itemDescriptionDarkBg : ''
                            // selected !== index ? styles.itemBodyInvisible : ''
                        )}
                    >
                        {data.description}
                    </p>
                </div>
            </div>
            <div className={styles.chevronContainer}>
                <Image
                    className={
                        selected == index
                            ? styles.chevronRotate
                            : styles.chevron
                    }
                    src={chevron}
                    alt=""
                />
            </div>
        </div>
    )
}
export default AccordionItem
