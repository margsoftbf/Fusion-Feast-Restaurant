import { Carrot, Strawberry, SubTitleLeft } from '../../../public/assets/svg';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

const OurTrending = () => {
	return (
		<div className='bg-primary relative'>
			<Carrot className='w-40 h-40 absolute top-12 left-0 opacity-60 ' />
			<Strawberry className='w-40 h-40 absolute bottom-12 right-0 opacity-60' />
			<div className='max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-around gap-12 px-4 py-4 lg:py-16'>
				<div className='text-white lg:w-1/3 relative flex flex-col mr-4 items-center justify-center lg:items-start'>
					<div className='flex items-center justify-center gap-2 relative my-2'>
						<SubTitleLeft className='w-7 h-7' />
						<h2 className='font-lemonada text-myOrange font-light'>
							Our Trending
						</h2>
					</div>
					<p className='font-bakilda text-2xl text-center my-2 lg:text-left md:text-4xl lg:text-5xl'>
						Fresh & Better Foods For You
					</p>
					<p className='font-openSans text-sm my-2 text-center lg:text-left tracking-wide mx-2 md:mx-0 lg:text-base'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
						minima ut eveniet nisi excepturi corporis, consequatur a incidunt
						inventore, blanditiis dicta hic ratione deleniti saepe delectus
						quia, doloremque asperiores quasi quo necessitatibus magni ad?
						Pariatur dolore ea cum voluptas! Perspiciatis!
					</p>
				</div>
				<div className='lg:w-2/3 flex flex-wrap items-center justify-around gap-4'>
					<div className='bg-black w-64 lg:w-48 xl:w-60 2xl:w-64 h-96 relative rounded-xl'>
						<div className='absolute top-0 left-0 right-0 bottom-0 m-auto bg-black w-[95%] h-[95%] rounded-xl z-10 opacity-70 flex items-end'></div>
						<Image
							src='/assets/about/trending-one.webp'
							className='object-cover rounded-xl'
							fill={true}
							placeholder='blur'
							blurDataURL={'/assets/about/trending-one.webp'}
							priority={true}
							quality={75}
							alt='Two cup of coffee'
							sizes='(max-width: 350px) 350px, (max-width: 500px) 500px, (max-width: 768px) 768px, (max-width: 1200px) 1200px'
						/>
						<div className='absolute bottom-4 left-4 right-4 z-20'>
							<p className='text-white font-bold text-xl font-oswald mb-2'>
								Coffe cup
							</p>
							<p className='text-white text-sm mb-2 mt-6'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
								soluta?
							</p>
							<p className='text-white text-sm mt-4 mb-2 flex items-center gap-2 cursor-pointer'>
								<span>Learn More</span> <FaArrowRightLong className='w-4 h-4' />
							</p>
						</div>
					</div>
					<div className='bg-black w-64 lg:w-48 xl:w-60 2xl:w-64 h-96 relative rounded-xl'>
						<div className='absolute top-0 left-0 right-0 bottom-0 m-auto bg-black w-[95%] h-[95%] rounded-xl z-10 opacity-50 flex items-end'></div>
						<Image
							src='/assets/about/trending-two.webp'
							className='object-cover rounded-xl'
							fill={true}
							placeholder='blur'
							blurDataURL={'/assets/about/trending-two.webp'}
							priority={true}
							quality={75}
							alt='Inside of restaurant'
							sizes='(max-width: 350px) 350px, (max-width: 500px) 500px, (max-width: 768px) 768px, (max-width: 1200px) 1200px'
						/>
					</div>
					<div className='bg-black w-64 lg:w-48 xl:w-60 2xl:w-64 h-96 relative rounded-xl'>
						<div className='absolute top-0 left-0 right-0 bottom-0 m-auto bg-black w-[95%] h-[95%] rounded-xl z-10 opacity-50 flex items-end'></div>
						<Image
							src='/assets/about/trending-three.webp'
							className='object-cover rounded-xl'
							fill={true}
							placeholder='blur'
							blurDataURL={'/assets/about/trending-three.webp'}
							priority={true}
							quality={75}
							alt='Cookies with chocolate'
							sizes='(max-width: 350px) 350px, (max-width: 500px) 500px, (max-width: 768px) 768px, (max-width: 1200px) 1200px'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurTrending;
