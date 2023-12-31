import { Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { products } from '@/data/data';

import { Promo, Total, CartItem } from './cart/index';
import Link from 'next/link';
import useCart from '@/hooks/useCart';

interface CartProps {
	isCartOpen: boolean;
	toggleCart: () => void;
	cartItemsCount: number;
}

const Cart: React.FC<CartProps> = ({ isCartOpen, toggleCart }) => {
	const {
		cartItems,
		handleIncrement,
		handleDecrement,
		handleRemoveItem,
		subtotal,
		tax,
		shipping,
		orderTotal,
		totalPriceItems,
	} = useCart();

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
				} absolute inset-x-0 mt-px bg-white text-black shadow-lg px-2 lg:ml-auto lg:top-full lg:mt-5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5 border-2 m-4 rounded-md lg:border-none`}
			>
				<XMarkIcon
					className='h-5 w-5 right-2 top-2 absolute cursor-pointer'
					onClick={toggleCart}
				/>
				<div className='relative flow-root p-1 my-8 mt-8 overflow-y-auto max-h-80'>
					{cartItems.length === 0 ? (
						<p className='text-center font-semibold'>Your cart is empty.</p>
					) : (
						<ul className='divide-y divide-gray-200'>
							{cartItems.map((item) => (
								<CartItem
									key={item.id}
									item={item}
									onIncrement={handleIncrement}
									onDecrement={handleDecrement}
									onRemove={handleRemoveItem}
									products={products}
									totalPriceItems={totalPriceItems}
								/>
							))}
						</ul>
					)}
				</div>
				<Promo />
				<Total
					subtotal={subtotal}
					shipping={shipping}
					tax={tax}
					orderTotal={orderTotal}
				/>
				<div className='my-6 flex justify-center'>
					<Link
						href='/checkout'
						className={`w-full mx-8 inline-flex py-2 px-5 bg-myOrange rounded-lg justify-center items-center gap-2.5 text-base text-black font-oswald tracking-wider hover:bg-third hover:text-white transition duration-300 ease-in-out`}
						onClick={toggleCart}
					>
						Checkout
					</Link>
				</div>
			</div>
		</Transition>
	);
};

export default Cart;
