import classNames from 'classnames'
import styles from './Footer.module.scss'
import { inter } from '@/styles/fonts'
import Image from 'next/image'
import f from '@/icons/f.svg'
import insta from '@/icons/insta.svg'
import x from '@/icons/x.svg'
import logo from '../../../public/logo-light.svg'
// import LanguageSelect from '../language-select/LanguageSelect';
const Footer = () => {
    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.footerContainer}>
                <div className={styles.logoContainer}>
                    {/* <div className={classNames(styles.logo, inter.className)}>
					LOGO
				</div> */}
                    <Image className={styles.logo} src={logo} alt="logo" />
                    <p className={styles.copyright}>
                        Copyright © 2023 NaviMotor LLC
                    </p>
                </div>
                <div className={styles.contacts}>
                    <a
                        className={styles.email}
                        href="mailto:moveyourcarinfo@gmail.com"
                    >
                        moveyourcarinfo<span>@</span>gmail<span>.</span>com
                    </a>
                    <a className={styles.number} href="tel:+1 (888) 699-11-91">
                        <span>+</span>1 ­<span>[</span>888
                        <span>] ­</span> 699<span>-</span>11<span>-</span>91
                    </a>
                </div>
                <div className={styles.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6134.136866307478!2d-84.1936396!3d39.760571899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88408151a00b8b87%3A0xa8d3aa08e4428c4b!2s40%20W%202nd%20St%20Suite%20200%2C%20Dayton%2C%20OH%2045402!5e0!3m2!1sen!2sus!4v1724519436925!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className={styles.scrollUpContainer}>
                    <a href="#header">
                        <div className={styles.scrollUp}>
                            <svg
                                width="16"
                                height="14"
                                viewBox="0 0 16 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13L9 13ZM7.29289 0.292892C7.68342 -0.0976314 8.31658 -0.0976315 8.70711 0.292892L15.0711 6.65685C15.4616 7.04738 15.4616 7.68054 15.0711 8.07107C14.6805 8.46159 14.0474 8.46159 13.6569 8.07107L8 2.41421L2.34315 8.07107C1.95262 8.46159 1.31946 8.46159 0.928932 8.07107C0.538408 7.68054 0.538408 7.04738 0.928932 6.65685L7.29289 0.292892ZM7 13L7 1L9 1L9 13L7 13Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </a>
                </div>
                <div className={styles.socials}>
                    <a href="http://www.facebook.com">
                        <Image
                            className={styles.socialIcon}
                            src={f}
                            alt="facebook"
                        />
                    </a>
                    <a href="http://www.instagram.com">
                        <Image
                            className={styles.socialIcon}
                            src={insta}
                            alt="instagram"
                        />
                    </a>
                    <a href="http://www.x.com">
                        <Image className={styles.socialIcon} src={x} alt="x" />
                    </a>
                </div>
                <p className={styles.address}>
                    40 W 2nd St Suite 200, Dayton, OH 45402
                </p>
                <div className={styles.languageSelectWrapper}>
                    {/* <LanguageSelect /> */}
                </div>
            </div>
        </footer>
    )
}
export default Footer
