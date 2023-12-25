import { useRouter } from 'next/router';
import { products, addons } from '../../../data/data';
import ProductHero from '@/components/product/ProductHero';
import BreadCrumb from '@/components/common/BreadCrumb';
import { Ellipse, EmptyEllipse, Tomato } from '../../../../public/assets/svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CartItem, ExtraOptions } from '@/types/types';
import { addItem } from '@/store/cartSlice';
import ProductDetails from '@/components/product/ProductDetails';

const ProductPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { name } = router.query;
	const [quantity, setQuantity] = useState(1);
	const [selectedAddons, setSelectedAddons] = useState<ExtraOptions>({});

	const product = products.find(
		(p) => p.name.replace(/\s+/g, '-').toLowerCase() === name
	);

	if (!product) {
		return <div>Product not found</div>;
	}

	
	const handleAddonChange = (addonName: string) => {
		setSelectedAddons((prevAddons) => ({
			...prevAddons,
			[addonName]: !prevAddons[addonName],
		}));
	};

	const handleAddToCart = () => {
		const cartItem: CartItem = {
			...product,
			quantity,
			extraOptions: selectedAddons,
		};

		dispatch(addItem(cartItem));
	};

	return (
		<div className='relative bg-primary'>
			<ProductHero />
			<div className='relative overflow-hidden'>
				<Tomato className='hidden lg:block w-64 h-64 absolute bottom-0 right-6 opacity-50' />
				<Ellipse className='w-12 h-12 absolute bottom-12 left-6' />
				<Ellipse className='w-12 h-12 absolute top-12 right-6' />
				<EmptyEllipse className='w-12 h-12 absolute top-16 left-96' />
				<div className='relative max-w-6xl mx-auto px-2 py-4 text-white '>
					<div className='mb-4 mx-auto'>
						<BreadCrumb
							categoryName={
								product.categorySlug
									? product.categorySlug.replace(/\s+/g, '-').toLowerCase()
									: ''
							}
							productName={
								name ? name.toString().replace(/\s+/g, '-').toLowerCase() : ''
							}
						/>
					</div>
					<ProductDetails
						product={product}
						quantity={quantity}
						selectedAddons={selectedAddons}
						handleAddonChange={handleAddonChange}
						handleAddToCart={handleAddToCart}
						setQuantity={setQuantity}
						addons={addons}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
