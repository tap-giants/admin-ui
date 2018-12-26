import React from 'react';
// import { Link } from '../../routes';

const Link = () => <React.Fragment>{children}</React.Fragment>;

const BUTTON_TYPES = {
  primary: 'btn-primary',
  secondary: 'btn-secondary'
};

const Button = ({ label, type = 'primary', routeName, params, onClick }) => (
  <Link route={routeName} params={params}>
    <a className={BUTTON_TYPES[type]} onClick={onClick}>{label}</a>
  </Link>
);

export default Button;
