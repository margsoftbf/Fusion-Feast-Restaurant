import Image from 'next/image';
import { Orange, Tomato } from '../../public/assets/svg';

import BookingForm from './BookingForm';
import ButtonFull from './common/ButtonFull';
const Hero = () => {
	return (
		<div className='bg-primary relative'>
			<div className='relative isolate px-6 pt-14 lg:px-8'>
				<div className='absolute inset-0 z-[-1]'>
					<Image
						src='/assets/hero/heroBig.webp'
						fill={true}
						style={{ objectFit: 'cover' }}
						quality={75}
						priority={true}
						alt='Chef cooking in the kitchen'
					/>
					<div className='absolute inset-0 bg-black bg-opacity-60'></div>
					<Orange className='w-64 h-64 absolute bottom-0 opacity-20 lg:opacity-60' />
					<Tomato className='hidden lg:block lg:w-64 lg:h-64 lg:absolute lg:right-12 lg:top-12 lg:opacity-60' />
				</div>
				<div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
					<div className='text-center'>
						<h1 className='font-bakilda text-5xl my-2 md:text-6xl text-white'>
							Our Best Fusion Dishes
						</h1>
						<p className='mt-6 text-lg leading-8 text-white font-openSans'>
							We serve the best fusion dishes in the city.
						</p>
						<div className='mt-10 flex items-center justify-center gap-x-6'>
							<ButtonFull>Main Menu</ButtonFull>
						</div>
					</div>
				</div>
			</div>
			<div className='hidden lg:block lg:mx-auto lg:absolute lg:-bottom-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-50'>
				<BookingForm />
			</div>
		</div>
	);
};

export default Hero;
