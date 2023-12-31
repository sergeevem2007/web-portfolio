import Link from 'next/link';

const NavLink = ({ href, title }) => {
	return (
		<Link
			href={href}
			className='block py-2 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-slate-500 dark:text-white'
			title={title}
		>
			{title}
		</Link>
	);
};

export default NavLink;
