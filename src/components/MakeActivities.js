import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import API from '../Api/api';
import TokenUtilities from '../Api/token';


const MakeActivities = ({setRender}) => {

    const [makeActivities, setMakeActivities] = useState({name: '', description: ''});

    async function postActivity() {
        try {
           
            const data = await API.makeRequest('/activities', 'POST', makeActivities);
            setRender(data.name);
            console.log(data);
            if (data.name ==="NotFound"){
                alert(data.error);
            }
            
        } catch (error) {
            alert(error);
        } 
    }

    function handleSubmit(event) {
        event.preventDefault();
        postActivity();
    }

    function handleInput(event) {
        const userKey = event.target.attributes['name'].value;
        const newState = {...makeActivities};
        newState[userKey] = event.target.value;
        setMakeActivities(newState);
    }

return (
    <div className='conatiner'>
        <h2>Make New Activities</h2>

        <form className='form'onSubmit={handleSubmit} >
            <input type="text" 
                   required
                   name="name"
                   value={makeActivities.title}
                   onChange={handleInput}
                   placeholder="Activity title" />
            <input type="text"  
                   required
                   name="description"
                   value={makeActivities.description}
                   onChange={handleInput}
                   placeholder="description"></input>
            <button>Submit</button>
        </form>
    </div>
)
}

export default MakeActivities;
