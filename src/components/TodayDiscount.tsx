import Image from 'next/image';
import {
	Donut,
	Ellipse,
	EmptyEllipse,
	SubTitleLeft,
	SubTitleRight,
} from '../../public/assets/svg';
import ButtonFull from './common/ButtonFull';
import { products } from '@/data/data';
import { Product } from '@/types/types';
import React, { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

const TodayDiscount = () => {
	const [randomProducts, setRandomProducts] = useState<Product[]>([]);
	const router = useRouter();

	const createSlugFromName = (name: string) => {
		return name.toLowerCase().replace(/\s+/g, '-');
	};

	const navigateToProduct = (name: string) => {
		const slug = createSlugFromName(name);
		router.push(`/category/product/${slug}`);
	};

	useEffect(() => {
		const getRandomProducts = (
			allProducts: Product[],
			num: number
		): Product[] => {
			const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
			return shuffled.slice(0, num);
		};

		setRandomProducts(getRandomProducts(products, 6));
	}, []);

	return (
		<div className='bg-primary py-8 relative' id='menu'>
			<Ellipse className='w-3 h-3 absolute bottom-0 right-6 lg:w-5 lg:h-5 lg:bottom-12' />
			<Ellipse className='w-1 h-1 absolute top-48 left-48 lg:w-5 lg:h-5 lg:top-28' />
			<EmptyEllipse className='w-2 h-2 absolute top-32 right-96 lg:w-5 lg:h-5 lg:top-40' />
			<Donut className='w-20 h-20 absolute bottom-32 left-0' />
			<div className='max-w-8xl mx-auto relative'>
				<div>
					<div className='flex items-center justify-center gap-2 relative'>
						<SubTitleLeft className='w-7 h-7' />
						<h2 className='font-lemonada text-myOrange font-light'>
							Discount Menu
						</h2>
						<SubTitleRight className='w-7 h-7' />
					</div>
					<div className='flex items-center justify-center gap-2 relative'>
						<h2 className='font-bakilda text-2xl text-center my-2 md:text-left md:text-4xl text-white'>
							Today Discount Menu
						</h2>
					</div>
				</div>
				<div className='flex flex-wrap items-center justify-center gap-4 mt-6'>
					{randomProducts.map((product) => (
						<div
							key={product.id}
							className='box flex flex-col items-center gap-4 bg-third p-4 rounded-md w-[300px] sm:flex-row sm:w-[450px] sm:h-52 h-96'
						>
							<div className='h-1/2 sm:w-1/2 sm:h-full flex items-center sm:justify-center'>
								<div className='w-40 h-40 relative'>
									<Image
										src={product.imgBig}
										alt={product.imgAlt}
										className='object-cover rounded-xl relative'
										fill={true}
										placeholder='blur'
										blurDataURL={product.img}
										priority={true}
										quality={75}
										sizes='(max-width: 350px) 350px, (max-width: 500px) 500px, (max-width: 768px) 768px, (max-width: 1200px) 1200px'
									/>
								</div>
							</div>
							<div className='text flex flex-col h-1/2 sm:w-1/2 sm:h-full justify-between items-center sm:items-start sm:justify-center'>
								<p className='text-xl uppercase font-medium font-oswald text-white'>
									{product.name}
								</p>
								<p className='flex my-1'>
									{[0, 1, 2, 3, 4].map((rating) => (
										<StarIcon
											key={rating}
											className={`${
												product.rating > rating
													? 'text-yellow-400'
													: 'text-gray-200'
											}
										'h-4 w-4 flex-shrink-0'
										`}
											aria-hidden='true'
										/>
									))}
								</p>
								<p className='text-gray-200 text-xs font-oswald text-center sm:text-left'>
									{product.description.length > 40
										? `${product.description.slice(0, 40)}...`
										: product.description}
								</p>
								<div className='flex items-center justify-center my-1 gap-2'>
									<p className='font-bold text-white font-oswald py-1'>
										${product.price.toFixed(2)}
									</p>
									<p className='font-bold text-myGray text-xl font-oswald py-1 line-through'>
										$25.00
									</p>
								</div>
								<ButtonFull onClick={() => navigateToProduct(product.name)}>
									Order now
								</ButtonFull>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TodayDiscount;
