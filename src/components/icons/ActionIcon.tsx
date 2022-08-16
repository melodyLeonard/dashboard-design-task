import { FC } from 'react';
import './icon.scss'


interface IProps{
    icon: any;
    className?: string
    color?: 'primary' | 'red'
}

const ActionIcon:FC<IProps> = ({icon, color="primary", className}) => {
    const numClassName = `${color} ${className} icon-action-wrapper`;
  return <div className={`${numClassName} `}>
            {icon}
        </div>
};

export default ActionIcon;
