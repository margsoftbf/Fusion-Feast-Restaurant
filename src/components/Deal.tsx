import { useEffect, useState } from 'react';
import { Orange } from '../../public/assets/svg';
import ButtonFull from './common/ButtonFull';
import { motion } from 'framer-motion';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Deal = () => {
	const [showNotification, setShowNotification] = useState(false);
	const [timeLeft, setTimeLeft] = useState({
		hours: '00',
		minutes: '00',
		seconds: '00',
	});

	useEffect(() => {
		const targetTime = new Date().getTime() + 23 * 60 * 60 * 1000;

		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = targetTime - now;

			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setTimeLeft({
				hours: hours < 10 ? `0${hours}` : hours.toString(),
				minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
				seconds: seconds < 10 ? `0${seconds}` : seconds.toString(),
			});

			if (distance < 0) {
				clearInterval(interval);
				setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const handleGetNow = () => {
		setShowNotification(true);
		setTimeout(() => {
			setShowNotification(false);
		}, 3000);
	};

	const { ref, controls } = useScrollAnimation();

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial='hidden'
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
			transition={{ duration: 1.2, type: 'ease-in' }}
			className='bg-primary p-4 text-white flex justify-between items-center relative overflow-hidden'
		>
			<Orange className='w-40 h-40 absolute -top-3 -left-5 rotate-45' />
			<div className='max-w-8xl mx-auto flex flex-col md:flex-row md:max-w-2xl lg:max-w-4xl items-center justify-between w-full'>
				<div className='flex flex-col items-center md:items-start gap-2 my-4'>
					<p className='text-xl md:text-2xl font-bakilda xl:text-4xl'>
						We Offer You More Than
					</p>
					<p className='text-xl md:text-2xl font-bakilda xl:text-4xl'>
						50% Discount in
					</p>
					<div className='flex flex-col justify-center gap-2 md:flex-row items-center'>
						<ButtonFull onClick={handleGetNow}>Get Now</ButtonFull>
						{showNotification && (
							<p className='bg-green-100 border border-green-400 text-green-700 px-2 py-1 ml-2 rounded z-100 text-xs'>
								Use: PROMO50
							</p>
						)}
					</div>
				</div>
				<div className='flex space-x-4 mt-4'>
					<div className='text-center relative'>
						<div className='w-20 h-20 border-dashed border-2 border-myOrange rounded-full flex items-center justify-center'>
							<span className='text-3xl font-oswald font-semibold z-10 text-white '>
								{timeLeft.hours}
							</span>
						</div>
						<p className=' mt-1 font-oswald tracking-wider'>Hours</p>
					</div>
					<div className='text-center relative'>
						<div className='w-20 h-20 border-dashed border-2 border-myOrange rounded-full flex items-center justify-center'>
							<span className='text-3xl font-oswald font-semibold z-10 text-white '>
								{timeLeft.minutes}
							</span>
						</div>
						<p className=' mt-1 font-oswald tracking-wider'>Minutes</p>
					</div>
					<div className='text-center relative'>
						<div className='w-20 h-20 border-dashed border-2 border-myOrange rounded-full flex items-center justify-center'>
							<span className='text-3xl font-oswald font-semibold z-10 text-white '>
								{timeLeft.seconds}
							</span>
						</div>
						<p className=' mt-1 font-oswald tracking-wider'>Seconds</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Deal;
