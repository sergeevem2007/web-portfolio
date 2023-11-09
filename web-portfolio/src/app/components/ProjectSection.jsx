'use client';
import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';
import getProjects from '../../../utils/getProjects';

const data = getProjects();
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

export default function ProjectsSection({ data }) {
	const [tag, setTag] = useState('All');
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const [dataBase, setData] = useState(data);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		console.log(data);
	}, [data]);

	if (isLoading) return <p>Loading...</p>;
	if (dataBase) return <p>No data</p>;

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = dataBase?.filter((project) => 
		console.log(project.tag)
		// project.tag(tag)
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
					isSelected={tag === 'All'}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name='Web'
					isSelected={tag === 'Web'}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name='Mobile'
					isSelected={tag === 'Mobile'}
				/>
			</div>
			<motion.ul ref={ref}
				className='grid md:grid-cols-3 gap-8 md:gap-12 content-stretch'
				variants={container}
				initial="visible"
				animate="visible"
			>
				{filteredProjects.map((project, index) => (
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
