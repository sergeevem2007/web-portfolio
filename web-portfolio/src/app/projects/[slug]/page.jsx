import Image from 'next/image';
import Link from 'next/link';
import supabase from '../../../../utils/supabase';




export default async function ProjectDetails({ params }) {
	
	async function getProject(slug) {
		const { data, error } = await supabase
			.from('projects')
			.select()
			.eq('slug', slug);
		return data[0];
	}

	const project = await getProject(params.slug);

	return (
		<main>
			<div className="relative h-96 mb-10 hidden md:block">
				<Image
					src={project.banner}
					alt={project.title}
					fill
					style={{
						objectFit: 'contain',
					}}
				/>
			</div>
			<div className="relative">
				<h1 className='text-primary-500 font-bold text-4xl md:text-5xl mb-4'>{project?.title}</h1>
				<h2 className='text-secondary-500 text-2xl mb-4'>{project.description}</h2>
				{Object.values(project.body).map(( item, index ) => (
					<>
						<p
							key={index}
							className='mb-4'
						>
							{item}
						</p>
						{ index % 2 === 0
							?
							<div className="relative h-80 flex justify-center my-8">
								<Image
									src={project.image}
									alt={project.title}
									fill
									style={{
										objectFit: 'contain',
									}}
								/>
							</div>
							: <></>
						}
					</>
				))}

				<h2 className='text-secondary-500 text-2xl my-6'>{project.description}</h2>
				<ul className='flex list-none text-primary-500 text-xl gap-4 my-6'>
					{Object.keys(project.tag).map(( item, index ) => (
						<li key={index}>#{item}</li>
					))}
				</ul>
			</div>
			<div className="my-9">
				<Link
					href={'/'}
					className='text-xl relative inline-flex items-center justify-center px-5 py-4 border-2 rounded-full text-slate-500 dark:text-white border-primary-500'
				>
					<span>
						Back
					</span>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-3">
						<path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
					</svg>

				</Link>
			</div>
		</main>
	);
}
