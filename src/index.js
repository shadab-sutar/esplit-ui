import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Registration from './components/registration';

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
        </Switch>
    </HashRouter>
    , document.getElementById('root'));

