import {
	Drink,
	Ellipse,
	EmptyEllipse,
	Fries,
	SubTitleLeft,
	SubTitleRight,
} from '../../public/assets/svg';

import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { IoLogoTwitter } from 'react-icons/io';
import { chefs } from '@/data/data';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { MouseEventHandler, useState } from 'react';

const Chefs = () => {
	const { ref, controls } = useScrollAnimation();
	const [showNotification, setShowNotification] = useState(false);

	const handleNotification: MouseEventHandler<HTMLParagraphElement> = () => {
		setShowNotification(true);
		setTimeout(() => {
			setShowNotification(false);
		}, 2000);
	};

	return (
		<motion.div
			className='bg-secondary py-8 relative'
			ref={ref}
			animate={controls}
			initial='hidden'
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
			transition={{ duration: 1.5, type: 'ease-in' }}
		>
			<Fries className='w-40 h-40 absolute bottom-12 left-0 opacity-60 ' />
			<Drink className='w-40 h-40 absolute top-12 right-0 opacity-60' />
			<Ellipse className='w-3 h-3 absolute bottom-0 right-60 lg:w-5 lg:h-5 lg:bottom-12' />
			<Ellipse className='w-1 h-1 absolute top-12 left-60 lg:w-5 lg:h-5 lg:top-28' />
			<EmptyEllipse className='w-2 h-2 absolute top-16 left-6 lg:w-5 lg:h-5 lg:top-40' />
			<div className='max-w-8xl mx-auto relative flex flex-col items-center justify-center'>
				<div className='mb-4'>
					<div className='flex items-center justify-center gap-2 relative'>
						<SubTitleLeft className='w-7 h-7' />
						<h2 className='font-lemonada text-myOrange font-light'>
							Master chefs
						</h2>
						<SubTitleRight className='w-7 h-7' />
					</div>
					<div className='flex items-center justify-center gap-2 relative'>
						<h2 className='font-bakilda text-2xl text-center my-3 md:text-left md:text-4xl text-white tracking-wide'>
							Our Professional Chefs
						</h2>
					</div>
				</div>

				<div className='w-full flex flex-wrap gap-4 justify-center mt-4 '>
					{chefs.map((chef) => (
						<div
							key={chef.id}
							className='w-72 h-[400px]  relative rounded-xl flex flex-col overflow-hidden group'
						>
							<div className='group-hover:h-3/5 h-4/5 w-full rounded-xl  transition-all duration-300 relative'>
								<div className='absolute bg-black/20 w-full h-full top-0 left-0 z-30'></div>
								<Image
									src={chef.img}
									className='object-cover rounded-t-xl relative'
									fill={true}
									placeholder='blur'
									blurDataURL={chef.img}
									quality={75}
									alt={chef.imgAlt}
									sizes='(max-width: 350px) 350px, (max-width: 500px) 500px, (max-width: 768px) 768px, (max-width: 1200px) 1200px'
								/>
							</div>
							<div className='group-hover:h-2/5 group-hover:justify-around h-1/5 bg-third flex items-center flex-col justify-center z-50  transition-all duration-300 ease-in-out'>
								<div className='text-center mt-10 group-hover:mt-2'>
									<p className='font-oswald text-3xl group-hover:text-4xl text-white'>
										{chef.name}
									</p>
									<p className='font-oswald text-lg text-myOrange group-hover:text-2xl'>
										{chef.position}
									</p>
								</div>
								<div className='opacity-0 group-hover:opacity-80 flex items-center justify-center w-full px-4 relative'>
									<div className='flex gap-3 relative'>
										<p
											className='w-9 h-9 rounded-full bg-primary hover:bg-white text-white hover:text-black transition duration-300 ease-in-out  flex items-center justify-center cursor-pointer'
											onClick={handleNotification}
										>
											<PhoneIcon className='w-5 h-5 z-50 ' />
										</p>
										<p
											className='w-9 h-9 rounded-full bg-primary hover:bg-white text-white hover:text-black transition duration-300 ease-in-out flex items-center justify-center cursor-pointer'
											onClick={handleNotification}
										>
											<EnvelopeIcon className='w-5 h-5 z-50 ' />
										</p>
										<p
											className='w-9 h-9 rounded-full bg-primary hover:bg-white text-white hover:text-black transition duration-300 ease-in-out flex items-center justify-center cursor-pointer'
											onClick={handleNotification}
										>
											<IoLogoTwitter className='w-5 h-5 z-50 ' />
										</p>
									</div>
									{showNotification && (
										<div className='absolute bg-green-900 border border-green-400 text-white px-2 py-1 rounded text-xs -top-10 left-1/2 transform -translate-x-1/2'>
											SOON
										</div>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default Chefs;
