import { Product, ExtraOptions } from '@/types/types';
import { StarIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaCartArrowDown } from 'react-icons/fa';

interface ProductDetailsProps {
	product: Product;
	quantity: number;
	selectedAddons: ExtraOptions;
	handleAddonChange: (addonName: string) => void;
	handleAddToCart: () => void;
	setQuantity: React.Dispatch<React.SetStateAction<number>>;
	addons: Record<string, { name: string; price: number }[]>;
	showAddedToCart: boolean;
	setShowAddedToCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
	product,
	quantity,
	selectedAddons,
	handleAddonChange,
	handleAddToCart,
	setQuantity,
	addons,
	showAddedToCart,
	setShowAddedToCart,
}) => {
	const [activeImage, setActiveImage] = useState(product.imgBig);
	const [totalPrice, setTotalPrice] = useState(product.price);

	useEffect(() => {
		if (product && product.imgBig) {
			setActiveImage(product.imgBig);
		}
	}, [product]);

	useEffect(() => {
		const addonCost = Object.keys(selectedAddons)
			.filter((addonName) => selectedAddons[addonName])
			.reduce((acc, addonName) => {
				const addonPrice =
					addons[product.categorySlug].find((addon) => addon.name === addonName)
						?.price || 0;
				return acc + addonPrice;
			}, 0);

		setTotalPrice((product.price + addonCost) * quantity);
	}, [selectedAddons, quantity, product.price, addons, product.categorySlug]);

	return (
		<div className='flex flex-col lg:flex-row gap-4 relative'>
			<div className='flex flex-col lg:flex-row items-center justify-center lg:justify-start'>
				<div className='rounded-md bg-third lg:w-96 lg:h-96 p-4 m-2 flex items-center justify-center lg:order-1'>
					<Image
						src={activeImage}
						alt={product.name}
						width={300}
						height={300}
						className='rounded-md object-cover w-48 md:w-full h-auto '
						placeholder='blur'
						blurDataURL={product.img}
						priority={true}
					/>
				</div>
				<div className='flex flex-row mt-4 lg:flex-col h-full gap-1 py-2'>
					{[1, 2, 3, 4].map((idx) => (
						<div
							key={idx}
							className='rounded-md p-1 cursor-pointer bg-third'
							onClick={() => setActiveImage(product.imgBig)}
						>
							<Image
								src={product.imgBig}
								alt={product.imgAlt}
								width={54}
								height={54}
								className='rounded-md object-cover'
								placeholder='blur'
								blurDataURL={product.img}
								priority={true}
							/>
						</div>
					))}
				</div>
			</div>
			<div className='w-full lg:w-1/2 lg:mt-2 relative '>
				{showAddedToCart && (
					<div
						className='absolute bottom-12 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded z-100'
						role='alert'
					>
						<span className='block sm:inline'>Added to cart</span>
					</div>
				)}
				<div className='px-1 flex flex-col items-center lg:items-start '>
					<h2 className='text-3xl lg:text-4xl uppercase font-medium font-oswald text-white'>
						{product.name}
					</h2>
					<div className='flex  items-center py-4'>
						{[0, 1, 2, 3, 4].map((rating) => (
							<StarIcon
								key={rating}
								className={`${
									product.rating > rating ? 'text-yellow-400' : 'text-gray-200'
								}
                                    'h-4 w-4 flex-shrink-0'
                                                                            `}
								aria-hidden='true'
							/>
						))}
						<span className='ml-1 text-base font-oswald text-myGray'>
							({product.reviews} reviews)
						</span>
					</div>
					<p className='text-2xl font-oswald text-myRed'>
						${totalPrice.toFixed(2)}
					</p>
					<p className='text-myGray font-openSans text-xs mt-2 px-16 text-center lg:px-0 lg:text-left'>
						{product.longDescription}
					</p>
					<div className='my-4'>
						<p className='mb-2 font-bold text-center lg:text-left'>
							More Topping:
						</p>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-[14px]'>
							{addons[product.categorySlug].map((addon) => (
								<label className='flex items-center gap-0.5' key={addon.name}>
									<input
										type='checkbox'
										checked={selectedAddons[addon.name] || false}
										onChange={() => handleAddonChange(addon.name)}
									/>
									{addon.name} (+${addon.price})
								</label>
							))}
						</div>
					</div>
					<div className='flex items-center gap-1 justify-between my-2'>
						<span
							className='cursor-pointer w-7 h-7 bg-white text-black rounded-md flex items-center justify-center font-bold'
							onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
						>
							-
						</span>
						<input
							type='text'
							value={quantity}
							className='mx-1 w-12 h-7 text-center text-lg  bg-third text-white rounded-md border '
							readOnly
						/>
						<span
							className='cursor-pointer w-7 h-7 bg-white text-black rounded-md flex items-center justify-center font-bold'
							onClick={() => setQuantity(quantity + 1)}
						>
							+
						</span>
					</div>

					<button
						className='bg-white hover:bg-third hover:text-white  duration-200 text-[14px] transition ease-linear text-third font-bold mt-2 px-2 py-2 rounded flex items-center gap-2'
						onClick={handleAddToCart}
					>
						<FaCartArrowDown />
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
