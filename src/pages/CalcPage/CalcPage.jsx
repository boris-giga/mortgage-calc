import { useState } from 'react';
import Select from 'react-select';

import Table from '../../components/Table/Table';

import countForTable from '../../func/calcFunction';

const CalcPage = ({ banks }) => {
	const [currentBank, setCurrentBank] = useState({});
	const [totalCost, setTotalCost] = useState('');
	const [downPayment, setDownPayment] = useState(0);
	const [monthQuantity, setMonthQuantity] = useState(1);

	const getTotalMonthlyPayment = () => {
		let res = countForTable(
			totalCost,
			downPayment,
			currentBank.interestRate,
			monthQuantity
		);
		if (res.length === 0) return 0;
		else return res[0].totalPayment.toFixed(2);
	};

	const totalMonthlyPayment = getTotalMonthlyPayment();

	const getResForTable = () => {
		let res = countForTable(
			totalCost,
			downPayment,
			currentBank.interestRate,
			monthQuantity
		);
		return res;
	};

	const tableData = getResForTable();

	return (
		<div className='calcPage'>
			<form className='form'>
				<label>Select your bank or start typing..</label>
				<Select
					className='select'
					options={banks}
					onChange={(e) => {
						setCurrentBank(e);
					}}
				/>

				<label htmlFor='totalCost'>
					What is total cost of your future home?
				</label>
				<input
					onChange={(e) => {
						setTotalCost(+e.target.value);
					}}
					id='totalCost'
					name='totalCost'
					type='text'
					placeholder='65000'
					required={true}
				/>

				<label htmlFor='downPayment'>What is your down payment?</label>
				<input
					onChange={(e) => {
						setDownPayment(+e.target.value);
					}}
					id='downPayment'
					name='downPayment'
					type='text'
					placeholder='20000'
					required={true}
				/>

				<label htmlFor='monthQuantity'>
					What is going to be a loan term (in month)?
				</label>
				<input
					onChange={(e) => {
						setMonthQuantity(+e.target.value);
					}}
					id='monthQuantity'
					name='monthQuantity'
					type='text'
					placeholder='12'
					required={true}
				/>
			</form>
			{totalMonthlyPayment !== 0 && !isNaN(totalMonthlyPayment) ? (
				<input
					type='click'
					disabled
					value={`your total mothly payment will be ${totalMonthlyPayment}`}
				/>
			) : (
				<input type='err' value='input correct data' disabled />
			)}
			<Table data={tableData} />
		</div>
	);
};

export default CalcPage;
