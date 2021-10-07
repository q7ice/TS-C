import React from 'react';
import { Link } from 'react-router-dom';

function DefaultLink({ to, children, ...other }) {
  return (
    <Link {...other} to={to}>
      {children}
    </Link>
  );
}

export default DefaultLink;
