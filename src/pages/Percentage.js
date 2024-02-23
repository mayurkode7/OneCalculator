import React, { useState } from 'react';
import '../style.css';
import Header from '../components/Header'


import Stack from 'react-bootstrap/Stack';

import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


export default function Percentage() {
  const [state, setState] = useState({
    from: '',
    to: '',
    fromToResult: '',
  });
  const keypadClick = (e) => {
    let input = e.target.innerHTML;
    let _operation = state.operation + input;
    setState({ ...state, operation: _operation });
  };

  const calculate = () => { };

  const clear = () => { };

  const clearLastEntry = () => { };

  const showTransactions = () => {
    alert('feature coming soon...');
  };

  return (
    <>
      <Header title="Percentage" showTransactions={showTransactions} />

      <Container fluid="sm">
      <Form>
      <Row className="align-items-center">
        <p>What is the percentage increase/decrease</p>
        <Col xs="5">
         
          <InputGroup className="mb-1">
            <InputGroup.Text>From</InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" placeholder="for e.g 25" />
          </InputGroup>
        </Col>
        <Col xs="5">
        
          <InputGroup className="mb-1">
            <InputGroup.Text>To</InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" placeholder="for e.g 100" />
          </InputGroup>
        </Col>
        
        <Col xs="2">
          <Button type="submit" className="mb-2">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
      </Container>
    </>
  );
}
