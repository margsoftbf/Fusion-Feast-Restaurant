import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import Modal from 'react-modal';
import { ModalProvider } from '@/context/ModalContext';
import Footer from '@/components/Footer';
import { SessionProvider } from 'next-auth/react';

const DynamicNavbar = dynamic(() => import('@/components/Navbar'), {
	loading: () => <p>Loading Navbar...</p>,
	ssr: true,
});

const MyApp = ({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) => {
	const [showSearch, setShowSearch] = useState(false);

	useEffect(() => {
		Modal.setAppElement('#__next');
	}, []);

	return (
		<SessionProvider session={session}>
			<Provider store={store}>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<title>Fusion Feast Restaurant</title>
					<meta name='description' content='Fusion Feast Restaurant' />
					<link rel='icon' href='/favicon.ico' />
					<meta httpEquiv='Content-Language' content='en' />
				</Head>
					<DynamicNavbar
						showSearch={showSearch}
						setShowSearch={setShowSearch}
					/>
					<main onClick={() => setShowSearch(false)} className='m-auto'>
						<ModalProvider>
							<Component {...pageProps} setShowSearch={setShowSearch} />
						</ModalProvider>
					</main>
					<Footer />
			</Provider>
		</SessionProvider>
	);
};

export default MyApp;
