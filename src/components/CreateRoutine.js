import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Checkbox, TextField, FormControlLabel, Button } from '@mui/material';
import API from '../Api/api';

const CreateRoutine = () => {

    const [routine, setRoutine] = useState({name: '', goal: '', isPublic: false});
    const history = useHistory();

    function handleChange(event, postKey) {
        const newState = {...routine};
        {postKey === 'isPublic' ? newState[postKey] = event.target.checked ? true : false : newState[postKey] = event.target.value};
        setRoutine(newState);
        console.log(routine);
    }

    async function postRoutine() {
        try {
            const data = await API.makeRequest('/routines', 'POST', routine);
            console.log(data);
        } catch {
            throw error;
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        postRoutine();
        history.push('/my_routines');
    }


    return (
        <div className='create-routine'>
            <TextField variant='outlined'
                           type='text'
                           name='name'
                           label='Name'
                           color='primary'
                           onChange={(e) => handleChange(e, 'name')}
                           required />
                <TextField variant='outlined'
                           name='goal'
                           label='Goal'
                           color='primary'
                           onChange={(e) => handleChange(e, 'goal')}
                           required />
                <FormControlLabel control={<Checkbox color='primary'
                                                     onChange={(e) => handleChange(e, 'isPublic')}/>}
                                                     label='Public?'
                                                     style={{marginLeft: '2rem', marginTop: '1rem'}}>
                </FormControlLabel>
                <Button onClick={(e) => history.push('/my_routines')}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default CreateRoutine;