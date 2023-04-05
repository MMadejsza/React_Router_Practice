import React from 'react';
import Product from '../components/Product';
import {Link, useParams} from 'react-router-dom';

const ProductPage = () => {
	const {id} = useParams();
	return (
		<>
			<div>Product Page</div>
			<Product id={id}></Product>
			<Link to='/products'>Back to products list</Link>
		</>
	);
};

export default ProductPage;
