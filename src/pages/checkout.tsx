import CheckoutHero from '@/components/checkout/CheckoutHero';
import React from 'react';
import { Disclosure } from '@headlessui/react';
import useCart from '@/hooks/useCart';

const Checkout = () => {
	const {
		cartItems,
		handleIncrement,
		handleDecrement,
		handleRemoveItem,
		promoCode,
		setPromoCode,
		isPromoApplied,
		handleApplyPromoCode,
		subtotal,
		tax,
		shipping,
		orderTotal,
		triedToApply,
		setTriedToApply,
		totalPriceItems,
		formatAddons,
	} = useCart();

	return (
		<div className='relative bg-primary text-white'>
			<CheckoutHero />
			<div className='relative max-w-6xl mx-auto'>
				<main className='lg:flex lg:min-h-full lg:flex-row-reverse  lg:items-center  lg:overflow-hidden'>
					<section aria-labelledby='order-heading' className='lg:hidden'>
						<div className='mx-auto max-w-lg'>
							<Disclosure
								as='div'
								className='bg-gray-50 mt-4 mx-4 px-2 py-4 sm:px-6 max-w-lg rounded-md my-2'
							>
								{({ open }) => (
									<>
										<div className='flex items-center justify-between '>
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
											<ul
												role='list'
												className='divide-y divide-gray-200 border-b border-gray-200 overflow-y-auto max-h-96'
											>
												{cartItems.map((product) => (
													<li
														key={product.id}
														className='flex items-center gap-2 space-x-6 py-6'
													>
														<div className='h-32 w-32 flex items-center justify-center rounded-md border bg-gray-100 border-gray-200'>
															<img
																src={product.img}
																alt={product.imgAlt}
																className='h-28 w-28 flex-none rounded-md bg-gray-200 object-cover object-center'
															/>
														</div>
														<div className='flex flex-col justify-between space-y-4 w-1/2'>
															<div className='space-y-1 text-sm font-medium'>
																<h3 className='text-gray-900 font-bold truncate'>
																	{product.name}
																</h3>
																<p className='text-xs text-gray-400 truncate'>
																	{formatAddons(product.extraOptions).length >
																	40
																		? `${formatAddons(
																				product.extraOptions
																		  ).slice(0, 40)}...`
																		: formatAddons(product.extraOptions)}
																</p>
																<p className='text-gray-900'>
																	$
																	{totalPriceItems(
																		product.price,
																		product.quantity
																	)}
																</p>
															</div>
															<div className='flex space-x-4 w-1/2'>
																<div className='flex items-center gap-1 font-sans'>
																	<button
																		className='bg-gray-200 text-black h-4 w-4 rounded-l-md flex items-center justify-center hover:bg-gray-300'
																		onClick={() => handleDecrement(product)}
																	>
																		<span className='text-black text-base'>
																			-
																		</span>
																	</button>
																	<span className='bg-gray-200 text-black h-4 w-5 text-xs flex items-center justify-center hover:bg-gray-300 text-center'>
																		{product.quantity}
																	</span>
																	<button
																		className='bg-gray-200 text-black h-4 w-4 rounded-r-md flex items-center justify-center hover:bg-gray-300'
																		onClick={() => handleIncrement(product)}
																	>
																		<span className='text-black text-base font-oswald'>
																			+
																		</span>
																	</button>
																</div>
																<div className='flex border-l border-gray-300 pl-4'>
																	<button
																		type='button'
																		className='text-red-500 hover:text-red-700 text-xs font-semibold font-openSans cursor-pointer'
																		onClick={() => handleRemoveItem(product)}
																	>
																		Remove
																	</button>
																</div>
															</div>
														</div>
													</li>
												))}
											</ul>

											<div className='mt-4'>
												<label
													htmlFor='discount-code-mobile'
													className='block text-sm font-medium text-gray-700'
												>
													Promo Code
												</label>
												<div className='mt-1 flex gap-4'>
													<input
														value={promoCode}
														onChange={(e) => setPromoCode(e.target.value)}
														disabled={isPromoApplied}
														type='text'
														id='discount-code-mobile'
														name='discount-code-mobile'
														className='block w-2/3 border-gray-300 shadow-sm  sm:text-sm bg-gray-200 text-xs rounded-md border-0 py-1 indent-2 text-gray-900  ring-inset ring-gray-300 placeholder:text-gray-400 outline-none '
													/>
													<button
														onClick={handleApplyPromoCode}
														disabled={isPromoApplied}
														className=' px-4 font-medium w-1/3 inline-flex  py-1 bg-myOrange rounded-md justify-center items-center text-xs text-black font-oswald tracking-wider hover:bg-third hover:text-white transition duration-300 ease-in-out'
													>
														Apply code
													</button>
												</div>
												{triedToApply &&
													(isPromoApplied ? (
														<div className='flex items-center gap-2 mt-2 justify-between w-full'>
															<span className='text-xs text-green-900 font-bold font-oswald ml-1'>
																Promo code applied
															</span>
														</div>
													) : (
														<div className='flex items-center gap-2 mt-2 justify-between w-full'>
															<span className='text-xs text-red-900 font-bold font-oswald ml-1'>
																Error: Invalid promo code
															</span>
														</div>
													))}
											</div>

											<div className='mt-6 space-y-6 text-sm font-medium text-gray-500 bg-gray-100 rounded-md p-2'>
												<div className='flex justify-between'>
													<div>Subtotal</div>
													<div className='text-gray-900'>{subtotal}</div>
												</div>
												<div className='flex justify-between'>
													<div>Shipping</div>
													<div className='text-gray-900'>{shipping}</div>
												</div>
												<div className='flex justify-between'>
													<div>Taxes</div>
													<div className='text-gray-900'>{tax}</div>
												</div>
											</div>
										</Disclosure.Panel>

										<p className='mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-gray-900'>
											<span className='text-base'>Total</span>
											<span className='text-base'>{orderTotal}</span>
										</p>
									</>
								)}
							</Disclosure>
						</div>
					</section>
					<section
						aria-labelledby='summary-heading'
						className='hidden w-full max-w-md flex-col bg-gray-50 rounded-md overflow-y-auto max-h-[650px] lg:flex my-4'
					>
						<h2 id='summary-heading' className='sr-only'>
							Order summary
						</h2>

						<ul
							role='list'
							className='flex-auto divide-y divide-gray-200 overflow-y-auto px-6'
						>
							{cartItems.map((product) => (
								<li
									key={product.id}
									className='flex items-center gap-2 space-x-6 py-6'
								>
									<div className='h-32 w-32 flex items-center justify-center rounded-md border bg-gray-100 border-gray-200'>
										<img
											src={product.img}
											alt={product.imgAlt}
											className='h-28 w-28 flex-none rounded-md bg-gray-200 object-cover object-center'
										/>
									</div>
									<div className='flex flex-col justify-between space-y-4 w-1/2'>
										<div className='space-y-1 text-sm font-medium'>
											<h3 className='text-gray-900 font-bold truncate'>
												{product.name}
											</h3>
											<p className='text-xs text-gray-400 truncate'>
												{formatAddons(product.extraOptions).length > 40
													? `${formatAddons(product.extraOptions).slice(
															0,
															40
													  )}...`
													: formatAddons(product.extraOptions)}
											</p>
											<p className='text-gray-900'>
												${totalPriceItems(product.price, product.quantity)}
											</p>
										</div>
										<div className='flex space-x-4 w-1/2'>
											<div className='flex items-center gap-1 font-sans'>
												<button
													className='bg-gray-200 text-black h-4 w-4 rounded-l-md flex items-center justify-center hover:bg-gray-300'
													onClick={() => handleDecrement(product)}
												>
													<span className='text-black text-base'>-</span>
												</button>
												<span className='bg-gray-200 text-black h-4 w-5 text-xs flex items-center justify-center hover:bg-gray-300 text-center'>
													{product.quantity}
												</span>
												<button
													className='bg-gray-200 text-black h-4 w-4 rounded-r-md flex items-center justify-center hover:bg-gray-300'
													onClick={() => handleIncrement(product)}
												>
													<span className='text-black text-base font-oswald'>
														+
													</span>
												</button>
											</div>
											<div className='flex border-l border-gray-300 pl-4'>
												<button
													type='button'
													className='text-red-500 hover:text-red-700 text-xs font-semibold font-openSans cursor-pointer'
													onClick={() => handleRemoveItem(product)}
												>
													Remove
												</button>
											</div>
										</div>
									</div>
								</li>
							))}
						</ul>

						<div className='sticky bottom-0 flex-none border-t border-gray-200 bg-gray-50 p-6 '>
							<div>
								<label
									htmlFor='discount-code'
									className='block text-sm font-medium text-gray-700'
								>
									Promo Code
								</label>
								<div className='mt-1 flex space-x-4'>
									<input
										value={promoCode}
										onChange={(e) => setPromoCode(e.target.value)}
										disabled={isPromoApplied}
										type='text'
										className='block w-2/3 border-gray-300 shadow-sm  sm:text-sm bg-gray-200 text-xs rounded-md border-0 py-1 indent-2 text-gray-900  ring-inset ring-gray-300 placeholder:text-gray-400 outline-none '
									/>
									<button
										onClick={handleApplyPromoCode}
										disabled={isPromoApplied}
										className=' px-4 font-medium w-1/3 inline-flex  py-1 bg-myOrange rounded-md justify-center items-center text-xs text-black font-oswald tracking-wider hover:bg-third hover:text-white transition duration-300 ease-in-out'
									>
										Apply Code
									</button>
								</div>
								{triedToApply &&
									(isPromoApplied ? (
										<div className='flex items-center gap-2 mt-2 justify-between w-full'>
											<span className='text-xs text-green-900 font-bold font-oswald ml-1'>
												Promo code applied
											</span>
										</div>
									) : (
										<div className='flex items-center gap-2 mt-2 justify-between w-full'>
											<span className='text-xs text-red-900 font-bold font-oswald ml-1'>
												Error: Invalid promo code
											</span>
										</div>
									))}
							</div>

							<div className='mt-6 flex flex-col gap-2 py-2 px-2 text-sm font-medium bg-gray-100 text-gray-500'>
								<div className='flex border-b justify-between'>
									<div>Subtotal</div>
									<div className='text-gray-900'>{subtotal}</div>
								</div>
								<div className='flex border-b justify-between'>
									<div>Taxes</div>
									<div className='text-gray-900'>{tax}</div>
								</div>
								<div className='flex border-b justify-between'>
									<div>Shipping</div>
									<div className='text-gray-900'>{shipping}</div>
								</div>
								<div className='flex items-center justify-between pt-6 text-gray-900'>
									<div className='text-xl'>Total</div>
									<div className='text-base'>{orderTotal}</div>
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

						<div className='mx-auto max-w-lg lg:pt-16'>
							<form className='mt-2 text-white '>
								<div className='grid grid-cols-12 gap-x-4 gap-y-6'>
									<div className='col-span-full'>
										<label
											htmlFor='email'
											className='block text-sm font-medium '
										>
											Email address
										</label>
										<div className='mt-1'>
											<input
												type='email'
												id='email-address'
												autoComplete='email'
												className='block w-full border-gray-300 shadow-sm border rounded-lg p-1 outline-none text-black'
											/>
										</div>
									</div>

									<div className='col-span-full'>
										<label
											htmlFor='name-on-card'
											className='block text-sm font-medium'
										>
											Name on card
										</label>
										<div className='mt-1'>
											<input
												type='text'
												id='name-on-card'
												name='name-on-card'
												autoComplete='cc-name'
												className='block w-full border-gray-300 shadow-sm border rounded-lg p-1 outline-none text-black'
											/>
										</div>
									</div>

									<div className='col-span-full'>
										<label
											htmlFor='card-number'
											className='block text-sm font-medium '
										>
											Card number
										</label>
										<div className='mt-1'>
											<input
												type='number'
												id='card-number'
												name='card-number'
												autoComplete='cc-number'
												className='block w-full border-gray-300 shadow-sm border rounded-lg p-1 outline-none text-black'
											/>
										</div>
									</div>

									<div className='col-span-8 sm:col-span-9'>
										<label
											htmlFor='expiration-date'
											className='block text-sm font-medium '
										>
											Expiration date (MM/YY)
										</label>
										<div className='mt-1'>
											<input
												type='text'
												name='expiration-date'
												id='expiration-date'
												autoComplete='cc-exp'
												className='block w-full border-gray-300 shadow-sm border rounded-lg p-1 outline-none text-black'
											/>
										</div>
									</div>

									<div className='col-span-4 sm:col-span-3'>
										<label htmlFor='cvc' className='block text-sm font-medium '>
											CVC
										</label>
										<div className='mt-1'>
											<input
												type='text'
												name='cvc'
												id='cvc'
												autoComplete='csc'
												className='block w-full border-gray-300 shadow-sm border rounded-lg p-1 outline-none text-black'
											/>
										</div>
									</div>

									<div className='col-span-full'>
										<label
											htmlFor='address'
											className='block text-sm font-medium '
										>
											Address
										</label>
										<div className='mt-1'>
											<input
												type='text'
												id='address'
												name='address'
												autoComplete='street-address'
												className='block w-full border-gray-300 shadow-sm border rounded-lg p-1 outline-none text-black'
											/>
										</div>
									</div>

									<div className='col-span-full sm:col-span-4'>
										<label
											htmlFor='city'
											className='block text-sm font-medium '
										>
											City
										</label>
										<div className='mt-1'>
											<input
												type='text'
												id='city'
												name='city'
												autoComplete='address-level2'
												className='block w-full border-gray-300 shadow-sm border rounded-lg p-1 outline-none text-black'
											/>
										</div>
									</div>

									<div className='col-span-full sm:col-span-4'>
										<label
											htmlFor='region'
											className='block text-sm font-medium '
										>
											State / Province
										</label>
										<div className='mt-1'>
											<input
												type='text'
												id='region'
												name='region'
												autoComplete='address-level1'
												className='block w-full border-gray-300 shadow-sm border rounded-lg p-1 outline-none text-black'
											/>
										</div>
									</div>

									<div className='col-span-full sm:col-span-4'>
										<label
											htmlFor='postal-code'
											className='block text-sm font-medium '
										>
											Postal code
										</label>
										<div className='mt-1'>
											<input
												type='text'
												id='postal-code'
												name='postal-code'
												autoComplete='postal-code'
												className='block w-full border-gray-300 shadow-sm border rounded-lg p-1 outline-none text-black'
											/>
										</div>
									</div>
								</div>
								<div className='flex flex-col gap-4 mt-4'>
									<button
										type='submit'
										className='mt-6 w-full rounded-md border border-transparent bg-myOrange px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-white transition duration-300 ease-in-out'
									>
										Pay ${orderTotal}
									</button>
									<button
										type='button'
										className='flex w-full items-center justify-center rounded-md border border-transparent bg-black py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
									>
										<span className='sr-only'>Pay with Apple Pay</span>
										<svg
											className='h-5 w-auto'
											fill='currentColor'
											viewBox='0 0 50 20'
										>
											<path d='M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z' />
										</svg>
									</button>
								</div>
							</form>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
};

export default Checkout;
