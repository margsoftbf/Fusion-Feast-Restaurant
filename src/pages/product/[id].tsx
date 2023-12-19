import { useRouter } from 'next/router';
import { products } from '../../data/data';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.name.replace(/\s+/g, '-').toLowerCase() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-bold my-4">{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;