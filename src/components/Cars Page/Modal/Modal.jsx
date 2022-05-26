import React from 'react';
// import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  FormControl
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';

const InputCars = () => {
  return (
    <Container className="modal-input">
      <Row>
        <Col xs={2}>
          <label className="modal-label">Tipe Driver</label>
          <Form.Select aria-label="Default select example">
            <option>Pilih Tipe Driver</option>
            <option value="1">Dengan Supir</option>
            <option value="2">Tanpa Supir (Lepas Kunci)</option>
          </Form.Select>
        </Col>
        <Col xs={2}>
          <label className="modal-label">Pilih Tanggal</label>
          <Form.Control
            type="date"
            id="inputDate"
          />
        </Col>
        <Col xs={2}>
          <label className="modal-label">Waktu Jemput/Ambil</label>
          <Form.Control
            type="time"
            id="inputTime"
          />
        </Col>
        <Col xs={3}>
          <label className="modal-label">Jumlah Penumpang (Optional)</label>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Jumlah Penumpang"
            />
            <InputGroup.Text id="basic-addon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill"
                viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path fill-rule="evenodd"
                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
            </InputGroup.Text>
          </InputGroup>
        </Col>
        <Col xs={2}>
          <Button variant="success" className="modal-button">Cari Mobil</Button>
        </Col>
      </Row>
    </Container>
  )
}
export default InputCars;
