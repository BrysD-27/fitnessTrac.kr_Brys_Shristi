import React, {useState} from 'react';
import { useLocation, useHistory } from 'react-router';
import { TextField, IconButton } from '@mui/material';
import {Check, Close} from '@mui/icons-material';
import API from '../Api/api';

const ChangeActivity = () => {
    const history = useHistory();
    const location = useLocation();
    const {activity} = location.state;
    const [editActivity, setEditActivity] = useState({count: '', duration: ''});


    function handleActivityChange(e, key) {
        const newState = {...editActivity};
        newState[key] = e.target.value;
        setEditActivity(newState);
        console.log(editActivity);
    }

    async function handleSubmit(e) {
        try {
            const data = await API.makeRequest(`/routine_activities/${activity.routineActivityId}`, 'PATCH', editActivity);
        } catch (error) {
            throw error;
        }
        history.goBack();
    }
    return (
        <div className='change-activity'>
            <h1>{activity.name}</h1>
            <TextField defaultValue={activity.count}
                        label='Count'
                        type='number'
                        sx={{marginBottom: 3}}
                        onChange={(e) => handleActivityChange(e, 'count')}
                                            />
            <TextField defaultValue={activity.duration}
                        label='Duration'
                        type='number'
                        onChange={(e) => handleActivityChange(e, 'duration')}
            />
            <div>
                <IconButton onClick={(e) => history.goBack()}>
                    <Close />
                </IconButton>
                <IconButton onClick={(e) => handleSubmit(e)}>
                    <Check />
                </IconButton>
            </div>
        </div>
    )
}

export default ChangeActivity;