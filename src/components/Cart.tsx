import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { decrementQuantity, incrementQuantity } from '@/store/cartSlice';
import { Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { products } from '@/data/data';

interface CartProps {
	isCartOpen: boolean;
	toggleCart: () => void;
	cartItemsCount: number;
}

const Cart: React.FC<CartProps> = ({ isCartOpen, toggleCart }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state: RootState) => state.cart.items);

	const handleIncrement = (productId: number) => {
		dispatch(incrementQuantity(productId));
	};

	const handleDecrement = (productId: number) => {
		dispatch(decrementQuantity(productId));
	};

	const totalPriceItems = (price: number, quantity: number): string =>
		(price * quantity).toFixed(2);

	const subtotal = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);
	const tax = subtotal * 0.07;
	const shipping = cartItems.length * 1.5;
	const orderTotal = subtotal + tax + shipping;

	const formatPrice = (price: number): string => price.toFixed(2);

	return (
		<Transition
			show={isCartOpen}
			as={Fragment}
			enter='transition ease-out duration-200'
			enterFrom='opacity-0'
			enterTo='opacity-100'
			leave='transition ease-in duration-150'
			leaveFrom='opacity-100'
			leaveTo='opacity-0'
		>
			<div
				className={`${
					isCartOpen ? 'block' : 'hidden'
				} absolute inset-x-0 mt-px bg-white text-black shadow-lg sm:px-2 lg:ml-auto lg:top-full lg:mt-5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5 border-2 m-4 rounded-md lg:border-none`}
			>
				<XMarkIcon
					className='h-5 w-5 right-2 top-2 absolute cursor-pointer'
					onClick={toggleCart}
				/>
				<div className='relative flow-root p-1 my-8 mt-12'>
					{cartItems.length === 0 ? (
						<p className='text-center font-semibold'>Your cart is empty.</p>
					) : (
						<ul className='-my-6 divide-y divide-gray-200'>
							{cartItems.map((item) => (
								<li
									key={item.id}
									className='flex gap-2 items-center py-2 justify-between'
								>
									<div className='flex items-center gap-2'>
										<div className='h-12 w-12 flex items-center justify-center rounded-md border bg-gray-100 border-gray-200'>
											<img
												src={
													products.find((product) => product.id === item.id)
														?.img || ''
												}
												alt={
													products.find((product) => product.id === item.id)
														?.imgAlt || ''
												}
												className='w-10 h-10 rounded-full'
											/>
										</div>
										<div className='flex flex-col'>
											<span className='text-xs font-bold'>{item.name}</span>
											<span className='text-[10px] text-gray-400'>
												{item.name}
											</span>
										</div>
									</div>

									<div className='flex items-center justify-center gap-1 font-sans'>
										<button
											className='bg-gray-200 text-black h-4 w-4 rounded-l-md flex items-center justify-center hover:bg-gray-300'
											onClick={() => handleDecrement(item.id)}
										>
											<span className='text-myRed text-base font-bold'>-</span>
										</button>
										<span className='bg-gray-200 text-black h-4 w-5 text-xs flex items-center justify-center hover:bg-gray-300 text-center'>
											{item.quantity}
										</span>
										<button
											className='bg-gray-200 text-black h-4 w-4 rounded-r-md flex items-center justify-center hover:bg-gray-300'
											onClick={() => handleIncrement(item.id)}
										>
											<span className='text-myGreen text-base font-bold'>
												+
											</span>
										</button>
									</div>
									<span className='font-bold text-[14px]'>
										${totalPriceItems(item.price, item.quantity)}
									</span>
								</li>
							))}
						</ul>
					)}
				</div>
				<div className='border-t py-2 border-gray-200 flex items-center justify-between bg-black'>
					<input type='text' />
					<button>Apply code</button>
				</div>
				<div className='border-t border-gray-200 pt-6'>
					<div className=' bg-gray-100 px-2 rounded-lg'>
						<div className='-my-4 divide-y divide-gray-200 text-sm'>
							<div className='flex items-center justify-between py-2 text-gray-500'>
								<div className=''>Subtotal</div>
								<div className='font-medium '>${formatPrice(subtotal)}</div>
							</div>
							<div className='flex items-center justify-between py-2 text-gray-500'>
								<div>Shipping</div>
								<div className='font-medium '>${formatPrice(shipping)}</div>
							</div>
							<div className='flex items-center justify-between py-2 text-gray-500'>
								<div>Tax</div>
								<div className='font-medium '>${formatPrice(tax)}</div>
							</div>
							<div className='flex items-center justify-between py-4'>
								<div className='text-base font-medium text-gray-900'>
									Order total
								</div>
								<div className='text-base font-medium text-gray-900'>
									${formatPrice(orderTotal)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='my-6 flex justify-center'>
					<button
						className={`w-full mx-8 inline-flex py-2 px-5 bg-myOrange rounded-lg justify-center items-center gap-2.5 text-base text-black font-oswald tracking-wider hover:bg-third hover:text-white transition duration-300 ease-in-out`}
					>
						Checkout
					</button>
				</div>
			</div>
		</Transition>
	);
};

export default Cart;
