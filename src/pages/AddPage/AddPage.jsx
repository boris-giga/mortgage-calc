import React from 'react';
import { withRouter } from 'react-router-dom';

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
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		fetch('https://quiet-inlet-20067.herokuapp.com/api/v1/banks', {
			method: 'POST',
			body: JSON.stringify({
				name: this.state.name,
				interestRate: parseFloat(this.state.interestRate),
				maximumLoan: parseInt(this.state.maximumLoan, 10),
				downPaymentPercent: parseInt(this.state.downPaymentPercent, 10),
				loanTerm: parseInt(this.state.loanTerm, 10),
			}),
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
		});
		this.setState({
			name: '',
			interestRate: null,
			maximumLoan: null,
			downPaymentPercent: null,
			loanTerm: null,
		});
		this.props.history.push('/');
	};

	render() {
		return (
			<div className='addPage'>
				<form onSubmit={this.onSubmit} className='formAdd form'>
					<label htmlFor='name'>Enter bank:</label>
					<input
						onChange={this.onChange}
						id='name'
						name='name'
						type='text'
						placeholder='someBankName'
						required={true}
					/>

					<label htmlFor='interestRate'>Interest rate (in %):</label>
					<input
						onChange={this.onChange}
						id='interestRate'
						name='interestRate'
						type='number'
						placeholder='5'
						required={true}
					/>

					<label htmlFor='maximumLoan'>Maximum loan:</label>
					<input
						onChange={this.onChange}
						id='maximumLoan'
						name='maximumLoan'
						type='number'
						placeholder='5000000'
						required={true}
					/>

					<label htmlFor='downPaymentPercent'>Down Payment (in %):</label>
					<input
						onChange={this.onChange}
						id='downPaymentPercent'
						name='downPaymentPercent'
						type='number'
						placeholder='20'
						required={true}
					/>

					<label htmlFor='loanTerm'>Loan term (in month):</label>
					<input
						onChange={this.onChange}
						id='loanTerm'
						name='loanTerm'
						type='number'
						placeholder='240'
						required={true}
					/>

					<input type='submit' value='ADD BANK' />
				</form>
			</div>
		);
	}
}

export default withRouter(AddPage);
