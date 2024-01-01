import Navbar from '@/components/Navbar';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/Hero'));
const About = dynamic(() => import('@/components/About'));
const Deal = dynamic(() => import('@/components/Deal'));
const MenuBook = dynamic(() => import('@/components/MenuBook'));
const TodayDiscount = dynamic(() => import('@/components/TodayDiscount'));
const Chefs = dynamic(() => import('@/components/Chefs'));
const Blog = dynamic(() => import('@/components/Blog'));
const Reviews = dynamic(() => import('@/components/Reviews'));
const Gallery = dynamic(() => import('@/components/Gallery'));

export default function Home() {
	return (
		<main className='m-auto bg-primary'>
			<Hero />
			<About />
			<Deal />
			<MenuBook />
			<TodayDiscount />
			<Chefs />
			<Blog />
			<Reviews />
			<Gallery />
		</main>
	);
}
