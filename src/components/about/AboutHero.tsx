import Image from 'next/image';

const AboutHero = () => {
	return (
		<div className='relative isolate flex justify-center items-center px-6 lg:px-8 h-64'>
			<div className='absolute inset-0 z-[-1]'>
				<Image
					src='/assets/hero/aboutHero.webp'
					fill={true}
					style={{ objectFit: 'cover' }}
					quality={100}
					sizes='(max-width: 350px) 350px, (max-width: 500px) 500px, (max-width: 768px) 768px, (max-width: 1200px) 1200px'
					placeholder='blur'
					blurDataURL={'/assets/hero/aboutHero.webp'}
					alt='About hero image'
					priority={true}
				/>
				<div className='absolute inset-0 bg-primary bg-opacity-70'></div>
			</div>
			<div className='mx-auto max-w-2xl py-36'>
				<div className='text-center'>
					<h1 className='font-bakilda text-5xl md:text-6xl text-white'>
						About
					</h1>
				</div>
			</div>
		</div>
	);
};

export default AboutHero;
