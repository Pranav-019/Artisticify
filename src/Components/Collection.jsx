import { Col, Container, Row } from "react-bootstrap"
import logo1 from '../assets/logo.png' 

function Collection() {
  return (
    <div className="text">
        <Container className="my-5">
            <div className="collection-container">
            <h1 className="text-center collection-title ">Collections</h1>

            </div>
        <Row className="mt-5 mb-5">
          <Col xs={12} md={4} className="mb-3">
            <div className="image-container1">
              <img src={logo1} className="w-100 image-hover" />
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <div className="image-container1">
              <img src={logo1} className="w-100 image-hover" />
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <div className="image-container1">
              <img src={logo1} className="w-100 image-hover" />
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <div className="image-container1">
              <img src={logo1} className="w-100 image-hover" />
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <div className="image-container1">
              <img src={logo1} className="w-100 image-hover" />
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <div className="image-container1">
              <img src={logo1} className="w-100 image-hover" />
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <div className="image-container1">
              <img src={logo1} className="w-100 image-hover" />
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <div className="image-container1">
              <img src={logo1} className="w-100 image-hover" />
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <div className="image-container1">
              <img src={logo1} className="w-100 image-hover" />
            </div>
          </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Collection