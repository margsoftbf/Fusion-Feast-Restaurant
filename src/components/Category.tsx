import { useState } from 'react';
import { categories, products } from '@/data/data';
import CategoryBox from './CategoryBox';
import React from 'react';

const Category = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>(
		categories[0].slug
	);

	return (
		<div className='bg-secondary py-8'>
			<div className='max-w-8xl mx-auto'>
				<div className='flex flex-row flex-wrap justify-center items-center gap-2 mx-4'>
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

				<div className='grid grid-cols-2 md:grid-cols-4 gap-4 pt-6'>
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
