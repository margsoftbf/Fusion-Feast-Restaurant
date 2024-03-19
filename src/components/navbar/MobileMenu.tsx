import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import {
	XMarkIcon,
	ShoppingBagIcon,
	PhoneIcon,
	UserIcon,
} from '@heroicons/react/24/outline';
import { MobileMenuProps } from '@/types/types';
import { navigation } from '@/data/data';
import { useRouter } from 'next/router';
import LoginModal from '../Auth/LoginModal';
import MobileSearchBar from './MobileSearchBar';
import { useSession, signOut } from 'next-auth/react';

const MobileMenu = ({
	isOpen,
	onClose,
	searchTerm,
	setSearchTerm,
	searchResults,
	onResultClick,
	toggleCart,
	isCartOpen,
	cartItemsCount,
}: MobileMenuProps) => {
	const router = useRouter();
	const { data: session } = useSession();
	const isHomePage = router.pathname === '/';
	const [modalOpen, setOpenModal] = useState(false);
	const openModal = () => setOpenModal(true);
	const closeModal = () => setOpenModal(false);

	const handleNavigationClick = (href: string) => {
		onClose();
		if (!isHomePage) {
			router.push('/#' + href);
		} else if (href.startsWith('/')) {
			router.push(href);
		} else {
			router.push('#' + href);
		}
	};

	const handleCheckout = () => {
		onClose();
		router.push('/checkout');
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
									aria-label={item.description || item.name}
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
								onClick={handleCheckout}
								className='relative my-2  ease-in-out duration-300 transition gap-x-2 cursor-pointer flex items-center gap-2 -mx-2 rounded-lg px-2 py-1 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-primary'
							>
								<span className='flex justify-center items-center absolute left-1 top-0 bg-white text-black rounded-full font-bold w-4 h-4 text-xs font-openSans'>
									{cartItemsCount}
								</span>
								<ShoppingBagIcon className='h-5 w-5' />
								<span>Checkout</span>
							</button>
							{!session ? (
								<button
									onClick={openModal}
									className='relative my-2  ease-in-out duration-300 transition gap-x-2 cursor-pointer flex items-center gap-2 -mx-2 rounded-lg px-2 py-1 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-primary'
								>
									<UserIcon className='w-5 h-5' />
									<span>Login</span>
								</button>
							) : (
								<>
									<button
										onClick={() => router.push('/account')}
										className='relative my-2  ease-in-out duration-300 transition gap-x-2 cursor-pointer flex items-center gap-2 -mx-2 rounded-lg px-2 py-1 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-primary'
									>
										<UserIcon className='w-5 h-5' />
										<span>Your account</span>
									</button>
									<button
										onClick={() => signOut()}
										className='relative my-2  ease-in-out duration-300 transition gap-x-2 cursor-pointer flex items-center gap-2 -mx-2 rounded-lg px-2 py-1 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-primary'
									>
										<UserIcon className='w-5 h-5' />
										<span>Logout</span>
									</button>
								</>
							)}
							<LoginModal isOpen={modalOpen} closeModal={closeModal} />
							<MobileSearchBar
								searchTerm={searchTerm}
								setSearchTerm={setSearchTerm}
								searchResults={searchResults}
								onResultClick={onResultClick}
							/>
						</div>
					</div>
				</div>
			</Dialog.Panel>
		</Dialog>
	);
};

export default MobileMenu;
