import classNames from 'classnames';
import styles from './HowItWorks.module.scss';
import { roboto, robotoCondensed } from '@/styles/fonts';
import Image from 'next/image';
// import supercar from '@/images/car-in-trailer.avif';
import trailer from '@/images/field-trailer.avif';
import calculator from '@/icons/lucide_calculator.svg';
import truck from '@/icons/humbleicons_truck.svg';
import money from '@/icons/streamline_payment.svg';
import checkbox from '@/icons/charm_square-tick.svg';
import ButtonFilled from '../buttons/buttonFilled/ButtonFilled';
import speedometer from '@/images/how-it-works-speedometer.svg';
import Link from 'next/link';
const HowItWorks = () => {
	return (
		<section className={styles.sectionContainer} id='how-it-works'>
			<div className='container'>
				<div className={styles.section}>
					<Image
						className={styles.trailerImage}
						src={trailer}
						alt='trailer'
					/>
					<div
						className={classNames(
							styles.sectionHead,
							robotoCondensed.className
						)}>
						<h3 className={'section-header'}>How it works</h3>
						<div className={styles.sectionDescriptionContainer}>
							<p className={styles.sectionDescription}>
								How Auto Transport & Car Shipping Works
							</p>
							<div
								className={classNames(
									styles.textBlock,
									roboto.className
								)}>
								<p className={styles.textFirst}>
									Your car is your baby, we get that. Where
									other companies might shy away, we’re eager
									to answer all your questions, like “how does
									auto transport work?”
								</p>
								<p className={styles.textSecond}>
									Whether you’re off on your next great
									adventure or purchasing (or selling) a car
									online, you want the very best auto
									transport you can find at a great price, and
									with a 5-star rating, Montway delivers.
								</p>
							</div>
							<div className={styles.videoContainer}>
								{/* <Image
									className={styles.supercarVideo}
									src={supercar}
									alt='supercar'
								/> */}
								<iframe
									width='100%'
									height='100%'
									src='https://www.youtube.com/embed/t9-cMiEDNyk?si=o6vDYNc0c9D2rcEG'
									title='YouTube video player'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture; web-share'
									referrerPolicy='strict-origin-when-cross-origin'
									allowFullScreen></iframe>
							</div>
						</div>
					</div>
					<div className={styles.stepsContainer}>
						<div className={styles.stepsBlank}>
							<Image
								className={styles.speedometer}
								src={speedometer}
								alt=''
							/>
						</div>
						<div className={styles.steps}>
							<div className={styles.step}>
								<Image src={calculator} alt='ordering' />
								<div className={styles.stepNumber}>
									<span>[</span> 01 step <span>]</span>
								</div>
								<h3
									className={classNames(
										styles.stepTitle,
										styles.robotoCondensed
									)}>
									Ordering and costing
								</h3>
								<p className={styles.stepDescription}>
									Customers fill out a form on the website,
									specifying the details of the vehicle and
									the type of transportation. The cost is
									calculated online.
								</p>
								<div className={styles.buttonContainer}>
									<Link href='#contact-us'>
										<ButtonFilled
											text='Get a quote'
											type='primary'
											/>
									</Link>
								</div>
							</div>
							<div className={styles.step}>
								<Image src={money} alt='costing' />
								<div className={styles.stepNumber}>
									<span>[</span> 02 step <span>]</span>
								</div>
								<h3
									className={classNames(
										styles.stepTitle,
										styles.robotoCondensed
									)}>
									Contract conclusion and payment
								</h3>
								<p className={styles.stepDescription}>
									After agreeing on the terms, the client
									signs the contract and makes payment
									(ACH/Wire Transfer, cash, company check,
									Zelle, Cash Up, Venmo, Paypal, MoneyGram,
									Stripe).
								</p>
							</div>
							<div className={styles.step}>
								<Image src={truck} alt='tracking' />
								<div className={styles.stepNumber}>
									<span>[</span> 03 step <span>]</span>
								</div>
								<h3
									className={classNames(
										styles.stepTitle,
										styles.robotoCondensed
									)}>
									Transportation and tracking
								</h3>
								<p className={styles.stepDescription}>
									During the delivery process, the customer
									can track the location of the machinery
									online.
								</p>
							</div>
							<div className={styles.step}>
								<Image src={checkbox} alt='delivery' />
								<div className={styles.stepNumber}>
									<span>[</span> 04 step <span>]</span>
								</div>
								<h3
									className={classNames(
										styles.stepTitle,
										styles.robotoCondensed
									)}>
									Pickup and delivery
								</h3>
								<p className={styles.stepDescription}>
									The vehicle is picked up and delivered at
									the specified time. The driver makes an
									inspection and photographs the vehicle.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default HowItWorks;
