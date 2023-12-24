import About from '@/components/About';
import Deal from '@/components/Deal';
import Hero from '@/components/Hero';
import MenuBook from '@/components/MenuBook';

export default function Home() {
	return (
		<main className='m-auto'>
			<Hero />
			<About />
			<Deal />
			<MenuBook />
		</main>
	);
}
