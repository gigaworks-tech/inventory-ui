import React from 'react';
import logo from './images/logo.png';

import './styles.css';

function Logo() {
  return (
    <div id="parentDivLogo">
      <img alt="Logo" src={logo} />
    </div>
  );
}

export default Logo;
