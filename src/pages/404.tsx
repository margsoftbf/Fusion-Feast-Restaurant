import Link from 'next/link';

const Custom404 = () => {
	return (
		<div className='bg-third flex flex-col items-center justify-center relative py-12 lg:py-28'>
			<div className='relative py-12  h-96'>
				<img src='/assets/404/404.png' alt='' className='relative' />
				<img
					src='/assets/404/tabasco.png'
					alt=''
					className='absolute top-20 left-12'
				/>
			</div>
			<p className='font-bakilda text-3xl font-bold text-white my-4'>
				Oops! I think we just lost something.
			</p>
			<p className='font-openSans text-center text-white font-medium'>
				Much as we would love to serve it up to you, we’d suggest you go back
				and try a different link.
			</p>
			<Link
				href='/'
				className='mt-8 w-48 flex justify-center items-center font-semibold p-2 gap-2 rounded-md bg-primary text-white hover:bg-secondary duration-300 ease-in-out transition cursor-pointer'
			>
				Back to Home
			</Link>
		</div>
	);
};

export default Custom404;
