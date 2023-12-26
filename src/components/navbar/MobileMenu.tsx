import React from 'react';
import { Dialog } from '@headlessui/react';
import {
	XMarkIcon,
	ShoppingBagIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline';
import MobileSearchBar from './MobileSearchBar';
import Cart from '../Cart';
import { Product } from '@/types/types';
import { navigation } from '@/data/data';
import { useRouter } from 'next/router';

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
	searchTerm: string;
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
	searchResults: Product[];
	onResultClick: (id: number) => void;
	isCartOpen: boolean;
	toggleCart: () => void;
	cartItemsCount: number;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
	isOpen,
	onClose,
	searchTerm,
	setSearchTerm,
	searchResults,
	onResultClick,
	toggleCart,
	isCartOpen,
	cartItemsCount,
}) => {
	const router = useRouter();
	const isHomePage = router.pathname === '/';

	const handleNavigationClick = (href: string) => {
		onClose();
		if (!isHomePage) {
			router.push('/#' + href);
		} else {
			router.push('#' + href);
		}
	};
	return (
		<Dialog as='div' className='lg:hidden' open={isOpen} onClose={onClose}>
			<Dialog.Panel className='fixed inset-x-0 w-auto h-full top-0 z-50 bg-secondary px-6 py-8 overflow-auto'>
				<div className='flex items-center justify-between'>
					<button
						type='button'
						className='-m-2.5 rounded-md p-2.5 text-gray-700'
						onClick={onClose}
					>
						<span className='sr-only'>Close menu</span>
						<XMarkIcon className='h-6 w-6 text-white' aria-hidden='true' />
					</button>
				</div>
				<div className='mt-6 flow-root'>
					<div className='-my-6 divide-y divide-gray-500/10'>
						<div className='space-y-2 py-4'>
							{navigation.map((item) => (
								<button
									key={item.name}
									onClick={() => handleNavigationClick(item.href)}
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-primary ease-in-out duration-300 transition'
								>
									{item.name}
								</button>
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
							<MobileSearchBar
								searchTerm={searchTerm}
								setSearchTerm={setSearchTerm}
								searchResults={searchResults}
								onResultClick={onResultClick}
							/>
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
	);
};

export default MobileMenu;
