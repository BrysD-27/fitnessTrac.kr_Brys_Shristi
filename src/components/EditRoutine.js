import { Delete } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Checkbox, TextField, FormControl, IconButton, Button, InputLabel, Box, Select, MenuItem, FormControlLabel } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import API from '../Api/api';


const EditRoutine = () => {
    const location = useLocation();
    const history = useHistory();
    const {id, name, goal, activities} = location.state;
    const [editRoutine, setEditRoutine] = useState({name: name, goal: goal, isPublic: false})

    function handleChange(event, postKey) {
        const newState = {...editRoutine};
        {postKey === 'isPublic' ? newState[postKey] = event.target.checked ? true : false : newState[postKey] = event.target.value};
        setEditRoutine(newState);
    }

    async function deleteRoutine(e) {
        event.preventDefault();
        try {
            await API.makeRequest(`/routines/${id}`, 'DELETE')
        } catch (error) {
            throw error;
        }
        history.push('/my_routines');
    }

    async function handleSubmit(e) {
        try {
            await API.makeRequest(`/routines/${id}`, 'PATCH', editRoutine);

        } catch (error) {
            throw error;
        }
        history.push('/my_routines')
    }

    async function deleteActivity(e, activityId) {
        try {
            await API.makeRequest(`/routine_activities/${activityId}`, 'DELETE')
        } catch (error) {
            throw error;
        }

    }

    return (
        <div className='edit-routine'>
            <h1>Edit Routine</h1>
                <TextField defaultValue={name}
                           label='Name'
                           type='text'
                           color='primary'
                           sx={{marginBottom: 3}}
                           onChange={(e) => handleChange(e, 'name')}
                           />
                <TextField defaultValue={goal}
                           label='Goal'
                           type='text'
                           color='primary'
                           onChange={(e) => handleChange(e, 'goal')}
                           />
                <FormControlLabel control={<Checkbox color='primary'
                                                     onChange={(e) => handleChange(e, 'isPublic')}/>}
                                                     label='Public?'
                                                     style={{marginLeft: '2rem', marginTop: '1rem'}}>
                </FormControlLabel>
                <h4>Activities</h4>
                <Button component={Link} to={{pathname: '/add_activity',
                                              state: {routineId: id}}}>Add New Activity</Button>
                    {
                        activities.map((activity, i) => {
                            return (
                                
                                <div className='edit-routine-activities' key={i}>
                                    <h5>Name: {activity.name}</h5>
                                    <p>Description: {activity.description}</p>
                                        <h5>Count: {activity.count}</h5>
                                        <h5>Duration: {activity.duration}</h5>
                                    <IconButton onClick={(e) => deleteActivity(e, activity.routineActivityId)}>
                                        <Delete></Delete>
                                    </IconButton>
                                    <IconButton component={Link} to={{pathname: '/change_activity',
                                                                    state: {activity}}}>
                                        <EditIcon />    
                                    </IconButton>
                                </div>
                            )
                        })
                    }
                    <Button onClick={(e) => deleteRoutine(e)}>Delete</Button>
                    <Button onClick={(e) => history.push('/my_routines')}>Cancel</Button>
                    <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
                </div>
    )
}

export default EditRoutine;