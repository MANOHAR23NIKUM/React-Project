import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/Navbar.css'
import { styled } from '@mui/material';

const StyledNavLink = styled(Nav.Link)`
  color: white;
  font-size: 20px;
  font-weight: 500;
  transition: color 0.3s ease;
  font-family: "EB Garamond", serif;

  &:hover {
    color: red;
    background:rgb(241, 240, 239);
    border-radius:5px;
  }
`;

const StyledNavbarCollapse = styled(Navbar.Collapse)`
  background-color: rgb(46, 45, 45); /* Background color */
  color: white; /* Text color */
  
  .nav-link {
    color: white; /* Default text color for nav links */
  }
  
  .nav-link:hover {
    color: red; /* Color on hover */
  }
`;

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" style={{background:'rgb(46, 45, 45)'}}>
      <Container>
        <Navbar.Brand href="/home" className='logo'>
              <img src='http://hematitecorp.com/assets/images/logo.png' alt='Logoimg'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor:'white' ,color:'white'}} />
        <StyledNavbarCollapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{fontSize:'20',fontWeight:'500'}}>
            <StyledNavLink href="/">Home</StyledNavLink>
            <StyledNavLink href="/about">About</StyledNavLink>
            <StyledNavLink href="/contact">Contact</StyledNavLink>
            <StyledNavLink href="/service">Service</StyledNavLink>
            <StyledNavLink href="/all">AllUser</StyledNavLink>
          </Nav>
          <Nav style={{fontSize:'20',fontWeight:'500'}}>
          <StyledNavLink href="/signin">SignIn</StyledNavLink>
            <StyledNavLink eventKey={2} href="/signUp">SignUp</StyledNavLink>
          </Nav>
        </StyledNavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;