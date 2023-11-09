import supabase from './supabase';

export default async function getProjects() {
	const { data, error } = await supabase
		.from('projects')
		.select('');
	return data;
}