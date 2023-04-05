import React from 'react';

const Article = ({title, author, text}) => {
	return (
		<article>
			<h3>{title}</h3>
			<span>{author}</span>
			<p>{text}</p>
		</article>
	);
};

export default Article;
