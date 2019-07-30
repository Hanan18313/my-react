import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, HashRouter, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Summer from './components/summer'

// const hashHistory = require('history').createHashHistory
//ReactDOM.render(<Home />, document.getElementById('root'));
ReactDOM.render(
    <HashRouter>
        <Redirect from='/' to='/Index'/>
        <Route path='/Index' component={Home} />
        <Route path='/Summer/join' component={Summer} />
    </HashRouter>,
document.getElementById('root'))

