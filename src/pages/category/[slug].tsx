import Link from 'next/link';
import { products } from '@/data/data';
import { useRouter } from 'next/router';

const CategoryPage = () => {
	const router = useRouter();
	const { slug } = router.query;

	const categoryProducts = products.filter((p) => p.categorySlug === slug);

	return (
		<div className='container mx-auto px-4'>
			<h1 className='text-xl font-bold my-4'>{slug}</h1>
			{categoryProducts.map((product) => (
				<div key={product.id} className='border p-4 rounded-lg my-2'>
					<Link
						className='cursor-pointer'
						href={`/category/product/${product.name.replace(/\s+/g, '-').toLowerCase()}`}
					>
						{product.name}
					</Link>
				</div>
			))}
		</div>
	);
};

export default CategoryPage;
