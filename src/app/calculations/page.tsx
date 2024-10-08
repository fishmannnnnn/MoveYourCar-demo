'use client'

import styles from './page.module.scss'
import formImg from '../../../public/form/ok-btn.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { PriceTable } from '@/components/price-table/PriceTable'
import ButtonFilled from '@/components/buttons/buttonFilled/ButtonFilled'

const CalculatePriceHeader = () => {
    return (
        <section className={styles.heading}>
            <h1 className={styles.subTitle}>
                Thank you for filling out the form!
            </h1>
            <h2 className={styles.mainTitle}>
                Your quote has been successfully calculated
            </h2>
            <Image src={formImg} alt="decor" />
        </section>
    )
}

const CalculatePriceFooter = () => {
    const router = useRouter()

    return (
        <section className={styles.contact}>
            <div className={styles.commomWrapper}>
                <div className={styles.left}>
                    <p className={styles.spec}>
                        {
                            "Don't know the exact day? That's okay! You can change it at any time. You will still be able to view your order."
                        }
                    </p>
                    <div className={styles.phoneWrapper}>
                        <p>
                            Book with one of our friendly Customer Service
                            Agents!
                        </p>
                        <a href="tel:+1 (888) 699-11-91">+1 [888] 699-11-91</a>
                    </div>
                </div>
                <ButtonFilled
                    className={styles.btn}
                    text="Book now"
                    type="secondary"
                    onCLick={() => router.push('/transport')}
                />
            </div>
        </section>
    )
}

const CalculationResultPage = () => {
    return (
        <main className={styles.main}>
            {/* <FormSubmitedProvider> */}
            <CalculatePriceHeader />
            <PriceTable />
            <CalculatePriceFooter />
            {/* </FormSubmitedProvider> */}
        </main>
    )
}

export default CalculationResultPage
