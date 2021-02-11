import React, { useState } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom';

const AddPage = (props) => {

  const [name, setName] = useState('')
  const [interestRate, setInterestRate] = useState(0)
  const [maximumLoan, setMaximumLoan] = useState(0)
  const [downPaymentPercent, setDownPaymentPercent] = useState(0)
  const [loanTerm, setLoanTerm] = useState(1)

	const bankData = {
		name,
		interestRate,
		maximumLoan,
		downPaymentPercent,
		loanTerm
	}

	const addBank = () => {
		console.log('add');
    axios.post('https://quiet-inlet-20067.herokuapp.com/api/v1/banks', bankData)
    .then(() => props.history.push('/'))
  }

  return (
    <div className='addPage'>
				<form className='formAdd form'>
					<label >Enter bank:</label>
					<input
            onChange={(e) => setName(e.target.value)}
						id='name'
						name='name'
						type='text'
						placeholder='someBankName'
						required={true}
					/>

					<label >Interest rate (in %):</label>
					<input
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
						id='interestRate'
						name='interestRate'
						type='text'
						placeholder='5'
						required={true}
					/>

					<label >Maximum loan:</label>
					<input
            onChange={(e) => setMaximumLoan(parseInt(e.target.value))}
            id='maximumLoan'
						name='maximumLoan'
						type='text'
						placeholder='5000000'
						required={true}
					/>

					<label htmlFor='downPaymentPercent'>Down Payment (in %):</label>
					<input
            onChange={(e) => setDownPaymentPercent(parseFloat(e.target.value))}
            id='downPaymentPercent'
						name='downPaymentPercent'
						type='text'
						placeholder='20'
						required={true}
					/>

					<label>Loan term (in month):</label>
					<input
            onChange={(e) => setLoanTerm(parseInt(e.target.value))}
            id='loanTerm'
						name='loanTerm'
						type='text'
						placeholder='240'
						required={true}
					/>

					<input type='click' onClick={addBank} defaultValue='ADD BANK' />
				</form>
			</div>
		);
  
}


export default withRouter(AddPage)