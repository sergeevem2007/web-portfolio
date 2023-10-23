import react from 'react';
import Image from 'next/image';

const HeroSection = () => {
	return (
		<section>
			<div className="grid grid-cols-1 lg:grid-cols-12">
				<div className="col-span-7 place-self-center text-center sm:text-left">
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold">Hello, I&apos;m Eugene</h1>
					<p className="text-[#ADB7BE] text-base lg:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eveniet soluta iste. Vel ipsum iste distinctio?</p>
					<div className="flex gap-4 mt-6">
						<button className="px-6 py-3 w-full sm:w-fit rounded-full bg-white hover:bg-slate-200 text-black">Hire Me</button>
						<button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white">Download CV</button>
					</div>
				</div>
				<div className="col-span-5 place-self-center mt-4 lg:mt-0">
					<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
						<Image src="/images/600x400.png" alt="placehold" width={400} height={400} className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
