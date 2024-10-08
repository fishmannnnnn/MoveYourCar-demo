import styles from './page.module.scss'
import SchoolHero from '@/components/hero/SchoolHero'
import ForWhom from '@/components/for-whom/ForWhom'
import KnowledgeBase from '@/components/knowledge-base/KnowledgeBase'
import Cases from '@/components/cases/CasesSchool'
import Faq from '@/components/faq/Faq'
import Contacts from '@/components/contacts/Contacts'
import Request from '@/components/request/Request'
import Cost from '@/components/cost/Cost'
import Teacher from '@/components/teacher/Teacher'
import AboutCourse from '@/components/about-course/AboutCourse'
import { getSchoolPageData } from '../queries'
import { client } from '@/data/client'

export default async function Home() {
    const { data, loading, error } = await client.query({
        query: getSchoolPageData,
    })

    const pageData = data.schoolPage?.data?.attributes
    const isVisible = pageData && !loading && !error

    if (error) {
        console.log(error)
    }

    return (
        <main className={styles.main}>
            <SchoolHero />
            <ForWhom />
            <KnowledgeBase />
            {isVisible && pageData?.AboutCourse ? (
                <AboutCourse
                    data={pageData?.AboutCourse.AccordionItem.map((item) => ({
                        description: item?.description ?? '',
                        image: {
                            height:
                                item?.image.data?.attributes?.height ||
                                undefined,
                            width:
                                item?.image.data?.attributes?.width ||
                                undefined,
                            url: item?.image.data?.attributes?.url,
                        },
                        title: item?.title ?? '',
                    }))}
                />
            ) : null}
            {isVisible && pageData?.Teacher ? (
                <Teacher
                    title={pageData?.Teacher?.Title}
                    text1={pageData?.Teacher?.text1}
                    text2={pageData?.Teacher?.text2}
                    name={pageData?.Teacher?.Name}
                    instagram={pageData?.Teacher?.instagram}
                    tt={pageData?.Teacher?.tiktok}
                    youtube={pageData?.Teacher?.youtube}
                    image={{
                        height:
                            pageData?.Teacher?.image.data?.attributes?.height ||
                            undefined,
                        width:
                            pageData?.Teacher?.image.data?.attributes?.width ||
                            undefined,
                        url: pageData?.Teacher?.image.data?.attributes?.url,
                    }}
                />
            ) : null}
            {isVisible && pageData.Cases ? (
                <Cases
                    data={pageData.Cases.images.data.map((el: any) => ({
                        height: el.attributes?.height ?? undefined,
                        width: el.attributes?.width ?? undefined,
                        url: 'https://myc.fractal-web.com' + el.attributes?.url,
                    }))}
                />
            ) : null}
            <Cost />
            <Request />
            {isVisible && pageData.FAQ ? (
                <Faq
                    data={pageData.FAQ.FaqItem.map((el) => ({
                        answer: el?.Answer ?? '',
                        question: el?.Question ?? '',
                    }))}
                />
            ) : null}
            <Contacts />
        </main>
    )
}
