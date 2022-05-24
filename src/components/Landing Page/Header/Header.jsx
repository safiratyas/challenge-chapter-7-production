import React from 'react';
import {
  Container,
  Navbar,
  Nav,
  Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar className='navbar' collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home" className='logo'></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className='menu' id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#our-services">Our Services</Nav.Link>
              <Nav.Link href="#why-us">Why Us</Nav.Link>
              <Nav.Link href="#testimonial">Testimonial</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
              <Button variant="success">Success</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
