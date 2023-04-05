import React from 'react';
import {NavLink} from 'react-router-dom';

const list = [
	{name: 'Home', path: '/'},
	{name: 'Products', path: '/products'},
	{name: 'Contact', path: '/contact'},
	{name: 'Admin Panel', path: '/admin'},
];

const Navigation = () => {
	const menu = list.map((item) => (
		<li key={item.name}>
			<NavLink to={item.path}>{item.name}</NavLink>
		</li>
	));

	return (
		<nav>
			<ul>{menu}</ul>
		</nav>
	);
};

export default Navigation;
