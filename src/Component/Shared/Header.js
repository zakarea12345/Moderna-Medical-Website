import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <div>
           <Navbar bg="dark" sticky="top" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Z-Medi-Care</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link as={Link} to="/home">Home</Nav.Link>
                  <Nav.Link as={Link} to="/services">Services</Nav.Link>
                  <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                  <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                  {/* <Nav.Link as={Link} to="/login">
                      <button>Log In</button>
                  </Nav.Link> */}
                  {user.email && <span style={{color:"white",display:"flex",alignItems:"center",marginRight:"5px"}}>Hello {user.displayName} </span>}
               
               {
                   user.email ?
                   <button onClick={logOut}>Log out</button>
                   :
                   <Nav.Link as={Link} to="/login">Log In</Nav.Link>}
                   <Nav.Link as={Link} to="/register">Register</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );
};

export default Header;