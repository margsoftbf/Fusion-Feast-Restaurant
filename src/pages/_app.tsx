import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
	const [showSearch, setShowSearch] = useState(false);

	return (
		<Provider store={store}>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<title>Fusion Feast Restaurant</title>
				<meta name='description' content='Fusion Feast Restaurant' />
				<link rel='icon' href='/favicon.ico' />
				<meta httpEquiv='Content-Language' content='en' />
			</Head>
			<Navbar showSearch={showSearch} setShowSearch={setShowSearch} />
			<main onClick={() => setShowSearch(false)} className='m-auto'>
				<Component {...pageProps} setShowSearch={setShowSearch} />
			</main>
		</Provider>
	);
};

export default MyApp;
