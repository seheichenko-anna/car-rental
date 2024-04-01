import React from 'react';
import s from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={s.not_found_wrapper}>
      <p>404</p>
      <p>Page not found</p>
    </div>
  );
};

export default NotFound;
