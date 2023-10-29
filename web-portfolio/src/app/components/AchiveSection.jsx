'use client';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const achievementsList = [
	{
		metric: 'Projects',
		value: '100',
		postfix: '+',
	},
	{
		prefix: '~',
		metric: 'Users',
		value: '100',
		postfix: 'K',
	},
	{
		metric: 'Awards',
		value: '7',
	},
	{
		metric: 'Years',
		value: '5',
	},
];

const AchiveSection = () => {
	return (
		<div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
			<div className='sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between'>
				{achievementsList.map((achievement, index) => {
					return (
						<div
							key={index}
							className='flex flex-col items-center justify-center mx-4 my-4 sm:my-0'
						>
							<h2 className='text-slate-500 dark:text-white text-4xl font-bold flex flex-row'>
								{achievement.prefix}
								<TypeAnimation
									sequence={[
										achievement.value,
										3000,
									]}
									wrapper='span'
									speed={50}
									repeat={1}
									cursor={false}
								/>
								{achievement.postfix}
							</h2>
							<p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AchiveSection;
