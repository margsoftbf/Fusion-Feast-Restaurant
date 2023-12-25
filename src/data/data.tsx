import { CiPizza, CiBurger } from 'react-icons/ci';
import { BiSushi } from 'react-icons/bi';
import { MdOutlineDinnerDining } from 'react-icons/md';
import { LuSoup, LuSalad } from 'react-icons/lu';
import { Product, ReviewsProps } from '@/types/types';

export type Category = {
	name: string;
	slug: string;
	icon: JSX.Element;
};

export const navigation = [
	{ name: 'Menu', href: 'menu' },
	{ name: 'Testimonials', href: 'testimonials' },
	{ name: 'Contact Us', href: 'contact' },
];

export const categories: Category[] = [
	{ name: 'Pizza', slug: 'pizza', icon: <CiPizza /> },
	{ name: 'Burgers', slug: 'burgers', icon: <CiBurger /> },
	{ name: 'Sushi', slug: 'sushi', icon: <BiSushi /> },
	{ name: 'Dinner', slug: 'dinner', icon: <MdOutlineDinnerDining /> },
	{ name: 'Soups', slug: 'soups', icon: <LuSoup /> },
	{ name: 'Salads', slug: 'salads', icon: <LuSalad /> },
];

export const reviews: ReviewsProps[] = [
	{
		id: 1,
		name: 'Amanda Morton',
		position: 'Head Manager, Slack',
		img: '/assets/reviews/ReviewMenTwo.webp',
		imgAlt: 'Amanda Morton Photo',
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
		laborum vitae consectetur repellat molestias reiciendis quia ullam
		cum, ut hic officiis nobis iure beatae ipsum sapiente quo possimus a
		nemo?`,
		rating: 5,
	},
	{
		id: 2,
		name: 'James Smith',
		position: 'Marketing Director, Microsoft',
		img: '/assets/reviews/ReviewMenThree.webp',
		imgAlt: 'James Smith Photo',
		text: 'Extremely professional approach to clients. I highly recommend working with this company, as its rare to find such a high level of service',
		rating: 4,
	},
	{
		id: 3,
		name: 'Emily Johnson',
		position: 'Project Manager, Google',
		img: '/assets/reviews/ReviewWomenOne.webp',
		imgAlt: 'Emily Johnson Photo',
		text: 'Excellent collaboration and communication. The project was completed on time and met all expectations. Definitely recommend!',
		rating: 5,
	},
	{
		id: 4,
		name: 'Michael Brown',
		position: 'IT Specialist, Amazon',
		img: '/assets/reviews/ReviewWomenTwo.webp',
		imgAlt: 'Michael Brown Photo',
		text: 'Great quality of service, but the turnaround time could be shorter. Overall, I am satisfied with the final outcome.',
		rating: 3,
	},
	{
		id: 5,
		name: 'Sophia Davis',
		position: 'Creative Director, Adobe',
		img: '/assets/reviews/ReviewWomenThree.webp',
		imgAlt: 'Sophia Davis Photo',
		text: 'Incredible creativity and an innovative approach to the project. Working with this team is an absolute pleasure.',
		rating: 5,
	},
	{
		id: 6,
		name: 'William Wilson',
		position: 'Financial Director, Tesla',
		img: '/assets/reviews/ReviewMenOne.webp',
		imgAlt: 'William Wilson Photo',
		text: 'High-quality services, but the price could be more competitive. Recommended for those looking for uncompromised quality.',
		rating: 4,
	},
];

type Addon = {
	name: string;
	price: number;
};

export const addons: Record<string, Addon[]> = {
	pizza: [
		{ name: 'Cheese', price: 1 },
		{ name: 'Salami', price: 1.5 },
		{ name: 'Olives', price: 0.5 },
	],
	burgers: [
		{ name: 'Cheese', price: 0.75 },
		{ name: 'Bacon', price: 1.25 },
	],
};

export const products: Product[] = [
	{
		id: 1,
		name: 'Margherit',
		categorySlug: 'pizza',
		img: '/assets/products/pizza/margherita.webp',
		imgBig: '/assets/products/pizza/margheritaBig.webp',
		imgAlt: 'Margherita',
		rating: 4.5,
		reviews: 123,
		price: 9.99,
		description: 'Classic Margherita with mozzarella cheese and basil.',
		longDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto quaerat facilis fugit enim beatae optio reiciendis explicabo quos tenetur? Vitae, quidem. Odit commodi doloremque impedit maxime illo eaque, corrupti non vel facilis voluptate suscipit! Neque impedit nesciunt itaque totam dolore fuga enim ad quo earum, corporis, provident, dolorem officia.`,
	},
	{
		id: 2,
		name: 'Margheritka',
		categorySlug: 'pizza',
		img: '/assets/products/pizza/margherita.webp',
		imgBig: '/assets/products/pizza/margheritaBig.webp',
		imgAlt: 'Margherita',
		rating: 4.5,
		reviews: 123,
		price: 17.99,
		description: 'Classic Margherita with mozzarella cheese and basil.',
		longDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto quaerat facilis fugit enim beatae optio reiciendis explicabo quos tenetur? Vitae, quidem. Odit commodi doloremque impedit maxime illo eaque, corrupti non vel facilis voluptate suscipit! Neque impedit nesciunt itaque totam dolore fuga enim ad quo earum, corporis, provident, dolorem officia.`,
	},
	{
		id: 3,
		name: 'Prosa',
		categorySlug: 'pizza',
		img: '/assets/products/pizza/margherita.webp',
		imgBig: '/assets/products/pizza/margheritaBig.webp',
		imgAlt: 'Margherita',
		rating: 3,
		reviews: 123,
		price: 11.99,
		description: 'Classic Margherita with mozzarella cheese and basil.',
		longDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto quaerat facilis fugit enim beatae optio reiciendis explicabo quos tenetur? Vitae, quidem. Odit commodi doloremque impedit maxime illo eaque, corrupti non vel facilis voluptate suscipit! Neque impedit nesciunt itaque totam dolore fuga enim ad quo earum, corporis, provident, dolorem officia.`,
	},
	{
		id: 4,
		name: 'Margh',
		categorySlug: 'pizza',
		img: '/assets/products/pizza/margherita.webp',
		imgBig: '/assets/products/pizza/margheritaBig.webp',
		imgAlt: 'Margherita',
		rating: 4,
		reviews: 123,
		price: 12.99,
		description: 'Classic Margherita with mozzarella cheese and basil.',
		longDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto quaerat facilis fugit enim beatae optio reiciendis explicabo quos tenetur? Vitae, quidem. Odit commodi doloremque impedit maxime illo eaque, corrupti non vel facilis voluptate suscipit! Neque impedit nesciunt itaque totam dolore fuga enim ad quo earum, corporis, provident, dolorem officia.`,
	},
	{
		id: 5,
		name: 'AMarg',
		categorySlug: 'pizza',
		img: '/assets/products/pizza/margherita.webp',
		imgBig: '/assets/products/pizza/margheritaBig.webp',
		imgAlt: 'Margherita',
		rating: 4.5,
		reviews: 123,
		price: 10.99,
		description: 'Classic Margherita with mozzarella cheese and basil.',
		longDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto quaerat facilis fugit enim beatae optio reiciendis explicabo quos tenetur? Vitae, quidem. Odit commodi doloremque impedit maxime illo eaque, corrupti non vel facilis voluptate suscipit! Neque impedit nesciunt itaque totam dolore fuga enim ad quo earum, corporis, provident, dolorem officia.`,
	},
	{
		id: 1,
		name: 'Cheeseburger - 1',
		categorySlug: 'burgers',
		img: '/assets/products/pizza/margherita.webp',
		imgBig: '/assets/products/pizza/margheritaBig.webp',
		imgAlt: 'Margherita',
		rating: 4.5,
		reviews: 123,
		price: 8.99,
		description:
			'Juicy beef patty with cheese, lettuce, tomato, and our special sauce.',
		longDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto quaerat facilis fugit enim beatae optio reiciendis explicabo quos tenetur? Vitae, quidem. Odit commodi doloremque impedit maxime illo eaque, corrupti non vel facilis voluptate suscipit! Neque impedit nesciunt itaque totam dolore fuga enim ad quo earum, corporis, provident, dolorem officia.`,
	},
	{
		id: 2,
		name: 'Cheeseburger - 2',
		categorySlug: 'burgers',
		img: '/assets/products/pizza/margherita.webp',
		imgBig: '/assets/products/pizza/margheritaBig.webp',
		imgAlt: 'Margherita',
		rating: 4.5,
		reviews: 123,
		price: 8.99,
		description:
			'Juicy beef patty with cheese, lettuce, tomato, and our special sauce.',
		longDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto quaerat facilis fugit enim beatae optio reiciendis explicabo quos tenetur? Vitae, quidem. Odit commodi doloremque impedit maxime illo eaque, corrupti non vel facilis voluptate suscipit! Neque impedit nesciunt itaque totam dolore fuga enim ad quo earum, corporis, provident, dolorem officia.`,
	},
	{
		id: 3,
		name: 'Hamburger - 3',
		categorySlug: 'burgers',
		img: '/assets/products/pizza/margherita.webp',
		imgBig: '/assets/products/pizza/margheritaBig.webp',
		imgAlt: 'Margherita',
		rating: 4.5,
		reviews: 123,
		price: 8.99,
		description:
			'Juicy beef patty with cheese, lettuce, tomato, and our special sauce.',
		longDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto quaerat facilis fugit enim beatae optio reiciendis explicabo quos tenetur? Vitae, quidem. Odit commodi doloremque impedit maxime illo eaque, corrupti non vel facilis voluptate suscipit! Neque impedit nesciunt itaque totam dolore fuga enim ad quo earum, corporis, provident, dolorem officia.`,
	},
	{
		id: 4,
		name: 'Hamburger - 4',
		categorySlug: 'burgers',
		img: '/assets/products/pizza/margherita.webp',
		imgBig: '/assets/products/pizza/margheritaBig.webp',
		imgAlt: 'Margherita',
		rating: 4.5,
		reviews: 123,
		price: 8.99,
		description:
			'Juicy beef patty with cheese, lettuce, tomato, and our special sauce.',
		longDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto quaerat facilis fugit enim beatae optio reiciendis explicabo quos tenetur? Vitae, quidem. Odit commodi doloremque impedit maxime illo eaque, corrupti non vel facilis voluptate suscipit! Neque impedit nesciunt itaque totam dolore fuga enim ad quo earum, corporis, provident, dolorem officia.`,
	},
	{
		id: 5,
		name: 'Hamburger - 5',
		categorySlug: 'burgers',
		img: '/assets/products/pizza/margherita.webp',
		imgBig: '/assets/products/pizza/margheritaBig.webp',
		imgAlt: 'Margherita',
		rating: 4.5,
		reviews: 123,
		price: 8.99,
		description:
			'Juicy beef patty with cheese, lettuce, tomato, and our special sauce.',
		longDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto quaerat facilis fugit enim beatae optio reiciendis explicabo quos tenetur? Vitae, quidem. Odit commodi doloremque impedit maxime illo eaque, corrupti non vel facilis voluptate suscipit! Neque impedit nesciunt itaque totam dolore fuga enim ad quo earum, corporis, provident, dolorem officia.`,
	},
];
