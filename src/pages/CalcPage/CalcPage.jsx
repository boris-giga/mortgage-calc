import BanksDropdown from '../../components/BanksDropdown/BanksDropdown';
import CalcInput from './../../components/CalcInput/CalcInput';


const CalcPage = ({banks}) => {
  return (
    <div className="calcPage">
      <BanksDropdown banks={banks}/>
      <CalcInput placeholder="Початкова позика"/>
      <CalcInput placeholder="Перший внесок"/>
    </div>
  );
}

export default CalcPage