import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
const Gallery = () => {
	const images = [
		'/assets/gallery/gallery-1.webp',
		'/assets/gallery/gallery-2.webp',
		'/assets/gallery/gallery-3.webp',
		'/assets/gallery/gallery-4.webp',
		'/assets/gallery/gallery-5.webp',
		'/assets/gallery/gallery-6.webp',
		'/assets/gallery/gallery-7.webp',
		'/assets/gallery/gallery-8.webp',
		'/assets/gallery/gallery-9.webp',
		'/assets/gallery/gallery-10.webp',
		'/assets/gallery/gallery-11.webp',
		'/assets/gallery/gallery-12.webp',
	];

	return (
		<div className='mx-auto w-full p-8'>
			<Swiper
				spaceBetween={30}
				slidesPerView={1}
				freeMode={true}
				loop={true}
				navigation={true}
				breakpoints={{
					500: {
						slidesPerView: 2,
					},
					750: {
						slidesPerView: 3,
					},
					1000: {
						slidesPerView: 4,
					},
					1250: {
						slidesPerView: 5,
					},
					1500: {
						slidesPerView: 6,
					},
					1750: {
						slidesPerView: 7,
					},
					2000: {
						slidesPerView: 8,
					},
				}}
			>
				{images.map((src, index) => (
					<SwiperSlide key={index}>
						<div className='w-48 h-64'>
							<Image
								src={src}
								alt={`Gallery image ${index + 1}`}
								objectFit='cover'
								fill={true}
								className='w-full h-full rounded-md hover:opacity-80 transition duration-300 ease-in-out border'
							/>
							<div className='absolute top-0 left-0 w-full h-full rounded-md bg-black/80 opacity-0 hover:opacity-100 flex justify-center items-center transition duration-300 ease-in-out'>
								<div className='p-2 bg-white rounded-xl cursor-pointer'>
									<FaInstagram className='text-black text-4xl bg-white' />
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Gallery;
