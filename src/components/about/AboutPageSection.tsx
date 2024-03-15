import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
ButtonEmpty;
import ButtonEmpty from '../common/ButtonEmpty';
import {
	Chef,
	Dinner,
	Ellipse,
	EmptyEllipse,
	FreshFood,
	LineDeal,
	SubTitleLeft,
} from '../../../public/assets/svg';
const imageStyle = {
	borderRadius: '0.75rem',
};
const AboutPageSection = () => {
	return (
		<div className='relative bg-secondary overflow-hidden py-6 sm:py-12  lg:pt-12 lg:pb-4'>
			<EmptyEllipse className='w-2 h-2 absolute top-16 right-6 lg:w-8 lg:h-8 lg:top-40' />
			<Ellipse className='w-3 h-3 absolute bottom-0 right-48 lg:w-8 lg:h-8 lg:bottom-12' />
			<Ellipse className='w-3 h-3 absolute bottom-0 left-48 lg:w-5 lg:h-5 lg:bottom-12' />
			<Ellipse className='w-1 h-1 absolute top-12 left-96 lg:w-5 lg:h-5 lg:top-28' />
			<EmptyEllipse className='w-2 h-2 absolute top-16 left-60 lg:w-5 lg:h-5 lg:top-40' />
			<div className='max-w-8xl mx-auto flex flex-col lg:flex-row  gap-12 mt-8 '>
				<div className='text-white  lg:w-1/2 flex justify-center items-center relative m-2 lg:justify-end lg:pr-12'>
					<div className='w-60 h-64 sm:h-96 sm:w-72 lg:h-[500px] lg:w-[350px] relative ml-12 rounded-3xl'>
						<div className='absolute w-full top-0 h-full rounded-xl bg-black/20 z-40'></div>
						<Image
							src='/assets/about/aboutMen.webp'
							style={imageStyle}
							className='object-cover'
							fill={true}
							placeholder='blur'
							blurDataURL={'/assets/about/aboutMen.webp'}
							priority={true}
							quality={75}
							sizes='(max-width: 350px) 350px, (max-width: 500px) 500px, (max-width: 768px) 768px, (max-width: 1200px) 1200px'
							alt='Chef cooking in the kitchen'
						/>
						<div className='absolute -bottom-16 right-1/2 translate-x-1/2 w-40 h-40 lg:right-12 lg:bottom-1/2 lg:h-72 lg:w-48 lg:translate-y-1/2 z-50'>
							<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-xl bg-white/20'></div>
							<div className='absolute w-full top-0 h-full rounded-xl bg-black/20 z-40'></div>
							<Image
								src='/assets/about/aboutFood.webp'
								style={imageStyle}
								className='object-cover'
								fill={true}
								alt='Description of second image'
								sizes='(max-width: 350px) 350px, (max-width: 500px) 500px, (max-width: 768px) 768px, (max-width: 1200px) 1200px'
							/>
						</div>
					</div>
				</div>
				<div className='text-white lg:w-1/2 mt-8 relative flex flex-col mr-4 items-center justify-center lg:items-start'>
					<div className='flex items-center justify-center gap-2 relative my-2'>
						<SubTitleLeft className='w-7 h-7' />
						<h2 className='font-lemonada text-myOrange font-light'>About Us</h2>
					</div>
					<p className='font-bakilda text-2xl text-center my-2 lg:text-left md:text-4xl xl:text-5xl md:px-40 lg:px-0'>
						We Serve You Since 1992. Create Memories in One Place
					</p>
					<p className='font-openSans text-xs my-2 text-center lg:text-left tracking-wide mx-2 md:mx-0 lg:text-base md:px-40 lg:px-0'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
						molestias molestiae aspernatur veniam nesciunt laboriosam excepturi,
						illo corporis quos dolorum eius voluptatum? Quas, sint similique
						tempore odit necessitatibus ad possimus.
					</p>

					<div className='flex flex-col items-center justify-center my-4 gap-2'>
						<div className='flex items-center justify-center'>
							<CheckCircleIcon className='w-8 h-8 text-myOrange' />
							<p className='ml-1 text-xs md:text-base font-openSans font-light tracking-wide '>
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</div>
						<div className='flex items-center justify-center'>
							<CheckCircleIcon className='w-8 h-8 text-myOrange' />
							<p className='ml-1 text-xs md:text-base font-openSans font-light tracking-wide'>
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</div>
						<div className='flex items-center justify-center'>
							<CheckCircleIcon className='w-8 h-8 text-myOrange' />
							<p className='ml-1 text-xs md:text-base font-openSans font-light tracking-wide'>
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='max-w-8xl mx-auto flex flex-col lg:flex-row lg:pl-24 items-center justify-center w-full gap-8 mt-8 mb-4 '>
				<div className='flex flex-col md:flex-row items-center justify-center text-center '>
					<FreshFood className='w-10 h-10 md:w-16 md:h-16' />
					<div className='text-center md:text-left md:mx-4'>
						<p className='font-oswald my-2 text-2xl md:my-1'>Fresh Food</p>
						<p className='font-openSans text-xs mx-2 md:mx-0'>
							Lorem ipsum, dolor sit amet consectetur.
						</p>
					</div>
				</div>
				<div className='flex flex-col md:flex-row items-center justify-center text-center'>
					<LineDeal className='w-2 h-2 relative top-16 right-6 lg:w-20 lg:h-20 lg:top-0' />
					<Chef className='w-10 h-10 md:w-16 md:h-16' />
					<div className='text-center md:text-left md:mx-4'>
						<p className='font-oswald my-2 text-2xl md:my-1'>Master Chef</p>
						<p className='font-openSans text-xs mx-2 md:mx-0'>
							Lorem ipsum, dolor sit amet consectetur.
						</p>
					</div>
				</div>
				<div className='flex flex-col md:flex-row items-center justify-center text-center '>
					<LineDeal className='w-2 h-2 relative top-16 right-6 lg:w-20 lg:h-20 lg:top-0' />
					<Dinner className='w-10 h-10 md:w-16 md:h-16' />
					<div className='text-center md:text-left md:mx-4'>
						<p className='font-oswald my-2 text-2xl md:my-1'>Fine Dining</p>
						<p className='font-openSans text-xs mx-2 md:mx-0'>
							Lorem ipsum, dolor sit amet consectetur.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPageSection;
