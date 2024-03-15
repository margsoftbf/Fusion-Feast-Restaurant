import { CheckCircleIcon } from '@heroicons/react/24/outline';
import {
	Ellipse,
	EmptyEllipse,
	SubTitleLeft,
	Dinner,
	Chef,
	Taco,
	LineDeal,
} from '../../public/assets/svg';

import Image from 'next/image';
import ButtonEmpty from './common/ButtonEmpty';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const imageStyle = {
	borderRadius: '0.75rem',
};

const About = () => {
	const { ref, controls } = useScrollAnimation();

	return (
		<motion.div
			className='relative bg-secondary overflow-hidden'
			ref={ref}
			animate={controls}
			initial='hidden'
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
			transition={{ duration: 1.2, type: 'ease-in' }}
		>
			<div className='max-w-8xl mx-auto flex flex-col md:flex-row justify-between gap-6 mt-8 py-6 sm:py-12 lg:py-20'>
				<div className='text-white  md:w-1/2 flex justify-center items-center relative m-2'>
					<Ellipse className='w-3 h-3 absolute bottom-0 left-6 lg:w-5 lg:h-5 lg:bottom-12' />
					<Ellipse className='w-1 h-1 absolute top-12 left-6 lg:w-5 lg:h-5 lg:top-28' />
					<EmptyEllipse className='w-2 h-2 absolute top-16 left-6 lg:w-5 lg:h-5 lg:top-40' />
					<motion.div
						className='w-48 h-64 sm:h-96 sm:w-60 lg:h-[500px] lg:w-[300px] relative ml-12 rounded-3xl'
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						whileInView='visible'
						viewport={{ once: true }}
						transition={{ duration: 1.8, type: 'ease-in' }}
					>
						<div className='absolute h-16 w-24 rounded-md bg-white z-[41] -right-6 top-6 flex flex-col items-center justify-center gap-1'>
							<p className='text-black font-lemonada '>144+</p>
							<p className='text-black text-xs font-openSans'>Master Chefs</p>
						</div>
						<div className='absolute h-16 w-24 rounded-md bg-white z-[41] -left-12 bottom-6 flex flex-col items-center justify-center gap-1'>
							<p className='text-black font-lemonada '>25+</p>
							<p className='text-black text-xs font-openSans'>Serving Years</p>
						</div>
						<div className='absolute w-full top-0 h-full rounded-xl bg-black/20 z-40'></div>
						<div className='absolute w-48 h-full top-0 rounded-xl border border-myOrange/40 origin-bottom-left  -rotate-6'></div>
						<div className='absolute w-48 h-full top-0 rounded-xl border border-myOrange/40 origin-bottom-left  -rotate-12'></div>
						<Image
							src='/assets/about/chefAbout.webp'
							style={imageStyle}
							className='object-cover'
							fill={true}
							placeholder='blur'
							blurDataURL={'/assets/about/chefAbout.webp'}
							loading='lazy'
							quality={75}
							sizes='(max-width: 350px) 350px, (max-width: 500px) 500px, (max-width: 768px) 768px, (max-width: 1200px) 1200px'
							alt='Chef cooking in the kitchen'
						/>
					</motion.div>
				</div>
				<motion.div
					className='text-white md:w-1/2 relative flex flex-col mr-4 items-center justify-center md:items-start'
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					whileInView='visible'
					viewport={{ once: true }}
					transition={{ duration: 2.3, type: 'ease-in' }}
				>
					<div className='flex items-center justify-center gap-2 relative my-2'>
						<SubTitleLeft className='w-7 h-7' />
						<h2 className='font-lemonada text-myOrange font-light'>About Us</h2>
					</div>
					<p className='font-bakilda text-2xl text-center my-2 md:text-left md:text-4xl'>
						On Every Special Occasion We Serve You First
					</p>
					<p className='font-openSans text-xs my-2 text-center md:text-left tracking-wide mx-2 md:mx-0 lg:text-base'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
						molestias molestiae aspernatur veniam nesciunt laboriosam excepturi,
						illo corporis quos dolorum eius voluptatum? Quas, sint similique
						tempore odit necessitatibus ad possimus.
					</p>
					<div className='flex flex-col lg:flex-row items-center justify-center gap-8 my-4'>
						<div className=' relative flex flex-col md:flex-row items-center mt-2 justify-center'>
							<Dinner className='w-10 h-10 md:w-12 md:h-12' />
							<div className='text-center md:text-left md:mx-4'>
								<p className='font-oswald my-2 text-2xl md:my-0'>Fine Dining</p>
								<p className='font-openSans text-xs mx-8 md:mx-0'>
									Lorem ipsum, dolor sit amet consectetur.
								</p>
							</div>
						</div>
						<div className=' relative flex flex-col md:flex-row items-center mt-2 justify-center'>
							<LineDeal className='w-2 h-2 relative top-16 right-6 lg:w-20 lg:h-20 lg:top-0' />
							<Chef className='w-10 h-10 md:w-12 md:h-12' />
							<div className='text-center md:text-left md:mx-4'>
								<p className='font-oswald my-2 text-2xl md:my-0'>Master Chef</p>
								<p className='font-openSans text-xs mx-8 md:mx-0'>
									Lorem ipsum, dolor sit amet consectetur.
								</p>
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center my-4 gap-2'>
						<div className='flex items-center justify-center'>
							<CheckCircleIcon className='w-7 h-7 text-myOrange' />
							<p className='ml-1 text-xs md:text-base font-openSans font-light tracking-wide'>
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</div>
						<div className='flex items-center justify-center'>
							<CheckCircleIcon className='w-7 h-7 text-myOrange' />
							<p className='ml-1 text-xs md:text-base font-openSans font-light tracking-wide'>
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</div>
					</div>
					<Link aria-label='about page' href='/about'>
						<ButtonEmpty>Learn More</ButtonEmpty>
					</Link>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default About;
