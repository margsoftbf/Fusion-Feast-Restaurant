import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartItem } from '@/types/types';

interface CartState {
	items: CartItem[];
	promoCode: string;
	isPromoApplied: boolean;
	discount: number;
	triedToApply: boolean;
}

const initialState: CartState = {
	items: [],
	promoCode: '',
	isPromoApplied: false,
	discount: 0,
	triedToApply: false,
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
		applyPromoCode: (state, action: PayloadAction<string>) => {
			state.promoCode = action.payload;
			state.isPromoApplied = action.payload === 'PROMO50';
			state.discount = state.isPromoApplied ? 0.5 : 0;
		},
		clearPromoCode: (state) => {
			state.promoCode = '';
			state.isPromoApplied = false;
			state.discount = 0;
		},
		setTriedToApply: (state, action: PayloadAction<boolean>) => {
			state.triedToApply = action.payload;
		},
		updatePromoCode: (state, action: PayloadAction<string>) => {
			state.promoCode = action.payload;
		},
		clearCart: (state) => {
            state.items = [];
        },

	},
});

export const {
	addItem,
	removeFromCart,
	incrementQuantity,
	decrementQuantity,
	applyPromoCode,
	clearPromoCode,
	setTriedToApply,
	updatePromoCode,
	clearCart
} = cartSlice.actions;
export default cartSlice.reducer;
