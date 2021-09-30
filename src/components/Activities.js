import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import API from '../Api/api';
import TokenUtilities from '../Api/token';
import MakeActivities from './MakeActivities';

const Activities = () => {

    const [activities, setActivities] = useState([]);

    useEffect( async function() {
        try {
           
            const data = await API.makeRequest('/activities', 'GET');
            console.log(data);
            //setToken(data.token);
            setActivities(data);
            } catch (error) {
            alert(error);
        } 
    }, []);

    const activityElements = activities. map((activity, i)=>
    <div key= {`activity-id-${i}`}>
    <p>{activity.name}</p>
    <p>{activity.description}</p>
</div>);
    

return (
    <div>
       <h1>Activities</h1>
       <div className= 'activities- container'>{activityElements}</div>
       <MakeActivities/>
    </div>
)
}

export default Activities;
