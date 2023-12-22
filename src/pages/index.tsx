import About from '@/components/About';
import Category from '@/components/Category/Category';
import Deal from '@/components/Deal';
import Hero from '@/components/Hero';

export default function Home() {
	return (
		<main className='m-auto'>
			<Hero />
			<About />
			<Deal />
			<Category />
		</main>
	);
}
