import styles from './SchoolNavbar.module.scss';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/icons/logo-light.svg';
import f from '@/icons/f.svg';
import insta from '@/icons/insta.svg';
import x from '@/icons/x.svg';
import classNames from 'classnames';
import { LINKS_SCHOOL } from '@/constants';
import LanguageSelect from '../language-select/LanguageSelect';
import ButtonTransparent from '../buttons/buttonTransparent/ButtonTransparent';
import { useOnClickOutside } from 'usehooks-ts';
const Navbar = () => {
	const [menuVisible, setMenuVisible] = useState(false);
	const navRef = useRef<HTMLElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);

	const handleMenuClick = () => {
		let navEl: HTMLElement | null = navRef.current;
		if (navEl) {
			if (!menuVisible) {
				navEl.classList.add(styles.navMobile);
			} else {
				navEl.classList.remove(styles.navMobile);
			}
			setMenuVisible(!menuVisible);
		}
	};
	const hideMenu = () => {
		setMenuVisible(false);
		let navEl: HTMLElement | null = navRef.current;
		if (navEl) {
			navEl.classList.remove(styles.navMobile);
		}
	};
	const handleClickOutside = () => {
		hideMenu();
	};
	useOnClickOutside(headerRef, handleClickOutside);
	return (
		<header className={styles.header} id='header'>
			<div className={styles.headerTop}>
				<div className={styles.headerTopInner}>
					<div className={styles.contacts}>
						<div className={styles.socials}>
							<a href='http://www.facebook.com'>
								<Image src={f} alt='facebook' />
							</a>
							<a href='http://www.instagram.com'>
								<Image src={insta} alt='instagram' />
							</a>
							<a href='http://www.x.com'>
								<Image src={x} alt='x' />
							</a>
						</div>
						<a
                            className={
                                styles.number
                            }
                            href="tel:+1 (888) 699-11-91"
                        >
                            <span>+</span>1 ­<span>[</span>888<span>]</span>­
                            699<span>-</span>11<span>-</span>91
                        </a>
					</div>

					{/* <LanguageSelect /> */}
				</div>
			</div>
			<div className={styles.headerBottom} ref={headerRef}>
				<div className={styles.headerBottomInner}>
					{/* <div className={styles.logo}>
						<Image
							src={logo}
							alt='logo'
							width={50}
							height={49}
							sizes='100vw'
						/>
					</div> */}
					<Link href='/'>
					<Image className={styles.logo} src={logo} alt='logo' />
					</Link>
					<nav className={styles.nav} ref={navRef}>
						<div className={styles.contactsMobile}>
							<div className={styles.contacts}>
								<div className={styles.socials}>
									<a href='http://www.facebook.com'>
										<Image src={f} alt='facebook' />
									</a>
									<a href='http://www.instagram.com'>
										<Image src={insta} alt='instagram' />
									</a>
									<a href='http://www.x.com'>
										<Image src={x} alt='x' />
									</a>
								</div>
								<a
                            className={
                                styles.number
                            }
                            href="tel:+1 (888) 699-11-91"
                        >
                            <span>+</span>1 ­<span>[</span>888<span>]</span>­
                            699<span>-</span>11<span>-</span>91
                        </a>
							</div>
							{/* <div className={styles.languageSelect}>
								<LanguageSelect />
							</div> */}
						</div>
						<ul>
							{LINKS_SCHOOL.map((link) => (
								<li key={link.key}>
									<Link
										className={styles.navLink}
										href={link.href}
										onClick={hideMenu}>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<div className={styles.navRight}>
						<ButtonTransparent text='Driving school' />
						<button
							className={
								menuVisible
									? styles.closeMenuButton
									: styles.menuButton
							}
							onClick={handleMenuClick}>
							<span
								className={classNames(
									!menuVisible
										? styles.line
										: styles.lineFirst,
									styles.animatedLine
								)}></span>
							<span
								className={classNames(
									!menuVisible
										? styles.line
										: styles.lineInvisible,
									styles.animatedLine
								)}></span>
							<span
								className={classNames(
									!menuVisible
										? styles.line
										: styles.lineLast,
									styles.animatedLine
								)}></span>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Navbar;
