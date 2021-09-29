import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const Header = () => {
    const StyledButton = styled(Button)({
        background: '#4169e1',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 40,
        padding: '0 30px',
        boxShadow: 'black',
        fontSize: '.9rem'
    });

      return (
        <>
        <div className="header-tag">
            <h1>Fitness Trac.kr</h1>
            <div>
                <a>Log In</a>
                <a className="h21">Register</a>
            </div>
        </div>
        <header>
            <div id="nav-bar">
                <StyledButton component={Link} to="/">Home</StyledButton>
                <StyledButton>Routines</StyledButton>
                <StyledButton>My routines</StyledButton> 
                <StyledButton>Activities</StyledButton>
            </div> 
        </header>
        </>
    )
}

export default Header;