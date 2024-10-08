import left from '@/icons/arrow-left.svg'
import Image from 'next/image';
import { useSwiper } from 'swiper/react';

const ButtonPrevSlide = () => {
	const swiper = useSwiper();
	return (
		<button
			className='button-prev-slide'
			onClick={() => swiper.slidePrev()}>
			<Image src={left} alt='left' />
		</button>
	);
};
export default ButtonPrevSlide;
