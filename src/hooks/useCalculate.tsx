import { useState } from 'react';

const useCalculate = () => {
  const [calculation, setCalculation] = useState('');
  const [output, setOutput] = useState('');
  const [clickEqual, setClickEqual] = useState(false);

  const clear = () => {
    if (calculation === '') {
      return;
    }
    const value = calculation.slice(0, -1);
    setCalculation(value);
  };

  const updateCalculation = (value: string) => {
    if (value === '=') {
      const newOutput = eval(calculation).toString();
      setOutput(newOutput);
      setClickEqual(true);
      return;
    }
    if (clickEqual) {
      setCalculation(output + value);
      setClickEqual(false);
    } else if (value !== 'DEL') {
      setCalculation(calculation + value);
      setClickEqual(false);
    }

    // clear all
    if (value === 'AC') {
      console.log(4);
      setCalculation(output);
      setOutput('');
    }

    //delete
    if (value === 'DEL') {
      if (output !== '0') clear();
    }
  };

  return {
    updateCalculation,
    calculation,
    output,
    clear,
  };
};

export default useCalculate;
