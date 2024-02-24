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
        is: '',
        what: '',
        isWhatResult: null,
    })

    const [recentOperations, setRecentOperations] = useState([])

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

    const calculateIsWhat = () => {
        setState({ ...state, isWhatResult: '' })
    }

    const clearIsWhat = () => {
        setState({ ...state, is: '', what: '', isWhatResult: null })
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
                        <Col xs="6">
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

                        <Col xs="1">
                            <Button className="mb-2" onClick={calculateFromTo}>
                                =
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
            <hr />
            <Container fluid="sm">
                <Form>
                    <Row className="align-items-center">
                        <Col xs="3">
                            <InputGroup className="mb-1">
                                <Form.Control
                                    name="from"
                                    onChange={(e) => {
                                        setState({
                                            ...state,
                                            is: e.target.value,
                                            isWhatResult: null,
                                        })
                                    }}
                                    id="inlineFormInputGroup"
                                    placeholder="X"
                                />
                            </InputGroup>
                        </Col>
                        <Col xs="4">
                            <span>is what percentage of </span>
                        </Col>
                        <Col xs="3">
                            <InputGroup className="mb-1">
                                <Form.Control
                                    onChange={(e) => {
                                        setState({
                                            ...state,
                                            what: e.target.value,
                                            isWhatResult: null,
                                        })
                                    }}
                                    id="inlineFormInputGroup"
                                    placeholder="Y"
                                />
                            </InputGroup>
                        </Col>

                        <Col xs="2">
                            <Button className="mb-2" onClick={calculateIsWhat}>
                                =
                            </Button>
                            <Button className="mb-2" onClick={clearIsWhat}>
                                X
                            </Button>
                        </Col>
                    </Row>
                </Form>
                {state.isWhatResult !== null && (
                    <Alert variant="info">
                        {state.is} is {state.isWhatResult} % of {state.what}
                    </Alert>
                )}
            </Container>
        </div>
    )
}
