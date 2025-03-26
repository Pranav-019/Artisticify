import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from 'react';
import axios from 'axios';
import MainImg from '../assets/postive-caring-relationships-teachers 1.png';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    serviceSelected: 'Select',
    message: '',
  });

  const [ setSelectedService] = useState('Select');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State to track success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage(''); // Clear success message when the form is being submitted

    // Specific validation for each field
    if (!formData.name) {
      setErrorMessage('Name is required.');
      setIsSubmitting(false);
      return;
    }

    if (!formData.email) {
      setErrorMessage('Email is required.');
      setIsSubmitting(false);
      return;
    }

    if (!formData.phone) {
      setErrorMessage('Phone number is required.');
      setIsSubmitting(false);
      return;
    }

    if (!formData.city) {
      setErrorMessage('City is required.');
      setIsSubmitting(false);
      return;
    }

    if (formData.serviceSelected === 'Select') {
      setErrorMessage('Service selection is required.');
      setIsSubmitting(false);
      return;
    }

    if (!formData.message) {
      setErrorMessage('Message is required.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post('https://artisticify-backend.vercel.app/api/contact/submit', formData);

      if (response.status === 201) {
        setSuccessMessage('Message sent successfully!'); // Show success message
        setFormData({ name: '', email: '', phone: '', city: '', serviceSelected: 'Select', message: '' });
        setSelectedService('Select');
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className='contact1 text'>
        <div className='image-container'>
          <img src={MainImg} className='main-contact img-fluid' alt="Contact Us" />
          <div className='overlay-text1 overlay-text11'>
            <h1 className="fw-bold display-4 pb-2 text-start text-md-start text-center ms-md-5 ps-md-5 text">Contact us...</h1>
            <h3 className="lead fw-bold text-md-start text-center ms-md-5 ps-md-5 text">Start your project today.</h3>
          </div>
        </div>
      </div>
      <div className='bg-body-tertiary'>
        <div className="">
          {/* <div className="overlay">
            <h1 className="mainFontSize fw-bold text-light">Contact us</h1>
          </div> */}
        </div>
        <Container>
          <h4 className="colorBlue pt-5 pb-2 text-center">----- Contact Information -----</h4>
          <h1 className="text-center mt-1 text-center">Contact for Any Query</h1>
          <h4 className='text-center py-3'>Send us a message</h4>

          <div>
            <Row className='contact ms-2 pb-5 bg-white p-4 rounded rounded-4 mb-5'>
              <Col lg="3" className='conatct-info rounded rounded-4'>
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
                {successMessage ? (
                  <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group as={Col} sm={12} md={6} controlId="formGridName">
                        <label className='pb-2 ps-2'>Enter Your Name</label>
                        <Form.Control
                          type="text"
                          placeholder="Your Name"
                          className='p-2 rounded-pill'
                          style={{ border: "1px solid #0d3e72", borderRadius: "4px" }}
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          
                        />
                      </Form.Group>

                      <Form.Group as={Col} sm={12}  md={6} controlId="formGridEmail">
                        <label className='pb-2 ps-2'>Enter Email</label>
                        <Form.Control
                          type="email"
                          placeholder="Your Email"
                          className='p-2 rounded-pill'
                          style={{ border: "1px solid #0d3e72", borderRadius: "4px" }}
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group as={Col} sm={12}  md={6} controlId="formGridPhone">
                        <label className='pb-2 ps-2'>Enter Your Phone no.</label>
                        <Form.Control
                          type="number"
                          placeholder="Your Phone"
                          className='p-2 rounded-pill'
                          style={{ border: "1px solid #0d3e72", borderRadius: "4px" }}
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group as={Col} sm={12}  md={6} controlId="formGridCity">
                        <label className='pb-2 ps-2'>Enter Your City</label>
                        <Form.Control
                          type="text"
                          placeholder="Your City"
                          className='p-2 rounded-pill'
                          style={{ border: "1px solid #0d3e72", borderRadius: "4px" }}
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Row>

                    <label className='pb-2 ps-2'>Select Your Services</label>
                    <Form.Control
                      as="select"
                      className='w-100 text-start rounded-pill'
                      style={{ border: "1px solid #0d3e72", borderRadius: "4px" }}
                      name="serviceSelected"
                      value={formData.serviceSelected}
                      onChange={handleChange}
                    >
                      <option value="Select">Select</option>
  <option value="Logo Design">Logo Design</option>
  <option value="Brochure Design"> Brochure Design</option>
  <option value="Packaging Design">Packaging Design</option>
  <option value="Flyer Design">Flyer Design</option>
  <option value="Poster Design">Poster Design</option>
  <option value="UI/UX Design">UI/UX Design</option>
  <option value="Magazine Design">Magazine Design</option>
  <option value="Visual Aid Design"> Visual Aid Design</option>
  <option value="Calendar Design"> Calendar Design</option>
  <option value="Icon Design">Icon Design</option>
  <option value="Stationary Design"> Stationary Design</option>
  <option value="Letter Head Design"> Letter Head Design</option>
  <option value="Envelope Design"> Envelope Design</option>
  <option value="Visiting Card Design"> Visiting Card Design</option>
  <option value="Certificate Design"> Certificate Design</option>
  <option value="Menu Card Design"> Menu Card Design</option>
  <option value="SEO"> SEO</option>
  <option value="Social Media"> Social Media</option>
  <option value="Content Marketing"> Content Marketing</option>
  <option value="Pay Per Click"> Pay Per Click</option>

  <option value="Special Package (combined services)">Special Package (combined services)</option>
                    </Form.Control>

                    <Form.Group className="mb-2 mt-2" controlId="exampleForm.ControlTextarea1">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder='Message'
                        className='pb-5'
                        style={{ border: "1px solid #0d3e72", borderRadius: "4px" }}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    {errorMessage && <p className='text-danger'>{errorMessage}</p>}

                    <Button
                      variant=""
                      className='contact-btn rounded-pill fw-bold me-5 px-5 py-3 w-100 text-white'
                      id='discovernow'
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send'}
                    </Button>
                  </Form>
                )}
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
              title="Google Map"
            ></iframe>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
