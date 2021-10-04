import React, { useState, useEffect } from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import {
    Login,
    Register,
    Home,
    Header,
    MyRoutines,
    CreateRoutine,
    EditRoutine,
    AddActivity
} from './index'

import Logout from './Logout';
import Routines from './Routines';
import Activities from './Activities';
import TokenUtilities from '../Api/token';
const App = () => {
    // const [token, setToken] = useState(TokenUtilities.getToken());
    // const tokenlocal =TokenUtilities.getToken();
    // console.log(tokenlocal);
    // const [isLoggedIn, setIsLoggedIn] = useState(!!token);

    // useEffect(function() {
    //     setIsLoggedIn(!!token);
    // }, [token]);

    return (
        <>  
            <Header />
                     
            <main>
                <Switch>
                    {/* <Route path="/drinks"><Drinks /></Route> */}
                    <Route path="/users/register"><Register /></Route>
                    <Route path="/users/login"><Login /></Route>
                    <Route path="/activities"><Activities /></Route>
                    <Route path="/routines"><Routines /></Route>
                    <Route path="/my_routines"><MyRoutines /></Route>
                    <Route path="/create_routine"><CreateRoutine /></Route>
                    <Route path="/edit_routine"><EditRoutine /></Route>
                    <Route path="/add_activity"><AddActivity /></Route>
                    <Route path="/Logout"><Logout/></Route>
                    
                    <Route exact path="/"><Home /></Route>
                </Switch>
            </main>
        </>
    )
};

export default App;