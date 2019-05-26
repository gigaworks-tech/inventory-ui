import React from 'react';
import { render } from 'react-dom';
import {
  Route, BrowserRouter, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import MainPage from '../container/MainPage';
import store from '../store';
// import SignIn from '../component/SignIn';
import SignUpContainer from '../container/SignUp';
import SignInContainer from '../container/SignIn';
import PrivateRoute from '../component/PrivateRoute';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SignInContainer} />
            <Route path="/login" component={SignInContainer} />
            {/* <Route path="/header" component={Header} />
          <Route path="/footer" component={Footer} /> */}
            <Route path="/signup" component={SignUpContainer} />
            <PrivateRoute authenticated={isAuthenticated} path="/mainpage" component={MainPage}> </PrivateRoute>
            <Route path="*" component={SignInContainer} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

render(<App />, window.document.getElementById('app'));
