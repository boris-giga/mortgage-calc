import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const EditPage = (props) => {

  const bankId = parseInt(props.match.params.id)
  const [currentBank] = props.banks.filter(bank => parseInt(bank.id) === bankId)
  
  const [newName, setNewName] = useState(currentBank.name)
  const [newInterestRate, setNewInterestRate] = useState(currentBank.interestRate)
  const [newMaximumLoan, setNewMaximumLoan] = useState(currentBank.maximumLoan)
  const [newDownPaymentPercent, setNewDownPaymentPercent] = useState(currentBank.downPaymentPercent)
  const [newLoanTerm, setNewLoanTerm] = useState(currentBank.loanTerm)

  const newBankData = {
		name: newName,
		interestRate: newInterestRate,
		maximumLoan: newMaximumLoan,
		downPaymentPercent: newDownPaymentPercent,
		loanTerm: newLoanTerm
	}

  const updateBank = (bankId) => {
    axios.put(`https://quiet-inlet-20067.herokuapp.com/api/v1/banks/${bankId}`, newBankData)
    .then(() => alert('bank successfully updated!'))
    .then(() => props.history.push('/'))
  }
  
  return (
    <div className='form'>
      <p>Bank name: <input 
        onChange={(e) => setNewName(e.target.value)} 
        type="text" 
        defaultValue={newName}
      /></p>
      <p>Interest rate: <input 
        onChange={(e) => setNewInterestRate(e.target.value)} 
        type="text" 
        defaultValue={newInterestRate}
      /></p>
      <p>Maximum loan: <input 
        onChange={(e) => setNewMaximumLoan(e.target.value)} 
        type="text" 
        defaultValue={newMaximumLoan}
      /></p>
      <p>Down payment (percent): <input 
        onChange={(e) => setNewDownPaymentPercent(e.target.value)} 
        type="text" 
        defaultValue={newDownPaymentPercent}
      /></p>
      <p>Loan term: <input 
        onChange={(e) => setNewLoanTerm(e.target.value)} 
        type="text" 
        defaultValue={newLoanTerm}
      /></p>
      <input type='click' onClick={() => updateBank(bankId)} defaultValue='UPDATE BANK' />

    </div>
  )
}

export default withRouter(EditPage)