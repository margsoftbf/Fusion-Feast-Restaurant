import { useRef, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import {
	Bars3Icon,
	MagnifyingGlassIcon,
	XMarkIcon,
	ShoppingBagIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { products, navigation } from '@/data/data';
import { SearchProps } from '@/types/types';
import DesktopSearchBar from './navbar/DesktopSearchBar';
import MobileMenu from './navbar/MobileMenu';
import { useRouter } from 'next/router';
import Cart from './Cart';

const Navbar: React.FC<SearchProps> = ({ showSearch, setShowSearch }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isCartOpen, setCartOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const searchInputRef = useRef<HTMLInputElement>(null);

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
		<header className='sticky top-0 z-[250] header-underline bg-primary '>
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
								key={item.name}
								to={item.href}
								smooth={true}
								offset={-60}
								className='text-sm font-semibold leading-6 text-white font-openSans hover:text-myOrange ease-in-out duration-300 transition cursor-pointer'
							>
								{item.name}
							</ScrollLink>
						) : (
							<a
								key={item.name}
								href='#'
								onClick={(e) => {
									e.preventDefault();
									handleNavigationClick(item.href);
								}}
								className='text-sm font-semibold leading-6 text-white font-openSans hover:text-myOrange ease-in-out duration-300 transition cursor-pointer'
							>
								{item.name}
							</a>
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
								<a
									onClick={handleToggleSearch}
									className='text-sm font-semibold p-1 leading-6 text-white hover:text-myOrange ease-in-out duration-300 transition flex items-center gap-x-2 cursor-pointer'
								>
									<MagnifyingGlassIcon className='h-5 w-5' />
									<span>Search</span>
								</a>
							</div>
						)}
					</div>

					<span className='flex items-center gap-2 mx-1 rounded-lg px-1 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-primary ease-in-out duration-300 transition cursor-pointer'>
						<PhoneIcon className='h-5 w-5' />
						<span>+1-555-157-5651</span>
					</span>
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
		</header>
	);
};

export default Navbar;
