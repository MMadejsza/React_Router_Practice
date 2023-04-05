import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import ProductPage from '../pages/ProductPage';
import AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
	return (
		<Routes>
			<Route
				path='/'
				Component={HomePage}
			/>
			<Route
				path='/contact'
				Component={ContactPage}
			/>
			<Route
				path='/products'
				Component={ProductPage}
			/>
			<Route
				path='/admin'
				Component={AdminPage}
			/>
			<Route
				path='*'
				Component={ErrorPage}
			/>
		</Routes>
	);
};

export default Page;
