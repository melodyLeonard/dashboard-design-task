
import { FC } from 'react';
import './button.scss';

interface IProp{
    className: string;
    value: string | number;
    onClick: (param: any) => void;
}

const Button:FC<IProp> = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;