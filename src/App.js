import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Demo from "./Demo";
import ShuffleB from "./ShuffleB";
import ShuffleA from "./ShuffleA";
import ShuffleC from "./ShuffleC";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path='/template' component={Demo}/>
                        <Route exact path='/' component={ShuffleC}/>
                        <Route exact path='/teamB' component={ShuffleB}/>
                        <Route exact path='/teamA' component={ShuffleA}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
