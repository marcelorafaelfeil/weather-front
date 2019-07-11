import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Header } from './components/Header';
import { Details } from './screens/details/Details';
import { Home } from './screens/home/Home';
import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
	body {
		background-color: #F8F8F8 !important;
	}
`;

function App() {
	return (
		<div className="App">
			<Header />
			<div style={{marginTop: 30}}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/details/:id" component={Details} />
					</Switch>
				</BrowserRouter>
			</div>
			<GlobalStyle />
		</div>
	);
}

export default App;
