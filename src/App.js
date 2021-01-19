import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import TeamA from "./TeamA";
import TeamB from "./TeamB";
import TeamC from "./TeamC";
import Sample from "./Sample";
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
                        <Route exact path='/teamAOld' component={TeamA} />
                        <Route exact path='/teamBOld' component={TeamB} />
                        <Route exact path='/teamCOld' component={TeamC} />
                        <Route exact path='/sampleOld' component={Sample} />
                        <Route exact path='/sample' component={Demo}/>
                        <Route exact path='/teamC' component={ShuffleC}/>
                        <Route exact path='/teamB' component={ShuffleB}/>
                        <Route exact path='/teamA' component={ShuffleA}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
