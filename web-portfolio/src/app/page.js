import Image from 'next/image';
import HeroSection from './components/HeroSection';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col container mx-auto bg-[#121212] items-center justify-between px-24'>
			<HeroSection />
		</main>
	);
}