import React from 'react'
import { AppBar, styled, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../style/Navbar.css'

const Tabs = styled(NavLink)`
font-size:1.5vw;
margin-right:20px;
text-decoration:none;
color:black;
font-weight:600;
`

const Navbar = () => {
  return (
//    <h1> Navbar</h1>
<>
      <div>
        <AppBar position='static'>
            <Toolbar className='navbar'>
                <div className='logo'>
                     <img src='http://hematitecorp.com/assets/images/logo.png'/>
                </div>
                <div>
                    <Tabs to="/">Home</Tabs>
                    <Tabs to="/about">About</Tabs>
                    <Tabs to="/contact">Contact</Tabs>
                    <Tabs to="/services">Services</Tabs> 
                    {/* <Tabs to="/add">AddUser</Tabs> */}
                    <Tabs to="/all">AllUser</Tabs> 
                    
                  </div>
                <div className='righttab1'>
                    <Tabs>Sign In</Tabs>
                </div>
                  <div className='righttab'>
                    {/* <Tabs>Sign Up</Tabs> */}
                    <Tabs to="/add">SignUp</Tabs>
                </div>   
            </Toolbar>        
        </AppBar>
      </div>
  
</>
  )
}

export default Navbar
