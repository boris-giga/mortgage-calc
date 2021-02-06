import {InputGroup, FormControl} from 'react-bootstrap'

const CalcInput = ({placeholder}) => {
  return (
		<div>
			<InputGroup size='sm' className='mb-3'>
				
        <FormControl
          placeholder={placeholder}
					aria-label='Small'
					aria-describedby='inputGroup-sizing-sm'
				/>
			</InputGroup>
		</div>
	);
}

export default CalcInput


