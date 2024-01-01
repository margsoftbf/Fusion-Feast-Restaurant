export interface SearchProps {
	showSearch: boolean;
	setShowSearch: (show: boolean) => void;
}

export interface ReviewsProps {
	id: number;
	name: string;
	position: string;
	img: string;
	imgAlt: string;
	text: string;
	rating: number;
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

export interface PaymentFormDataTypes {
	email: string;
	nameOnCard: string;
	cardNumber: string;
	expirationDate: string;
	cvc: string;
	address: string;
	city: string;
	state: string;
	postalCode: string;
}


export interface BlogPostTypes {
	id: number;
	title: string;
	href: string;
	description: string;
	imageUrl: string;
	date: string;
	datetime: string; 
	category: { title: string; href: string };
	author: {
		name: string;
		role: string;
		href: string;
		imageUrl: string;
	};
}
