import Reviews from '@/components/Reviews';
import OurTrending from '@/components/about/OurTrending';
import AboutPageSection from '@/components/about/AboutPageSection';
import Chefs from '@/components/Chefs';
import WhyVisitsUs from '@/components/about/WhyVisitsUs';
import Gallery from '@/components/Gallery';

const Aboutus = () => {
	return (
		<div id='about' className='relative bg-primary text-white h-full'>
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
