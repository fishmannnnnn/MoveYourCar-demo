import classNames from 'classnames';
import styles from './AboutCourse.module.scss';
import Image from 'next/image';
import { roboto, robotoCondensed } from '@/styles/fonts';
import speedometer from '@/images/how-it-works-speedometer.svg';
import Accordion from '../accordion/Accordion';
// import { ACCORDION_SCHOOL } from '@/constants';
import { IAccordion } from '@/constants'

interface AboutProps {
    data: IAccordion[]
}

const AboutCourse = ({ data }: AboutProps) => {
    return (
        <section className={styles.sectionContainer} id="about-course">
            <div className="container">
                <div className={styles.section}>
                    <div
                        className={classNames(
                            styles.sectionHead,
                            robotoCondensed.className
                        )}
                    >
                        <h3 className={'section-header'}>About course</h3>
                        <p className={styles.sectionDescription}>
                            Course program and stages of training on the course
                        </p>
                    </div>
                    <div className={styles.accordion}>
                        <Accordion data={data} darkBg={true} />
                    </div>
                    <div className={styles.stepsContainer}>
                        <div className={styles.stepsBlank}>
                            <Image
                                className={styles.speedometer}
                                src={speedometer}
                                alt=""
                            />
                        </div>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div>
                                    <h3
                                        className={classNames(
                                            styles.stepTitle,
                                            styles.robotoCondensed
                                        )}
                                    >
                                        Start
                                    </h3>
                                    <p className={styles.stepDescription}>
                                        You get to know the owner and the
                                        company where the training will take
                                        place. Your instructor and fellow
                                        students.
                                    </p>
                                </div>
                                <div className={styles.stepNumber}>
                                    <span>[</span> 01 stage <span>]</span>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div>
                                    <h3
                                        className={classNames(
                                            styles.stepTitle,
                                            styles.robotoCondensed
                                        )}
                                    >
                                        Practical training
                                    </h3>
                                    <p className={styles.stepDescription}>
                                        You perform all the exercises of the
                                        course with your own hands and gain the
                                        necessary skills.
                                    </p>
                                </div>
                                <div className={styles.stepNumber}>
                                    <span>[</span> 02 stage <span>]</span>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div>
                                    <h3
                                        className={classNames(
                                            styles.stepTitle,
                                            styles.robotoCondensed
                                        )}
                                    >
                                        Theoretical training
                                    </h3>
                                    <p className={styles.stepDescription}>
                                        You study documents, appendices. Get
                                        answers to your questions.
                                    </p>
                                </div>
                                <div className={styles.stepNumber}>
                                    <span>[</span> 03 stage <span>]</span>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div>
                                    <h3
                                        className={classNames(
                                            styles.stepTitle,
                                            styles.robotoCondensed
                                        )}
                                    >
                                        Defense and graduation
                                    </h3>
                                    <p className={styles.stepDescription}>
                                        You show your knowledge and skills
                                        acquired during the training. The best
                                        ones get a Job offer.
                                    </p>
                                </div>
                                <div className={styles.stepNumber}>
                                    <span>[</span> 04 stage <span>]</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutCourse;
