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
			state.items.push(action.payload);
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
	},
});

export const { addItem, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
