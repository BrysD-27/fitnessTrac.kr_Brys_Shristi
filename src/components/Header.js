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
                <a className="h21" href="/users/login">Log In</a>
                <a className="h21" href="/users/register">Register</a>
            </div>
        </div>
        <header>
            <div id="nav-bar">
                <StyledButton component={Link} to="/">Home</StyledButton>
                <StyledButton component={Link} to ="/routines">Routines</StyledButton>
                <StyledButton component={Link} to="/my_routines">My routines</StyledButton> 
                <StyledButton component={Link} to='/activities'>Activities</StyledButton>
            </div> 
        </header>
        </>
    )
}

export default Header;