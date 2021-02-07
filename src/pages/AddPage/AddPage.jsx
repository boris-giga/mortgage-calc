import React from 'react';
// import { FormControl, FormLabel, InputGroup } from 'react-bootstrap';

const test = {
  name: 'a',
  interestRate: 0,
  maximumLoan: 0,
  downPaymentPercent: 0,
  loanTerm: 1,
}


class AddPage extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			interestRate: 0,
			maximumLoan: 0,
			downPaymentPercent: 0,
			loanTerm: 1,
		};
	}
	onChange = (e) => {
    console.log(e.target.name);
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	onSubmit = (e) => {
		e.preventDefault();

		fetch('https://quiet-inlet-20067.herokuapp.com/api/v1/banks', {
      method: 'POST',
      body: JSON.stringify({
        "name": this.state.name,
        "interestRate": parseFloat(this.state.interestRate),
        "maximumLoan": parseInt(this.state.maximumLoan,10),
        "downPaymentPercent": parseInt(this.state.downPaymentPercent,10),
        "loanTerm": parseInt(this.state.loanTerm,10)
      }),
			headers: {        
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
			}
      // mode: 'no-cors'
		});
		console.log(this.state);
		this.setState({
			name: '',
			interestRate: 0,
			maximumLoan: 0,
			downPaymentPercent: 0,
			loanTerm: 1,
		});
	}

	render() {
		return (
			<form onSubmit={this.onSubmit} className='formAdd'>
				<label htmlFor='name'>Enter bank</label>
				<input onChange={this.onChange} id='name' name='name' type='text' />

				<label htmlFor='interestRate'>Interest rate</label>
				<input onChange={this.onChange} id='interestRate' name='interestRate' type='number' />

				<label htmlFor='maximumLoan'>maximumLoan</label>
				<input onChange={this.onChange} id='maximumLoan' name='maximumLoan' type='number' />

				<label htmlFor='downPaymentPercent'>downPaymentPercent</label>
        <input
          onChange={this.onChange}
					id='downPaymentPercent'
					name='downPaymentPercent'
					type='number'
				/>

				<label htmlFor='loanTerm'>loanTerm</label>
				<input onChange={this.onChange} id='loanTerm' name='loanTerm' type='number' />
				<input type='submit' value='submit' />
			</form>
		);
	}
}

export default AddPage;
