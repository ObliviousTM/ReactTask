import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function PopUp({ props, data, onUpdate }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Shipment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Label>orderNo</Form.Label>
                <Form.Control defaultValue={data.orderNo} />
              </Col>
              <Col>
                <Form.Label>date</Form.Label>
                <Form.Control defaultValue={data.date} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>customer</Form.Label>
                <Form.Control defaultValue={data.customer} />
              </Col>
              <Col>
                <Form.Label>trackingNo</Form.Label>
                <Form.Control defaultValue={data.trackingNo} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>consignee</Form.Label>
                <Form.Control defaultValue={data.consignee} />
              </Col>
              <Col>
                <Form.Label>status</Form.Label>
                <Form.Control defaultValue={data.status} />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              onUpdate(data);
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;
