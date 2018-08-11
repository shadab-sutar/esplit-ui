import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Registration from './components/registration';
import Home from './components/home';
import Settings from './components/settings';
import Payments from './components/payments';


//React MDL Imports
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

//React Router Dom Imports
import {HashRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/register" component={Registration} />
            <Route path="/home" component={Home} />
            <Route path="/settings" component={Settings} />
            <Route path="/payments" component={Payments} />
        </Switch>
    </HashRouter>
    , document.getElementById('root'));

