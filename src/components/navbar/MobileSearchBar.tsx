import React from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { MobileSearchBarProps } from '@/types/types';



const MobileSearchBar = ({
	searchTerm,
	setSearchTerm,
	searchResults,
	onResultClick,
}: MobileSearchBarProps) => {
	return (
		<div className='relative my-4'>
			<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
				<MagnifyingGlassIcon className='h-5 w-5 ' aria-hidden='true' />
			</div>
			<input
				id='search'
				name='search'
				className='block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkBlue sm:text-sm sm:leading-6'
				placeholder='Search'
				type='search'
				onClick={(e) => e.stopPropagation()}
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			{searchTerm && (
				<div className='absolute left-0 right-0 w-full mt-6 bg-white border border-gray-200 rounded-md shadow-lg z-10 overflow-y-auto max-h-96'>
					{searchResults.map((product) => (
						<Link
							href={`/category/product/${product.name
								.replace(/\s+/g, '-')
								.toLowerCase()}`}
							className='block px-4 py-2 hover:bg-gray-100'
							onClick={() => onResultClick(product.id)}
						>
							<div className='flex items-center space-x-3'>
								<img
									src={product.img}
									alt={product.name}
									className='w-10 h-10 object-cover rounded-full'
								/>

								<div className='flex  items-center justify-between w-full'>
									<p className='font-medium'>{product.name}</p>
									<p className='text-sm text-gray-600'>${product.price}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default MobileSearchBar;
