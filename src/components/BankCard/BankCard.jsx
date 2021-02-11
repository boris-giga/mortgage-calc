import { withRouter } from 'react-router-dom';

const BankCard = (props) => {
	const { bank } = props;

	const removeBank = (id) => {
		fetch('https://quiet-inlet-20067.herokuapp.com/api/v1/banks/' + id, {
			method: 'DELETE',
		})
			.then((res) => {
				console.log(res);
				res.json();
			})
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};

	const editBank = (id) => {
		props.history.push(`/edit/${id}`)
	}

	return (
		<div className='bankCard'>
			<div className='info'>
				<div className=''>
					<h4>{bank.name}</h4>
					
					<p className='text-justify'>{`This bank may lend you ${bank.maximumLoan} conventional units with Interest of ${bank.interestRate}% for ${bank.loanTerm} month. Your Down Payment must be ${bank.downPaymentPercent}% of the value.`}</p>
				</div>
			</div>
			<div className="buttons">
				<button className='removeButton' onClick={() => removeBank(bank.id)}>
					Remove bank
				</button>
				<button className='editButton' onClick={() => editBank(bank.id)}>
					Edit bank
				</button>
			</div>
			
		</div>
	);
};

export default withRouter(BankCard);
