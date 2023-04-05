import React from 'react';
import {Route, Routes, useLocation, useParams} from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
	const {pathname} = useLocation();
	const {page, idProduct} = useParams();
	return (
		<div>
			<h2>Footer</h2>
			<Routes>
				<Route
					path='/'
					element={
						<p>
							Your are on the <span>main page</span>
						</p>
					}
				/>

				<Route
					path='/:page'
					element={<FooterResp />}
				/>
				<Route
					path='/:page/:idProduct'
					element={<FooterResp />}
				/>
			</Routes>
		</div>
	);
};

export default Footer;

const FooterResp = () => {
	const {pathname} = useLocation();
	const {page, idProduct} = useParams();
	console.log(useParams());
	return (
		<>
			<p>
				Your are on the <span>{idProduct !== undefined ? idProduct : page}</span>
			</p>
			<p>
				Your are on the <span>{pathname}</span>
			</p>
			<p>
				Your are on the <span>{window.location.href}</span>
			</p>
		</>
	);
};
