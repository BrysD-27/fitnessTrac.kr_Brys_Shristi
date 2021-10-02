import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import API from '../Api/api';
import TokenUtilities from '../Api/token';

const Login = ({setToken}) => {

    const [user, setUser] = useState({username: '', password: ''});

    async function storeToken() {
        try {
           
            const data = await API.makeRequest('/users/login', 'POST', user);
            if(data.token){
            TokenUtilities.setToken(data.token);
            console.log(data);
            setToken(data.token);
            }else{
                alert(data.error);
            }
        } catch (error) {
            alert(error);
        } 
    }

    function handleSubmit(event) {
        event.preventDefault();
        storeToken();
    }

    function handleInput(event) {
        const userKey = event.target.attributes['name'].value;
        const newState = {...user};
        newState[userKey] = event.target.value;
        setUser(newState);
    }

return (
    <div>
        {/* <Link to="/">Fitness Tracker</Link> */}
        <form onSubmit={handleSubmit} >
            <div className = 'loginBox'>
            <div className = 'login-form'>
                <input type="text" 
                        required
                        name="username"
                        value={user.username}
                        onChange={handleInput}
                        placeholder="username" />
                <input type="password"
                        required
                        name="password"
                        value={user.password}
                        onChange={handleInput}
                        placeholder="password"></input>
                <button>Submit</button>
            </div>
            </div>
        </form>
    </div>
)
}

export default Login;
