import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/20/solid';
import { CartItem, Product } from '@/types/types';
import { useModal } from '@/context/ModalContext';
import ProductModal from '../ProductModal';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';
import { ProductListProps } from '@/types/types';

const ProductList = ({ products }: ProductListProps) => {
	const { openModal, isModalOpen, selectedProduct, closeModal } = useModal();
	const dispatch = useDispatch();

	const handleAddToCartWithExtras = (productWithExtras: CartItem) => {
		dispatch(addItem(productWithExtras));
		closeModal();
	};
	return (
		<div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -mx-px'>
			{products.length > 0 ? (
				products.map((product) => (
					<div
						key={product.id}
						className='flex flex-col justify-center bg-third relative p-1 rounded-lg'
					>
						<Link
							className='cursor-pointer'
							href={`/category/product/${product.name
								.replace(/\s+/g, '-')
								.toLowerCase()}`}
						>
							<div className='flex p-1'>
								<div className='rounded-full border-dashed border-2 border-myOrange p-2 m-2 mx-auto relative'>
									<Image
										src={product.img}
										alt={product.name}
										width={96}
										height={96}
										placeholder='blur'
										blurDataURL={product.img}
										priority={true}
										className='rounded-full object-cover w-24 h-24'
									/>
								</div>
							</div>
							<div className='px-1 flex flex-col items-center'>
								<h2 className='text-xl lg:text-2xl uppercase font-medium font-oswald text-white'>
									{product.name}
								</h2>
								<div className='flex items-center py-2'>
									{[0, 1, 2, 3, 4].map((rating) => (
										<StarIcon
											key={rating}
											className={`${
												product.rating > rating
													? 'text-yellow-400'
													: 'text-gray-200'
											}
                'h-3 w-3 lg:h-4 lg:w-4 flex-shrink-0'
                `}
											aria-hidden='true'
										/>
									))}
									<span className='ml-1 text-xs lg:text-base font-oswald text-myGray'>
										({product.reviews} reviews)
									</span>
								</div>
								<p className='text-myGray font-oswald text-base text-center px-4'>
									{product.description.length > 100
										? `${product.description.slice(0, 100)}...`
										: product.description}
								</p>
							</div>
						</Link>
						<div className='flex flex-col justify-between items-center my-2 px-1'>
							<p className='font-bold text-white text-xl lg:text-2xl font-oswald py-1'>
								${product.price.toFixed(2)}
							</p>
							<button
								className='rounded-lg mt-4 mb-1 p-1 px-2 py-2  font-bold flex items-center justify-center bg-primary text-white hover:bg-white hover:text-primary duration-200 transition ease-linear'
								onClick={() => openModal(product)}
								aria-label='Add to cart'
							>
								Add to cart
							</button>
						</div>
						{isModalOpen && selectedProduct && (
							<ProductModal
								product={selectedProduct}
								onClose={closeModal}
								onAddToCart={handleAddToCartWithExtras}
								category={selectedProduct.categorySlug}
							/>
						)}
					</div>
				))
			) : (
				<div className='flex justify-center w-full mx-auto items-center text-white bg-third p-2 py-4 rounded-md my-4'>
					Not found
				</div>
			)}
		</div>
	);
};

export default ProductList;
