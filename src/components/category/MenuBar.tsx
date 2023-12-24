import React from 'react';
import { useRouter } from 'next/router';
import { categories } from '@/data/data';
import Link from 'next/link';
const MenuBar = () => {
	const router = useRouter();
	const { slug } = router.query;
	return (
		<div className='bg-third text-white rounded-md py-4 my-2'>
			<h3 className='font-oswald text-center text-2xl pb-4'>Menu Bar</h3>
			<ul className=' mx-4 font-openSans grid grid-cols-2 gap-4 lg:grid-cols-1'>
				{categories.map((category) => (
					<li key={category.slug} className=' bg-secondary rounded-md px-1'>
						<Link
							href={`/category/${category.slug}`}
							className={`flex items-center ${
								category.slug === (slug as string)
									? 'text-myOrange'
									: 'text-white'
							} hover:text-black p-2  hover:bg-myOrange  duration-200 transition ease-linear rounded-md`}
						>
							{category.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MenuBar;
