import classNames from 'classnames'
import styles from './Licenses.module.scss'
import { robotoCondensed } from '@/styles/fonts'
import Accordion from '../accordion/Accordion'
import { IAccordion } from '@/constants'

interface LicensesProps {
    data: IAccordion[]
}

const Licenses = ({ data }: LicensesProps) => {
    return (
        <section className="container" id="licenses">
            <div className={styles.section}>
                <div
                    className={classNames(
                        styles.sectionHead,
                        robotoCondensed.className
                    )}
                >
                    <h3 className={'section-header'}>Our licenses</h3>
                    <p className={styles.sectionDescription}>
                        Setting the standard for auto transport services
                    </p>
                </div>
                <div className={styles.accordion}>
                    <Accordion data={data} darkBg={false} />
                </div>
            </div>
        </section>
    )
}
export default Licenses
