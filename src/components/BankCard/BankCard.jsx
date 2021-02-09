import { Accordion, Card } from 'react-bootstrap';

import './BankCard.css';
import { withRouter } from 'react-router-dom';

const BankCard = (props) => {
  const {bank} = props
  console.log(props);

 
  const removeBank = async (id) => {
    console.log(id);
    
    fetch('https://quiet-inlet-20067.herokuapp.com/api/v1/banks/'+id, {
      method: 'DELETE'
    })
    .then(res => {
      console.log(res);
      res.json()})
    
    .then(data => console.log(data))
    .catch(err => console.log(err))
    
    props.history.push('/success')
  }

  // const editBank = (e, bank) => {
  //   e.preventDefault();
  //   fetch('https://quiet-inlet-20067.herokuapp.com/api/v1/banks'+id, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-type':'application/json; charset=UTF-8'
  //     },
  //     body: JSON.stringify(bank)
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err))
  // }

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
							<p>{bank.interestRate}% річних</p>
						</div>
						<div
							className='remove-button'
							onClick={() => removeBank(bank.id)}
						>
							Remove bank
						</div>
					</Accordion.Toggle>
					<Accordion.Collapse eventKey={bank}>
						<Card.Body>
							<p className='text-justify'>{`Цей банк готовий позичити Вам ${bank.maximumLoan} грн під ${bank.interestRate}% за умови першого внеску ${bank.downPaymentPercent}% від суми на ${bank.loanTerm} місяців.`}</p>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
};

export default withRouter(BankCard);
