import React from 'react'
import './header.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <AppBar position="static">
                <Toolbar className='bar'>
                    <Button>
                        <img
                            className="header__icon"
                            src="https://static.bluelabellabs.com/wp-content/uploads/2021/10/bll-small-logo.png"
                            alt="icon"
                        />
                    </Button>
                    <Button style={{ "text-transform": "capitalize" }} color="inherit" >Work</Button>
                    <Button style={{ "text-transform": "capitalize" }} color="inherit" >Services</Button>
                    <Button style={{ "text-transform": "capitalize" }} color="inherit" >Specialties</Button>
                    <Button style={{ "text-transform": "capitalize" }} color="inherit" >About</Button>
                    <Button style={{ "text-transform": "capitalize" }} color="inherit" >Blog</Button>
                    <Button style={{ "text-transform": "capitalize" }} color="inherit" >Careers</Button>

                    <Button style={{"margin-left": "auto", "text-transform": "capitalize", color: "blue", background: "white", borderRadius: "50px" }} color="inherit" variant="outlined" size="medium">Let's talk😄</Button>                   
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header