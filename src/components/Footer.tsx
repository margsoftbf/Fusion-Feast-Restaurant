import { useRouter } from 'next/router';
import ButtonFull from './common/ButtonFull';
import { navigationFooter } from '@/data/data';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const Footer = () => {
	const router = useRouter();
	const isHomePage = router.pathname === '/';

	const footerClass = isHomePage ? 'bg-primary' : 'bg-secondary';
	const { ref, controls } = useScrollAnimation();
	return (
		<motion.footer
			className={footerClass}
			aria-labelledby='footer-heading'
			ref={ref}
			animate={controls}
			initial='hidden'
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
			transition={{ duration: 0.02, type: 'ease-in' }}
		>
			<h2 id='footer-heading' className='sr-only'>
				Footer
			</h2>
			<div className='mx-auto max-w-7xl px-6 pb-8 pt-20 lg:px-8'>
				<div className='xl:grid xl:grid-cols-3 xl:gap-8'>
					<div className='grid grid-cols-2 gap-8 xl:col-span-2'>
						<div className='md:grid md:grid-cols-2 md:gap-8'>
							<div>
								<h3 className='text-sm font-semibold leading-6 text-white'>
									Products
								</h3>
								<ul role='list' className='mt-6 space-y-4'>
									{navigationFooter.solutions.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className='text-sm leading-6 text-gray-300 hover:text-white'
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className='mt-10 md:mt-0'>
								<h3 className='text-sm font-semibold leading-6 text-white'>
									Information
								</h3>
								<ul role='list' className='mt-6 space-y-4'>
									{navigationFooter.support.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className='text-sm leading-6 text-gray-300 hover:text-white'
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className='md:grid md:grid-cols-2 md:gap-8'>
							<div>
								<h3 className='text-sm font-semibold leading-6 text-white'>
									Company
								</h3>
								<ul role='list' className='mt-6 space-y-4'>
									{navigationFooter.company.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className='text-sm leading-6 text-gray-300 hover:text-white'
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className='mt-10 md:mt-0'>
								<h3 className='text-sm font-semibold leading-6 text-white'>
									Terms
								</h3>
								<ul role='list' className='mt-6 space-y-4'>
									{navigationFooter.legal.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className='text-sm leading-6 text-gray-300 hover:text-white'
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className='mt-10 xl:mt-0'>
						<h3 className='text-sm font-semibold leading-6 text-white'>
							Subscribe to our newsletter
						</h3>
						<p className='mt-2 text-sm leading-6 text-gray-300'>
							The latest news, articles, and resources, sent to your inbox
							weekly.
						</p>
						<form className='mt-6 sm:flex sm:max-w-md'>
							<label htmlFor='email-address' className='sr-only'>
								Email address
							</label>
							<input
								type='email'
								name='email-address'
								id='email-address'
								autoComplete='email'
								required
								className='w-full min-w-0 appearance-none rounded-md border-0 outline-none bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-myGray sm:w-64 sm:text-sm sm:leading-6 xl:w-full'
								placeholder='Enter your email'
							/>
							<div className='mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0'>
								<ButtonFull type='submit'>Subscribe</ButtonFull>
							</div>
						</form>
					</div>
				</div>
				<div className='border-t border-white/10 pt-8 md:flex md:items-center md:justify-between mt-12'>
					<div className='flex space-x-6 md:order-2'>
						{navigationFooter.social.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className='text-gray-500 hover:text-gray-400'
							>
								<span className='sr-only'>{item.name}</span>
								<item.icon className='h-6 w-6' aria-hidden='true' />
							</a>
						))}
					</div>
					<p className='mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0'>
						&copy; 2023 Marcin Garski, Inc. All rights reserved.
					</p>
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;
