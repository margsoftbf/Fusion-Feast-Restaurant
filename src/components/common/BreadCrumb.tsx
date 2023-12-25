import React from 'react';
import Link from 'next/link';

interface BreadCrumbProps {
	categoryName?: string;
	productName?: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
	categoryName,
	productName,
}) => {
	const formatBreadcrumb = (str: string) => {
		return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
	};

	let breadCrumbs = [{ name: 'Home', href: '/', current: false }];

	if (categoryName) {
		breadCrumbs.push({
			name: formatBreadcrumb(categoryName),
			href: `/category/${categoryName.toLowerCase().replace(/\s+/g, '-')}`,
			current: !productName,
		});
	}

	if (productName) {
		breadCrumbs.push({
			name: formatBreadcrumb(productName),
			href: `/product/${productName.toLowerCase().replace(/\s+/g, '-')}`,
			current: true,
		});
	}

	return (
		<div>
			<nav className='flex' aria-label='Breadcrumb'>
				<ol className='flex items-center'>
					{breadCrumbs.map((crumb, index) => (
						<li key={crumb.name}>
							{crumb.current ? (
								<span className='text-sm font-medium text-gray-300'>
									{crumb.name}
								</span>
							) : (
								<Link
									href={crumb.href}
									className='text-sm font-medium text-gray-600 hover:text-gray-300'
								>
									{crumb.name}
								</Link>
							)}
							{index < breadCrumbs.length - 1 && (
								<span className='text-sm font-medium text-gray-400 mx-2'>
									&gt;
								</span>
							)}
						</li>
					))}
				</ol>
			</nav>
		</div>
	);
};

export default BreadCrumb;
