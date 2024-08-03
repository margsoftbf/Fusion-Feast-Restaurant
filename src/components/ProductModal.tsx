import Modal from 'react-modal';
import {
	ProductWithExtras,
	ExtraOptions,
	ProductModalProps,
} from '@/types/types';
import { StarIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import Image from 'next/image';
import { addons } from '@/data/data';
import { FaCartArrowDown } from 'react-icons/fa';
import { useModal } from '@/context/ModalContext';

const ProductModal: React.FC<ProductModalProps> = ({
	product,
	onClose,
	onAddToCart,
	category,
}: ProductModalProps) => {
	const [extraOptions, setExtraOptions] = useState<ExtraOptions>({});
	const [quantity, setQuantity] = useState(1);

	const handleExtraOptionChange = (addonName: string) => {
		setExtraOptions((prev) => ({
			...prev,
			[addonName]: !prev[addonName],
		}));
	};

	const calculatePrice = (): number => {
		let extraCost = 0;

		Object.keys(extraOptions).forEach((addonName) => {
			if (extraOptions[addonName]) {
				const addonPrice =
					categoryAddons.find((addon) => addon.name === addonName)?.price || 0;
				extraCost += addonPrice;
			}
		});

		const basePrice = product ? product.price : 0;
		return (basePrice + extraCost) * quantity;
	};

	const categoryAddons = addons[category] || [];

	const handleAddToCartClick = () => {
		if (product) {
			const totalCost = calculatePrice();
			const cartItem: ProductWithExtras = {
				...product,
				quantity,
				extraOptions,
				price: totalCost,
			};
			onAddToCart(cartItem);
		}
	};

	const { isModalOpen, selectedProduct, closeModal } = useModal();

	return (
		<Modal
			isOpen={isModalOpen}
			onRequestClose={closeModal}
			contentLabel='Product Details'
			className='inset-0 flex relative max-h-[80%] justify-center items-center z-50 overflow-y-auto mx-4 my-12 top-12'
			overlayClassName='fixed top-0 left-0 right-0 bottom-0 bg-black/30 flex justify-center items-center z-50'
		>
			<div className='bg-white rounded-md p-2 mx-auto max-w-8xl px-4 lg:px-10 z-50 text-black relative overflow-y-auto max-h-[80vh] w-full flex flex-col items-center lg:gap-4 lg:flex-row lg:justify-between'>
				{product && (
					<div className='flex p-1 lg:w-2/5'>
						<div className='rounded-md bg-gray-100 w-60 h-60 p-2 m-2 mx-auto flex items-center justify-center '>
							<Image
								src={product.imgBig}
								alt={product.name}
								width={240}
								height={240}
								className='rounded-full object-cover w-48 h-48'
								placeholder='blur'
								blurDataURL={product.img}
								priority={true}
							/>
						</div>
					</div>
				)}
				<div className='lg:w-3/5 relative'>
					<h2 className='text-center text-2xl font-oswald mb-2'>
						{product?.name}
					</h2>
					<div className='flex items-center  py-1 justify-center'>
						{[0, 1, 2, 3, 4].map((rating) => (
							<StarIcon
								key={rating}
								className={`${
									(product?.rating || 0) > rating
										? 'text-yellow-400'
										: 'text-gray-200'
								}
										'h-3 w-3 flex-shrink-0'
										`}
								aria-hidden='true'
							/>
						))}
						<span className='ml-1 text-xs font-oswald text-myGray'>
							({product?.reviews} reviews)
						</span>
					</div>
					<p className='text-xs my-2 text-center'>{product?.description}</p>
					<div className='my-4'>
						<p className='mb-2 font-bold'>More Topping:</p>
						<div className='grid grid-cols-2 gap-1 text-xs'>
							{categoryAddons.map((addon) => (
								<label className='flex items-center gap-0.5' key={addon.name}>
									<input
										type='checkbox'
										checked={extraOptions[addon.name] || false}
										onChange={() => handleExtraOptionChange(addon.name)}
									/>
									{addon.name} (+${addon.price})
								</label>
							))}
						</div>
					</div>
					<div className='mt-3 flex items-center justify-start rounded-md '>
						<div className='flex items-center gap-1 justify-between'>
							<button
								onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
								className='cursor-pointer w-6 h-6 bg-third text-white rounded-md flex items-center justify-center font-bold'
							>
								-
							</button>
							<span className='mx-1 w-12 h-7 text-center text-base border text-black border-gray-300 rounded-md'>
								{quantity}
							</span>
							<button
								onClick={() => setQuantity(quantity + 1)}
								className='cursor-pointer w-6 h-6 bg-third text-white rounded-md flex items-center justify-center font-bold'
							>
								+
							</button>
						</div>
					</div>
					<div className='font-bold text-third font-oswald py-1 my-1 '>
						Total Price: ${calculatePrice().toFixed(2)}
					</div>
					<div className='flex justify-between mt-1'>
						<button
							className='bg-primary hover:bg-third  duration-200 text-[14px] transition ease-linear text-white font-bold px-2 rounded flex items-center gap-2'
							onClick={handleAddToCartClick}
						>
							<FaCartArrowDown />
							Add to Cart
						</button>
						<button
							className='bg-myDarkRed  duration-200 transition ease-linear text-white font-bold py-2 px-2 rounded flex items-center gap-1'
							onClick={onClose}
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default ProductModal;
