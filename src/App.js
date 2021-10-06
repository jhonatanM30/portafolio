import React, { Fragment } from 'react'
import '../src/styles/basic-Information.css';
import {
    BrowserRouter as Router,
    Switch, Redirect, Route
} from "react-router-dom";

import { Home } from './components/home/Home'


 const App = () => {

    return (
        <Router>
            <Fragment>
                <Switch >                                    
                    <Route exact path="/" component={Home} />                    
                    <Redirect to="/" />
                </Switch>
            </Fragment>
        </Router>
    )

}

export default App;