import Image from 'next/image';
import BookingForm from './BookingForm';
import ButtonFull from './common/ButtonFull';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
motion;
const Hero = () => {
	return (
		<motion.div
			className='bg-primary relative max-h-[500px]'
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			whileInView='visible'
			viewport={{ once: true }}
			transition={{ duration: 0.7, type: 'ease-in' }}
		>
			<div className='relative isolate flex justify-center items-center px-6 lg:px-8'>
				<div className='absolute inset-0 z-[-1] '>
					<Image
						src='/assets/hero/heroBig.webp'
						alt='Chef cooking in the kitchen'
						fill={true}
						className='object-cover'
						sizes='100vw'

						blurDataURL='/assets/hero/heroBig.webp'
					/>
					<div className='absolute inset-0 bg-black bg-opacity-50'></div>
				</div>
				<div className='mx-auto max-w-2xl py-36'>
					<div className='text-center'>
						<motion.h1
							className='font-bakilda text-5xl md:text-6xl text-white'
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							whileInView='visible'
							viewport={{ once: true }}
							transition={{ duration: 0.3, type: 'ease-in' }}
						>
							Our Best Fusion Dishes
						</motion.h1>
						<motion.p
							className='mt-6 text-lg leading-8 text-white font-openSans'
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							whileInView='visible'
							viewport={{ once: true }}
							transition={{ duration: 0.5, type: 'ease-in' }}
						>
							We serve the best fusion dishes in the city.
						</motion.p>
						<motion.div
							className='mt-10 flex items-center justify-center gap-x-6'
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							whileInView='visible'
							viewport={{ once: true }}
							transition={{ duration: 1, type: 'ease-in' }}
						>
							<ScrollLink name='menu' to={'menu'} smooth={true} offset={-60}>
								<ButtonFull>Main Menu</ButtonFull>
							</ScrollLink>
						</motion.div>
					</div>
				</div>
			</div>
			<div className='hidden lg:block lg:mx-auto lg:absolute lg:-bottom-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-40'>
				<BookingForm />
			</div>
		</motion.div>
	);
};

export default Hero;
