import React, { useState } from 'react'
import '../style.css'
import Header from '../components/Header'
import Alert from 'react-bootstrap/Alert'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import { evaluate } from 'mathjs'

export default function Percentage() {
    const [state, setState] = useState({
        from: '',
        to: '',
        fromToResult: null,
    })
    const keypadClick = (e) => {
        let input = e.target.innerHTML
        let _operation = state.operation + input
        setState({ ...state, operation: _operation })
    }

    const calculate = () => {}

    const clear = () => {}

    const clearLastEntry = () => {}

    const showTransactions = () => {
        alert('feature coming soon...')
    }

    const calculateFromTo = () => {
        const from = state.from
        const to = state.to
        let r1 = evaluate(`${to} - ${from}`)
        let r2 = evaluate(`${r1}/${from}`)
        let r3 = evaluate(`${r2} * 100`)
        setState({ ...state, fromToResult: '' + r3 })
    }

    return (
        <div style={{ maxWidth: '450px', margin: '0 auto' }}>
            <Header title="Percentage" showTransactions={showTransactions} />

            <Container fluid="sm">
                <Form>
                    <Row className="align-items-center">
                        <p>What is the percentage increase/decrease</p>
                        <Col xs="5">
                            <InputGroup className="mb-1">
                                <InputGroup.Text>From</InputGroup.Text>
                                <Form.Control
                                    name="from"
                                    onChange={(e) => {
                                        setState({
                                            ...state,
                                            from: e.target.value,
                                            fromToResult: null,
                                        })
                                    }}
                                    id="inlineFormInputGroup"
                                    placeholder="for e.g 25"
                                />
                            </InputGroup>
                        </Col>
                        <Col xs="5">
                            <InputGroup className="mb-1">
                                <InputGroup.Text>To</InputGroup.Text>
                                <Form.Control
                                    onChange={(e) => {
                                        setState({
                                            ...state,
                                            to: e.target.value,
                                            fromToResult: null,
                                        })
                                    }}
                                    id="inlineFormInputGroup"
                                    placeholder="for e.g 100"
                                />
                            </InputGroup>
                        </Col>

                        <Col xs="2">
                            <Button className="mb-2" onClick={calculateFromTo}>
                                Calculate
                            </Button>
                        </Col>
                    </Row>
                </Form>
                {state.fromToResult !== null && (
                    <Alert variant="info">
                        Percentage change from {state.from} to {state.to} is{' '}
                        {state.fromToResult} %
                    </Alert>
                )}
            </Container>
        </div>
    )
}
