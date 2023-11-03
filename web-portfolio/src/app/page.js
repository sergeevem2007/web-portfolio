import HeroSection from './components/HeroSection';
import AchiveSection from './components/AchiveSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';

export default function Home() {
	return (
		<>
			<HeroSection />
			<AchiveSection />
			<AboutSection />
			<ProjectSection />
			<EmailSection />
		</>
	);
}
