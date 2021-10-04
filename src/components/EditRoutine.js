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
    const [editRoutine, setEditRoutine] = useState({name: name, goal: goal, isPublic: null})

    function handleChange(event, postKey) {
        const newState = {...editRoutine};
        {postKey === 'isPublic' ? newState[postKey] = event.target.checked ? true : false : newState[postKey] = event.target.value};
        setEditRoutine(newState);
        console.log(editRoutine);
    }
    console.log(id);
    async function deleteRoutine(e) {
        event.preventDefault();
        try {
            await API.makeRequest(`/routines/${id}`, 'DELETE')
        } catch (error) {
            throw error;
        }
        history.push('/my_routines');
    }

    return (
        <div className='edit-routine'>
                <TextField defaultValue={name}
                           label='Name'
                           type='text'
                           color='primary'
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
                                <div className='edit-routine-activities'>
                                    <h5>Name: {activity.name}</h5>
                                    <p>Description: {activity.description}</p>
                                    <TextField defaultValue={activity.count}
                                               label='Count'
                                               type='number'
                                    />
                                    <TextField defaultValue={activity.duration}
                                               label='Duration'
                                               type='number'
                                    />
                                    <IconButton>
                                        <Delete></Delete>
                                    </IconButton>
                                </div>
                            )
                        })
                    }
                    <Button onClick={(e) => deleteRoutine(e)}>Delete</Button>
                    <Button onClick={(e) => history.push('/my_routines')}>Cancel</Button>
                    <Button>Submit</Button>
                </div>
    )
}

export default EditRoutine;