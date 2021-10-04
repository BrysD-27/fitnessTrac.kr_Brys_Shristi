import { Delete } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Checkbox, TextField, FormControl, IconButton, Button, InputLabel, Box, Select, MenuItem, FormControlLabel } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import API from '../Api/api';

const AddActivity = () => {
    const location = useLocation();
    const {routineId} = location.state;
    const [newActivities, setNewActivities] = useState([]);
    const [activity, setActivity] = useState('');
    const history = useHistory();
    const [activityData, setActivityData] = useState({activityId: null, count: null, duration: null});

    useEffect( async function() {
        try {
           
            const data = await API.makeRequest('/activities', 'GET');
            console.log(data);
            //setToken(data.token);
            setNewActivities(data);
            } catch (error) {
            alert(error);
        } 
    }, []);

    function handleChange(event, key) {
        const data = event.target.value;
        setActivity(event.target.value);
        const newState = {...activityData};
        newState[key] = event.target.value.id;
        setActivityData(newState);
    }

    function handleInput(event, keyName) {
        const newState = {...activityData};
        newState[keyName] = event.target.value;
        setActivityData(newState);
        console.log(activityData)
    }

    async function handleSubmit(e) {
        try {
            await API.makeRequest(`/routines/${routineId}/activities`, 'POST', activityData);
        } catch (error) {
            throw error;
        }
        history.goBack();
    }

    return (
        <div className='new-activity'>
            <h1>Add New Activity</h1>
            <Box sx={{ minWidth: 120 }}>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Activity</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={activity}
                sx={{width: 220, marginBottom: 2}}
                label="Activity"
                onChange={(e) => handleChange(e, 'activityId')}
                >
                {
                    newActivities.map((activity, i) => {
                        return (
                            <MenuItem id={activity} value={activity} key={i}>{activity.name}</MenuItem>
                        )
                    })
                }
                </Select>
            </FormControl>
            </Box>
            <TextField defaultValue={0}
                       label='Count'
                       type='number'
                       sx={{marginBottom: 2}}
                       onChange={(e) => handleInput(e, 'count')}
                                    />
            <TextField defaultValue={0}
                       label='Duration'
                       type='number'
                       sx={{marginBottom: 2}}
                       onChange={(e) => handleInput(e, 'duration')}
            />
            <Button onClick={() => history.goBack()}>Cancel</Button>
            <Button onClick={(e) => handleSubmit(e)}>Add</Button> 
        </div>
    )
}

export default AddActivity;