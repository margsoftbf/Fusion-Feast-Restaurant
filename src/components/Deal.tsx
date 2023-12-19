import { useEffect, useState } from 'react';
import { Orange } from '../../public/assets/svg';
import ButtonFull from './common/ButtonFull';

const Deal = () => {
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
	return (
		<div className='bg-primary p-4 text-white flex justify-between items-center relative overflow-hidden'>
			<Orange className='w-40 h-40 absolute -top-3 -left-5 rotate-45' />
			<div className='max-w-8xl mx-auto flex flex-col md:flex-row md:max-w-2xl lg:max-w-4xl items-center justify-between w-full'>
				<div className='flex flex-col items-center md:items-start xl:gap-2 my-4'>
					<p className='text-xl md:text-2xl font-bakilda xl:text-4xl'>
						We Offer You More Than
					</p>
					<p className='text-xl md:text-2xl font-bakilda xl:text-4xl'>
						50% Discount in
					</p>
					<ButtonFull>Get Now</ButtonFull>
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
		</div>
	);
};

export default Deal;
