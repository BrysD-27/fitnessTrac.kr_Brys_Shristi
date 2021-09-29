import React from 'react';
import {Link} from 'react-router-dom';
import TokenUtilities from '../Api/token';

const Logout = ()=>{
    function handleLogout (event) {
        event.preventDefault();
        TokenUtilities.removeToken();
        
      }
    return(
        <div>

        <button className = 'logout' onClick={handleLogout}> Logout </button>
        </div>
    )
}
export default Logout;
