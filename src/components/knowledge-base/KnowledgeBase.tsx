import classNames from 'classnames';
import styles from './KnowledgeBase.module.scss';
import { robotoCondensed } from '@/styles/fonts';
const KnowledgeBase = () => {
  return (
		<section className='container' id='knowledge-base'>
			<div className={styles.section}>
				<div
					className={classNames(
						styles.sectionHead,
						robotoCondensed.className
					)}>
					<h3 className={'section-header'}>Knowledge base</h3>
					<p className={styles.sectionDescription}>
						What you will learn on this course
					</p>
				</div>
				<div className={styles.content}>
					<div className={styles.part1}>
						{PART1.map((item) => (
							<div className={styles.block} key={item.number}>
								<div className={styles.number}>
									<span>[</span> {item.number} <span>]</span>
								</div>
								<p className={styles.text}>{item.text}</p>
							</div>
						))}
					</div>
					<div className={styles.part2}>
						{PART2.map((item) => (
							<div className={styles.block} key={item.number}>
								<div className={styles.number}>
									<span>[</span> {item.number} <span>]</span>
								</div>
								<p className={styles.text}>{item.text}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
  );
}
const PART1 = [
	{
		number: '01',
		text: 'Loading vehicles on different trailers and methods of attachment.',
	},
	{
		number: '02',
		text: 'Working in vehicle inspection applications. Communicating with customers.',
	},
	{
		number: '03',
		text: 'Skills to drive a pickup truck with a trailer in different conditions.',
	},
	{
		number: '04',
		text: 'Loading motorcycles, golf carts, ATVs and trikes.',
	},
];
const PART2 = [
	{
		number: '05',
		text: 'Getting the pickup truck and trailer ready for the trip. Equipment, spare parts and documents.',
	},
	{
		number: '06',
		text: 'Building routes according to weather and trailer dimensions.',
	},
	{
		number: '07',
		text: 'On-the-road maintenance and repair of tractor and trailer. PTI.',
	},
	{
		number: '08',
		text: 'Planning your own working hours. Working with a logbook.',
	},
];
export default KnowledgeBase