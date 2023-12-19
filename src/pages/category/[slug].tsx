import { products } from '@/data/data';
import { useRouter } from 'next/router';

const CategoryPage = () => {
	const router = useRouter();
	const { slug } = router.query;

	const categoryProducts = products.filter((p) => p.categorySlug === slug);

	return (
		<div className='container mx-auto px-4'>
			<h1 className='text-xl font-bold my-4'>{slug}</h1>
			{categoryProducts.map((product, index) => (
				<div key={index} className='border p-4 rounded-lg my-2'>
					{product.name}
				</div>
			))}
		</div>
	);
};

export default CategoryPage;
