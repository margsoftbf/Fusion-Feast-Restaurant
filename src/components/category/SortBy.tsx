import React, { useState } from 'react';


interface SortByProps {
    sortKey: string;
    handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SortBy: React.FC<SortByProps> = ({sortKey, handleSortChange}) => {

	return (
		<div>
			<label htmlFor='sort' className='mr-2 text-sm font-medium text-gray-300'>
				Sort by:
			</label>
			<select
				id='sort'
				name='sort'
				className='border-gray-300 rounded-md shadow-sm'
				value={sortKey}
				onChange={handleSortChange}
			>
				<option value='name'>Name</option>
				<option value='price'>Price</option>
			</select>
		</div>
	);
};

export default SortBy;
