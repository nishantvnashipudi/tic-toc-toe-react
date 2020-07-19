import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Board from '../src/components/app/board'
import Home from '../src/components/home/Home';
const Routes = () => (
<Router>
    <Switch>
    <Route path='/' exact component={Board} />
    <Route path='/home' component={Home} />
    </Switch>
 </Router>   
);

export default Routes;
