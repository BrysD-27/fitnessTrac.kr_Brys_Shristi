import React from 'react';
import {Link} from 'react-router-dom';


const Logout= ()=> {
    return(
        <div>

        <h1> You are logged out!!</h1>
            <h2><Link to= {"/users/login"}> Please click to Login </Link></h2>
        </div>
    )
}

export default Logout;
