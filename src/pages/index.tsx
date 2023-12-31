import About from '@/components/About';
import Chefs from '@/components/Chefs';
import Deal from '@/components/Deal';
import Hero from '@/components/Hero';
import MenuBook from '@/components/MenuBook';
import Reviews from '@/components/Reviews';

export default function Home() {
	return (
		<main className='m-auto'>
			<Hero />
			<About />
			<Deal />
			<MenuBook />
			<Chefs />
			<Reviews />
		</main>
	);
}
