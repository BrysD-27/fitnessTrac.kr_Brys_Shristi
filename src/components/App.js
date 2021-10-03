import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';
import  Header from './Header';
import Home from './Home';
import Activities from './Activities';
import TokenUtilities from '../Api/token';

const App = () => {
    const [token, setToken] = useState(TokenUtilities.getToken());
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);

    useEffect(function() {
        setIsLoggedIn(!!token);
    }, [token]);

    return (
        <>  
        <Router>
            <Header isLoggedIn = {isLoggedIn} setToken={setToken}/>
                     
            <main>
                <Switch>
                    
                    <Route path="/users/register"><Register /></Route>
                    <Route path="/users/login"><Login setToken ={setToken}/></Route>
                    <Route path="/activities"><Activities isLoggedIn = {isLoggedIn} /></Route>
                    {/* <Route path="/routines"><Routines /></Route> */}
                    <Route path="/Logout"><Logout/></Route>
                    <Route exact path="/"><Home /></Route>
                </Switch>
            </main>
            </Router>
        </>
    )
};

export default App;