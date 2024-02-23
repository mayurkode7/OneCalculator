import React, { useState } from 'react';
import '../style.css';
import { evaluate } from 'mathjs';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menus from '../menus';
import { compute } from '../utils';

export default function Percentage() {
  const [state, setState] = useState({
    operation: '',
    result: '',
  });
  const keypadClick = (e) => {
    let input = e.target.innerHTML;
    let _operation = state.operation + input;
    setState({ ...state, operation: _operation });
  };

  const calculate = () => {};

  const clear = () => {};

  const clearLastEntry = () => {};

  return (
    <>
      <Container fluid="sm">
        <Row>
          <Col xs={10}>
            <h4>Percentage Calculator</h4>
          </Col>
          <Col>
            <Menus />
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
}
