import React from 'react';
import Logo from '../../component/common/Header/Logo';
import Profile from '../../component/common/Header/Profile';
import './styles.css';

class HeaderContainer extends React.PureComponent {
  render() {
    return (
      <div id="headerParentDiv">
        <Logo />
        <Profile />
        <div id="profineNameStyle">
          {'Anurag'}
        </div>
      </div>
    );
  }
}

export default HeaderContainer;
