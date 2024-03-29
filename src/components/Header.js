import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Menus from '../menus'
import { compute } from '../utils'
import {
    Calculator,
    House,
    List,
    ClockHistory,
    MoonStars,
} from 'react-bootstrap-icons'

function Header({ title, showTransactions }) {
    return (
        <Container fluid="sm">
            <Row>
                <Col>
                    <h4>{title}</h4>
                </Col>
                <Col xs={5}>
                    <Button
                        variant="outline-primary"
                        size="sm"
                        className="mr-2"
                        style={{ marginRight: 10 }}
                        onClick={showTransactions}
                    >
                        <i>
                            <ClockHistory size={20} />
                        </i>
                    </Button>
                    <Button
                        variant="outline-primary"
                        size="sm"
                        className="mr-2"
                        style={{ marginRight: 10 }}
                        onClick={() => {
                            alert('Night theme coming soon')
                        }}
                    >
                        <i>
                            <MoonStars size={20} />
                        </i>
                    </Button>
                    <Menus />
                </Col>
            </Row>
            <hr />
        </Container>
    )
}

export default Header
