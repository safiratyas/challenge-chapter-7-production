import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Navbar className='navbar' collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home" className='logo' onClick={() => navigate("/")}></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className='menu' id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#our-services">Our Services</Nav.Link>
            <Nav.Link href="#why-us">Why Us</Nav.Link>
            <Nav.Link href="#testimonial">Testimonial</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Button variant="success" className='header-button'>Success</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
