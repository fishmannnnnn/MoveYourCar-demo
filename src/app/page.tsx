import styles from './page.module.scss'
import Hero from '@/components/hero/Hero'
import Licenses from '@/components/licenses/Licenses'
import Services from '@/components/services/Services'
import Statistics from '@/components/statistics/Statistics'
import HowItWorks from '@/components/how-it-works/HowItWorks'
import Advantages from '@/components/advantages/Advantages'
import Cases from '@/components/cases/Cases'
import Reviews from '@/components/reviews/Reviews'
import Faq from '@/components/faq/Faq'
import Contacts from '@/components/contacts/Contacts'

import { client } from '@/data/client'
import { getMainPageData } from './queries/getMainPageData'
import { getCases, getLicenses, getReviws } from '@/helpers'
export default async function Home() {
    const { data, loading, error } = await client.query({
        query: getMainPageData,
    })

    const pageData = data.mainPage?.data?.attributes

    const isVisible = pageData && !loading && !error

    if (error) {
        console.log(error.message)
    }

    return (
        <main className={styles.main}>
            <Hero />
            <Services />
            {isVisible && pageData.Licenses.AccordionItem ? (
                <Licenses data={getLicenses(pageData.Licenses)} />
            ) : null}
            <Statistics />
            <HowItWorks />
            <Advantages />
            {isVisible && pageData.Cases.CaseItem ? (
                <Cases data={getCases(pageData)} />
            ) : null}
            {isVisible && pageData.Reviews.ReviewItem ? (
                <Reviews data={getReviws(pageData)} />
            ) : null}
            {isVisible && pageData.FAQ.FaqItem ? (
                <Faq
                    data={pageData.FAQ.FaqItem.map((el) => ({
                        question: el?.Question ?? '',
                        answer: el?.Answer ?? '',
                    }))}
                />
            ) : null}
            <Contacts />
        </main>
    )
}
