import Colorcards from '../../components/Cards/colorCards/Colorcards';
import { cardData } from './data';
import './home.scss'


const Home = () => {
  return <div>
    <div className='cards-container'>
    {
        cardData.map(({
            title, 
            icon, 
            number, 
            color="primary", 
            percentage
        }) => 
            <Colorcards title={title} icon={icon} number={number} color={color} className='' percentage={percentage} />)
    }
    </div>
    </div>;
};

export default Home;
