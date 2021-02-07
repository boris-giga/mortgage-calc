import {InputGroup, FormControl} from 'react-bootstrap'

const CalcInput = ({placeholder, label, readOnly}) => {
  return (
		<div>
			<InputGroup size='sm' className='mb-3'>
				
				<FormControl
					onChange={(e) => {
						console.log(e)
					}}
          placeholder={placeholder}
					aria-label='Small'
          aria-describedby='inputGroup-sizing-sm'
          readOnly={readOnly}
				/>
			</InputGroup>
		</div>
	);
}

export default CalcInput


