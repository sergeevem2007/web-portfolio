import React from 'react';
import NavLink from './NavLink';
import ButtonSwitcher from './ButtonSwitcher';

const MenuOverlay = ({ links }) => {
	return (
		<ul className='flex flex-col py-4 items-center'>
			{links.map((link, index) => (
				<li key={index}>
					<NavLink href={link.path} title={link.title} />
				</li>
			))}
			<li  key={'themeSwitcher'}>
				<ButtonSwitcher />
			</li>
		</ul>
	);
};

export default MenuOverlay;
