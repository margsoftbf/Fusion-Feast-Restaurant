import React from 'react';
import { TotalProps } from '@/types/types';

const Total: React.FC<TotalProps> = ({
	subtotal,
	shipping,
	tax,
	orderTotal,
}) => {
	const formatPrice = (price: number): string => price.toFixed(2);

	return (
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
	);
};

export default Total;
