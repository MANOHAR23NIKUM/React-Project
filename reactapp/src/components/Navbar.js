import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/Navbar.css'
import { styled } from '@mui/material';
import NavDropdown from 'react-bootstrap/NavDropdown';

const StyledNavLink = styled(Nav.Link)`
  color: white;
  font-size: 20px;
  font-weight: 500;
  transition: color 0.3s ease;
  font-family: "EB Garamond", serif;

  &:hover {
    color:orange;
  }
 

`;

const StyledNavbarCollapse = styled(Navbar.Collapse)`
  background-color: rgb(46, 45, 45); /* Background color */
  color: white; /* Text color */

  
  .nav-link {
    color: white; /* Default text color for nav links */
  }

  .nav-link:hover {
    color: orange; /* Color on hover */
  }
  
  
`;

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" style={{background:'rgb(46, 45, 45)'}}>
      <Container>
        <Navbar.Brand href="/home" className='logo'>
              <img src='https://a2zithub.org/assets/165710745335077275.png' alt='Logoimg'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor:'white' ,color:'white'}} />
        <StyledNavbarCollapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{fontSize:'20',fontWeight:'500'}}>
            <StyledNavLink href="/">Home</StyledNavLink>
            <StyledNavLink href="/about">About</StyledNavLink>
            <StyledNavLink href="/services">Service</StyledNavLink>
            <StyledNavLink href="/contact">Contact</StyledNavLink>
            <StyledNavLink href="/all">AllUser</StyledNavLink>
          </Nav>
          <Nav style={{fontSize:'20',fontWeight:'500'}}>
            <NavDropdown title="Sign In" id="navbarScrollingDropdown" className='dropdown'>
              <NavDropdown.Item href="/admin">Admin Login</NavDropdown.Item>
              <NavDropdown.Item href="/user">User Login</NavDropdown.Item>
            </NavDropdown>
            <StyledNavLink href="/signUp" id='dropdown'className='dropdown1' sx={{fontWeight:'900'}} >SignUp</StyledNavLink>
          </Nav>
        </StyledNavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;