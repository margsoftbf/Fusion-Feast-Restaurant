import React from 'react';
import {
	Ellipse,
	EmptyEllipse,
	SubTitleLeft,
	SubTitleRight,
} from '../../public/assets/svg';

const Blog = () => {
	return (
		<div className='bg-primary py-8 relative' id='menu'>
			<Ellipse className='w-3 h-3 absolute bottom-0 right-6 lg:w-5 lg:h-5 lg:bottom-12' />
			<Ellipse className='w-1 h-1 absolute top-48 left-48 lg:w-5 lg:h-5 lg:top-28' />
			<EmptyEllipse className='w-2 h-2 absolute top-32 right-96 lg:w-5 lg:h-5 lg:top-40' />

			<div className='max-w-8xl mx-auto relative'>
				<div>
					<div className='flex items-center justify-center gap-2 relative'>
						<SubTitleLeft className='w-7 h-7' />
						<h2 className='font-lemonada text-myOrange font-light'>
							Latest Blog
						</h2>
						<SubTitleRight className='w-7 h-7' />
					</div>
					<div className='flex items-center justify-center gap-2 relative'>
						<h2 className='font-bakilda text-2xl text-center my-2 md:text-left md:text-4xl text-white'>
							Our Latest News & Blog
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
