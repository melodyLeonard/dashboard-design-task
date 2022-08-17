
import { useState } from 'react';
import Button from '../../components/Button/Button';
import ButtonBox from '../../components/Button/ButtonBox';
import Screen from '../../components/Screen/Screen';
import { useCalculator } from '../../store/hooks/useCalculator';
import './calulator.scss';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const Calculator = () => {
     const [calc, setCalculator] = useState({
            sign: "",
            num: 0,
            res: 0,
        });

    const {resetHandler,
            numHandler,
            commaHandler,
            signHandler,   
            equalsHandler,
            invertHandler,
            percentHandler,
        } = useCalculator({calc, setCalculator})

  return (
    <div className='calc-container'>
        <div className='calculator-wrapper'>
            <Screen value={calc.num ? calc.num : calc.res} />
            <ButtonBox>
                {btnValues.flat().map((btn, i) => {
                return (
                    <Button
                    key={i}
                    className={btn === "=" ? "equals" : ""}
                    value={btn}
                    onClick={
                        btn === "C"
                        ? resetHandler
                        : btn === "+-"
                        ? invertHandler
                        : btn === "%"
                        ? percentHandler
                        : btn === "="
                        ? equalsHandler
                        : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                        ? signHandler
                        : btn === "."
                        ? commaHandler
                        : numHandler
                    }
                    />
                );
                })}
            </ButtonBox>
        </div>
    </div>
  )
  ;
};

export default Calculator;
