import Link from 'next/link';
import ButtonEmpty from '../common/ButtonEmpty';
import { Product } from '@/types/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import MenuBookSlide from './MenuBookSlide'; 

type CategoryBoxProps = {
    categorySlug: string;
    products: Product[];
};

const MenuBookSlider: React.FC<CategoryBoxProps> = ({ products, categorySlug }) => {
    return (
        <div className='mt-6 gap-x-4 gap-y-10 sm:gap-x-6  md:gap-y-0 lg:gap-x-8 flex flex-col items-center'>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                speed={1000}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                grabCursor={true}
                modules={[Autoplay]}
                breakpoints={{
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 4 },
                    1200: { slidesPerView: 5 },
                }}
                className='w-full mx-auto'
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <MenuBookSlide product={product} categorySlug={categorySlug} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Link className='mt-6' href={`/category/${categorySlug}`}>
                <ButtonEmpty>View More</ButtonEmpty>
            </Link>
        </div>
    );
};

export default MenuBookSlider;