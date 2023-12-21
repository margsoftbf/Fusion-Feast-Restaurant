import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartItem } from '@/types/types';
interface CartState {
	items: CartItem[];
}

const initialState: CartState = {
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<CartItem>) => {
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.payload.id
			);

			if (existingItemIndex !== -1) {
				state.items[existingItemIndex].quantity += action.payload.quantity;
			} else {
				state.items.push(action.payload);
			}
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
		incrementQuantity: (state, action: PayloadAction<number>) => {
			const item = state.items.find((item) => item.id === action.payload);
			if (item) {
				item.quantity += 1;
			}
		},
		decrementQuantity: (state, action: PayloadAction<number>) => {
			const itemIndex = state.items.findIndex(
				(item) => item.id === action.payload
			);
			if (itemIndex !== -1 && state.items[itemIndex].quantity > 1) {
				state.items[itemIndex].quantity -= 1;
			} else {
				state.items.splice(itemIndex, 1);
			}
		},
	},
});

export const { addItem, removeFromCart, incrementQuantity, decrementQuantity } =
	cartSlice.actions;
export default cartSlice.reducer;
