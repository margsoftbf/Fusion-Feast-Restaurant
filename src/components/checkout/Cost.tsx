import useCart from '@/hooks/useCart';
import React from 'react';

const Cost = () => {
	const { subtotal, tax, shipping } = useCart();
	return (
		<div className='space-y-2'>
			<div className='flex border-b justify-between'>
				<div>Subtotal</div>
				<div className='text-gray-900'>{subtotal.toFixed(2)}</div>
			</div>
			<div className='flex border-b justify-between'>
				<div>Taxes</div>
				<div className='text-gray-900'>{tax.toFixed(2)}</div>
			</div>
			<div className='flex border-b justify-between'>
				<div>Shipping</div>
				<div className='text-gray-900'>{shipping.toFixed(2)}</div>
			</div>
		</div>
	);
};

export default Cost;
