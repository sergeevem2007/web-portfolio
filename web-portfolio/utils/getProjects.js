import supabase from './supabase';

export default async function getProjects1() {
	const { data, error } = await supabase
		.from('projects')
		.select('');
	return data;
}
