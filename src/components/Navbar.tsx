import { useRef, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import {
	Bars3Icon,
	MagnifyingGlassIcon,
	XMarkIcon,
	ShoppingBagIcon,
	UserIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { products, navigation } from '@/data/data';
import { SearchProps } from '@/types/types';
import MobileMenu from './navbar/MobileMenu';
import { useRouter } from 'next/router';
import Cart from './Cart';
import { motion } from 'framer-motion';
import LoginModal from './Auth/LoginModal';
import DesktopSearchBar from './navbar/DesktopSearchBar';
import { useSession, signOut } from 'next-auth/react';

const Navbar = ({ showSearch, setShowSearch }: SearchProps) => {
	const { data: session } = useSession();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [modalOpen, setOpenModal] = useState(false);
	const [isCartOpen, setCartOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const searchInputRef = useRef<HTMLInputElement>(null);
	const openModal = () => setOpenModal(true);
	const closeModal = () => setOpenModal(false);

	const toggleCart = () => {
		setCartOpen(!isCartOpen);
		setShowSearch(false);
	};
	const handleToggleSearch = (e: React.MouseEvent) => {
		setCartOpen(false);
		e.stopPropagation();
		setShowSearch(!showSearch);
	};

	const cartItemsCount = useSelector((state: RootState) =>
		state.cart.items.reduce((total, item) => total + item.quantity, 0)
	);

	const filteredProducts =
		searchTerm.trim() !== ''
			? products.filter((product) =>
					product.name.toLowerCase().includes(searchTerm.toLowerCase())
			  )
			: products;

	const handleLinkClick = () => {
		setSearchTerm('');
		setMobileMenuOpen(false);
		if (searchInputRef.current) {
			searchInputRef.current.blur();
		}
	};

	const router = useRouter();
	const isHomePage = router.pathname === '/';

	const handleNavigationClick = (href: string) => {
		if (href.startsWith('/')) {
			router.push(href);
		} else {
			router.push('/#' + href);
		}
	};

	return (
		<motion.header
			className='sticky top-0 z-[250] header-underline bg-primary '
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			whileInView='visible'
			viewport={{ once: true }}
			transition={{ duration: 0.4, type: 'ease-in' }}
		>
			<nav
				className='flex items-center justify-between  p-4 max-w-8xl mx-auto '
				aria-label='Global'
			>
				<div className='flex lg:hidden text-white'>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className='sr-only'>Open main menu</span>
						{mobileMenuOpen ? (
							<XMarkIcon className='h-6 w-6 text-white' aria-hidden='true' />
						) : (
							<Bars3Icon className='h-6 w-6 text-white' aria-hidden='true' />
						)}
					</button>
				</div>
				<div className='hidden lg:flex lg:gap-x-12 text-white'>
					{navigation.map((item) =>
						isHomePage && !item.href.startsWith('/') ? (
							<ScrollLink
								name={item.name}
								key={item.name}
								to={item.href}
								aria-label={item.description || item.name}
								smooth={true}
								offset={-60}
								className='text-sm font-semibold leading-6 text-white font-openSans hover:text-myOrange ease-in-out duration-300 transition cursor-pointer'
							>
								{item.name}
							</ScrollLink>
						) : (
							<Link
								key={item.name}
								href={`#${item.href}`}
								aria-label={item.description || item.name}
								onClick={(e) => {
									e.preventDefault();
									handleNavigationClick(item.href);
								}}
								className='text-sm font-semibold leading-6 text-white font-openSans hover:text-myOrange ease-in-out duration-300 transition cursor-pointer'
							>
								{item.name}
							</Link>
						)
					)}
				</div>
				<div className='flex lg:flex-1 text-3xl'>
					<Link href='/' className='-m-1.5 p-1.5 flex-grow'>
						<h2 className='font-bakilda text-white text-center'>
							Fusion Feast
						</h2>
					</Link>
				</div>
				<div className='hidden lg:flex lg:gap-x-8 text-white font-openSans relative'>
					<div className='flex items-center w-36'>
						{showSearch ? (
							<DesktopSearchBar
								searchTerm={searchTerm}
								setSearchTerm={setSearchTerm}
								searchResults={filteredProducts}
								onSearchClick={handleToggleSearch}
								onResultClick={handleLinkClick}
							/>
						) : (
							<div className='w-36 flex justify-end'>
								<button
									onClick={handleToggleSearch}
									className='text-sm font-semibold p-1 leading-6 text-white hover:text-myOrange ease-in-out duration-300 transition flex items-center gap-x-2 cursor-pointer'
								>
									<MagnifyingGlassIcon className='h-5 w-5' />
									<span>Search</span>
								</button>
							</div>
						)}
					</div>

					{/* <span className='flex items-center gap-2 mx-1 rounded-lg px-1 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-primary ease-in-out duration-300 transition cursor-pointer'>
						<PhoneIcon className='h-5 w-5' />
						<span>+1-555-157-5651</span>
					</span> */}
					<button
						onClick={toggleCart}
						className='relative text-sm font-semibold leading-6 p-1 text-white hover:text-myOrange ease-in-out duration-300 transition flex items-center gap-x-2 cursor-pointer'
					>
						<span className='flex justify-center items-center absolute left-1 top-0 bg-white text-black rounded-full font-bold w-4 h-4 text-xs font-openSans'>
							{cartItemsCount}
						</span>
						<ShoppingBagIcon className='h-5 w-5' />
						<span>Checkout</span>
					</button>
					<Cart
						isCartOpen={isCartOpen}
						toggleCart={toggleCart}
						cartItemsCount={cartItemsCount}
					/>
					{!session ? (
						<button
							onClick={openModal}
							className='relative text-sm font-semibold leading-6 p-1 text-white hover:text-myOrange ease-in-out duration-300 transition flex items-center gap-x-1 cursor-pointer'
						>
							<UserIcon className='w-5 h-5' />
							<span>Login</span>
						</button>
					) : (
						<>
							<button
								onClick={() => router.push('/account')}
								className='relative text-sm font-semibold leading-6 p-1 text-white hover:text-myOrange ease-in-out duration-300 transition flex items-center gap-x-1 cursor-pointer'
							>
								<UserIcon className='w-5 h-5' />
								<span>Your account</span>
							</button>
							<button
								onClick={() => signOut()}
								className='relative text-sm font-semibold leading-6 p-1 text-white hover:text-myOrange ease-in-out duration-300 transition flex items-center gap-x-1 cursor-pointer'
							>
								<UserIcon className='w-5 h-5' />
								<span>Logout</span>
							</button>
						</>
					)}
					
					<LoginModal isOpen={modalOpen} closeModal={closeModal} />
				</div>
			</nav>
			<MobileMenu
				isOpen={mobileMenuOpen}
				onClose={() => setMobileMenuOpen(false)}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				searchResults={filteredProducts}
				onResultClick={handleLinkClick}
				toggleCart={toggleCart}
				isCartOpen={isCartOpen}
				cartItemsCount={cartItemsCount}
			/>
		</motion.header>
	);
};

export default Navbar;
