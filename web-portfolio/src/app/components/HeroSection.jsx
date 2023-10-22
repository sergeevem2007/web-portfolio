import react from 'react';

const HeroSection = () => {
	return (
		<section>
			<div className="grid grid-col-1 lg:grid-cols-12">
				<div className="col-span-7">
					<h1 className='text-white mb-4 text-4xl lg:text-6xl font-bold '>Hello, I&apos;m Eugene</h1>
					<p className='text-[#ADB7BE] text-lg lg:text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eveniet soluta iste. Vel ipsum iste distinctio?</p>
				</div>
				<div className="col-span-5"></div>
			</div>
		</section>
	);
};

export default HeroSection;