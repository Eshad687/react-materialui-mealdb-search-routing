

import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-small.png'
import './Navbar.css'

const Navbar = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "darkblue"
    }
    useState()

    return (
        <>
            <Box sx={{ display: 'flex', py: 1, bgcolor: '#ef5350', justifyContent: 'space-evenly' }}>
                <img width="30%" src={logo} alt="" />



                <div>
                    <NavLink className="nav-links" activeStyle={activeStyle} to="/home">Home</NavLink>
                    <NavLink className="nav-links" activeStyle={activeStyle} to="/about">About</NavLink>
                    <NavLink className="nav-links" activeStyle={activeStyle} to="/restaurant">Restaurant</NavLink>
                </div>
            </Box>





        </>
    );
};

export default Navbar;
