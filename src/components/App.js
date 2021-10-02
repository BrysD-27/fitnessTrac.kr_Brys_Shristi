import React, { useState, useEffect } from 'react';
import {
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
                    <Route path="/Logout"><Logout/></Route>
                    
                    <Route exact path="/"><Home /></Route>
                </Switch>
            </main>
        </>
    )
};

export default App;