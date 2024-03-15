import { ReactNode } from "react";

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

export interface ContactDataTypes {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	message: string;
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

export interface CartItemProps {
	item: CartItem;
	onIncrement: (item: CartItem) => void;
	onDecrement: (item: CartItem) => void;
	onRemove: (item: CartItem) => void;
	products: Product[];
	totalPriceItems: (price: number, quantity: number) => string;
}

export type MenuBookSlideProps = {
	product: Product;
	categorySlug: string;
};

export type CategoryBoxProps = {
	categorySlug: string;
	products: Product[];
};

export interface PaginationProps {
	currentPage: number;
	pageCount: number;
	paginate: (pageNumber: number) => void;
}

export interface PriceRangeProps {
	onMaxPriceChange: (newMaxPrice: number) => void;
}

export interface ProductListProps {
	products: Product[];
}

export interface SortByProps {
    sortKey: string;
    handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface BreadCrumbProps {
	categoryName?: string;
	productName?: string;
}

export type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
};

export type ButtonFullProps = {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
};

export interface DesktopSearchBarProps {
	searchTerm: string;
	setSearchTerm: (value: string) => void;
	searchResults: Product[];
	onSearchClick: (e: React.MouseEvent) => void;
	onResultClick: (id: number) => void;
}

export interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
	searchTerm: string;
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
	searchResults: Product[];
	onResultClick: (id: number) => void;
	isCartOpen: boolean;
	toggleCart: () => void;
	cartItemsCount: number;
}

export interface MobileSearchBarProps {
	searchTerm: string;
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
	searchResults: Product[];
	onResultClick: (id: number) => void;
}

export interface CartProps {
	isCartOpen: boolean;
	toggleCart: () => void;
	cartItemsCount: number;
}

export interface ProductModalProps {
	product: Product | null;
	onClose: () => void;
	onAddToCart: (productWithExtras: ProductWithExtras) => void;
	category: string;
}


export interface ModalContextType {
	isModalOpen: boolean;
	selectedProduct: Product | null;
	openModal: (product: Product) => void;
	closeModal: () => void;
	handleOpenModal?: (product: Product) => void;
}

export interface ModalProviderProps {
	children: ReactNode;
}