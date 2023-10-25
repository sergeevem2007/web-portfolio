import Image from 'next/image';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col bg-[#121212] px-4 lg:px-12'>
			<NavBar />
			<div className='container mx-auto mt-40'>
				<HeroSection />
				<AboutSection />
				<ProjectSection />
				<EmailSection />

			</div>
		</main>
	);
}
