import { removeSpaces, toLocaleString } from "../../utils/common";

interface Calculator{
    sign: any,
    num: any,
    res: any,
}

interface CalculatorProps {
    setCalculator: (calculator: Calculator) => void;
    calc: Calculator;
}

export const useCalculator = ({setCalculator, calc}: CalculatorProps) => {

  const numHandler = (e: any) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (removeSpaces(calc.num).length < 16) {
      setCalculator({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : Number(removeSpaces(calc.num)) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const commaHandler = (e:any) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalculator({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signHandler = (e:any) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalculator({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a:number, b:number, sign: '+' | '-' | 'X' | string) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

      setCalculator({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : toLocaleString(
                math(
                  Number(removeSpaces(calc.res)),
                  Number(removeSpaces(calc.num)),
                  calc.sign
                )
              ),
        sign: "",
        num: 0,
      });
    }
  };

  const invertHandler = () => {
    setCalculator({
      ...calc,
      num: calc.num ? toLocaleString(Number(removeSpaces(calc.num)) * -1) : 0,
      res: calc.res ? toLocaleString(Number(removeSpaces(calc.res)) * -1) : 0,
      sign: "",
    });
  };

  const percentHandler = () => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

    setCalculator({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  const resetHandler = () => {
    setCalculator({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  return{
    resetHandler,
    numHandler,
    commaHandler,
    signHandler,   
    equalsHandler,
    invertHandler,
    percentHandler,
  }
}