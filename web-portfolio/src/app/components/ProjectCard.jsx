import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ id, slug, imgUrl, title, description, gitUrl, previewUrl }) => {
	return (
		<div className='h-full'>
			<div
				className='h-52 md:h-72 rounded-t-xl relative group'
				style={{ background: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
			>
				<div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] rounded-t-xl bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 '>
					<Link
						href={gitUrl}
						className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] dark:hover:border-white group/link'
					>
						<CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-slate-500 dark:text-white' />
					</Link>
					<Link
						href={`/projects/${slug}`}
						className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] dark:hover:border-white group/link'
					>
						<EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-slate-500 dark:text-white' />
					</Link>
				</div>
			</div>
			<div className='text-slate-500 dark:text-white rounded-b-xl border border-t-0 border-slate dark:bg-[#181818] py-6 px-4 h-40'>
				<h5 className='text-xl font-semibold mb-2'>{title}</h5>
				<p className='text-[#ADB7BE]'>{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
