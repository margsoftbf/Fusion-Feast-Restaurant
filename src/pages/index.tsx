import About from '@/components/About';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function Home() {
	const [showSearch, setShowSearch] = useState(false);

	return (
		<main className='m-auto'>
			<Navbar showSearch={showSearch} setShowSearch={setShowSearch} />
			<Hero showSearch={showSearch} setShowSearch={setShowSearch} />
			<About />
		</main>
	);
}
