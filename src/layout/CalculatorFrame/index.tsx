import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import OperatorButton from '../../components/OperatorButton';
import DigitButton from '../../components/DigitButton';
import useCalculate from '../../hooks/useCalculate';
import { DIGITS_CALCULATOR, OPERATOR } from '../../constants/constants';

function CalculatorFrame() {
  const { calculation, updateCalculation, output } = useCalculate();

  return (
    <div className={styles.container}>
      <div className={styles.calculation}>{calculation || '0'}</div>
      <div className={styles.output}>{output || '0'}</div>
      <div className={styles.wrapperButton}>
        <div className={styles.wrapperOperator}>
          <OperatorButton
            onClick={() => {
              updateCalculation('AC');
            }}
          >
            AC
          </OperatorButton>
          {OPERATOR.map((val, index) => (
            <OperatorButton key={index} onClick={() => updateCalculation(val)}>
              {val}
            </OperatorButton>
          ))}
          <OperatorButton
            onClick={() => {
              updateCalculation('DEL');
            }}
          >
            DEL
          </OperatorButton>
        </div>
        <div className={styles.wrapperDigit}>
          {DIGITS_CALCULATOR.map((val, index) => (
            <DigitButton
              key={index}
              onClick={() => {
                updateCalculation(val);
              }}
            >
              {val}
            </DigitButton>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalculatorFrame;
