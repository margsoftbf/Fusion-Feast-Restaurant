import { Product } from '@/data/data';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ButtonEmpty from './common/ButtonEmpty';

type CategoryBoxProps = {
	categorySlug: string;
	products: Product[];
};

const CategoryBox: React.FC<CategoryBoxProps> = ({
	products,
	categorySlug,
}) => {
	return (
		<div className='mt-6 gap-x-4 gap-y-10 sm:gap-x-6  md:gap-y-0 lg:gap-x-8 flex flex-col items-center'>
			<Swiper
				spaceBetween={30}
				slidesPerView={1}
				breakpoints={{
					500: {
						slidesPerView: 2,
					},
					750: {
						slidesPerView: 3,
					},
					1024: {
						slidesPerView: 4,
					},
					1280: {
						slidesPerView: 6,
					},
				}}
				className='w-full'
			>
				{products.map((product) => (
					<SwiperSlide
						key={product.id}
						className='flex justify-center bg-white'
					>
						<div className='flex flex-col justify-center relative'>
							<h2 className='text-lg font-medium'>{product.name}</h2>
							<p>{product.description}</p>
							<p className='font-bold'>${product.price}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<Link className='mt-6' href={`/category/${categorySlug}`}>
				<ButtonEmpty>View More</ButtonEmpty>
			</Link>
		</div>
	);
};

export default CategoryBox;
