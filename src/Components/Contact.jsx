import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedService, setSelectedService] = useState('Select');

  const handleSelect = (eventKey) => {
    setSelectedService(eventKey);
  };

  return (

    <div>
     
      <div className='bg-body-tertiary '>
      <div className="div-mainImg">
        <div className="overlay">
          <h1 className="mainFontSize fw-bold text-light">Contact us</h1>
        </div>
      </div>
      <Container>
        <h4 className="colorBlue pt-5 pb-2 text-center">
          ----- Contact Information -----
        </h4>
        <h1 className="text-center mt-1 text-center " >Contact for Any Query</h1>
        <h4 className='text-center py-3'>Send us a message</h4>
        <p>Effortlessly integrate a fully functional and responsive contact form into your website in just a few simple steps. With our easy-to-use solution, you will be able to handle user inquiries smoothly and professionally. No coding skills required—just download the necessary files, make a few simple edits, and you are all set. Don not miss out on this quick and efficient way to enhance your sites communication capabilities. </p>

        <div>

          <Row className=' contact ms-2 pb-5 bg-white p-4  rounded rounded-4 mb-5'>
            <Col lg="3" className=' conatct-info rounded rounded-4'>
              <div className="text-center div-contact p-4 text-white">
                <h5 className='pt-4'>Contact Information</h5>
                <div className="d-flex p-3 align-items-center">
                  <FaPhoneAlt className="me-3" style={{ fontSize: '20px' }} />
                  <p className="mb-0" style={{ fontSize: '16px' }}>+91-9112452929</p>
                </div>
                <div className="d-flex p-3 align-items-center">
                  <MdEmail className="me-3" style={{ fontSize: '20px' }} />
                  <p className="mb-0" style={{ fontSize: '16px' }}>info@artisticify.com</p>
                </div>
                <div className="d-flex p-3 align-items-center">
                  <FaLocationDot className="me-3" style={{ fontSize: '60px' }} />
                  <p className="mb-0 text-start" style={{ fontSize: '16px' }}>3rd Floor, 307 Amanonora Chamber, Amanora Mall Hadapsar, Pune - 411028, Maharashtra</p>
                </div>
              </div>


            </Col>

            <Col lg="9" className='p-4'>
              <Form>
              <Row className="mb-3 ">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label className='pb-2 ps-2'>Enter Your Name</label>
                    <Form.Control type="text" placeholder="Your Name" className='p-2 rounded-pill' style={{ border: "1px solid #0d3e72", borderRadius: "4px" }} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <label className='pb-2 ps-2'>Enter Email</label>
                    <Form.Control type="email" placeholder="Your Email" className='p-2 rounded-pill' style={{ border: "1px solid #0d3e72", borderRadius: "4px" }} />
                  </Form.Group>
                </Row>
                <Row className="mb-3 ">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label className='pb-2 ps-2'>Enter Your Phone no.</label>
                    <Form.Control type="number" placeholder="Your Phone" className='p-2 rounded-pill' style={{ border: "1px solid #0d3e72", borderRadius: "4px" }} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <label className='pb-2 ps-2'>Enter Your City</label>
                    <Form.Control type="text" placeholder="Your City" className='p-2 rounded-pill' style={{ border: "1px solid #0d3e72", borderRadius: "4px" }} />
                  </Form.Group>
                </Row>


                <Dropdown onSelect={handleSelect}>
                  <label className='pb-2 ps-2'>Select Your Services</label>

                  <Dropdown.Toggle variant="" id="dropdown-basic" className='w-100 text-start rounded-pill' style={{ border: "1px solid #0d3e72", borderRadius: "4px" }} >
                    {selectedService}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className='w-100'>
                    <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="Another action">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="Something else">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>


                <Form.Group className="mb-2 mt-2 rounded-pill" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={3} placeholder='Message' className='pb-5 ' style={{ border: "1px solid #0d3e72", borderRadius: "4px" }} />
                </Form.Group>



                <Button variant="" className='contact-btn rounded-pill fw-bold me-5 px-5 py-3   w-100 text-white' id='discovernow'>Send</Button>
              </Form>
            </Col>
          </Row>
        </div>
        <div className="my-5 bg-light contact">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.237044784079!2d73.93339937496293!3d18.518187182574838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c22241555591%3A0x55b4e980eb492d65!2sAmanora%20Chambers!5e0!3m2!1sen!2sin!4v1736832612389!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </Container>

    </div>
    </div>
  )
}

export default Contact