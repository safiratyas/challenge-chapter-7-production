import React from 'react';
import {
  Card,
  Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css';

class Banner extends React.Component {
  render() {
    return (
      <Card className="banner">
        <Card.Body>
          <Card.Title className='title'>Sewa Mobil di Jakarta Sekarang</Card.Title>
          <Card.Text className='desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </Card.Text>
          <Card.Text className='desc'>
            tempor incididunt ut labore et dolore magna aliqua
          </Card.Text>
          <Button variant="success" className='button'>Mulai Sewa Mobil</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Banner;
