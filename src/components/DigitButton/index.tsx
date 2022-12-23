import React from 'react';
import styles from './style.module.css';

interface DigitProps {
  children?: React.ReactChild | React.ReactChild[];
  onClick: () => void;
}
function DigitButton({ onClick, children }: DigitProps) {
  return (
    <button className={styles.container} onClick={onClick}>
      {children}
    </button>
  );
}

export default DigitButton;
