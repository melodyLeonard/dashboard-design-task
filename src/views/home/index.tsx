import Colorcards from '../../components/cards/colorCards/Colorcards';
import StudentsPerformance from '../../components/cards/studentPerformanceCard/StudentsPerformance';
import TeachersListCard from '../../components/cards/teacherListCard/TeachersListCard';
import { cardData, table } from './data';
import './home.scss';


const Home = () => {
  return <div className="container-grid">
 
    {
        cardData.map(({
            title, 
            icon, 
            number, 
            color="primary", 
            percentage
        }, idx) => 
            <Colorcards key={idx} title={title} icon={icon} number={number} color={color} percentage={percentage} />)
    }
        <TeachersListCard headerItems={table.headerItems} tableItems={table.content}/>
        <StudentsPerformance/>
    </div>;
};

export default Home;
