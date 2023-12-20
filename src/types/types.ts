export interface SearchProps {
	showSearch: boolean;
	setShowSearch: (show: boolean) => void;
}

export type Product = {
	id: number;
	name: string;
	categorySlug: string;
	img: string;
	rating: number;
	reviews: number;
	price: number;
	description: string;
};

export interface CartItem extends Product {
	quantity: number;
}