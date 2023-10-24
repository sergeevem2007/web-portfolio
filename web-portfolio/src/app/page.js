import Image from 'next/image';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col bg-[#121212] px-4 lg:px-12'>
			<NavBar />
			<div className='container mx-auto mt-40'>
				<HeroSection />

			</div>
		</main>
	);
}
