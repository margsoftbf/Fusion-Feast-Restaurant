import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { products } from '@/data/data';
import { CartItem, Product } from '@/types/types';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';
import ProductModal from '../ProductModal';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';

interface RelatedProductsProps {
	currentProductCategory: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({
	currentProductCategory,
}) => {
	const relatedProducts = products.filter(
		(p) => p.categorySlug === currentProductCategory
	);
	const { openModal, isModalOpen, selectedProduct, closeModal } = useModal();
	const dispatch = useDispatch();

	const handleAddToCartWithExtras = (productWithExtras: CartItem) => {
		dispatch(addItem(productWithExtras));
		closeModal();
	};

	return (
		<div className='bg-primary '>
			<div className='max-w-6xl mx-auto mt-12'>
				<h2 className='text-4xl uppercase font-medium font-oswald text-white text-center py-1 border-b-2 border-b-gray-500'>
					Related <span className='text-myOrange'>Products</span>
				</h2>
				<div className='mt-6 gap-x-4 gap-y-10 sm:gap-x-6  md:gap-y-0 lg:gap-x-8 flex flex-col items-center'>
					<Swiper
						spaceBetween={30}
						slidesPerView={1}
						pagination={{ clickable: true }}
						speed={1000}
						autoplay={{
							delay: 4000,
							disableOnInteraction: false,
						}}
						loop={true}
						grabCursor={true}
						modules={[Autoplay]}
						breakpoints={{
							500: {
								slidesPerView: 2,
							},
							750: {
								slidesPerView: 3,
							},
							1000: {
								slidesPerView: 4,
							},
							1250: {
								slidesPerView: 5,
							},
						}}
						className='w-full mx-auto'
					>
						{relatedProducts.map((product: Product) => (
							<SwiperSlide key={product.id}>
								<div className='flex flex-col justify-center bg-third relative p-1 rounded-lg'>
									<Link
										href={`/category/product/${product.name
											.replace(/\s+/g, '-')
											.toLowerCase()}`}
									>
										<div className='flex p-1 cursor-pointer'>
											<div className='rounded-full border-dashed border-2 border-myOrange p-2 m-2 mx-auto relative'>
												<Image
													src={product.img}
													alt={product.name}
													width={96}
													height={96}
													className='rounded-full object-cover w-auto h-auto'
												/>
											</div>
										</div>
										<div className='px-1 flex flex-col items-center'>
											<h2 className='text-xl text-center uppercase font-medium font-oswald text-white'>
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
														} h-3 w-3 lg:h-4 lg:w-4 flex-shrink-0`}
														aria-hidden='true'
													/>
												))}
												<span className='ml-1 text-xs lg:text-base font-oswald text-myGray'>
													({product.reviews} reviews)
												</span>
											</div>
											<p className='text-myGray font-oswald text-xs text-center px-2'>
												{product.description.length > 30
													? `${product.description.slice(0, 30)}...`
													: product.description}
											</p>
										</div>
									</Link>
									<div className='flex flex-col justify-between items-center my-2 px-1'>
										<p className='font-bold text-white text-xl lg:text-2xl font-oswald py-1'>
											${product.price}
										</p>
										<button
											className='rounded-lg mt-4 mb-1 p-1 px-2 py-2  font-bold flex items-center justify-center bg-primary text-white hover:bg-white hover:text-primary duration-200 transition ease-linear'
											onClick={() => {
												console.log(
													'Attempting to open modal for product:',
													product
												);
												openModal(product);
											}}
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
											category={currentProductCategory}
										/>
									)}
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default RelatedProducts;
