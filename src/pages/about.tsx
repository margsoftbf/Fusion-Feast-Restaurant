import Reviews from '@/components/Reviews';
import OurTrending from '@/components/about/OurTrending';
import AboutPageSection from '@/components/about/AboutPageSection';
import Chefs from '@/components/Chefs';
import WhyVisitsUs from '@/components/about/WhyVisitsUs';

const Aboutus = () => {
	return (
		<div id='about' className='relative bg-primary text-white'>
			<div className='relative mx-auto overflow-hidden'>
				<div className='md:-mt-12'>
					<AboutPageSection />
					<OurTrending />
					<Chefs />
					<WhyVisitsUs />
					<Reviews />
				</div>
			</div>
		</div>
	);
};

export default Aboutus;
