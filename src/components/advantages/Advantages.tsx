import { robotoCondensed } from '@/styles/fonts';
import styles from './Advantages.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import specializedCareImg from '@/images/specialized-care.avif';
import fleetImg from '@/images/fleet.avif';
import insuranceImg from '@/images/insurance.avif'
import onlineTrackingImg from '@/images/online-tracking.avif'
import experiencedDriversImg from '@/images/experienced-drivers.avif'
import fastDelevery from '@/images/fast-delevery.jpg';


const Advantages = () => {
	return (
		<section className='container'>
			<div className={styles.section}>
				<div
					className={classNames(
						styles.sectionHead,
						robotoCondensed.className
					)}>
					<h3 className={'section-header'}>Advantages</h3>
					<p className={styles.sectionDescription}>
						Why you can trust <br /> us with your relocation
					</p>
				</div>
				<div className={styles.advantages}>
					<div className={styles.advantage}>
						<div className={styles.advantageNumber}>
							<span>[</span> 01 <span>]</span>
						</div>
						<Image
							className={styles.advantageImg}
							src={specializedCareImg}
							alt='trailer'></Image>
						<div className={styles.advantageInfo}>
							<div className={styles.infoTop}>
								<div
									className={classNames(
										styles.advantageTitle,
										robotoCondensed.className
									)}>
									Specialized Care
								</div>
								<div className={styles.advantageDescription}>
									An economical and popular option for
									transporting standard vehicles, pickup
									trucks and vans. We provide secure
									attachment with padded straps around the
									wheels.
								</div>
							</div>
						</div>
					</div>
					<div className={styles.advantage}>
						<div className={styles.advantageNumber}>
							<span>[</span> 02 <span>]</span>
						</div>
						<Image
							className={styles.advantageImg}
							src={fleetImg}
							alt='trailer'></Image>
						<div className={styles.advantageInfo}>
							<div className={styles.infoTop}>
								<div
									className={classNames(
										styles.advantageTitle,
										robotoCondensed.className
									)}>
									Fleet
								</div>
								<div className={styles.advantageDescription}>
									The company operates a fleet of pickup
									trucks and trailers specifically designed
									for car hauling purposes.
								</div>
							</div>
						</div>
					</div>
					<div className={styles.advantage}>
						<div className={styles.advantageNumber}>
							<span>[</span> 03 <span>]</span>
						</div>
						<Image
							className={styles.advantageImg}
							src={insuranceImg}
							alt='trailer'></Image>
						<div className={styles.advantageInfo}>
							<div className={styles.infoTop}>
								<div
									className={classNames(
										styles.advantageTitle,
										robotoCondensed.className
									)}>
									Insurance
								</div>
								<div className={styles.advantageDescription}>
									All vehicles are insured before the
									delivery, providing peace of mind to
									customers in case of any unexpected
									incidents.
								</div>
							</div>
						</div>
					</div>
					<div className={styles.advantage}>
						<div className={styles.advantageNumber}>
							<span>[</span> 04 <span>]</span>
						</div>
						<Image
							className={styles.advantageImg}
							src={onlineTrackingImg}
							alt='trailer'></Image>
						<div className={styles.advantageInfo}>
							<div className={styles.infoTop}>
								<div
									className={classNames(
										styles.advantageTitle,
										robotoCondensed.className
									)}>
									Online Tracking
								</div>
								<div className={styles.advantageDescription}>
									Customers have the convenience of tracking
									the movement of their cargo online, allowing
									them to stay informed about the status and
									location of their vehicles during transit.
								</div>
							</div>
						</div>
					</div>
					<div className={styles.advantage}>
						<div className={styles.advantageNumber}>
							<span>[</span> 05 <span>]</span>
						</div>
						<Image
							className={styles.advantageImg}
							src={experiencedDriversImg}
							alt='trailer'></Image>
						<div className={styles.advantageInfo}>
							<div className={styles.infoTop}>
								<div
									className={classNames(
										styles.advantageTitle,
										robotoCondensed.className
									)}>
									Experienced Drivers
								</div>
								<div className={styles.advantageDescription}>
									Drivers with extensive experience in
									transporting valuable cargo, ensuring the
									safe and reliable delivery of vehicles.
								</div>
							</div>
						</div>
					</div>
					<div className={styles.advantage}>
						<div className={styles.advantageNumber}>
							<span>[</span> 06 <span>]</span>
						</div>
						<Image
							className={styles.advantageImg}
							src={fastDelevery}
							alt='fastDelevery'></Image>
						<div className={styles.advantageInfo}>
							<div className={styles.infoTop}>
								<div
									className={classNames(
										styles.advantageTitle,
										robotoCondensed.className
									)}>
									Fast delivery
								</div>
								<div className={styles.advantageDescription}>
								We pickup your car during 48 hours after your order and deliver it for 3 days coast to coast.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Advantages;
