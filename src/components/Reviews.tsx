import React from 'react';
import {
	Ellipse,
	EmptyEllipse,
	SubTitleLeft,
	SubTitleRight,
} from '../../public/assets/svg';
import 'swiper/css';
import ReviewsSlider from './ReviewsSlider';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';


const Reviews = () => {
	const { ref, controls } = useScrollAnimation();
	return (
		<motion.div className='bg-secondary py-8 relative overflow-hidden' id='reviews' 	ref={ref}
		animate={controls}
		initial='hidden'
		variants={{
			visible: { opacity: 1, y: 0 },
			hidden: { opacity: 0, y: 50 },
		}}
		transition={{ duration: 1.5, type: 'ease-in' }}>
			<EmptyEllipse className='w-2 h-2 absolute top-16 right-60 lg:w-8 lg:h-8 lg:top-40' />
			<Ellipse className='w-3 h-3 absolute bottom-0 right-12 lg:w-8 lg:h-8 lg:bottom-12' />
			<Ellipse className='w-3 h-3 absolute bottom-0 left-48 lg:w-5 lg:h-5 lg:bottom-12' />
			<Ellipse className='w-1 h-1 absolute top-12 left-64 lg:w-5 lg:h-5 lg:top-28' />
			<EmptyEllipse className='w-2 h-2 absolute top-48 left-72 lg:w-5 lg:h-5 ' />
			<div className='max-w-8xl mx-auto relative flex flex-col items-center justify-center'>
				<div className='mb-4'>
					<div className='flex items-center justify-center gap-2 relative'>
						<SubTitleLeft className='w-7 h-7' />
						<h2 className='font-lemonada text-myOrange font-light'>
							Our Review
						</h2>
						<SubTitleRight className='w-7 h-7' />
					</div>
					<div className='flex items-center justify-center gap-2 relative'>
						<h2 className='font-bakilda text-2xl text-center my-3 md:text-left md:text-4xl text-white tracking-wide'>
							What Client Says
						</h2>
					</div>
				</div>
				<ReviewsSlider />
			</div>
		</motion.div>
	);
};

export default Reviews;
