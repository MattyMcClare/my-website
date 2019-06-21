import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import NavBar from '../components/NavBar';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <Router>
                <NavBar />
                <div className="main">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/portfolio" component={Portfolio}/>
                        <Route path="/about" component={About} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Main;