import React from 'react';
import styles from './style.module.css';

interface OperatorProps {
  children?: React.ReactChild | React.ReactChild[];
  onClick: () => void;
}

function OperatorButton({ onClick, children }: OperatorProps) {
  return (
    <button className={styles.container} onClick={onClick}>
      {children}
    </button>
  );
}

export default OperatorButton;
