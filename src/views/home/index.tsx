import Colorcards from '../../components/cards/colorCards/Colorcards';
import { cardData } from './data';
import './home.scss'
import { Flex } from '../../components/layout/Layout';
import StudentsPerformance from '../../components/cards/studentPerformanceCard/StudentsPerformance';


const Home = () => {
  return <div>
    <Flex.Row className='cards-container'>
    {
        cardData.map(({
            title, 
            icon, 
            number, 
            color="primary", 
            percentage
        }, idx) => 
            <Colorcards key={idx} title={title} icon={icon} number={number} color={color} className='' percentage={percentage} />)
    }
    </Flex.Row>
    <Flex.Row>
        <div>

        </div>
        <StudentsPerformance/>
    </Flex.Row>
    </div>;
};

export default Home;
