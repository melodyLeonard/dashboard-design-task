import { FiArrowUpCircle } from 'react-icons/fi';
import { Flex } from '../../layout/Layout';
import { Lead, Paragraph } from '../../layout/Typography';
import './students-performance.scss';
import { Line } from 'react-chartjs-2';
import { graphData } from './data';

import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);


const StudentsPerformance = () => {
  return <div className='student-pef-wrapper'>
    <Flex.Row>
        <Lead className='title'>Students Performance</Lead>
        <Flex.Row className='rate-marker'>
            <FiArrowUpCircle/>
            <span>
                Good
            </span>
        </Flex.Row>
    </Flex.Row>
   <Flex.Row className="top-info">
    <div>
        <Paragraph>
            Overall Growth
        </Paragraph>
        <Lead>35.80%</Lead>
    </div>
        <div>
        <Paragraph>
            Monthly
        </Paragraph>
        <Lead>45.20%</Lead>
    </div>
        <div>
        <Paragraph>
            Day
        </Paragraph>
        <Lead>5.10%</Lead>
    </div>
   </Flex.Row>
        <Line height={'270px'} className='line' datasetIdKey='id' data={graphData} />
  </div>;
};

export default StudentsPerformance;
