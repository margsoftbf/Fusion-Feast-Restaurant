import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { decrementQuantity, incrementQuantity } from '@/store/cartSlice';
import { Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { products } from '@/data/data';
import { CartItem as CartItemProps} from '@/types/types';
import { Promo, Total, CartItem } from './cart/index';


interface CartProps {
	isCartOpen: boolean;
	toggleCart: () => void;
	cartItemsCount: number;
}

const Cart: React.FC<CartProps> = ({ isCartOpen, toggleCart }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state: RootState) => state.cart.items);
	const [promoCode, setPromoCode] = useState('');
	const [isPromoApplied, setIsPromoApplied] = useState(false);
	const [discount, setDiscount] = useState(0);
	const [triedToApply, setTriedToApply] = useState(false);

	const handleIncrement = (item: CartItemProps) => {
		dispatch(incrementQuantity(item));
	};

	const handleDecrement = (item: CartItemProps) => {
		dispatch(decrementQuantity(item));
	};

	const totalPriceItems = (price: number, quantity: number): string =>
		(price * quantity).toFixed(2);

	const subtotal = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	const handleApplyPromoCode = () => {
		setTriedToApply(true);
		if (promoCode === 'PROMO50' && !isPromoApplied) {
			setIsPromoApplied(true);
			setDiscount(0.5);
		} else {
			setIsPromoApplied(false);
		}
	};
	const tax = subtotal * 0.07;
	const shipping = cartItems.length * 1.5;
	let orderTotal = subtotal + tax + shipping;

	if (isPromoApplied) {
		orderTotal = orderTotal * (1 - discount);
	}



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
				<div className='relative flow-root p-1 my-8 mt-12'>
					{cartItems.length === 0 ? (
						<p className='text-center font-semibold'>Your cart is empty.</p>
					) : (
						<ul className='-my-6 divide-y divide-gray-200'>
							{cartItems.map((item) => (
								<CartItem
									key={item.id}
									item={item}
									onIncrement={handleIncrement}
									onDecrement={handleDecrement}
									products={products}
									totalPriceItems={totalPriceItems}
								/>
							))}
						</ul>
					)}
				</div>
				<Promo
					promoCode={promoCode}
					setPromoCode={setPromoCode}
					isPromoApplied={isPromoApplied}
					handleApplyPromoCode={handleApplyPromoCode}
					triedToApply={triedToApply}
				/>
				<Total
					subtotal={subtotal}
					shipping={shipping}
					tax={tax}
					orderTotal={orderTotal}
				/>
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
