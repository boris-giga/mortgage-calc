import BankCard from './../../components/BankCard/BankCard';

import './BanksPage.css'

const BanksPage = ({banks}) => {
  return (
    <div className="banksPage">
      <div className="text">
        <p><strong>
          Хочете квартиру в іпотеку, але не знаєте, який банк обрати?
        </strong></p>
        <p>
          Ознайомтеся з умовами банку, клікнувши на нього!
        </p>
      </div>
      {banks.map(bank => <BankCard key={bank.id} bank={bank}/>)}
    </div>
  );
}

export default BanksPage