'use client';
import React, { useState, useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';
import getProjects from '../../../utils/getProjects';

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2
		}
	}
};

export default function ProjectsSection() {
	const [tagName, setTag] = useState('All');
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		getProjects().then(res => {
			return setData(res);
		});
		setLoading(false);
	}, []);

	if (isLoading) return <p className='text-xl text-center my-10'>Loading...</p>;

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = data?.filter((project) => {
		return project ? Object.hasOwn(project.tag, tagName) : false;
	}
	);

	const cardVariants = {
		initial: { y: 20, opacity: 1 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section id='projects'>
			<h2 className='text-center text-4xl font-bold text-slate-500 dark:text-white mt-4 mb-8 md:mb-12'>
        My Projects
			</h2>
			<div className='text-slate-500 dark:text-white flex flex-row justify-center items-center gap-2 py-6'>
				<ProjectTag
					onClick={handleTagChange}
					name='All'
					isSelected={tagName === 'All'}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name='Web'
					isSelected={tagName === 'Web'}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name='Mobile'
					isSelected={tagName === 'Mobile'}
				/>
			</div>
			<motion.ul ref={ref}
				className='grid md:grid-cols-3 gap-8 md:gap-12 content-stretch'
				variants={container}
				initial="visible"
				animate="visible"
			>
				{filteredProjects?.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial='initial'
						animate={isInView ? 'animate' : 'initial'}
						transition={{ duration: 0.3, delay: index * 0.2 }}
					>
						<ProjectCard
							id={project.id}
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
							slug={project.slug}
						/>
					</motion.li>
				))}
			</motion.ul>
		</section>
	);
}
