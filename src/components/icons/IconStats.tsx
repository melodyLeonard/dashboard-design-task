import { FC } from 'react';
import './icon.scss'


interface IProps{
    icon: any;
    number: number,
    className?: string
    color?: 'primary' | 'orange'
}

const IconStats:FC<IProps> = ({icon,number, color="primary", className}) => {
    const numClassName = `${color} number`;
  return <div className={`${className} icon-stat-wrapper`}>
    <div className='icon-stat'>
        {icon}
        <p className={numClassName}>{number}</p>
        </div>
  </div>;
};

export default IconStats;
