import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = (props) => {
  const navigate = useNavigate();
  return (
    <Container className='navBody'>
      <Row>
        <Col xs={6}>
          <h1>Sewa & Rental Mobil Terbaik di Kawasan Jakarta</h1>
          <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
            Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          <Button variant="success" className="nav-button" onClick={() => navigate("/cars")}>Mulai Sewa Mobil</Button>
        </Col>
        <Col xs={6}><img src={process.env.PUBLIC_URL + '/images/img_car.png'} /> </Col>
      </Row>
    </Container>
  )
}
export default Navbar;
