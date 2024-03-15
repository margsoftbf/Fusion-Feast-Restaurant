import { Product, CartItem } from '@/types/types';
import Link from 'next/link';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { IoMdAddCircle } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useModal } from '@/context/ModalContext';
import { MenuBookSlideProps } from '@/types/types';

const ProductModal = dynamic(() => import('../ProductModal'), {
	loading: () => <p>Loading...</p>,
	ssr: false,
});

const MenuBookSlide = ({ product, categorySlug }: MenuBookSlideProps) => {
	const dispatch = useDispatch();
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const { isModalOpen, openModal, closeModal } = useModal();

	const handleOpenModal = () => {
		setSelectedProduct(product);
		openModal(product);
	};

	const handleCloseModal = () => {
		closeModal();
	};

	const handleAddToCartWithExtras = (productWithExtras: CartItem) => {
		dispatch(addItem(productWithExtras));
		handleCloseModal();
	};

	return (
		<div className='flex justify-center px-8 sm:px-0'>
			<div className='flex flex-col justify-center bg-third relative p-1 rounded-lg w-60'>
				<Link
					href={`/category/product/${product.name
						.replace(/\s+/g, '-')
						.toLowerCase()}`}
				>
					<div className='flex p-1'>
						<div className='rounded-full border-dashed border-2 border-myOrange p-2 m-2 mx-auto relative'>
							<img
								src={product.img}
								alt={product.name}
								className='rounded-full object-cover w-24 h-24'
							/>
						</div>
					</div>
					<div className='px-1'>
						<h2 className='text-base uppercase font-medium font-oswald text-white'>
							{product.name}
						</h2>
						<div className='flex items-center  py-1'>
							{[0, 1, 2, 3, 4].map((rating) => (
								<StarIcon
									key={rating}
									className={`${
										product.rating > rating
											? 'text-yellow-400'
											: 'text-gray-200'
									} 'h-3 w-3 flex-shrink-0'`}
									aria-hidden='true'
								/>
							))}
							<span className='ml-1 text-xs font-oswald text-myGray'>
								({product.reviews} reviews)
							</span>
						</div>
						<p className='text-gray-200 font-oswald text-xs'>
							{product.description.length > 40
								? `${product.description.slice(0, 40)}...`
								: product.description}
						</p>
					</div>
				</Link>
				<div className='flex flex-row justify-between items-center my-2 px-1'>
					<p className='font-bold text-white font-oswald py-1'>
						${product.price.toFixed(2)}
					</p>
					<button
						className='h-7 w-8 rounded-lg flex items-center justify-center bg-myGreen hover:bg-myOrange duration-200 transition ease-linear'
						onClick={handleOpenModal}
						aria-label='Add to cart'
					>
						<IoMdAddCircle className='text-third w-6' />
					</button>
				</div>
				{isModalOpen && selectedProduct && (
					<ProductModal
						product={selectedProduct}
						onClose={handleCloseModal}
						onAddToCart={handleAddToCartWithExtras}
						category={categorySlug}
					/>
				)}
			</div>
		</div>
	);
};

export default MenuBookSlide;
