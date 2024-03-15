import Reviews from '@/components/Reviews';
import OurTrending from '@/components/About/OurTrending';
import AboutPageSection from '@/components/About/AboutPageSection';
import Chefs from '@/components/Chefs';
import WhyVisitsUs from '@/components/About/WhyVisitsUs';
import Gallery from '@/components/Gallery';

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
					<Gallery />
				</div>
			</div>
		</div>
	);
};

export default Aboutus;
