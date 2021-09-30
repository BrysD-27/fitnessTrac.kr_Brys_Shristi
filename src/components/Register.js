import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import API from '../Api/api';
import TokenUtilities from '../Api/token';

const Register = () => {

    //let history = useHistory();

    const [registerUser, setRegisterUser] = useState({username: '', password: ''});

    async function registerGetToken() {
        try {

            const data = await API.makeRequest('/users/register', 'POST', registerUser);
           console.log(data);
        } catch (error) {
            alert(error);
        // } finally {
        //     history.push('/');
        // }
    }
}


function handleSubmit(event) {
    event.preventDefault();
    registerGetToken();
}

function handleInput(event) {
    const userKey = event.target.attributes['name'].value;
    const newState = {...registerUser};
    newState[userKey] = event.target.value;
    setRegisterUser(newState);
}

return (
    <div>
        <Link to="/">Fitness Tracker</Link>
        <form onSubmit={handleSubmit}>
            <input type="text" 
                   required
                   name="username"
                   value={registerUser.username}
                   onChange={handleInput}
                   placeholder="username" />
            <input type="password"
                   required
                   name="password"
                   value={registerUser.password}
                   onChange={handleInput}
                   placeholder="password"></input>
            <button>Submit</button>
        </form>
    </div>
)
}

export default Register;