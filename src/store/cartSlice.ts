import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartItem } from '@/types/types';
interface CartState {
	items: CartItem[];
}

const initialState: CartState = {
	items: [],
};

type ExtraOptions = Record<string, boolean>;

function areExtraOptionsEqual(
	options1: ExtraOptions,
	options2: ExtraOptions
): boolean {
	const keys1 = Object.keys(options1);
	const keys2 = Object.keys(options2);
	if (keys1.length !== keys2.length) return false;

	for (let key of keys1) {
		if (options1[key] !== options2[key]) return false;
	}
	return true;
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<CartItem>) => {
			const existingItem = state.items.find(
				(item) =>
					item.id === action.payload.id &&
					areExtraOptionsEqual(item.extraOptions, action.payload.extraOptions)
			);

			if (existingItem) {
				existingItem.quantity += action.payload.quantity;
			} else {
				state.items.push(action.payload);
			}
		},

		removeFromCart: (
			state,
			action: PayloadAction<{ id: number; extraOptions: ExtraOptions }>
		) => {
			state.items = state.items.filter(
				(item) =>
					item.id !== action.payload.id ||
					!areExtraOptionsEqual(item.extraOptions, action.payload.extraOptions)
			);
		},

		incrementQuantity: (
			state,
			action: PayloadAction<{ id: number; extraOptions: ExtraOptions }>
		) => {
			const itemIndex = state.items.findIndex(
				(item) =>
					item.id === action.payload.id &&
					areExtraOptionsEqual(item.extraOptions, action.payload.extraOptions)
			);
			if (itemIndex !== -1) {
				state.items[itemIndex].quantity += 1;
			}
		},

		decrementQuantity: (
			state,
			action: PayloadAction<{ id: number; extraOptions: ExtraOptions }>
		) => {
			const itemIndex = state.items.findIndex(
				(item) =>
					item.id === action.payload.id &&
					areExtraOptionsEqual(item.extraOptions, action.payload.extraOptions)
			);
			if (itemIndex !== -1) {
				if (state.items[itemIndex].quantity > 1) {
					state.items[itemIndex].quantity -= 1;
				} else {
					state.items.splice(itemIndex, 1);
				}
			}
		},
	},
});

export const { addItem, removeFromCart, incrementQuantity, decrementQuantity } =
	cartSlice.actions;
export default cartSlice.reducer;
