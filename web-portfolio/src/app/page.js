import Image from 'next/image';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AchiveSection from './components/AchiveSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col bg-slate-50 dark:bg-[#121212] px-4 lg:px-12'>
			<NavBar />
			<div className='container mx-auto mt-40'>
				<HeroSection />
				<AchiveSection />
				<AboutSection />
				<ProjectSection />
				<EmailSection />
			</div>
			<hr />
			<Footer />
		</main>
	);
}
