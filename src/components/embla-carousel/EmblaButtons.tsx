import styles from './EmblaButtons.module.scss';
import Image from 'next/image';
import left from '@/icons/arrow-left.svg';
import right from '@/icons/arrow-right.svg';
import { useCasesEmblaContext } from './useCasesEmbla';

const EmblaButtons = () => {
	const { scrollPrev, scrollNext } = useCasesEmblaContext();
	return (
		<div className={styles.emblaButtons}>
			<div onClick={scrollPrev}>
				<Image src={left} alt='left' />
			</div>
			<div onClick={scrollNext}>
				<Image src={right} alt='right' />
			</div>
		</div>
	);
};

export default EmblaButtons;