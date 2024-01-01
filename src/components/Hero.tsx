import Image from 'next/image';
import { Orange, Tomato } from '../../public/assets/svg';

import BookingForm from './BookingForm';
import ButtonFull from './common/ButtonFull';
import { Link as ScrollLink } from 'react-scroll';
const Hero = () => {
	return (
		<div className='bg-primary relative max-h-[500px]'>
			<div className='relative isolate flex justify-center items-center px-6 lg:px-8'>
				<div className='absolute inset-0 z-[-1] '>
					<Image
						src='/assets/hero/heroBig.webp'
						fill={true}
						style={{ objectFit: 'cover' }}
						quality={100}
						sizes='(max-width: 350px) 350px, (max-width: 500px) 500px, (max-width: 768px) 768px, (max-width: 1200px) 1200px'
						placeholder='blur'
						blurDataURL={'/assets/hero/heroBig.webp'}
						alt='Chef cooking in the kitchen'
					/>
					<div className='absolute inset-0 bg-black bg-opacity-50'></div>
					<Orange className='w-64 h-64 absolute bottom-0 opacity-20 lg:opacity-60' />
					<Tomato className='hidden lg:block lg:w-64 lg:h-64 lg:absolute lg:right-12 lg:top-12 lg:opacity-60' />
				</div>
				<div className='mx-auto max-w-2xl py-36'>
					<div className='text-center'>
						<h1 className='font-bakilda text-5xl md:text-6xl text-white'>
							Our Best Fusion Dishes
						</h1>
						<p className='mt-6 text-lg leading-8 text-white font-openSans'>
							We serve the best fusion dishes in the city.
						</p>
						<div className='mt-10 flex items-center justify-center gap-x-6'>
							<ScrollLink to={'menu'} smooth={true} offset={-60}>
								<ButtonFull>Main Menu</ButtonFull>
							</ScrollLink>
						</div>
					</div>
				</div>
			</div>
			<div className='hidden lg:block lg:mx-auto lg:absolute lg:-bottom-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-40'>
				<BookingForm />
			</div>
		</div>
	);
};

export default Hero;
