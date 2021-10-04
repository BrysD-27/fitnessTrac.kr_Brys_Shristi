import { Delete, LocalActivity } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Checkbox, TextField, FormControlLabel, IconButton, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import API from '../Api/api';
import TokenUtilities from '../Api/token';

const UserRoutines = ({name, goal, creatorName, activities, id}) => {
    return (
       
        <div className='routine'>
            <h2>Name: {name}</h2>
            <IconButton component={Link} 
                        to={{pathname: '/edit_routine',
                             state: {
                                 name,
                                 goal,
                                 creatorName,
                                 activities,
                                 id
                             }}}>
            <EditIcon />
            </IconButton>
            <h3>Goal: {goal}</h3>
            <p>User: {creatorName}</p>
            <h4>Activities</h4>
            {
                activities.map((act, i) => {
                    return (
                        <div className='act' key={i}>
                        <h5>Name: {act.name}</h5>
                        <p>Description: {act.description}</p>
                        <h5>Count: {act.count}</h5>
                        <h5>Duration: {act.duration}</h5>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default UserRoutines;