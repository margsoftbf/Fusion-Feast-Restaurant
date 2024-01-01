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
import ProductDescription from '@/components/product/ProductDescription';
import RelatedProducts from '@/components/product/RelatedProducts';
import ReviewsSlider from '@/components/ReviewsSlider';

const ProductPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { name } = router.query;
	const [quantity, setQuantity] = useState(1);
	const [selectedAddons, setSelectedAddons] = useState<ExtraOptions>({});
	const [activeTab, setActiveTab] = useState('description');
	const [showAddedToCart, setShowAddedToCart] = useState(false);
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
		const addonCost = Object.keys(selectedAddons)
			.filter((addonName) => selectedAddons[addonName])
			.reduce((acc, addonName) => {
				const addonPrice =
					addons[product.categorySlug].find((addon) => addon.name === addonName)
						?.price || 0;
				return acc + addonPrice;
			}, 0);


		const totalPrice = product.price + addonCost
		const cartItem: CartItem = {
			...product,
			quantity,
			extraOptions: selectedAddons,
			price: totalPrice,
		};

		dispatch(addItem(cartItem));

		setShowAddedToCart(true);
		setTimeout(() => {
			setShowAddedToCart(false);
		}, 3000);
	};

	return (
		<div className='relative bg-primary'>
			<ProductHero />
			<div className='relative overflow-hidden'>
				<Tomato className='hidden 2xl:block w-64 h-64 absolute bottom-0 right-6 opacity-50' />
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
						showAddedToCart={showAddedToCart}
						setShowAddedToCart={setShowAddedToCart}
					/>
					<div className='flex flex-col mt-8'>
						<div className='flex gap-8 border-b-2 border-b-gray-500 w-full mx-auto items-center justify-center text-2xl uppercase font-medium font-oswald text-white'>
							<button
								className={`p-1 ${
									activeTab === 'description' ? 'border-b text-myOrange' : ''
								}`}
								onClick={() => setActiveTab('description')}
							>
								Description
							</button>
							<button
								className={`p-1 ${
									activeTab === 'reviews' ? 'border-b text-myOrange' : ''
								}`}
								onClick={() => setActiveTab('reviews')}
							>
								Reviews
							</button>
						</div>
						{activeTab === 'description' ? (
							<ProductDescription />
						) : (
							<ReviewsSlider />
						)}
					</div>
					<RelatedProducts currentProductCategory={product.categorySlug} />
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
