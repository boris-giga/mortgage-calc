import { Form } from "react-bootstrap";

const BanksDropdown = ({ banks }) => {
	return (
		<div className='banksDropdown'>
			<Form>				
				<Form.Group controlId='exampleForm.ControlSelect1'>
					<Form.Label>Оберіть банк:</Form.Label>
          <Form.Control as='select'>
            {banks.map(bank => <option>{bank.displayName}</option>)}
						
					</Form.Control>
				</Form.Group>				
			</Form>
		</div>
	);
};

export default BanksDropdown;
