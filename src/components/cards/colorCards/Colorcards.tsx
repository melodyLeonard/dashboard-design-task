import {FC} from 'react';
import './colorCards.scss'
import { Paragraph } from '../../layout/Typography';

type Colors = 'primary' | 'orange' | 'cyan' | 'red'
interface IProps{
    icon: any;
    number: number,
    className?: string;
    color?: Colors | string;
    percentage: number;
    title: string;
}

const Colorcards:FC<IProps> = ({icon, number, className, color, percentage, title}) => {
      const _className = `${className} ${color} color-card`;
    return (
    <div className={_className}>
        <div className='left'>
            <div className='icon-container'>
                {icon}
            </div>
        </div>
        <div className='right'>
            <Paragraph>{title}</Paragraph>
            <Paragraph>{number}</Paragraph>
            <input onChange={() => {}} className='slider' type="range" min="1" max="100" value={percentage} />
            <Paragraph>{percentage}% Increase in 28 days</Paragraph>
        </div>
    </div>
  );
};

export default Colorcards;
