import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import BanksPage from './pages/BanksPage/BanksPage'
import CalcPage from './pages/CalcPage/CalcPage'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      banks: [
        {
          id: 1,
          name: "pravex",
          displayName: "Правекс Банк",
          interestRate: 9.49,
          maximumLoan: 4e6,
          downPaymentPercent: 40,
          loanTerm: 240
        },
        {
          id: 2,
          name: "globus",
          displayName: "Глобус Банк",
          interestRate: 7.9,
          maximumLoan: 3e6,
          downPaymentPercent: 50,
          loanTerm: 240
        },
        {
          id: 3,
          name: "oshchad",
          displayName: "Ощадбанк",
          interestRate: 13.9,
          maximumLoan: 4e6,
          downPaymentPercent: 20,
          loanTerm: 240
        },
        {
          id: 4,
          name: "privat",
          displayName: "Приватбанк",
          interestRate: 9.99,
          maximumLoan: 2e6,
          downPaymentPercent: 30,
          loanTerm: 240
        },
        {
          id: 5,
          name: "kredo",
          displayName: "Kredo Bank",
          interestRate: 12,
          maximumLoan: 4e6,
          downPaymentPercent: 20,
          loanTerm: 240
        },
      ]
    }
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
        </Switch>
      </div>
    )
  }
}

export default App
