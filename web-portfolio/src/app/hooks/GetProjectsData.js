export async function GetProjectsData() {
	const res = await fetch('http://localhost:4000/projects');
	const projects = await res.json();

	return {
		props: {
			projects,
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 10 seconds
		revalidate: 10000, // In seconds
	}
}
