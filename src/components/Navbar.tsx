import { useRef, useState } from 'react';
import { Dialog } from '@headlessui/react';
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
import { products } from '@/data/data';
import { SearchProps, Product } from '@/types/types';
import Cart from './Cart';

const navigation = [
	{ name: 'Menu', href: 'menu' },
	{ name: 'Testimonials', href: '#' },
	{ name: 'Contact Us', href: '#' },
];
const Navbar: React.FC<SearchProps> = ({ showSearch, setShowSearch }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isCartOpen, setCartOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const searchInputRef = useRef<HTMLInputElement>(null);
	const [searchResults, setSearchResults] = useState<Product[]>([]);

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

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchTerm = e.target.value.toLowerCase();
		setSearchTerm(searchTerm);
		setSearchResults(filteredProducts);
	};

	const filteredProducts = products.filter((product) =>
		product.name.toLowerCase().includes(searchTerm)
	);

	const handleLinkClick = () => {
		setSearchTerm('');
		if (searchInputRef.current) {
			searchInputRef.current.blur();
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
					{navigation.map((item) => (
						<ScrollLink
							key={item.name}
							to={item.href}
							smooth={true}
							offset={-60}
							className='text-sm font-semibold leading-6 text-white font-openSans hover:text-myOrange ease-in-out duration-300 transition cursor-pointer'
						>
							{item.name}
						</ScrollLink>
					))}
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
							<div className='w-36 flex relative'>
								<div className='w-36 flex'>
									<a
										onClick={handleToggleSearch}
										className='text-sm font-semibold p-1 leading-6 text-white hover:text-myOrange ease-in-out duration-300 transition flex items-center gap-x-2 cursor-pointer'
									>
										<MagnifyingGlassIcon className='h-5 w-5' />
									</a>
									<input
										type='text'
										placeholder='Search...'
										className='transition-width duration-300 ease-in-out block w-36 rounded-md border-0 bg-primary py-0.5 pl-1 pr-3 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-darkBlue sm:text-sm sm:leading-6'
										onClick={(e) => e.stopPropagation()}
										value={searchTerm}
										onChange={handleSearchChange}
									/>
								</div>
								{searchTerm && (
									<div className='absolute top-full -right-6 mt-6 bg-white border border-gray-200 rounded-md shadow-lg w-80 z-10 text-black'>
										{filteredProducts.map((product) => (
											<Link
												href={`/category/product/${product.name
													.replace(/\s+/g, '-')
													.toLowerCase()}`}
												key={product.id}
												className='block px-4 py-2 hover:bg-gray-100'
												onClick={handleLinkClick}
											>
												<div className='flex items-center space-x-3'>
													<img
														src={product.img}
														alt={product.name}
														className='w-10 h-10 object-cover rounded-full'
													/>

													<div className='flex  items-center justify-between w-full'>
														<p className='font-medium'>{product.name}</p>
														<p className='text-sm text-gray-600'>
															${product.price}
														</p>
													</div>
												</div>
											</Link>
										))}
									</div>
								)}
							</div>
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
			<Dialog
				as='div'
				className='lg:hidden'
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<Dialog.Panel className='fixed inset-x-0 w-auto h-full top-0 z-50 bg-secondary px-6 py-8 overflow-auto'>
					<div className='flex items-center justify-between'>
						<button
							type='button'
							className='-m-2.5 rounded-md p-2.5 text-gray-700'
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon className='h-6 w-6 text-white' aria-hidden='true' />
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='space-y-2 py-4'>
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-primary ease-in-out duration-300 transition'
									>
										{item.name}
									</a>
								))}
							</div>
							<div className='py-2 cursor-pointer'>
								<span className='flex items-center gap-2 -mx-2 rounded-lg px-2 py-1 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-primary ease-in-out duration-300 transition'>
									<PhoneIcon className='h-5 w-5' />
									<span>+1-555-157-5651</span>
								</span>
								<button
									onClick={toggleCart}
									className='relative text-sm font-semibold leading-6 py-1 my-2 text-white hover:text-myOrange ease-in-out duration-300 transition flex items-center gap-x-2 cursor-pointer'
								>
									<span className='flex justify-center items-center absolute left-1 top-0 bg-white text-black rounded-full font-bold w-4 h-4 text-xs font-openSans'>
										{cartItemsCount}
									</span>
									<ShoppingBagIcon className='h-5 w-5' />
									<span>Checkout</span>
								</button>
								<div className='relative my-4'>
									<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
										<MagnifyingGlassIcon
											className='h-5 w-5 '
											aria-hidden='true'
										/>
									</div>
									<input
										id='search'
										name='search'
										className='block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkBlue sm:text-sm sm:leading-6'
										placeholder='Search'
										type='search'
										onClick={(e) => e.stopPropagation()}
										value={searchTerm}
										onChange={handleSearchChange}
									/>
									{searchTerm && (
										<div className='absolute left-0 right-0 w-full mt-6 bg-white border border-gray-200 rounded-md shadow-lg z-10'>
											{filteredProducts.map((product) => (
												<Link
													href={`/product/${product.id}`}
													key={product.id}
													className='block px-4 py-2 hover:bg-gray-100'
													onClick={handleLinkClick}
												>
													<div className='flex items-center space-x-3'>
														<img
															src={product.img}
															alt={product.name}
															className='w-10 h-10 object-cover rounded-full'
														/>

														<div className='flex  items-center justify-between w-full'>
															<p className='font-medium'>{product.name}</p>
															<p className='text-sm text-gray-600'>
																${product.price}
															</p>
														</div>
													</div>
												</Link>
											))}
										</div>
									)}
								</div>
							</div>
							<Cart
								isCartOpen={isCartOpen}
								toggleCart={toggleCart}
								cartItemsCount={cartItemsCount}
							/>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
};

export default Navbar;
