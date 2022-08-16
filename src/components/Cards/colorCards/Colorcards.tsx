import {FC} from 'react';
import './colorCards.scss'

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
            <p>{title}</p>
             <p>{number}</p>
             <input className='slider' type="range" min="1" max="100" value={percentage} />
              <p>{number}% Increase in 28 days</p>
        </div>
    </div>
  );
};

export default Colorcards;
