import Reviews from '@/components/Reviews';
import OurTrending from '@/components/about/OurTrending';
import AboutHero from '@/components/about/AboutHero';
import AboutPageSection from '@/components/about/AboutPageSection';

const Aboutus = () => {
	return (
		<div id='about' className='relative bg-primary text-white'>
			<AboutHero />
			<div className='relative mx-auto overflow-hidden'>
				<div className='md:-mt-12'>
					<AboutPageSection />
					<OurTrending />
				</div>
				{/* <Reviews /> */}
			</div>
		</div>
	);
};

export default Aboutus;
