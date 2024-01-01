import About from '@/components/About';
import Blog from '@/components/Blog';
import Chefs from '@/components/Chefs';
import Deal from '@/components/Deal';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import MenuBook from '@/components/MenuBook';
import Reviews from '@/components/Reviews';
import TodayDiscount from '@/components/TodayDiscount';

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
