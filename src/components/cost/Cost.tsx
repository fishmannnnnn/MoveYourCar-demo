import classNames from 'classnames';
import styles from './Cost.module.scss';
import { robotoCondensed } from '@/styles/fonts';
import Image from 'next/image';
import driver from '@/images/truck-driver.webp';
const Cost = () => {
	return (
		<section className='container' id='cost'>
			<div className={styles.section}>
				<div
					className={classNames(
						styles.sectionHead,
						robotoCondensed.className
					)}>
					<h3 className={'section-header'}>Cost</h3>
					<p className={styles.sectionDescription}>
						Cost of training on the course
					</p>
				</div>
				<div className={styles.content}>
					<div className={styles.cost}>
						<p className={styles.weAccept}>
							We accept Zelle transfers and cash transfers*
						</p>
						<div className={styles.atOnce}>
							<h2
								className={classNames(
									robotoCondensed.className,
									styles.price
								)}>
								1000 <span>USD</span>
							</h2>
							<p className={styles.priceDescription}>
								If you pay for the whole course at once
							</p>
						</div>
						<div className={styles.youWork}>
							<h2
								className={classNames(
									robotoCondensed.className,
									styles.price
								)}>
								500 <span>USD</span>
							</h2>
							<p className={styles.priceDescription}>
								If you work for more than 3 months, the amount
								from your gross is refunded
							</p>
						</div>
					</div>
					<div className={styles.job}>
						<h3
							className={classNames(
								robotoCondensed.className,
								styles.title
							)}>
							job proposition
						</h3>
						<p className={styles.description}>
							We realize that for many people, not only the
							learning process is important, but also the
							possibility of employment upon completion.
							That&apos;s why we offer our students a job
							guarantee!
						</p>
						<Image
							className={styles.img}
							src={driver}
							alt='driver picture'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Cost;
