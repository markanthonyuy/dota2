import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="header">
      <h1><Link to="/">{props.title}</Link></h1>
    </header>
  );
}

export default Header;
