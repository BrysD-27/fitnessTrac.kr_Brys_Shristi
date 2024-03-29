import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import API from '../Api/api';
import MakeActivities from './MakeActivities';

const Activities = ({isLoggedIn}) => {

    const [activities, setActivities] = useState([]);
    const [render, setRender] = useState ('');
    useEffect( async function() {
        try {
           
            const data = await API.makeRequest('/activities', 'GET');
            console.log(data);
            //setToken(data.token);
            setActivities(data);
            } catch (error) {
            alert(error);
        } 
    }, [render]);

    const activityElements = activities. map((activity, i)=>
        <div  className='activity-container'key= {`activity-id-${i}`}>
            <p>{activity.name}</p>
            <p>{activity.description}</p>
        </div>);
    

    return (
        <div>
            { isLoggedIn? 
            <>
                <MakeActivities setRender={setRender}/>
                <h2 className='title'> All Activities</h2>
                <div className= 'activities-container'>{activityElements}</div>
            </>
            :
             <>     
                <h2 className='title'> All Activities</h2>
                <div className= 'activities-container'>{activityElements}</div>
            </>
            }
        </div>
    )
}

export default Activities;
