import { CiPizza, CiBurger } from 'react-icons/ci';
import { BiSushi } from 'react-icons/bi';
import { MdOutlineDinnerDining } from 'react-icons/md';
import { LuSoup, LuSalad } from 'react-icons/lu';
import { Product } from '@/types/types';

export type Category = {
	name: string;
	slug: string;
	icon: JSX.Element;
};

export const categories: Category[] = [
	{ name: 'Pizza', slug: 'pizza', icon: <CiPizza /> },
	{ name: 'Burgers', slug: 'burgers', icon: <CiBurger /> },
	{ name: 'Sushi', slug: 'sushi', icon: <BiSushi /> },
	{ name: 'Dinner', slug: 'dinner', icon: <MdOutlineDinnerDining /> },
	{ name: 'Soups', slug: 'soups', icon: <LuSoup /> },
	{ name: 'Salads', slug: 'salads', icon: <LuSalad /> },
];

export const products: Product[] = [
	{
		id: 1,
		name: 'Margherita - 1',
		categorySlug: 'pizza',
		img: '/assets/products/pizza/margherita.webp',
		imgAlt: 'Margherita',
		rating: 4.5,
		reviews: 123,
		price: 10.99,
		description: 'Classic Margherita with mozzarella cheese and basil.',
	},
	{
		id: 2,
		name: 'Margherita - 2',
		categorySlug: 'pizza',
		img: '/assets/products/pizza/margherita.webp',
		imgAlt: 'Margherita',
		rating: 4.5,
		reviews: 123,
		price: 10.99,
		description: 'Classic Margherita with mozzarella cheese and basil.',
	},
	{
		id: 3,
		name: 'Margherita - 3',
		categorySlug: 'pizza',
		img: '/assets/products/pizza/margherita.webp',
		imgAlt: 'Margherita',
		rating: 3,
		reviews: 123,
		price: 10.99,
		description: 'Classic Margherita with mozzarella cheese and basil.',
	},
	{
		id: 4,
		name: 'Margherita - 4',
		categorySlug: 'pizza',
		img: '/assets/products/pizza/margherita.webp',
		imgAlt: 'Margherita',
		rating: 4,
		reviews: 123,
		price: 10.99,
		description: 'Classic Margherita with mozzarella cheese and basil.',
	},
	{
		id: 5,
		name: 'Margherita - 5',
		categorySlug: 'pizza',
		img: '/assets/products/pizza/margherita.webp',
		imgAlt: 'Margherita',
		rating: 4.5,
		reviews: 123,
		price: 10.99,
		description: 'Classic Margherita with mozzarella cheese and basil.',
	},
	{
		id: 6,
		name: 'Margherita - 6',
		categorySlug: 'pizza',
		img: '/assets/products/pizza/margherita.webp',
		imgAlt: 'Margherita',
		rating: 4.5,
		reviews: 123,
		price: 10.99,
		description: 'Classic Margherita with mozzarella cheese and basil.',
	},
	{
		id: 1,
		name: 'Cheeseburger - 1',
		categorySlug: 'burgers',
		img: '/assets/products/pizza/margherita.webp',
		imgAlt: 'Margherita',
		rating: 4.5,
		reviews: 123,
		price: 8.99,
		description:
			'Juicy beef patty with cheese, lettuce, tomato, and our special sauce.',
	},
	{
		id: 2,
		name: 'Cheeseburger - 2',
		categorySlug: 'burgers',
		img: '/assets/products/pizza/margherita.webp',
		imgAlt: 'Margherita',
		rating: 4.5,
		reviews: 123,
		price: 8.99,
		description:
			'Juicy beef patty with cheese, lettuce, tomato, and our special sauce.',
	},
	{
		id: 3,
		name: 'Hamburger - 3',
		categorySlug: 'burgers',
		img: '/assets/products/pizza/margherita.webp',
		imgAlt: 'Margherita',
		rating: 4.5,
		reviews: 123,
		price: 8.99,
		description:
			'Juicy beef patty with cheese, lettuce, tomato, and our special sauce.',
	},
	{
		id: 4,
		name: 'Hamburger - 4',
		categorySlug: 'burgers',
		img: '/assets/products/pizza/margherita.webp',
		imgAlt: 'Margherita',
		rating: 4.5,
		reviews: 123,
		price: 8.99,
		description:
			'Juicy beef patty with cheese, lettuce, tomato, and our special sauce.',
	},
	{
		id: 5,
		name: 'Hamburger - 5',
		categorySlug: 'burgers',
		img: '/assets/products/pizza/margherita.webp',
		imgAlt: 'Margherita',
		rating: 4.5,
		reviews: 123,
		price: 8.99,
		description:
			'Juicy beef patty with cheese, lettuce, tomato, and our special sauce.',
	},
];
