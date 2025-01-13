import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
  return (
    <div>
        <Container  className="d-flex justify-content-center align-items-center">
      <Row>
        <Col md={3}>
        111
        </Col>
        <Col md={9}>
        222
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Contact