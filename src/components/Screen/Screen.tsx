import { Textfit } from "react-textfit";
import "./screen.scss";

const Screen = ({ value }: {value:string | number}) => {
  return (
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Screen;