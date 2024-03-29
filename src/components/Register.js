import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import API from '../Api/api';


const Register = () => {

    let history = useHistory();

    const [registerUser, setRegisterUser] = useState({username: '', password: ''});

    async function registerGetToken() {
        try {

            const data = await API.makeRequest('/users/register', 'POST', registerUser);
            console.log(data);
            if(data.token){
                alert(data.message);
                history.push('/users/login');
            }else{
                alert(data.error);
            }
        } catch (error) {
            alert(error);
        } 
        
    }



function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('username', registerUser.username);
    registerGetToken();
}

function handleInput(event) {
    const userKey = event.target.attributes['name'].value;
    const newState = {...registerUser};
    newState[userKey] = event.target.value;
    setRegisterUser(newState);
}

return (
    <div className='conatiner'>
       <h2>Register here</h2>
        <form className='form'onSubmit={handleSubmit}>
        
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
            <button>Register</button>
        </form>
    </div>
)
}

export default Register;