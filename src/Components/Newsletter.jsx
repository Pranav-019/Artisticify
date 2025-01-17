import { Button, Col, Container, Form, Row } from "react-bootstrap"
import News from '../assets/Group 37.png'
import { IoMailOpenOutline } from "react-icons/io5";


function Newsletter() {
    return (
        <div className="my-5">
            <Container >
                <Row>


                    <div >

                    </div>
                    <div className='news'>
                        <div className='image-container'>
                            <img src={News} alt="Newlater image" className="news-container" />
                            <Col className="">

                                <div className='overlay-text2   ms-md-5 mt-5'>
                                    <h5 className=' lead pb-2 text-start text-md-start  ms-md-5 ps-md-5 ' style={{ lineHeight: "2px" }}>Subscribe to</h5>

                                    <h2 className='lead display-6 fw-bold text-md-start ms-md-5 ps-md-5'>Our Newsletter</h2>
                                    <p className="text-md-start  ms-md-5 ps-md-5 w-75 news-p">Stay Inspired, Stay Informed. We respect your privacy and promise no spam, only valuable updates. </p>

                                    <Form>
                                        <Form.Group
                                            className="mb-3 w-50 lead fw-bold text-md-start ms-md-5 ps-md-5 rounded"
                                            controlId="exampleForm.ControlInput1"
                                        >
                                            <div className="position-relative">
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    className="rounded-pill ps-5 news-input"
                                                />
                                                <IoMailOpenOutline
                                                    className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"
                                                    size={24}
                                                />
                                            </div>
                                            <Button className="mb-3  lead fw-bold text-md-center rounded-pill mt-4 news-input" style={{backgroundColor:":0d3e72"}}>Submit</Button>
                                        </Form.Group>
                                    </Form>

                                    
                                </div>



                            </Col>

                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Newsletter