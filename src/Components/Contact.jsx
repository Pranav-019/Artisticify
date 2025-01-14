import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMailOpenFill } from "react-icons/ri";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    
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
        <h1 className="text-center mt-1 text-center" >Contact for Any Query</h1>
        <h4>Send us a message</h4>
            <p>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.<a href='#' className='text-decoration-none' style={{color:"#13357B"}}> Download Now.</a></p>

       <div>
        
        <Row className='ms-2 pb-5'>
          <Col lg="4" className='bg-white rounded rounded-4'>
          <div className=' text-center div-contact pt-2 '>
              <h6>Conatct information</h6>
          </div>
          </Col>

          <Col lg="8">
            
            <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control type="email" placeholder="Your Name" className='p-3 ' style={{border:"none"}}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="password" placeholder="Your Email" className='p-3 ' style={{border:"none"}}/>
        </Form.Group>
      </Row>

     
      <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
      <Form.Control type="text" placeholder="subject" className='p-3 ' style={{border:"none"}}/>     
       </Form.Group>

      
      <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} placeholder='Message' className='pb-5 'style={{border:"none"}}/>
      </Form.Group>

     

      <Button variant="" className=' fw-bold me-5 px-5 py-3   w-100' id='discovernow'>Discover Now</Button> 
    </Form>
          </Col>
        </Row>
       </div>
       <div className="my-5 bg-light">
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
  )
}

export default Contact