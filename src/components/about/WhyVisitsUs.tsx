import {
	BestDining,
	Ellipse,
	EmptyEllipse,
	QualityIngredients,
	SpecialMenu,
	SubTitleLeft,
	Wifi,
} from '../../../public/assets/svg';

const WhyVisitsUs = () => {
	return (
		<div className='bg-primary relative'>
			<EmptyEllipse className='w-2 h-2 absolute top-16 right-6 lg:w-8 lg:h-8 lg:top-40' />
			<Ellipse className='w-3 h-3 absolute bottom-0 right-48 lg:w-8 lg:h-8 lg:bottom-12' />
			<Ellipse className='w-3 h-3 absolute bottom-0 left-48 lg:w-5 lg:h-5 lg:bottom-12' />
			<Ellipse className='w-1 h-1 absolute top-12 left-96 lg:w-5 lg:h-5 lg:top-28' />
			<EmptyEllipse className='w-2 h-2 absolute top-16 left-60 lg:w-5 lg:h-5 lg:top-40' />
			<div className='max-w-8xl mx-auto flex flex-col xl:flex-row items-center justify-around gap-12 px-4 py-4 lg:py-16'>
				<div className='text-white xl:w-1/3 relative flex flex-col mr-4 items-center justify-center xl:items-start'>
					<div className='flex items-center justify-center gap-2 relative my-2'>
						<SubTitleLeft className='w-7 h-7' />
						<h2 className='font-lemonada text-myOrange font-light'>
							Why Visit Us
						</h2>
					</div>
					<p className='font-bakilda text-2xl text-center my-2 lg:text-left md:text-4xl lg:text-5xl'>
						We Provide Organic Food & Best Facilities
					</p>
					<p className='font-openSans text-sm my-2 text-center xl:text-left tracking-wide mx-2 md:mx-0 lg:text-base'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
						minima ut eveniet nisi excepturi corporis, consequatur a incidunt
						inventore, blanditiis dicta hic ratione deleniti saepe delectus
						quia, doloremque asperiores quasi quo necessitatibus magni ad?
						Pariatur dolore ea cum voluptas! Perspiciatis!
					</p>
				</div>
				<div className='xl:w-2/3 flex flex-wrap items-center justify-center gap-4'>
					<div className='bg-third w-96 h-56 relative rounded-xl flex flex-col p-4 px-6 gap-5 justify-center'>
						<QualityIngredients className='w-16 h-16' />
						<p className='font-oswald text-2xl'>Quality Ingredients</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
							aliquam?
						</p>
					</div>
					<div className='bg-third w-96 h-56 relative rounded-xl flex flex-col p-4 px-6 gap-5 justify-center'>
						<SpecialMenu className='w-16 h-16' />
						<p className='font-oswald text-2xl'>Special Menu</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
							aliquam?
						</p>
					</div>
					<div className='bg-third w-96 h-56 relative rounded-xl flex flex-col p-4 px-6 gap-5 justify-center'>
						<BestDining className='w-16 h-16' />
						<p className='font-oswald text-2xl'>Best Dining</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
							aliquam?
						</p>
					</div>
					<div className='bg-third w-96 h-56 relative rounded-xl flex flex-col p-4 px-6 gap-5 justify-center'>
						<Wifi className='w-16 h-16' />
						<p className='font-oswald text-2xl'>Free WIFI Access</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
							aliquam?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyVisitsUs;
