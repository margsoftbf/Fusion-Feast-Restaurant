import {
	applyPromoCode,
	setTriedToApply,
	updatePromoCode
} from '@/store/cartSlice';
import { RootState } from '@/store/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';



const Promo = () => {
	const dispatch = useDispatch();
	const { promoCode, isPromoApplied, triedToApply } = useSelector(
		(state: RootState) => state.cart
	);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updatePromoCode(event.target.value)); 
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		dispatch(applyPromoCode(promoCode)); 
		dispatch(setTriedToApply(true)); 
	};

	return (
		<div className='border-t py-2 border-gray-200 flex flex-col items-center gap-2 justify-between w-full'>
			<form className='w-full'>
				<div className='flex items-center gap-2 justify-between w-full'>
					<input
						value={promoCode}
						onChange={handleInputChange}
						disabled={isPromoApplied}
						type='text'
						className='bg-gray-200 block w-2/3 text-xs rounded-md border-0 py-1 indent-2 text-gray-900 shadow-sm  ring-inset ring-gray-300 placeholder:text-gray-400 outline-none'
						placeholder='Coupon Code'
					/>
					<button
						type='submit'
						onClick={handleSubmit}
						disabled={isPromoApplied}
						className='w-1/3 inline-flex  py-1 bg-myOrange rounded-md justify-center items-center text-xs text-black font-oswald tracking-wider hover:bg-third hover:text-white transition duration-300 ease-in-out'
					>
						Apply code
					</button>
				</div>
			</form>
			{triedToApply &&
				(isPromoApplied ? (
					<div className='flex items-center gap-2 justify-between w-full'>
						<span className='text-xs text-green-900 font-bold font-oswald ml-1'>
							Promo code applied
						</span>
					</div>
				) : (
					<div className='flex items-center gap-2 justify-between w-full'>
						<span className='text-xs text-red-900 font-bold font-oswald ml-1'>
							Error: Invalid promo code
						</span>
					</div>
				))}
		</div>
	);
};

export default Promo;
