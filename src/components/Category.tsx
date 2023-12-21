import { useState } from 'react';
import { categories, products } from '@/data/data';
import CategoryBox from './CategoryBox';
import React from 'react';
import {
	Ellipse,
	EmptyEllipse,
	Fries,
	SubTitleLeft,
	SubTitleRight,
} from '../../public/assets/svg';

const Category = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>(
		categories[0].slug
	);

	return (
		<div className='bg-secondary py-8 relative'>
			<Fries className='w-36 h-36 absolute bottom-0 left-0 lg:bottom-12' />
			<Ellipse className='w-3 h-3 absolute bottom-0 right-6 lg:w-5 lg:h-5 lg:bottom-12' />
			<Ellipse className='w-1 h-1 absolute top-48 left-48 lg:w-5 lg:h-5 lg:top-28' />
			<EmptyEllipse className='w-2 h-2 absolute top-32 right-96 lg:w-5 lg:h-5 lg:top-40' />
			<div className='max-w-8xl mx-auto relative'>
				<div className='flex items-center justify-center gap-2 relative'>
					<SubTitleLeft className='w-7 h-7' />
					<h2 className='font-lemonada text-myOrange font-light'>Menu Book</h2>
					<SubTitleRight className='w-7 h-7' />
				</div>
				<div className='flex items-center justify-center gap-2 relative'>
					<h2 className='font-bakilda text-2xl text-center my-2 md:text-left md:text-4xl text-white'>
						Our Main Menu
					</h2>
				</div>
				<div className='flex flex-row flex-wrap justify-center items-center gap-2 mx-4 mt-4'>
					{categories.map((category) => (
						<button
							key={category.slug}
							onClick={() => setSelectedCategory(category.slug)}
							className={`inline-flex items-center justify-center rounded-md font-openSans w-32 px-2.5 py-1.5 uppercase text-xs shadow-sm hover:bg-myOrange hover:text-white transition duration-300 ease-in-out flex-shrink-0 font-bold ${
								selectedCategory === category.slug
									? 'bg-myOrange text-black'
									: 'bg-white text-black'
							}`}
						>
							{React.cloneElement(category.icon, { className: 'w-4 h-4 mr-1' })}
							{category.name}
						</button>
					))}
				</div>

				<div className='mx-auto  flex flex-col px-4 sm:px-6 lg:max-w-5xl my-2'>
					{categories
						.filter(
							(category) =>
								!selectedCategory || category.slug === selectedCategory
						)
						.map((category) => (
							<CategoryBox
								key={category.slug}
								categorySlug={category.slug}
								products={products.filter(
									(product) => product.categorySlug === category.slug
								)}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default Category;
