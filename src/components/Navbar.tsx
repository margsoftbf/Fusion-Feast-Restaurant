import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import {
	Bars3Icon,
	MagnifyingGlassIcon,
	XMarkIcon,
	ListBulletIcon,
	ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import { SearchProps } from '@/types/types';
const navigation = [
	{ name: 'Menu', href: '#' },
	{ name: 'Testimonials', href: '#' },
	{ name: 'Contact Us', href: '#' },
];
const Navbar: React.FC<SearchProps> = ({ showSearch, setShowSearch }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const handleToggleSearch = (e: React.MouseEvent) => {
		e.stopPropagation();
		setShowSearch(!showSearch);
	};



	return (
		<header className='relative inset-x-0 top-0 z-50 header-underline bg-primary'>
			<nav
				className='flex items-center justify-between p-4 lg:px-8 max-w-8xl mx-auto'
				aria-label='Global'
			>
				<div className='flex lg:hidden text-white'>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className='sr-only'>Open main menu</span>
						<Bars3Icon className='h-6 w-6 text-white' aria-hidden='true' />
					</button>
				</div>
				<div className='hidden lg:flex lg:gap-x-12 text-white'>
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className='text-sm font-semibold leading-6 text-white font-openSans hover:text-myOrange ease-in-out duration-300 transition'
						>
							{item.name}
						</a>
					))}
				</div>
				<div className='flex lg:flex-1 justify-center text-3xl'>
					<a href='#' className='-m-1.5 p-1.5 flex-grow'>
						<h2 className='font-bakilda text-white text-center'>
							Fusion Feast
						</h2>
					</a>
				</div>
				<div className='hidden lg:flex lg:gap-x-8 text-white font-openSans relative'>
					<div className='flex items-center w-36'>
						{showSearch ? (
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
								/>
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
					<a
						href='#'
						className='relative p-1 text-sm font-semibold leading-6 text-white hover:text-myOrange ease-in-out duration-300 transition flex items-center gap-x-2'
					>
						<ListBulletIcon className='h-5 w-5' />
						<span>Order</span>
					</a>
					<a
						href='#'
						className='relative justify-center text-sm font-semibold leading-6  p-1 text-white hover:text-myOrange ease-in-out duration-300 transition flex items-center gap-x-2'
					>
						<span className='flex justify-center items-center absolute -left-1 top-0 bg-white text-black rounded-full w-4 h-4 text-xs font-openSans'>
							1
						</span>
						<ShoppingBagIcon className='h-5 w-5' />
						<span>Checkout</span>
					</a>
				</div>
			</nav>
			<Dialog
				as='div'
				className='lg:hidden'
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className='fixed inset-0 z-50' />
				<Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-secondary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
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
							<div className='py-2'>
								<a
									href='#'
									className='flex items-center gap-2 -mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-primary ease-in-out duration-300 transition'
								>
									<ListBulletIcon className='h-5 w-5' />
									<span>Order online</span>
								</a>
								<a
									href='#'
									className='relative flex items-center gap-2 -mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-primary ease-in-out duration-300 transition'
								>
									<span className='flex justify-center items-center absolute left-1 top-2 bg-white text-black rounded-full w-4 h-4 text-xs font-openSans'>
										1
									</span>
									<ShoppingBagIcon className='h-5 w-5' />
									<span>Checkout</span>
								</a>
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
									/>
								</div>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
};

export default Navbar;
