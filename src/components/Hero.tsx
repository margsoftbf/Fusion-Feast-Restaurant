import Image from 'next/image';
import { Orange, Tomato } from '../../public/assets/svg';
import { SearchProps } from '@/types/types';
const Hero: React.FC<SearchProps>  = ({ showSearch, setShowSearch }) => {

	const handleCloseSearch = () => {
		setShowSearch(false);
	};

	return (
		<div className='bg-primary' onClick={handleCloseSearch}>


			<div className='relative isolate px-6 pt-14 lg:px-8'>
				<div className='absolute inset-0 z-[-1]'>
					<Image
						src='/assets/hero/heroBig.webp'
						fill={true}
						style={{ objectFit: 'cover' }}
						quality={75}
						alt='Chef cooking in the kitchen'
					/>
					<div className='absolute inset-0 bg-black bg-opacity-90'></div>
					<Orange className='w-64 h-64 absolute bottom-0 opacity-20 lg:opacity-60' />
					<Tomato className='hidden lg:block lg:w-64 lg:h-64 lg:absolute lg:right-12 lg:top-12 lg:opacity-60' />
				</div>
				<div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
					<div className='text-center'>
						<h1 className='text-4xl font-bakilda tracking-tight text-white sm:text-6xl'>
							Our Best Fusion Dishes
						</h1>
						<p className='mt-6 text-lg leading-8 text-white font-openSans'>
							We serve the best fusion dishes in the city.
						</p>
						<div className='mt-10 flex items-center justify-center gap-x-6'>
							<a
								href='#'
								className='font-openSans tracking-wide  rounded-md bg-myOrange px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-myOrange/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-myOrange transition-colors ease-in-out duration-300'
							>
								Main Menu
							</a>
						</div>
					</div>
				</div>
				N
			</div>
		</div>
	);
};

export default Hero;
