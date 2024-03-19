import YourInfo from '@/components/account/YourInfo/YourInfo';
import YourOrders from '@/components/account/YourOrders/YourOrders';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
const Account = () => {
	const { data: session, status } = useSession();
	const [activeView, setActiveView] = useState('info');
	const router = useRouter();

	useEffect(() => {
		if (status === 'unauthenticated') {
			router.replace('/');
		}
	}, [status, router]);

	if (status === 'loading') {
		return <div>Loading...</div>;
	}

	return (
		<div className='relative bg-primary text-white'>
			<div className='max-w-8xl mx-auto'>
				<div className='flex flex-col items-center justify-center gap-2 w-full lg:flex-row lg:items-start lg:py-6'>
					<div className='w-5/6 lg:w-1/6  mr-2'>
						<div className='bg-third text-white rounded-md py-4 my-2'>
							<h3 className='font-oswald text-center text-2xl pb-4'>Menu</h3>
							<ul className=' mx-4 font-openSans grid grid-cols-2 gap-4 lg:grid-cols-1'>
								<li
									className={`bg-secondary rounded-md ${
										activeView === 'info' ? 'text-myOrange' : 'text-white'
									}`}
								>
									<button
										onClick={() => setActiveView('info')}
										className='flex items-center cursor-pointer w-full  hover:text-black p-2 font-semibold hover:bg-myOrange duration-200 transition ease-linear rounded-md px-2 text-[14px]'
									>
										Your info
									</button>
								</li>
								<li
									className={`bg-secondary rounded-md ${
										activeView === 'orders' ? 'text-myOrange' : 'text-white'
									}`}
								>
									<button
										onClick={() => setActiveView('orders')}
										className='flex font-semibold items-center cursor-pointer w-full  hover:text-black p-2 hover:bg-myOrange duration-200 transition ease-linear rounded-md px-2 text-[14px]'
									>
										Your orders
									</button>
								</li>
							</ul>
						</div>
					</div>
					<div className='w-5/6'>
						{activeView === 'info' && <YourInfo />}
						{activeView === 'orders' && <YourOrders />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Account;
