import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

class App extends Component {
	render() {
		return (
			<Router>
				<div className='App'>
					<header>{<Header />}</header>
					<main>
						<aside>
							<Navigation></Navigation>
						</aside>
						<section className='page'>
							<Page></Page>
						</section>
					</main>
					<footer>
						<Footer></Footer>
					</footer>
				</div>
			</Router>
		);
	}
}

export default App;
