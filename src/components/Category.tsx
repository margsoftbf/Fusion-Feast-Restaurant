import { useState } from 'react';
import { categories, products } from '@/data/data';
import CategoryBox from './CategoryBox';
import React from 'react';
import { SubTitleLeft, SubTitleRight } from '../../public/assets/svg';

const Category = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>(
		categories[0].slug
	);

	return (
		<div className='bg-secondary py-8 relative'>
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
									? 'bg-myOrange text-white'
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
