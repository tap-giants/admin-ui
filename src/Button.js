import React from 'react';

const BUTTON_TYPES = {
  primary: 'btn-primary',
  secondary: 'btn-secondary'
};

const Button = ({ label, children, type = 'primary', onClick }) => (
  <a className={BUTTON_TYPES[type]} onClick={onClick}>{children || label}</a>
);

export default Button;
