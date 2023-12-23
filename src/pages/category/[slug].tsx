import Link from 'next/link';
import { products } from '@/data/data';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/20/solid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { CartItem, Product } from '@/types/types';
import { addItem } from '@/store/cartSlice';
import ProductModal from '@/components/Category/ProductModal';
const CategoryPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { slug } = router.query;
	const categoryProducts = products.filter((p) => p.categorySlug === slug);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const [sortKey, setSortKey] = useState('name');

	const handleOpenModal = (product: Product) => {
		setSelectedProduct(product);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedProduct(null);
	};

	const handleAddToCartWithExtras = (productWithExtras: CartItem) => {
		dispatch(addItem(productWithExtras));
		handleCloseModal();
	};

	const formatBreadcrumb = (str: string) => {
		return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
	};

	const breadCrumbs = [
		{ name: 'Home', href: '/', current: false },
		{
			name: formatBreadcrumb(slug as string),
			href: `/category/${slug}`,
			current: true,
		},
	];

	const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortKey(e.target.value);
	};

	const sortedProducts = categoryProducts.sort((a, b) => {
		if (sortKey === 'price') {
			return a.price - b.price;
		} else {
			return a.name.localeCompare(b.name);
		}
	});

	return (
		<div className='relative bg-primary'>
			<div className='relative isolate flex justify-center items-center px-6 lg:px-8 py-4'>
				<div className='absolute inset-0 z-[-1]'>
					<Image
						src='/assets/category/FoodMenu.webp'
						fill={true}
						style={{ objectFit: 'cover' }}
						quality={100}
						sizes='(max-width: 350px) 350px, (max-width: 500px) 500px, (max-width: 768px) 768px, (max-width: 1200px) 1200px'
						placeholder='blur'
						blurDataURL={'/assets/category/FoodMenu.webp'}
						alt='Chef cooking in the kitchen'
					/>
					<div className='absolute inset-0 bg-black bg-opacity-70'></div>
				</div>
				<div className='mx-auto max-w-2xl py-36'>
					<div className='text-center'>
						<h1 className='font-bakilda text-5xl md:text-6xl text-white'>
							Food Menu
						</h1>
					</div>
				</div>
			</div>
			<div className='relative max-w-8xl mx-auto px-2 py-4'>
				<div className='flex flex-col items-center justify-center gap-2 w-full lg:flex-row'>
					<div className='w-1/6 bg-white'>ss</div>
					<div className='w-5/6'>
						<div className='py-4 flex justify-between items-center w-full'>
							<nav className='flex' aria-label='Breadcrumb'>
								<ol className='flex items-center'>
									{breadCrumbs.map((crumb, index) => (
										<li key={crumb.name}>
											<Link
												href={crumb.href}
												className={`text-sm font-medium ${
													crumb.current
														? 'text-gray-300'
														: 'text-gray-600 hover:text-gray-300'
												}`}
											>
												{crumb.name.charAt(0).toUpperCase() +
													crumb.name.slice(1)}
											</Link>
											{index < breadCrumbs.length - 1 && (
												<span className='text-sm font-medium text-gray-400 mx-2'>
													&gt;
												</span>
											)}
										</li>
									))}
								</ol>
							</nav>
							<div>
								<label
									htmlFor='sort'
									className='mr-2 text-sm font-medium text-gray-300'
								>
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
						</div>
						<div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 -mx-px'>
							{sortedProducts.map((product) => (
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
													className='rounded-full object-cover w-auto h-auto'
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
											<p className='text-white font-oswald text-base text-center px-4'>
												{product.description.length > 100
													? `${product.description.slice(0, 100)}...`
													: product.description}
											</p>
										</div>
									</Link>
									<div className='flex flex-col justify-between items-center my-2 px-1'>
										<p className='font-bold text-myRed text-xl lg:text-2xl font-oswald py-1'>
											${product.price}
										</p>
										<button
											className='rounded-lg mt-4 mb-1 p-2  font-bold flex items-center justify-center bg-myOrange hover:bg-white duration-200 transition ease-linear'
											onClick={() => handleOpenModal(product)}
											aria-label='Add to cart'
										>
											Add to cart
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				{isModalOpen && selectedProduct && (
					<ProductModal
						product={selectedProduct}
						onClose={handleCloseModal}
						onAddToCart={handleAddToCartWithExtras}
						category={slug as string}
					/>
				)}
			</div>
		</div>
	);
};

export default CategoryPage;
