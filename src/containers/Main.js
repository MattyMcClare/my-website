import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from '../components/Home'

class Main extends Component {
    render() {
        return (
        <Router>
            <Switch>
                <Route  path="/" component={Home}/>
            </Switch>
        </Router>
            )
    }
    
}

export default Main;