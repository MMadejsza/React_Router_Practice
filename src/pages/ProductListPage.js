import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/ProductListPage.css';

const products = ['Car', 'Bike', 'Motorcycle'];

const ProductListPage = () => {
	const list = products.map((p) => (
		<li key={p}>
			<Link to={`/product/${p}`}>{p}</Link>
		</li>
	));

	return (
		<div className='products'>
			<h2>Products List:</h2>
			<div>
				<ul>{list}</ul>
			</div>
		</div>
	);
};

export default ProductListPage;
