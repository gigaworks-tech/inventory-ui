import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.PureComponent {
  render() {
    const {
      coun, setIncrement,
    } = this.props;
    return (
      <div>
        <h1> Header </h1>
        {coun}
        {<button type="button" onClick={setIncrement}> Increment </button>}
      </div>
    );
  }
}

Header.propTypes = {
  coun: PropTypes.number.isRequired,
  setIncrement: PropTypes.func.isRequired,
};


export default Header;
