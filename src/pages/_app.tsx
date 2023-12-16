import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>Fusion Feast Restaurant</title>
				<meta name='description' content='Fusion Feast Restaurant' />
				<link rel='icon' href='/favicon.ico' />
				<meta httpEquiv='Content-Language' content='en' />
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
