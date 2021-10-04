import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import API from '../Api/api';
import UserRoutines from './UserRoutines';

const MyRoutines = () => {

    const [myRoutines, setMyRoutines] = useState([]);

    useEffect( async function() {
        try {
            const username = localStorage.getItem('username');
            const data = await API.makeRequest(`/users/${username}/routines`, 'GET');
            setMyRoutines(data);
        } catch (error) {
            throw error;
        } 
    }, []);

    const routineElements = myRoutines.map((routine, i) => {
        return <UserRoutines name={routine.name}
                      goal={routine.goal}
                      creatorName={routine.creatorName}
                      activities={routine.activities}
                      key={i}
                      id={routine.id}
                      />
    })

    return (
        <div id='my-routines'>
            <div className='link-to-cr'>
                <Button component={Link} to='/create_routine'>Create New Routine</Button>
            
            </div>
            <div className='my-routines-header'>
                <h1>My Routines</h1>
            </div>
            <div className='my-routines-list'>
                {routineElements}
            </div>
        </div>
    )
}

export default MyRoutines;