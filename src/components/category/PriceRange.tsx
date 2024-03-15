import React, { useState } from 'react';
import { PriceRangeProps } from '@/types/types';

const PriceRange = ({ onMaxPriceChange }: PriceRangeProps) => {
	const [maxPrice, setMaxPrice] = useState(100);

	const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newMaxPrice = Number(e.target.value);
		setMaxPrice(newMaxPrice);
		onMaxPriceChange(newMaxPrice);
	};
	return (
		<div className='bg-third text-white rounded-md py-4'>
			<h3 className='font-oswald text-center text-2xl'>Price Range</h3>
			<input
				type='range'
				min='0'
				max='100'
				value={maxPrice}
				onChange={handleMaxPriceChange}
				className='w-[70%] flex items-center justify-center mx-auto my-4'
			/>
			<div className='text-center'>Up to ${maxPrice}</div>
		</div>
	);
};

export default PriceRange;
