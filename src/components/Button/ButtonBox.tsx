import { ReactNode } from 'react';
import "./buttonBox.scss";



const ButtonBox = ({ children }: {children: ReactNode}) => {
  return <div className="buttonBox">{children}</div>;
};

export default ButtonBox;