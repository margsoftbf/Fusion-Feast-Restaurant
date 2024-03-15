import { products } from '@/data/data';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { CartItem, Product } from '@/types/types';
import { addItem } from '@/store/cartSlice';
import ProductModal from '@/components/ProductModal';
import BreadCrumb from '@/components/common/BreadCrumb';
import {
	MenuBar,
	PriceRange,
	Pagination,
	SortBy,
	CategoryHero,
	ProductList,
} from '@/components/category/index';
import { Cookie, Ellipse, EmptyEllipse } from '../../../public/assets/svg';
import { useModal } from '@/context/ModalContext';

const CategoryPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { slug } = router.query;
	const categoryProducts = products.filter((p) => p.categorySlug === slug);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const [sortKey, setSortKey] = useState('name');
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 8;

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	const [maxPrice, setMaxPrice] = useState(100);
	const { closeModal, isModalOpen } = useModal();

	const handleCloseModal = () => {
		closeModal();
		setSelectedProduct(null);
	};

	const handleAddToCartWithExtras = (productWithExtras: CartItem) => {
		dispatch(addItem(productWithExtras));
		handleCloseModal();
	};

	const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortKey(e.target.value);
	};

	const sortedAndFilteredProducts = categoryProducts
		.filter((product) => product.price <= maxPrice)
		.sort((a, b) =>
			sortKey === 'price' ? a.price - b.price : a.name.localeCompare(b.name)
		);

	const pageCount = Math.ceil(
		sortedAndFilteredProducts.length / productsPerPage
	);

	const handleMaxPriceChange = (newMaxPrice: number) => {
		setMaxPrice(newMaxPrice);
	};

	const currentProducts = sortedAndFilteredProducts.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	return (
		<div className='relative bg-primary'>
			<CategoryHero />
			<div className='relative overflow-hidden'>
				<Cookie className='w-72 h-72 absolute bottom-0 right-6' />
				<Ellipse className='w-24 h-24 absolute bottom-12 left-6' />
				<Ellipse className='w-20 h-20 absolute top-12 right-6' />
				<EmptyEllipse className='w-20 h-20 absolute top-16 left-96' />
				<div className='relative max-w-8xl mx-auto px-2 py-4'>
					<div className='flex flex-col items-center justify-center gap-2 w-full lg:flex-row lg:items-start'>
						<div className='w-5/6 lg:w-1/6  mr-2 mt-12'>
							<div className='flex flex-col justify-between'>
								<MenuBar />
								<PriceRange onMaxPriceChange={handleMaxPriceChange} />
							</div>
						</div>
						<div className='w-5/6'>
							<div className='py-4 flex justify-between items-center w-full'>
								<BreadCrumb
									categoryName={
										slug
											? slug.toString().replace(/\s+/g, '-').toLowerCase()
											: ''
									}
								/>
								<SortBy sortKey={sortKey} handleSortChange={handleSortChange} />
							</div>
							<ProductList products={currentProducts} />
							<Pagination
								currentPage={currentPage}
								pageCount={pageCount}
								paginate={paginate}
							/>
						</div>
					</div>
					{isModalOpen && selectedProduct && (
						<ProductModal
							product={selectedProduct}
							onClose={handleCloseModal}
							onAddToCart={handleAddToCartWithExtras}
							category={slug as string}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default CategoryPage;
