import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    Header,
    Home
} from './components';

import './style.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

const App = () => {
    return ( 
        <div className='app'>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>

        </div>
    )
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));