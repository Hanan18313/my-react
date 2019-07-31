import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, HashRouter, Redirect } from 'react-router-dom'
import Home from './components/Home'
import miniOneManage from './components/miniProOne/miniOneManage'
// const hashHistory = require('history').createHashHistory
//ReactDOM.render(<Home />, document.getElementById('root'));
ReactDOM.render(
    <HashRouter>
        <Redirect from='/' to='/Index'/>
        <Route path='/Index' component={Home} />
        <Route path='/miniOne/manage1' component={miniOneManage} />
        <Route path='/miniOne/manage2' component={miniOneManage} />
        <Route path='/miniTwo/manage1' component={miniOneManage} />
        <Route path='/miniTwo/manage2' component={miniOneManage} />
    </HashRouter>,
document.getElementById('root'))

