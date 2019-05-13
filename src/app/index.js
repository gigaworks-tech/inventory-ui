import React from 'react';
import { render } from 'react-dom';
import { Footer } from '../component/Footer';
import { Header } from '../component/Header';
import { Home } from '../component/Home';
import {Route, BrowserRouter, Switch} from "react-router-dom";
class App extends React.Component {
    render() {
        return (
                <BrowserRouter >
                <Switch>
                    <Route exact path={"/"} component={Header}/>
                    <Route path={"/"} component={Header}/>
                </Switch>    
                    <Route path = {"/header"} component={Header} />
                    <Route path = {"/footer"} component={Footer} />
                </BrowserRouter>
        );
    }
}

render(<App/>,window.document.getElementById("app"))