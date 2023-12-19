import { Product } from '@/data/data';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type CategoryBoxProps = {
	categorySlug: string;
	products: Product[];
};

const CategoryBox: React.FC<CategoryBoxProps> = ({
	products,
	categorySlug,
}) => {
	return (
		<div className='border p-4 rounded-lg hover:shadow-lg transition'>
			<Swiper spaceBetween={30} slidesPerView={1}>
				{products.map((product) => (
					<SwiperSlide key={product.id}>
						<div>
							<h2 className='text-lg font-medium'>{product.name}</h2>
							<p>{product.description}</p>
							<p className='font-bold'>${product.price}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<Link className='text-blue-500' href={`/category/${categorySlug}`}>
				View more
			</Link>
		</div>
	);
};

export default CategoryBox;
