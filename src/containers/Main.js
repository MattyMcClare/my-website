import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import NavBar from '../components/NavBar';

class Main extends Component {
    render() {
        return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/about" component={About} />
            </Switch>
        </Router>
        )
    }
}

export default Main;