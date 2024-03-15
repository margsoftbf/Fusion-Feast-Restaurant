import CheckoutHero from '@/components/Checkout/CheckoutHero';
import React from 'react';
import { Disclosure } from '@headlessui/react';
import useCart from '@/hooks/useCart';
import {
	CheckoutIcon,
	Ellipse,
	EmptyEllipse,
	SubTitleLeft,
	SubTitleRight,
} from '../../public/assets/svg';
import Promo from '../components/cart/Promo';
import CartItemList from '@/components/Checkout/CartItemList';
import Cost from '@/components/Checkout/Cost';
import CheckoutForm from '@/components/Checkout/CheckoutForm';

const Checkout = () => {
	const { orderTotal } = useCart();

	return (
		<div className='relative bg-primary text-white'>
			<CheckoutHero />
			<div className='relative'>
				<CheckoutIcon className='w-96 h-96 absolute text-white opacity-20 right-0 bottom-0' />
				<Ellipse className='w-24 h-24 absolute left-6 bottom-6' />
				<Ellipse className='w-12 h-12 absolute top-12 right-6 lg:top-28' />
				<EmptyEllipse className='w-12 h-12 absolute top-16 left-60  lg:top-40' />
				<div className='relative max-w-6xl mx-auto '>
					<div className='mt-4'>
						<div className='flex items-center justify-center gap-2 relative'>
							<SubTitleLeft className='w-7 h-7' />
							<h2 className='font-lemonada text-myOrange font-light'>
								Checkout
							</h2>
							<SubTitleRight className='w-7 h-7' />
						</div>
						<div className='flex items-center justify-center gap-2 relative'>
							<h2 className='font-bakilda text-2xl text-center my-2 md:text-left md:text-4xl text-white'>
								Final your order
							</h2>
						</div>
					</div>
					<main className='lg:flex lg:min-h-full lg:flex-row-reverse  lg:items-center  lg:overflow-hidden'>
						<section aria-labelledby='order-heading' className='lg:hidden'>
							<div className='mx-auto max-w-lg'>
								<Disclosure
									as='div'
									className='bg-gray-50 mt-4 mx-4 px-2 py-4 sm:px-6 max-w-lg rounded-md my-2'
								>
									{({ open }) => (
										<>
											<div className='flex items-center justify-between'>
												<h2
													id='order-heading'
													className='text-lg font-medium text-gray-900'
												>
													Your Order
												</h2>
												<Disclosure.Button className='font-medium text-myOrange hover:text-black duration-300 ease-linear transition'>
													{open ? (
														<span>Hide full summary</span>
													) : (
														<span>Show full summary</span>
													)}
												</Disclosure.Button>
											</div>

											<Disclosure.Panel>
												<CartItemList />
												<div className='mt-4'>
													<Promo />
												</div>

												<div className='mt-6 space-y-4 text-sm font-medium text-gray-500 bg-gray-100 rounded-md p-2'>
													<Cost />
												</div>
											</Disclosure.Panel>

											<p className='mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-gray-900'>
												<span className='text-base'>Total</span>
												<span className='text-base'>
													{orderTotal.toFixed(2)}
												</span>
											</p>
										</>
									)}
								</Disclosure>
							</div>
						</section>
						<section
							aria-labelledby='summary-heading'
							className='hidden w-full max-w-md flex-col bg-gray-50 rounded-md overflow-y-auto max-h-[650px] lg:flex mx-4'
						>
							<h2 id='summary-heading' className='sr-only'>
								Order summary
							</h2>
							<CartItemList />
							<div className='relative bottom-0 flex-none border-t border-gray-200 bg-gray-50 p-6 '>
								<Promo />
								<div className='mt-6 flex flex-col gap-2 py-2 px-2 text-sm font-medium bg-gray-100 text-gray-500'>
									<Cost />
									<div className='flex items-center justify-between pt-6 text-gray-900'>
										<div className='text-xl'>Total</div>
										<div className='text-base'>{orderTotal.toFixed(2)}</div>
									</div>
								</div>
							</div>
						</section>
						<section
							aria-labelledby='payment-heading'
							className='flex-auto overflow-y-auto px-4 pb-16 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pb-8 lg:pt-0'
						>
							<h2 id='payment-heading' className='sr-only'>
								Payment and shipping details
							</h2>

							<CheckoutForm />
						</section>
					</main>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
