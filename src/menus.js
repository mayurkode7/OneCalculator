import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { Calculator, House, List } from 'react-bootstrap-icons';
import ListGroup from 'react-bootstrap/ListGroup';
import './style.css';
function Menus() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onMenuClick = (location) => {
    navigate('/' + location);
    handleClose();
  };

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow} size="sm">
        <i onClick={handleShow}>
          <List size={20} />
        </i>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="top">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>All Calculators </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="menu">
          <ListGroup>
            <ListGroup.Item onClick={() => onMenuClick('standard')}>
              Standard
            </ListGroup.Item>
            <ListGroup.Item onClick={() => onMenuClick('percentage')}>
              Percentage
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Menus;
