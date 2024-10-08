import right from '@/icons/arrow-right.svg';
import Image from 'next/image';
import { useSwiper } from 'swiper/react';

const ButtonNextSlide = () => {
	const swiper = useSwiper();
	return (
		<button
			className='button-next-slide'
			onClick={() => swiper.slideNext()}>
			<Image src={right} alt='right' />
		</button>
	);
};
export default ButtonNextSlide;
