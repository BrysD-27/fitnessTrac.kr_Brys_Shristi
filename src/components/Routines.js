import { LocalActivity } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import API from '../Api/api';
import TokenUtilities from '../Api/token';

const Routines = () => {
    const [routines, setRoutines] = useState([]);

    useEffect( async function() {
        try {
           
            const data = await API.makeRequest('/routines', 'GET');
            console.log(data);
            //setToken(data.token);
            setRoutines(data);
            } catch (error) {
            alert(error);
        } 
    }, []);
    const routineElements = routines.map((routine, i) => {
        if(routine.isPublic){
            return (
            <div className='routine' key={`routine-id ${i}`}>
                <h2>{routine.name}</h2>
                <h3>{routine.goal}</h3>
                <p>{routine.creatorName}</p>
                <h5>Activities</h5>
                {
                    routine.activities.map((act, i) => {
                        return (
                            <div className='act' key={i}>
                            <h5>{act.name}</h5>
                            <p>{act.description}</p>
                            <h5>{act.count}</h5>
                            <h5>{act.duration}</h5>
                        </div>
                        )
                    })
                }
            </div>      
            )
        } else {
            return (
                <>
                </>
            )
        }
    })
    console.log(routineElements);

    return (
        <div id='routines-page'>
            <div className='routine-header'>
                <h1>Routines</h1>
            </div>
            <div className='routine-list'>
                {routineElements}
            </div>
        </div>

    )

}

export default Routines;