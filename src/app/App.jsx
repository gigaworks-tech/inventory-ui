import React from 'react';
import {
  Route, Switch, withRouter,
} from 'react-router-dom';

import PropTypes from 'prop-types';
import MainPage from '../container/MainPage';
// import SignIn from '../component/SignIn';
import SignUpContainer from '../container/SignUp';
import SignInContainer from '../container/SignIn';
import PrivateRoute from '../component/PrivateRoute';
import { ACCESS_TOKEN, SESSION_KEY } from '../constant/LocalStorage';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleLogIn() {
    const { history } = this.props;
    localStorage.setItem(ACCESS_TOKEN, SESSION_KEY);
    this.setState({ isAuthenticated: true });
    history.push('/mainpage');
  }

  handleSignOut() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({ isAuthenticated: false });
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <Switch>
        <Route exact path="/" render={props => <SignInContainer login={this.handleLogIn} {...props} />} />
        <Route path="/login" render={props => <SignInContainer login={this.handleLogIn} {...props} />} />
        <Route path="/signup" component={SignUpContainer} />
        <PrivateRoute authenticated={isAuthenticated} path="/mainpage" component={MainPage} signOut={this.handleSignOut} />
        <Route path="*" component={SignInContainer} />
      </Switch>
    );
  }
}

App.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default withRouter(App);
