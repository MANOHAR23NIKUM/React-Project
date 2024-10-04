import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/Navbar.css'
import { styled } from '@mui/material';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  }
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" style={{background:'rgb(46, 45, 45)'}}>
      <Container>
        <Navbar.Brand href="javascript:void(0)" className='logo'>
              <img src='https://a2zithub.org/assets/165710745335077275.png' alt='Logoimg'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor:'white' ,color:'white'}} />
        <StyledNavbarCollapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{fontSize:'20',fontWeight:'500'}}>
            <Link className='nav-link' to="/home">Home</Link>
            <Link className='nav-link' to="/about">About</Link>
            <Link className='nav-link' to="/service">Service</Link>
            <Link className='nav-link' to="/contact">Contact</Link>
            {/* <StyledNavLink href="javascript:void(0)" onClick={() => navigateTo('/home')}>Home</StyledNavLink>      */}
            {/* <StyledNavLink href="javascript:void(0)" onClick={() => navigateTo('/about')} >About</StyledNavLink> */}
            {/* <StyledNavLink href="javascript:void(0)">Service</StyledNavLink> */}
            {/* <StyledNavLink href="javascript:void(0)">Contact</StyledNavLink> */}

            {/*  only Admin can see AllUser Page  */}
            {/* <StyledNavLink href="/all">AllUser</StyledNavLink> */}
          </Nav>
          <Nav style={{fontSize:'20',fontWeight:'500'}}>
            <NavDropdown title="Sign In" id="navbarScrollingDropdown" className='dropdown'>
            <Link className='nav-dropdown-item dropdown-item' to="/admin">Admin Login</Link>
            <Link className='nav-dropdown-item dropdown-item' to="/user">User Login</Link>
              {/* <NavDropdown.Item href="/admin">Admin Login</NavDropdown.Item>
              <NavDropdown.Item href="/">User Login</NavDropdown.Item> */}
            </NavDropdown>
            <Link className='dropdown1' to="/signup">Signup</Link>
            {/* <Link to="/signUp" className='dropdown1' sx={{fontWeight:'900',backgroundColor:'green'}} >SignUp</Link> */}
          </Nav>
        </StyledNavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
