import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import {
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
} from '@/store/cartSlice';
import { CartItem, ExtraOptions } from '@/types/types';
import { useEffect, useState } from 'react';

const useCart = () => {
	const dispatch = useDispatch();

	const { items, promoCode, isPromoApplied, discount } = useSelector(
		(state: RootState) => state.cart
	);

	const [subtotal, setSubtotal] = useState(0);
	const [tax, setTax] = useState(0);
	const [shipping, setShipping] = useState(0);
	const [orderTotal, setOrderTotal] = useState(0);

	useEffect(() => {
		let newSubtotal = items.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
		let newTax = newSubtotal * 0.07;
		let newShipping = items.length * 1.5;
		let newOrderTotal = newSubtotal + newTax + newShipping;

		if (isPromoApplied) {
			newOrderTotal *= 1 - discount;
		}

		setSubtotal(newSubtotal);
		setTax(newTax);
		setShipping(newShipping);
		setOrderTotal(newOrderTotal);
	}, [items, isPromoApplied, discount]);

	const handleIncrement = (item: CartItem) => {
		dispatch(incrementQuantity(item));
	};

	const handleDecrement = (item: CartItem) => {
		dispatch(decrementQuantity(item));
	};

	const handleRemoveItem = (item: CartItem) => {
		dispatch(removeFromCart(item));
	};

	const formatAddons = (extraOptions: ExtraOptions): string => {
		const selectedAddons = Object.entries(extraOptions)
			.filter(([key, value]) => value)
			.map(([key]) => key.charAt(0).toUpperCase() + key.slice(1))
			.join(', ');

		return selectedAddons.length > 0 ? selectedAddons : 'No addons';
	};

	const totalPriceItems = (price: number, quantity: number): string => {
		return (price * quantity).toFixed(2);
	};

	return {
		cartItems: items,
		handleIncrement,
		handleDecrement,
		handleRemoveItem,
		promoCode,
		isPromoApplied,
		subtotal,
		tax,
		shipping,
		orderTotal,
		totalPriceItems,
		formatAddons,
	};
};

export default useCart;
