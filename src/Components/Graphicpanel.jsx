import { Col, Container, Row, Card } from 'react-bootstrap';
import graphic from '../assets/graphic.jpg';

function Graphicpanel() {
    return (
        <div>
            {/* Header Section */}
            <Container className="text-center my-5">
                <h2 className="blue fw-bold">Creative Graphic Design & Digital Marketing Company in India</h2>
                <h4 className="py-3 fw-bold">Unlock Creativity with Our Comprehensive Design & Digital Marketing Solutions—All Under One Roof!</h4>
                <p className="text-secondary">
                    From stunning web designs to impactful print materials and result-driven digital marketing strategies, 
                    we provide quality solutions tailored to elevate your brand. Let’s bring your ideas to life with designs 
                    that captivate and marketing strategies that convert!
                </p>
            </Container>

            {/* Services Section */}
            <Container className="my-5">
                <Row>
                    <Col xs={12} sm={6} md={4} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={graphic} style={{ height: '200px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title className="fw-bold">Graphic Design</Card.Title>
                                <Card.Text>
                                    Transform ideas into compelling visuals that capture attention instantly. 
                                    Let us bring your vision to life with stunning designs.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={graphic} style={{ height: '200px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title className="fw-bold">Digital Marketing</Card.Title>
                                <Card.Text>
                                    Boost your brand's presence with result-driven strategies, 
                                    engaging content, and impactful campaigns tailored for your audience.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={graphic} style={{ height: '200px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title className="fw-bold">Brand Development</Card.Title>
                                <Card.Text>
                                    Build a brand that resonates. From logos to identity systems, 
                                    we create cohesive visuals that leave a lasting impression.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* CTA Section */}
            <Container className="text-center my-5">
                <h4 className="fw-bold">Ready to Elevate Your Brand?</h4>
                <p className="text-secondary">
                    Partner with us for exceptional designs and marketing strategies that deliver results.
                </p>
                <button className="btn btn-primary">Get Started</button>
            </Container>
        </div>
    );
}

export default Graphicpanel;
