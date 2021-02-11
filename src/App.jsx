import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import BanksPage from './pages/BanksPage/BanksPage';
import CalcPage from './pages/CalcPage/CalcPage';
import AddPage from './pages/AddPage/AddPage';
import MyNavbar from './components/MyNavbar/MyNavbar';
import EditPage from './pages/EditPage/EditPage';

const App = () => {
	
	const [banks, setBanks] = useState([])
	

  useEffect( () => {
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
				setBanks(options);
			});
  }, [banks] )
	
		return (
			<div className='App'>
				<MyNavbar />
				<Switch>
					<Route exact path='/' render={() => <BanksPage banks={banks}/>} />
					<Route exact path='/calc' render={() => <CalcPage banks={banks} />} />
					<Route exact path='/add' render={() => <AddPage/>} />
					<Route exact path='/edit/:id' render={() => <EditPage banks={banks}/>} />
				</Switch>
			</div>
		);
	}


export default App;
