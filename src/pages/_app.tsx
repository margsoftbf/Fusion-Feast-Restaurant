import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
	const [showSearch, setShowSearch] = useState(false);

	return (
		<>
			<Head>
				<title>Fusion Feast Restaurant</title>
				<meta name='description' content='Fusion Feast Restaurant' />
				<link rel='icon' href='/favicon.ico' />
				<meta httpEquiv='Content-Language' content='en' />
			</Head>
			<Navbar showSearch={showSearch} setShowSearch={setShowSearch} />
			<main onClick={() => setShowSearch(false)} className='m-auto'>
				<Component {...pageProps} setShowSearch={setShowSearch} />
			</main>
		</>
	);
};

export default MyApp;
