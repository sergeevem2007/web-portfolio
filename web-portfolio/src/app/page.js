import Image from 'next/image';
import HeroSection from './components/HeroSection';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-[#121212] items-center justify-between px-4 lg:px-12">
			<div className="container mx-auto">
				<HeroSection />
			</div>
		</main>
	);
}
