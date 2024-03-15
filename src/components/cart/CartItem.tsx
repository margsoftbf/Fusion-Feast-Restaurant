import useCart from '@/hooks/useCart';
import { CartItemProps } from '@/types/types';

const CartItem = ({
	item,
	onIncrement,
	onDecrement,
	onRemove,
	products,
	totalPriceItems,
}: CartItemProps) => {
	const { formatAddons } = useCart();

	return (
		<li key={item.id} className='flex items-center py-2 gap-2'>
			<div className='flex items-center gap-2 flex-1'>
				<div className='h-12 w-12 flex items-center justify-center rounded-md border bg-gray-100 border-gray-200'>
					<img
						src={products.find((product) => product.id === item.id)?.img || ''}
						alt={
							products.find((product) => product.id === item.id)?.imgAlt || ''
						}
						className='w-10 h-10 rounded-full'
					/>
				</div>
				<div className='flex flex-col'>
					<span className='text-xs font-bold truncate'>
						{item.name.length > 15 ? `${item.name.slice(0, 15)}...` : item.name}
					</span>
					<span className='text-[10px] text-gray-400 truncate'>
						{formatAddons(item.extraOptions).length > 19
							? `${formatAddons(item.extraOptions).slice(0, 17)}...`
							: formatAddons(item.extraOptions)}
					</span>
					<span
						className='text-red-500 hover:text-red-700 text-[10px] cursor-pointer'
						onClick={() => onRemove(item)}
					>
						Remove
					</span>
				</div>
			</div>

			<div className='flex items-center gap-1 font-sans'>
				<button
					className='bg-gray-200 text-black h-4 w-4 rounded-l-md flex items-center justify-center hover:bg-gray-300'
					onClick={() => onDecrement(item)}
				>
					<span className='text-black text-base'>-</span>
				</button>
				<span className='bg-gray-200 text-black h-4 w-5 text-xs flex items-center justify-center hover:bg-gray-300 text-center'>
					{item.quantity}
				</span>
				<button
					className='bg-gray-200 text-black h-4 w-4 rounded-r-md flex items-center justify-center hover:bg-gray-300'
					onClick={() => onIncrement(item)}
				>
					<span className='text-black text-base font-oswald'>+</span>
				</button>
			</div>

			<span className='font-bold text-[14px] w-12 text-right'>
				${totalPriceItems(item.price, item.quantity)}
			</span>
		</li>
	);
};

export default CartItem;
