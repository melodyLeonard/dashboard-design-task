import Colorcards from '../../components/cards/colorCards/Colorcards';
import { cardData, table } from './data';
import './home.scss'
import { Flex } from '../../components/layout/Layout';
import StudentsPerformance from '../../components/cards/studentPerformanceCard/StudentsPerformance';
import TeachersListCard from '../../components/cards/teacherListCard/TeachersListCard';


const Home = () => {
  return <div>
    <Flex.Row className='cards-container wrap-items'>
    {
        cardData.map(({
            title, 
            icon, 
            number, 
            color="primary", 
            percentage
        }, idx) => 
            <Colorcards key={idx} title={title} icon={icon} number={number} color={color} className='mb-1' percentage={percentage} />)
    }
    </Flex.Row>
    <Flex.Row className="wrap-items">
        <TeachersListCard headerItems={table.headerItems} tableItems={table.content}/>
        <StudentsPerformance/>
    </Flex.Row>
    </div>;
};

export default Home;
