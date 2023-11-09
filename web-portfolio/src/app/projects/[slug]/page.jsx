import Image from 'next/image';
import supabase from '../../../../utils/supabase';

async function getProject({ params }) {
	const { data, error } = await supabase
		.from('projects')
		.select()
		.eq('slug', params);
	return data;
}


export default async function ProjectDetails({ params }) {
	const project = await getProject(params.slug);
	console.log(project);
	return (
		<main>
			<div className="relative h-96 mb-10 hidden md:block">
				<Image
					src={project?.banner}
					alt={project?.title}
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
				<ul className='flex list-none text-primary-500 text-xl gap-4'>
					{Object.values(project.tag).map(( item, index ) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
		</main>
	);
}
