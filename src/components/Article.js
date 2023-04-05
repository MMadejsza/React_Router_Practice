import React from 'react';

const Article = ({title, author, text}) => {
	const styles = {
		marginTop: 40,
	};
	// practicing different way of adding css:
	return (
		<article style={styles}>
			<h3
				style={{
					marginBottom: 3,
					textTransform: 'uppercase',
				}}>
				{title}
			</h3>
			<span
				style={{
					display: 'block',
					marginBottom: 10,
					fontsize: 12,
				}}>
				{author}
			</span>
			<p
				style={{
					fontsize: 15,
				}}>
				{text}
			</p>
		</article>
	);
};

export default Article;
