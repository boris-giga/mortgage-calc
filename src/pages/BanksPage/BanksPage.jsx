import { Link } from 'react-router-dom';
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
      <div className="text">
        <p>
          Не знайшли потрібний банк? Не біда!
        </p>
        <h3 className="text"><Link to="/add">
          {`>Просто додайте новий!<`}
        </Link></h3>
      </div>
      
      <h2 className="text">
        <Link to="/calc">{`>Перейти до розрахунку<`}</Link>
      </h2>
    </div>
  );
}

export default BanksPage