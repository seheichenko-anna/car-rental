import React from 'react';
import s from './Button.module.css';

const Button = ({ children, onClick, style }) => {
  return (
    <button className={s.btn} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
