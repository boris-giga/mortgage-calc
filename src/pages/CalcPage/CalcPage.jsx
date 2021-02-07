import {useState} from 'react'
import Select from 'react-select'
import { FormControl } from 'react-bootstrap';

import countForTable from '../../func/calcFunction'



const CalcPage = ({banks}) => {
  const [currentBank, setCurrentBank] = useState({})
  const [totalCost, setTotalCost] = useState(0)
  const [downPayment, setDownPayment] = useState(0)
  const [monthQuantity, setMonthQuantity] = useState(1)

  const totalPayment = (countForTable(totalCost, downPayment, currentBank.interestRate, monthQuantity)[0].totalPayment).toFixed(2)
  return (
    <div className="calcPage">
      {
        !isNaN(totalPayment)
        ? <strong><p>Your monthly mortgage payment will be {totalPayment} conventional units</p></strong>
        : <p>Input your data into next fields:</p>
      }
      <p>What is total cost of your future home?</p>
      <FormControl
        onChange={(e) => {setTotalCost(+(e.target.value))}}
        placeholder="65000"
        aria-label='Small'
        aria-describedby='inputGroup-sizing-sm'
      />
      
      <p>What is your down payment?</p>
      <FormControl
        onChange={(e) => {setDownPayment(+(e.target.value))}}
        placeholder="20000"
        aria-label='Small'
        aria-describedby='inputGroup-sizing-sm'
      />
      <p>What is going to be a loan term (in month)?</p>
      <FormControl
        onChange={(e) => {setMonthQuantity(+(e.target.value))}}
        placeholder="3"
        aria-label='Small'
        aria-describedby='inputGroup-sizing-sm'
      />
      <p>Select your bank or start typing..</p>
      <Select 
        options={banks} 
        onChange={(e) => {
          setCurrentBank(e)
        }}/>
      <p>Your bank's interest rate is {currentBank.interestRate}%</p>
      
      
      
    </div>
  );
}

export default CalcPage