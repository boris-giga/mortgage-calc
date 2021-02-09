import { Accordion, Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import './BankCard.css';

const BankCard = (props) => {
	const { bank } = props;

	const removeBank = (id) => {
		fetch('https://quiet-inlet-20067.herokuapp.com/api/v1/banks/' + id, {
			method: 'DELETE',
		})
			.then((res) => {
				res.json();
			})
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
		props.history.push('/success');
	};

	return (
		<div className='bankCard container'>
			<Accordion>
				<Card>
					<Accordion.Toggle
						as={Card.Header}
						eventKey={bank}
						className='d-flex justify-content-between'
					>
						<div className='justify-content-between'>
							<h4>{bank.name}</h4>
							<p>{bank.interestRate}%</p>
						</div>
						<div className='remove-button' onClick={() => removeBank(bank.id)}>
							Remove bank
						</div>
					</Accordion.Toggle>
					<Accordion.Collapse eventKey={bank}>
						<Card.Body>
							<p className='text-justify'>{`This bank may lend you ${bank.maximumLoan} conventional units with Interest of ${bank.interestRate}% for ${bank.loanTerm} month. Your Down Payment must be ${bank.downPaymentPercent}% of the value.`}</p>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
};

export default withRouter(BankCard);
