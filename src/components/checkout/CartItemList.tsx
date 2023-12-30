import useCart from '@/hooks/useCart';
import React from 'react';

const CartItemList = () => {
	const {
		cartItems,
		handleIncrement,
		handleDecrement,
		handleRemoveItem,
		totalPriceItems,
		formatAddons,
	} = useCart();


	return (
		<ul
			role='list'
			className='divide-y divide-gray-200 border-b border-gray-200 overflow-y-auto max-h-96'
		>
			{cartItems.length === 0 ? (
				<div>
					<p className='text-black text-center font-semibold p-4'>
						Your cart is empty
					</p>
				</div>
			) : (
				cartItems.map((product) => (
					<li
						key={product.id}
						className='flex items-center gap-2 space-x-6 py-6'
					>
						<div className='h-28 w-28 flex items-center justify-center rounded-md border bg-gray-100 border-gray-200 ml-2'>
							<img
								src={product.img}
								alt={product.imgAlt}
								className='h-24 w-24 flex-none rounded-md bg-gray-200 object-cover object-center'
							/>
						</div>
						<div className='flex flex-col justify-between space-y-4 w-1/2'>
							<div className='space-y-1 text-sm font-medium'>
								<h3 className='text-gray-900 font-bold truncate'>
									{product.name}
								</h3>
								<p className='text-xs text-gray-400 truncate'>
									{formatAddons(product.extraOptions).length > 40
										? `${formatAddons(product.extraOptions).slice(0, 40)}...`
										: formatAddons(product.extraOptions)}
								</p>
								<p className='text-gray-900'>
									${totalPriceItems(product.price, product.quantity)}
								</p>
							</div>
							<div className='flex space-x-4 w-1/2'>
								<div className='flex items-center gap-1 font-sans'>
									<button
										className='bg-gray-200 text-black h-4 w-4 rounded-l-md flex items-center justify-center hover:bg-gray-300'
										onClick={() => handleDecrement(product)}
									>
										<span className='text-black text-base'>-</span>
									</button>
									<span className='bg-gray-200 text-black h-4 w-5 text-xs flex items-center justify-center hover:bg-gray-300 text-center'>
										{product.quantity}
									</span>
									<button
										className='bg-gray-200 text-black h-4 w-4 rounded-r-md flex items-center justify-center hover:bg-gray-300'
										onClick={() => handleIncrement(product)}
									>
										<span className='text-black text-base font-oswald'>+</span>
									</button>
								</div>
								<div className='flex border-l border-gray-300 pl-4'>
									<button
										type='button'
										className='text-red-500 hover:text-red-700 text-xs font-semibold font-openSans cursor-pointer'
										onClick={() => handleRemoveItem(product)}
									>
										Remove
									</button>
								</div>
							</div>
						</div>
					</li>
				))
			)}
		</ul>
	);
};

export default CartItemList;
