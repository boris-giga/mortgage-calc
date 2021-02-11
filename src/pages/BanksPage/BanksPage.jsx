import BankCard from '../../components/BankCard/BankCard';

import './BanksPage.css';

const BanksPage = ({banks}) => {

	return (
		<div className='banksPage'>
			<div className='text'>
				<p>
					<strong>
						Want to get a mortgage on the apartment, but don't know which bank
						to choose?
					</strong>
				</p>
        <p>
          Check out the bank rates by clicking on it!
        </p>
			</div>
			{banks.map(bank => <BankCard key={bank.id} bank={bank} />)}
		</div>
	)
}


export default BanksPage;