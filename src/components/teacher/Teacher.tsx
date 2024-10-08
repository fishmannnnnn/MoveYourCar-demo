import { roboto, robotoCondensed } from '@/styles/fonts';
import styles from './Teacher.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import img from '@/images/teacher-photo.webp';
import yt from '@/icons/yt24.svg';
import insta from '@/icons/insta24.svg';
import tiktok from '@/icons/tiktok24.svg';
import { StrapiImage } from '@/constants';

interface TeacherProps {
	title: string;
	text1: string;
	text2: string;
	name: string;
	instagram: string;
	tt: string;
	youtube: string;
	image: StrapiImage;
}

const Teacher = ({
    title,
    text1,
    text2,
	name,
    instagram,
    tt,
    youtube,
    image,
}: TeacherProps) => {
    return (
        <section className="container" id="teacher">
            <div className={styles.section}>
                <div
                    className={classNames(
                        styles.sectionHead,
                        robotoCondensed.className
                    )}
                >
                    <h3 className={'section-header'}>Teacher</h3>
                    <div className={styles.sectionDescriptionContainer}>
                        <p className={styles.sectionDescription}>{title}</p>
                        <div
                            className={classNames(
                                styles.textBlock,
                                roboto.className
                            )}
                        >
                            <p className={styles.textFirst}>{text1}</p>
                            <p className={styles.textSecond}>{text2}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.contacts}>
                        <h2
                            className={classNames(
                                robotoCondensed.className,
                                styles.name
                            )}
                        >
                            {name}
                        </h2>
                        <div className={styles.socials}>
                            <a href={youtube}>
                                <Image src={yt} alt="youtube" />
                            </a>
                            <a href={instagram}>
                                <Image src={insta} alt="instagram" />
                            </a>
                            <a href={tt}>
                                <Image src={tiktok} alt="tiktok" />
                            </a>
                        </div>
                    </div>
                    <Image
                        className={styles.img}
                        src={'https://myc.fractal-web.com'+image.url}
						width={image.width}
						height={image.height}
                        alt="teacher photo"
						sizes='100vw'
                    />
                </div>
            </div>
        </section>
    )
}
export default Teacher;
