import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

const BreadCrumb = () => {
    const router = useRouter();
	const { slug } = router.query;

    const formatBreadcrumb = (str: string) => {
        return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
    };
    
    const breadCrumbs = [
        { name: 'Home', href: '/', current: false },
        {
            name: formatBreadcrumb(slug as string),
            href: `/category/${slug}`,
            current: true,
        },
    ];
    
  return (
    <div>							<nav className='flex' aria-label='Breadcrumb'>
    <ol className='flex items-center'>
        {breadCrumbs.map((crumb, index) => (
            <li key={crumb.name}>
                <Link
                    href={crumb.href}
                    className={`text-sm font-medium ${
                        crumb.current
                            ? 'text-gray-300'
                            : 'text-gray-600 hover:text-gray-300'
                    }`}
                >
                    {crumb.name.charAt(0).toUpperCase() +
                        crumb.name.slice(1)}
                </Link>
                {index < breadCrumbs.length - 1 && (
                    <span className='text-sm font-medium text-gray-400 mx-2'>
                        &gt;
                    </span>
                )}
            </li>
        ))}
    </ol>
</nav></div>
  )
}

export default BreadCrumb