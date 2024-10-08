'use client'
import classNames from 'classnames'
import styles from './Reviews.module.scss'
import { robotoCondensed } from '@/styles/fonts'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { REVIEWS } from '@/constants'
import ReviewCard, { IReview } from './ReviewCard'
import left from '@/icons/arrow-left.svg'
import right from '@/icons/arrow-right.svg'
import Image from 'next/image'

interface ReviewProps {
    data: IReview[]
}

const Reviews = ({ data }: ReviewProps) => {
    return (
        <section className={styles.sectionContainer} id="reviews">
            <div className="container">
                <div className={styles.section}>
                    <div
                        className={classNames(
                            styles.sectionHead,
                            robotoCondensed.className
                        )}
                    >
                        <h3 className={'section-header'}>Reviews</h3>
                        <p className={styles.sectionDescription}>
                            What our customers say about us
                        </p>
                    </div>
                    <div className={styles.swiperControls}>
                        <div className="reviews-slide-prev">
                            <Image src={left} alt="left" />
                        </div>
                        <div className="reviews-slide-next">
                            <Image src={right} alt="right" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.reviewsContainer}>
                <div className={styles.reviewsSwiper}>
                    <Swiper
                        className="swiper-reviews"
                        spaceBetween={0}
                        centeredSlides={true}
                        initialSlide={1}
                        slidesPerView={'auto'}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: '.reviews-slide-prev',
                            nextEl: '.reviews-slide-next',
                        }}
                        breakpoints={{}}
                    >
                        {data.map((item, i) => (
                            <SwiperSlide key={i}>
                                <ReviewCard data={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
export default Reviews
