import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { removeFromCart } from '@/store/cartSlice';

interface CartProps {
	isCartOpen: boolean;
	toggleCart: () => void;
	cartItemsCount: number;
}

const Cart: React.FC<CartProps> = ({ isCartOpen, toggleCart }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state: RootState) => state.cart.items);

	const handleRemoveItem = (productId: number) => {
		dispatch(removeFromCart(productId));
	};
	return (
		<div className={`${isCartOpen ? 'block' : 'hidden'}`}>
			{cartItems.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<ul>
					{cartItems.map((item) => (
						<li key={item.id} className='flex justify-between items-center'>
							<span>{item.name}</span>
							<span>
								${item.price.toFixed(2)} x {item.quantity}
							</span>
							<button onClick={() => handleRemoveItem(item.id)}>Remove</button>
						</li>
					))}
				</ul>
			)}
			<button onClick={toggleCart}>Close Cart</button>
		</div>
	);
};

export default Cart;
