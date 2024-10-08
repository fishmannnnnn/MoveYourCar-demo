import Rating from './Rating'
import styles from './ReviewCard.module.scss'
import Image from 'next/image'
import { robotoCondensed } from '@/styles/fonts'
import classNames from 'classnames'
import { StrapiImage } from '@/constants'
export interface IReview {
    image: StrapiImage
    name: string
    review: string
    rating: number
    date: string
}
const ReviewCard = ({ data }: { data: IReview }) => {
    return (
        <div className={styles.reviewCard}>
            <div className={styles.reviewCardContainerTop}>
                <div className={styles.imgContainer}>
                    {data.image.url ? (
                        <Image
                            className={styles.img}
                            src={data.image.url}
                            alt="profile image"
                            width={data.image.width}
                            height={data.image.height}
                            sizes="100vw"
                            quality={100}
                        />
                    ) : null}
                </div>
                <div className={styles.reviewInfo}>
                    <Rating rate={data.rating} />
                    <span className={styles.date}>{data.date}</span>
                </div>
            </div>
            <div className={styles.reviewCardContainerBottom}>
                <h3
                    className={classNames(
                        styles.reviewName,
                        robotoCondensed.className
                    )}
                >
                    {data.name}
                </h3>
                <p className={styles.reviewText}>{data.review}</p>
            </div>
        </div>
    )
}
export default ReviewCard
