import styles from './Statistics.module.scss';
import classNames from 'classnames';
import { robotoCondensed, roboto } from '@/styles/fonts';
import Image from 'next/image';
import person from '@/icons/person.svg'
import path from '@/icons/path.svg'
import sparks from '@/icons/sparks.svg'
const Statistics = () => {
	return (
		<section className='container' id='statistics'>
			<div className={styles.section}>
				<div
					className={classNames(
						styles.sectionHead,
						robotoCondensed.className
					)}>
					<h3 className={'section-header'}>Statistics</h3>
					<div className={styles.statistics}>
						<div className={styles.statisticsItem}>
							<Image className={styles.img} src={person} alt='' />
							<div className={styles.info}>
								<p className={styles.count}>
									1,019,000<span>+</span>
								</p>
								<p
									className={classNames(
										styles.title,
										roboto.className
									)}>
									Satisfied customers
								</p>
							</div>
						</div>
						<div className={styles.statisticsItem}>
							<Image className={styles.img} src={path} alt='' />
							<div className={styles.info}>
								<p className={styles.count}>
									1,128,000<span>+</span>
								</p>
								<p
									className={classNames(
										styles.title,
										roboto.className
									)}>
									Vehicles delivered
								</p>
							</div>
						</div>
						<div className={styles.statisticsItem}>
							<Image className={styles.img} src={sparks} alt='' />
							<div className={styles.info}>
								<p className={styles.count}>
									16<span>+</span> years
								</p>
								<p
									className={classNames(
										styles.title,
										roboto.className
									)}>
									Experience
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Statistics;
