import React, { useState } from 'react';
import {
	Ellipse,
	EmptyEllipse,
	SubTitleLeft,
	SubTitleRight,
} from '../../public/assets/svg';
import { blogPosts } from '@/data/data';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { BlogPostTypes } from '@/types/types';
import Modal from 'react-modal';
import Image from 'next/image';

const Blog = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedPost, setSelectedPost] = useState<BlogPostTypes | null>(null);

	const openModal = (blogPosts: BlogPostTypes) => {
		setSelectedPost(blogPosts);
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setSelectedPost(null);
		setModalIsOpen(false);
	};

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
				<div className='mx-auto mt-16 flex flex-wrap justify-center gap-8 p-4 lg:gap-x-8 '>
					{blogPosts.map((post) => (
						<div
							key={post.id}
							onClick={(e) => {
								e.preventDefault();
								openModal(post);
							}}
							className='flex flex-col items-center justify-between w-full max-w-sm bg-third hover:bg-secondary duration-300 transition ease-in-out rounded-2xl p-4 cursor-pointer'
						>
							<div className='relative w-full '>
								<Image
									src={post.imageUrl}
									alt='Laptop'
									width={1920}
									height={1080}
									sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
									className='rounded-2xl bg-gray-100'
								/>
								<div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
							</div>
							<div className='max-w-xl '>
								<div className='mt-8 flex items-center gap-x-4 text-xs'>
									<time dateTime={post.datetime} className='text-white'>
										{post.date}
									</time>
									<a
										href={post.category.href}
										className='relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
									>
										{post.category.title}
									</a>
								</div>
								<div className='group relative'>
									<h3 className='mt-3 text-lg font-semibold leading-6 text-myOrange '>
										<span className='absolute inset-0' />
										{post.title}
									</h3>
									<p className='mt-5 line-clamp-3 text-sm leading-6 text-myGray'>
										{post.description}
									</p>
								</div>
								<div className='relative mt-8 flex items-center gap-x-4'>
									<Image
										src={post.author.imageUrl}
										alt='Author photo'
										width={40}
										height={40}
									/>
									<div className='text-sm leading-6'>
										<p className='font-semibold text-white'>
											<a href={post.author.href}>
												<span className='absolute inset-0' />
												{post.author.name}
											</a>
										</p>
										<p className='text-myGray'>{post.author.role}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				{selectedPost && (
					<Modal
						isOpen={modalIsOpen}
						onRequestClose={closeModal}
						contentLabel='Example Modal'
						className='inset-0 flex relative max-h-[80%] justify-center items-center z-50 overflow-y-auto mx-4 my-12 top-12 outline-none'
						overlayClassName='fixed top-0 left-0 right-0 bottom-0 bg-black/95 flex justify-center items-center z-50'
					>
						<div className='bg-white rounded-md p-4 mx-auto max-w-8xl px-6 lg:px-8 text-white relative overflow-y-auto max-h-[80vh]'>
							<button
								className='text-black absolute right-2 top-2 z-50'
								onClick={closeModal}
							>
								<XMarkIcon className='h-6 w-6' />
							</button>
							<div className='flex flex-col items-start justify-between'>
								<div className='relative mt-6 '>
									<Image
										src={selectedPost.imageUrl}
										alt='Laptop picture'
										width={1600}
										height={900}
										objectFit='cover'
										className='relative max-h-96 w-full object-cover rounded-2xl'
									/>
									<div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
								</div>
								<div className='max-w-xl'>
									<div className='mt-8 flex items-center gap-x-4 text-xs'>
										<time
											dateTime={selectedPost.datetime}
											className='text-gray-500'
										>
											{selectedPost.date}
										</time>
										<a
											href={selectedPost.category.href}
											className='relative rounded-full bg-myGray px-3 py-1.5 font-medium text-white '
										>
											{selectedPost.category.title}
										</a>
									</div>
									<div className='group relative'>
										<h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
											<a href='#'>
												<span className='absolute inset-0' />
												{selectedPost.title}
											</a>
										</h3>
										<p className='mt-5 text-sm leading-6 text-gray-600'>
											{selectedPost.description}
										</p>
									</div>
									<div className='relative mt-8 flex items-center gap-x-4'>
										<div className='h-10 w-10 relative rounded-full overflow-hidden bg-gray-100'>
											<Image
												src={selectedPost.author.imageUrl}
												alt='Photo of author'
												width={40}
												height={40}
												objectFit='cover'
											/>
										</div>
										<div className='text-sm leading-6'>
											<p className='font-semibold text-gray-900'>
												<a href={selectedPost.author.href}>
													<span className='absolute inset-0' />
													{selectedPost.author.name}
												</a>
											</p>
											<p className='text-gray-600'>
												{selectedPost.author.role}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Modal>
				)}
			</div>
		</div>
	);
};

export default Blog;
