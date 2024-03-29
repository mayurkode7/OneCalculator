import React, { useState } from 'react'
import '../style.css'
import { evaluate } from 'mathjs'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'

import { compute } from '../utils'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Standard() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [state, setState] = useState({
        operation: '',
        result: '',
    })

    const [history, setHistory] = useState([])

    const onChangeOperation = (e) => {
        setState({ ...state, operation: e.target.value.toString().trim() })
    }

    const calculate = () => {
        try {
            let _op = state.operation
            const result = compute(state.operation)
            setHistory((preH) => [...preH, _op + '=' + result])
            setState({ ...state, result: result })
        } catch (error) {
            alert('Input not valid')
            clear()
        } finally {
        }
    }

    const clearLastEntry = () => {
        let _existingOperation = state.operation
        let _newOperation = _existingOperation.substring(
            0,
            _existingOperation.length - 1
        )
        setState({ ...state, operation: _newOperation })
    }
    const clear = () => {
        setState({ operation: '', result: '' })
    }

    const keypadClick = (e) => {
        let input = e.target.innerHTML
        let _operation = state.operation + input
        setState({ ...state, operation: _operation })
    }

    const showTransactions = () => {
        handleShow()
    }

    return (
        <div style={{ maxWidth: '450px', margin: '0 auto' }}>
            <Header title="Standard" showTransactions={showTransactions} />

            <Container fluid="sm">
                <Stack>
                    <Form>
                        <div className="operation">
                            <Form.Group
                                className="mb-2"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Operations</Form.Label>
                                <Form.Control
                                    // autoFocus={true}
                                    as="textarea"
                                    rows={1}
                                    value={state.operation}
                                    onChange={onChangeOperation}
                                    className="text-end"
                                    inputMode={'none'}
                                    placeholder="Input your math expression here"
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Result</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="The result of the operation will be here"
                                    value={state.result}
                                    readOnly
                                    className="text-end"
                                />
                            </Form.Group>
                            {/* <div className="buttons p-2">
                <Button
                  size="small"
                  variant="primary"
                  className="center "
                  onClick={calculate}
                >
                  Calculate
                </Button>
                <Button variant="text" className="center" onClick={clear}>
                  Clear
                </Button>
              </div> */}
                        </div>
                    </Form>

                    <Stack gap={3}>
                        <div className="d-flex justify-content-center gap-4">
                            <Button
                                variant="warning btn-circle"
                                onClick={keypadClick}
                            >
                                %*
                            </Button>
                            <Button
                                variant="warning btn-circle"
                                onClick={keypadClick}
                            >
                                (
                            </Button>
                            <Button
                                variant="warning btn-circle"
                                onClick={keypadClick}
                            >
                                )
                            </Button>
                            <Button
                                variant="warning btn-circle"
                                onClick={keypadClick}
                            >
                                %
                            </Button>
                        </div>
                        <div className="d-flex justify-content-center gap-4">
                            <Button
                                variant="outline-primary  btn-circle"
                                onClick={keypadClick}
                            >
                                7
                            </Button>
                            <Button
                                variant="outline-primary   btn-circle"
                                onClick={keypadClick}
                            >
                                8
                            </Button>
                            <Button
                                variant="outline-primary   btn-circle"
                                onClick={keypadClick}
                            >
                                9
                            </Button>
                            <Button
                                variant="warning btn-circle"
                                onClick={keypadClick}
                            >
                                /
                            </Button>
                        </div>
                        <div className="d-flex justify-content-center gap-4">
                            <Button
                                variant="outline-primary   btn-circle"
                                onClick={keypadClick}
                            >
                                4
                            </Button>
                            <Button
                                variant="outline-primary   btn-circle"
                                onClick={keypadClick}
                            >
                                5
                            </Button>
                            <Button
                                variant="outline-primary   btn-circle"
                                onClick={keypadClick}
                            >
                                6
                            </Button>
                            <Button
                                variant="warning btn-circle"
                                onClick={keypadClick}
                            >
                                *
                            </Button>
                        </div>
                        <div className="d-flex justify-content-center gap-4">
                            <Button
                                variant="outline-primary  btn-circle"
                                onClick={keypadClick}
                            >
                                1
                            </Button>
                            <Button
                                variant="outline-primary  btn-circle"
                                onClick={keypadClick}
                            >
                                2
                            </Button>
                            <Button
                                variant="outline-primary  btn-circle"
                                onClick={keypadClick}
                            >
                                3
                            </Button>
                            <Button
                                variant="warning btn-circle"
                                onClick={keypadClick}
                            >
                                -
                            </Button>
                        </div>
                        <div className="d-flex justify-content-center gap-4">
                            <Button
                                variant="outline-primary   btn-circle"
                                onClick={keypadClick}
                            >
                                0
                            </Button>
                            <Button
                                variant="outline-primary   btn-circle"
                                onClick={keypadClick}
                            >
                                00
                            </Button>
                            <Button
                                variant="outline-primary   btn-circle"
                                onClick={keypadClick}
                            >
                                000
                            </Button>

                            <Button
                                variant="warning btn-circle"
                                onClick={keypadClick}
                            >
                                +
                            </Button>
                        </div>

                        <div className="d-flex justify-content-center gap-4">
                            <Button variant="danger btn-circle" onClick={clear}>
                                AC
                            </Button>
                            <Button
                                variant="danger btn-circle"
                                onClick={clearLastEntry}
                            >
                                C
                            </Button>
                            <Button
                                variant="outline-primary   btn-circle"
                                onClick={keypadClick}
                            >
                                .
                            </Button>

                            <Button
                                variant="success btn-circle"
                                onClick={calculate}
                            >
                                =
                            </Button>
                        </div>
                    </Stack>
                </Stack>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Recent Calculations</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {history.length > 0 ? (
                        <>
                            {history.map((o) => (
                                <p> {o}</p>
                            ))}
                        </>
                    ) : (
                        <p> Nothing to show</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Footer />
        </div>
    )
}
