import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../component/Header';
import Footer from '../component/Footer';

import { increment, decrement } from '../action/counter';

class MainPage extends React.PureComponent {
  render() {
    const {
      coun, setIncrement, setDecrement,
    } = this.props;
    return (

      <div>
        <Header coun={coun} setIncrement={() => setIncrement()} />
        <Footer coun={coun} setDecrement={() => setDecrement()} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  coun: state.coun,
});

const mapDispatchToProps = dispatch => ({
  setIncrement: (number) => { dispatch(increment(number)); },
  setDecrement: (number) => { dispatch(decrement(number)); },
});

MainPage.propTypes = {
  coun: PropTypes.number,
  setIncrement: PropTypes.func.isRequired,
  setDecrement: PropTypes.func.isRequired,
};

MainPage.defaultProps = {
  coun: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
