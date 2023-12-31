import React from 'react';
import { Shape } from '../../public/assets/svg';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/20/solid';
import { reviews } from '@/data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ReviewsSlider = () => {
	return (
		<div className='relative py-6 flex justify-center z-30 max-w-6xl mx-auto'>
			<Swiper
				slidesPerView={1}
				pagination={{ clickable: true }}
				centeredSlides={true}
				speed={1000}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				loop={true}
				grabCursor={true}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
				}}
				modules={[Autoplay]}
				className='max-w-sm md:max-w-3xl lg:max-w-5xl xl:max-w-6xl'
			>
				{reviews.map((review) => (
					<SwiperSlide key={review.id}>
						<div className='flex justify-center'>
							<div className='bg-third h-80 sm:h-72 w-[256px] sm:w-[480px] lg:w-[640px] rounded-xl mt-16 relative z-50'>
								<div className='hidden md:block absolute h-60 px-10 bg-third -left-16 top-5 rounded-xl'></div>
								<div className='hidden lg:block absolute h-40 px-10 bg-third -left-28 top-16 rounded-xl'></div>
								<div className='hidden md:block absolute h-60 px-10 bg-third -right-16 top-5 rounded-xl'></div>
								<div className='hidden lg:block absolute h-40 px-10 bg-third -right-28 top-16 rounded-xl'></div>
								<Shape className='absolute top-0 -left-32 md:-left-48 lg:-left-60 lg:top-12 w-32 h-32 z-10' />
								<Shape className='absolute bottom-0 -right-32 md:-right-48 lg:-right-60 lg:bottom-12 w-32 h-32 z-10' />
								<div className='flex flex-col justify-center items-center relative'>
									<div className='absolute -top-14'>
										<div className='rounded-full bg-third border-dashed border-2 border-myOrange p-2 relative'>
											<Image
												src={review.img}
												alt={review.imgAlt}
												width={96}
												height={96}
												className='rounded-full object-cover w-auto h-auto'
												placeholder='blur'
												blurDataURL={review.img}
											/>
										</div>
									</div>
									<p className='pt-20 px-4 text-[14px] sm:text-base lg:text-xl italic text-center text-white'>
										{review.text}
									</p>
									<p className='mt-6 text-2xl font-oswald tracking-wider text-myOrange italic'>
										{review.name}
									</p>
									<p className='text-[14px] py-2 italic text-white'>
										{review.position}
									</p>
									<div className='flex items-center  py-1'>
										{[0, 1, 2, 3, 4].map((rating) => (
											<StarIcon
												key={rating}
												className={`${
													review.rating > rating
														? 'text-yellow-400'
														: 'text-gray-200'
												}
                                'h-5 w-5 flex-shrink-0'
                                `}
												aria-hidden='true'
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ReviewsSlider;
