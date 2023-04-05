import React from 'react';
import Article from '../components/Article';

const articles = [
	{
		id: 1,
		title: 'Title1',
		author: 'Author1',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nihil eius voluptatum non, ratione, vero alias soluta amet ducimus repellendus laudantium quaerat aperiam quas provident, rerum debitis labore sit maiores.',
	},
	{
		id: 2,
		title: 'Title2',
		author: 'Author2',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nihil eius voluptatum non, ratione, vero alias soluta amet ducimus repellendus laudantium quaerat aperiam quas provident, rerum debitis labore sit maiores.',
	},
	{
		id: 3,
		title: 'Title3',
		author: 'Author3',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nihil eius voluptatum non, ratione, vero alias soluta amet ducimus repellendus laudantium quaerat aperiam quas provident, rerum debitis labore sit maiores.',
	},
];

const HomePage = () => {
	const artList = articles.map((art) => (
		<Article
			key={art.id}
			{...art}
		/>
	));
	return <div className='home'>{artList}</div>;
};

export default HomePage;
