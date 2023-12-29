import React from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Product } from '@/types/types';

interface DesktopSearchBarProps {
	searchTerm: string;
	setSearchTerm: (value: string) => void;
	searchResults: Product[];
	onSearchClick: (e: React.MouseEvent) => void;
	onResultClick: (id: number) => void;
}
const DesktopSearchBar: React.FC<DesktopSearchBarProps> = ({
	searchTerm,
	setSearchTerm,
	searchResults,
	onSearchClick,
	onResultClick,
}) => {
	return (
		<div className='w-36 flex relative'>
			<div className='w-36 flex'>
				<a
					onClick={onSearchClick}
					className='text-sm font-semibold p-1 leading-6 text-white hover:text-myOrange ease-in-out duration-300 transition flex items-center gap-x-2 cursor-pointer'
				>
					<MagnifyingGlassIcon className='h-5 w-5' />
				</a>
				<input
					type='text'
					placeholder='Search...'
					className='transition-width duration-300 ease-in-out block w-36 rounded-md border-0 bg-primary py-0.5 pl-1 pr-3 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-darkBlue sm:text-sm sm:leading-6'
					onClick={(e) => e.stopPropagation()}
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
			{searchTerm && (
				<div className='absolute top-full -right-6 mt-6 bg-white border border-gray-200 rounded-md shadow-lg w-80 z-10 text-black overflow-y-auto max-h-96'>
					{searchResults.map((product) => (
						<Link
							href={`/category/product/${product.name
								.replace(/\s+/g, '-')
								.toLowerCase()}`}
							key={product.id}
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

export default DesktopSearchBar;
