export interface SearchProps {
	showSearch: boolean;
	setShowSearch: (show: boolean) => void;
}

export type Product = {
	id: number;
	name: string;
	categorySlug: string;
	img: string;
	imgBig: string;
	imgAlt: string;
	rating: number;
	reviews: number;
	price: number;
	description: string;
	longDescription: string;
};

export interface ExtraOptions {
	[key: string]: boolean;
}

export interface TotalProps {
	subtotal: number;
	shipping: number;
	tax: number;
	orderTotal: number;
}

export interface FormDataTypes {
	date: string;
	time: string;
	name: string;
	email: string;
}

export interface ProductWithExtras extends Product {
	quantity: number;
	extraOptions: ExtraOptions;
}

export interface CartItem extends ProductWithExtras {
	price: number;
	extraOptions: ExtraOptions;
}
