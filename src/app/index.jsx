import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Home from '../component/Home';
import MainPage from '../container/MainPage';
import store from '../store';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
          </Switch>
          {/* <Route path="/header" component={Header} />
          <Route path="/footer" component={Footer} /> */}
          <Route path="/mainpage" component={MainPage} />
        </BrowserRouter>
      </Provider>
    );
  }
}

render(<App />, window.document.getElementById('app'));
