import { Product, CartItem } from '@/types/types';
import Link from 'next/link';
import Image from 'next/image';
import ButtonEmpty from '../common/ButtonEmpty';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { StarIcon } from '@heroicons/react/24/solid';
import { IoMdAddCircle } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';
import { useState } from 'react';
import ProductModal from '../ProductModal';
import { useModal } from '@/context/ModalContext';
useModal
type CategoryBoxProps = {
	categorySlug: string;
	products: Product[];
};

const MenuBookSlider: React.FC<CategoryBoxProps> = ({
	products,
	categorySlug,
}) => {
	const dispatch = useDispatch();
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const { isModalOpen, openModal, closeModal } = useModal();

	const handleOpenModal = (product: Product) => {
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
				{products.map((product) => (
					<SwiperSlide key={product.id} className='flex justify-center '>
						<div className='flex flex-col justify-center bg-third relative p-1 rounded-lg'>
							<Link
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
											className='rounded-full object-cover w-auto h-auto'
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
												}
										'h-3 w-3 flex-shrink-0'
										`}
												aria-hidden='true'
											/>
										))}
										<span className='ml-1 text-xs font-oswald text-myGray'>
											({product.reviews} reviews)
										</span>
									</div>
									<p className='text-gray-200 font-oswald text-xs'>
										{product.description.length > 50
											? `${product.description.slice(0, 50)}...`
											: product.description}
									</p>
								</div>
							</Link>
							<div className='flex flex-row justify-between items-center my-2 px-1'>
								<p className='font-bold text-white font-oswald py-1'>
									${product.price}
								</p>
								<button
									className='h-7 w-8 rounded-lg flex items-center justify-center bg-myGreen hover:bg-myOrange duration-200 transition ease-linear'
									onClick={() => handleOpenModal(product)}
									aria-label='Add to cart'
								>
									<IoMdAddCircle className='text-third w-6' />
								</button>
							</div>
							{isModalOpen && (
								<ProductModal
									product={selectedProduct}
									onClose={handleCloseModal}
									onAddToCart={handleAddToCartWithExtras}
									category={categorySlug}
								/>
							)}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<Link className='mt-6' href={`/category/${categorySlug}`}>
				<ButtonEmpty>View More</ButtonEmpty>
			</Link>
		</div>
	);
};

export default MenuBookSlider;
