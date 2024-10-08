import styles from './ForWhom.module.scss';
import classNames from 'classnames';
import { robotoCondensed, roboto } from '@/styles/fonts';
import Image from 'next/image';
import eye from '@/icons/hugeicons_eye.svg';
import briefcase from '@/icons/tabler_briefcase.svg';
import man from '@/icons/tabler_mood-boy.svg';
const ForWhom = () => {
	return (
		<section className='container' id='who-is-the-course-for'>
			<div className={styles.section}>
				<div
					className={classNames(
						styles.sectionHead,
						robotoCondensed.className
					)}>
					<h3 className={'section-header'}>Who is the course for</h3>
					<div className={styles.statistics}>
						<div className={styles.statisticsItem}>
							<Image className={styles.img} src={eye} alt='' />
							<div className={styles.info}>
								<p className={styles.count}>For beginners</p>
								<p
									className={classNames(
										styles.title,
										roboto.className
									)}>
									We will help you answer questions you have
									in the first few months of employment and
									help you build your skills.
								</p>
							</div>
						</div>
						<div className={styles.statisticsItem}>
							<Image
								className={styles.img}
								src={briefcase}
								alt=''
							/>
							<div className={styles.info}>
								<p className={styles.count}>Entrepreneurs</p>
								<p
									className={classNames(
										styles.title,
										roboto.className
									)}>
									If you plan to buy equipment to drive
									yourself or offer a job to a driver.
								</p>
							</div>
						</div>
						<div className={styles.statisticsItem}>
							<Image className={styles.img} src={man} alt='' />
							<div className={styles.info}>
								<p className={styles.count}>zero experience</p>
								<p
									className={classNames(
										styles.title,
										roboto.className
									)}>
									If you have just arrived and are in search
									of a job with a decent salary.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default ForWhom;
