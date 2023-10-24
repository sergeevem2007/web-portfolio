'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
	return (
		<section>
			<div className='grid grid-cols-1 lg:grid-cols-12'>
				<div className='col-span-7 place-self-center text-center sm:text-left'>
					<h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold'>Hello, I&apos;m <br />
						<TypeAnimation
							sequence={[
								'Eugene',
								3000,
								'Web developer',
								1800,
								'Mobile developer',
								1800,
								'UI/UX Designer',
								1800
							]}
							wrapper='span'
							speed={50}
							repeat={Infinity}
						/>
					</h1>

					<p className='text-[#ADB7BE] text-base lg:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eveniet soluta iste. Vel ipsum iste distinctio?</p>
					<div className='flex flex-col sm:flex-row gap-5 mt-6'>
						<Link
							href='/contact'
							className='px-16 inline-block py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white'
						>
              Hire Me
						</Link>
						<Link
							href='/'
							className='px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white'
						>
							<span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-16 py-2'>
                Download CV
							</span>
						</Link>
					</div>
				</div>
				<div className='col-span-5 place-self-center mt-4 lg:mt-0'>
					<div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden'>
						<Image
							src='/images/600x400.png'
							alt='placehold'
							width={400}
							height={400}
							className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
