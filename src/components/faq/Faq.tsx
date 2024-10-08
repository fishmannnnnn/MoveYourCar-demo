'use client'
import { robotoCondensed } from '@/styles/fonts'
import styles from './Faq.module.scss'
import classNames from 'classnames'
import { useState } from 'react'
import Image from 'next/image'
import plus from '@/icons/plus.svg'
const questions = [
    {
        number: '01',
        question: 'Why is the Non-CDL Car Hauling School necessary?',
        answer: 'We created this course to teach potential drivers the fundamentals of car hauling. Even if you have experience driving trucks, this course will be valuable as it provides you with a comprehensive set of knowledge and tools that will help you become a safe, comfortable, quick, and skilled specialist in transporting cars, motorcycles, ATVs, and golfcars.',
    },
    {
        number: '02',
        question:
            'Why is the course for transporting cars and motorcycles in an enclosed trailer $500 more expensive than the course for transporting cars on an open trailer?',
        answer: 'The answer lies in the question itself. Transporting cars and motorcycles in an enclosed trailer is a more complex and responsible process. Securing and delivering a new car worth $500K is not as simple as transporting a $2K pickup truck or minivan, whose value may sometimes equal or be less than the cost of its transportation. Transporting motorcycles is a separate science. In our course, we teach you how to fit 14 motorcycles into a standard 36-foot trailer and deliver them safely.',
    },
    {
        number: '03',
        question: 'Who teaches the course?',
        answer: 'The course is led by the world champion in car hauling, Vitaly Biserov. Why has Vitaly earned such a high title? Vitaly consistently brought in the highest grosses, both with enclosed and open trailers carrying two cars. How did Vitaly achieve such results? High gross revenue is possible only when you operate as efficiently as possible—driving without downtime, covering a minimum of 5,000 miles per week, and transporting two motorcycles in addition to two cars in an enclosed trailer, plus two small motorcycles in the bed of the pickup. Vitaly will teach you all this and much more in our course.',
    },
    {
        number: '04',
        question:
            'What if I need more practical training to master driving a pickup and trailer?',
        answer: 'You can arrange for individual lessons with Vitaly by agreement.',
    },
    {
        number: '05',
        question:
            'Can I count on guaranteed employment with your company after completing the course?',
        answer: "Upon course completion, either our company or one of our partner companies will guarantee you a job offer, provided you demonstrate responsibility and diligence during your training. It's important not only to feel confident on the road with a trailer but also to know how to quickly change a tire on the truck or trailer, replace a bearing or caliper on the trailer, change the oil and filter on the truck, and load a non-running vehicle onto the trailer.",
    },
    {
        number: '06',
        question:
            'How much can I expect to earn as a driver on a pickup truck?',
        answer: 'The average salary for a driver with a two-car trailer is $1.5-2K per week. If you own your equipment and operate as an owner-operator, your income will be at least $3-4K per week.',
    },
    {
        number: '07',
        question:
            'How is the training conducted in our course, and what certification do you receive upon completion?',
        answer: 'First, you complete the theoretical course. After payment, you receive access to video materials, after studying which you will take a test. Upon passing the test, we invite you to practical training, which lasts 3-5 days depending on the course you are taking (open or enclosed trailer transport) and the number of students in your group.',
    },
]

interface FAQProps {
    data: {
        question: string
        answer: string
    }[]
}

const Faq = ({ data }: FAQProps) => {
    const [selected, setSelected] = useState(0)
    const toggle = (i: number) =>
        selected == i ? setSelected(-1) : setSelected(i)
    return (
        <section className="container" id="FAQ">
            <div className={styles.section}>
                <div
                    className={classNames(
                        styles.sectionHead,
                        robotoCondensed.className
                    )}
                >
                    <h3 className={'section-header'}>FAQ</h3>
                    <p className={styles.sectionDescription}>
                        frequently asked questions
                    </p>
                </div>
                <div className={styles.accordion}>
                    {data.map((item, index) => (
                        <div
                            className={styles.accordionItem}
                            key={index }
                            onClick={() => toggle(index)}
                        >
                            <div className={styles.accordionHead}>
                                <div className={styles.headContent}>
                                    <div className={styles.itemNumber}>
                                        <span>[</span> {`0${index+1}`} <span>]</span>
                                    </div>
                                    <h3
                                        className={classNames(
                                            robotoCondensed.className,
                                            styles.itemQuestion
                                        )}
                                    >
                                        {item.question}
                                    </h3>
                                </div>
                                <div className={styles.accordionButton}>
                                    <Image
                                        className={
                                            index === selected
                                                ? styles.crossIcon
                                                : styles.plusIcon
                                        }
                                        src={plus}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div
                                className={classNames(
                                    styles.accordionBodyWrapper,
                                    index === selected
                                        ? styles[
                                              'accordionBodyWrapper--visible'
                                          ]
                                        : styles['accordionBodyWrapper--hidden']
                                )}
                            >
                                <div className={styles.accordionBodyContainer}>
                                    <div className={styles.accordionBody}>
                                        <div className={styles.itemNumber}>
                                            <span>[</span> {`0${index+1}`}{' '}
                                            <span>]</span>
                                        </div>
                                        <p className={styles.itemAnswer}>
                                            {item.answer}
                                        </p>
                                    </div>
                                    <div
                                        className={styles.accordionButton}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Faq
