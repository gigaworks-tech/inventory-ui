import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.PureComponent {
  render() {
    const {
      coun, setDecrement,
    } = this.props;
    return (
      <div>
        <h1> Footer </h1>
        {coun}
        {<button type="button" onClick={setDecrement}> Decrement </button>}
      </div>
    );
  }
}

Footer.propTypes = {
  coun: PropTypes.number.isRequired,
  setDecrement: PropTypes.func.isRequired,
};
export default Footer;
