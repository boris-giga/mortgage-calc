import React from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from "axios";

import './App.css'

import BanksPage from './pages/BanksPage/BanksPage'
import CalcPage from './pages/CalcPage/CalcPage'
import AddPage from './pages/AddPage/AddPage';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      banks: []
    }
  }

  componentDidMount() {
		axios.get(`https://quiet-inlet-20067.herokuapp.com/api/v1/banks`).then((response) => {
      const options = response.data.map(bank => {
        return {
          ...bank,
          "value" : bank.id,
          "label" : bank.name
        }
      })
			this.setState({ banks: options });
		});
	}

  render() {
    const {banks} = this.state
    return (
      <div className="App">
        <Switch>
          <Route 
            exact 
            path="/" 
            render={()=><BanksPage banks={banks}/>}
          />
          <Route 
            exact 
            path="/calc" 
            render={()=><CalcPage banks={banks}/>}          />
          <Route 
            exact 
            path="/add" 
            render={()=><AddPage banks={banks}/>}          />
        </Switch>
      </div>
    )
  }
}

export default App
