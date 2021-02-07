import { Accordion, Card } from 'react-bootstrap'

const BankCard = ({bank}) => {
  

  return (
		<div className='bankCard container'>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={bank} className="d-flex justify-content-between">
            <h4>{bank.name}</h4>
            <p>{bank.interestRate}% річних</p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={bank}>
            <Card.Body>
              <p className="text-justify">{`Цей банк готовий позичити Вам ${bank.maximumLoan} грн під ${bank.interestRate}% за умови першого внеску ${bank.downPaymentPercent}% від суми на ${bank.loanTerm} місяців.`}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
	);
}

export default BankCard