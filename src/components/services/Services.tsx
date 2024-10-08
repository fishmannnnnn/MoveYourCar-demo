import { robotoCondensed } from '@/styles/fonts'
import styles from './Services.module.scss'
import classNames from 'classnames'
import Image from 'next/image'
import openTrailer from '@/images/open-trailer.avif'
import enclosedTrailer from '@/images/enclosed-trailer.avif'
import truckIcon from '@/icons/humbleicons_truck.svg'
import carIcon from '@/icons/lucide_car.svg'
const Services = () => {
    return (
        <section className="container" id="services">
            <div className={styles.section}>
                <div
                    className={classNames(
                        styles.sectionHead,
                        robotoCondensed.className
                    )}
                >
                    <h3 className={'section-header'}>Our services</h3>
                    <p className={styles.sectionDescription}>
                        Moveyourcar offers to deliver in two ways
                    </p>
                </div>
                <div className={styles.deliveryTypes}>
                    <div className={styles.deliveryType}>
                        <div className={styles.typeNumber}>
                            <span>[</span> 01 <span>]</span>
                        </div>
                        <Image
                            className={styles.typeImg}
                            src={openTrailer}
                            alt="trailer"
                        ></Image>
                        <div className={styles.typeInfo}>
                            <div className={styles.infoTop}>
                                <div
                                    className={classNames(
                                        styles.typeTitle,
                                        robotoCondensed.className
                                    )}
                                >
                                    Delivery on open trailers
                                </div>
                                <div className={styles.typeDescription}>
                                    An economical and popular option for
                                    transporting standard vehicles, pickup
                                    trucks and vans. We provide secure
                                    attachment with padded straps around the
                                    wheels.
                                </div>
                            </div>
                            <div className={styles.infoBottom}>
                                <div className={styles.bottomInfo}>
                                    <Image src={truckIcon} alt="truck" />
                                    <p className={styles.bottomInfoTitle}>
                                        6+ Types of car haulers
                                    </p>
                                </div>
                                <div className={styles.bottomInfo}>
                                    <Image src={carIcon} alt="car" />
                                    <p className={styles.bottomInfoTitle}>
                                        6+ Types of vehicles
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.separator}></div>
                    <div className={styles.deliveryType}>
                        <div className={styles.typeNumber}>
                            <span>[</span> 02 <span>]</span>
                        </div>
                        <Image
                            className={styles.typeImg}
                            src={enclosedTrailer}
                            alt="trailer"
                        ></Image>
                        <div className={styles.typeInfo}>
                            <div className={styles.infoTop}>
                                <div
                                    className={classNames(
                                        styles.typeTitle,
                                        robotoCondensed.className
                                    )}
                                >
                                    Delivery on enclosed trailers
                                </div>
                                <div className={styles.typeDescription}>
                                    Ideal for luxury and exclusive vehicles.
                                    Inside the trailer, the vehicle is secured
                                    with padded straps for maximum safety.
                                </div>
                            </div>
                            <div className={styles.infoBottom}>
                                <div className={styles.bottomInfo}>
                                    <Image src={truckIcon} alt="truck" />
                                    <p className={styles.bottomInfoTitle}>
                                        6+ Types of car haulers
                                    </p>
                                </div>
                                <div className={styles.bottomInfo}>
                                    <Image src={carIcon} alt="car" />
                                    <p className={styles.bottomInfoTitle}>
                                        6+ Types of vehicles
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services
