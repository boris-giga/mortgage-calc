import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import BanksPage from './pages/BanksPage/BanksPage';
import CalcPage from './pages/CalcPage/CalcPage';
import AddPage from './pages/AddPage/AddPage';
import MyNavbar from './components/MyNavbar/MyNavbar';
import { Success } from './pages/Success';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			banks: [],
		};
	}

	componentDidMount() {
		axios
			.get(`https://quiet-inlet-20067.herokuapp.com/api/v1/banks`)
			.then((response) => {
				const options = response.data.map((bank) => {
					return {
						...bank,
						value: bank.id,
						label: bank.name,
					};
				});
				this.setState({ banks: options });
			});
	}

	render() {
		const { banks } = this.state;
		return (
			<div className='App'>
				<MyNavbar />
				<Switch>
					<Route exact path='/' render={() => <BanksPage banks={banks} />} />
					<Route exact path='/calc' render={() => <CalcPage banks={banks} />} />
					<Route exact path='/add' render={() => <AddPage banks={banks} />} />
					<Route exact path='/success' render={() => <Success />} />
				</Switch>
			</div>
		);
	}
}

export default App;
