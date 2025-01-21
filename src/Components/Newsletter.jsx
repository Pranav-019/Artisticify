import { Button, Col, Container, Form, Row } from "react-bootstrap";
import News from '../assets/Group 37.png';
import { IoMailOpenOutline } from "react-icons/io5";
import { useState } from 'react';
import axios from 'axios';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    // Check if the email is valid
    if (!email) {
      setErrorMessage('Email is required');
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/newsletter/subscribe', { email });

      if (response.status === 201) {
        setSuccessMessage('Thank you for subscribing to Artisticify!');
        setEmail('');
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage('You are already subscribed to our newsletter.');
      } else {
        setErrorMessage('Failed to subscribe. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-5">
      <Container>
        <Row>
          <div className="news">
            <div className="image-container">
              <img src={News} alt="Newsletter" className="news-container" />
              <Col>
                <div className="overlay-text2 ms-md-5 mt-5">
                  <h5 className="lead pb-2 text-start text-md-start ms-md-5 ps-md-5" style={{ lineHeight: "2px" }}>
                    Subscribe to
                  </h5>
                  <h2 className="lead display-6 fw-bold text-md-start ms-md-5 ps-md-5">Our Newsletter</h2>
                  <p className="text-md-start ms-md-5 ps-md-5 w-75 news-p">
                    Stay Inspired, Stay Informed. We respect your privacy and promise no spam, only valuable updates.
                  </p>

                  {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                  {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group
                      className="mb-3 w-50 lead fw-bold text-md-start ms-md-5 ps-md-5 rounded"
                      controlId="exampleForm.ControlInput1"
                    >
                      <div className="position-relative">
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                          className="rounded-pill ps-5 news-input"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <IoMailOpenOutline
                          className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"
                          size={24}
                        />
                      </div>
                      <Button
                        className="mb-3 lead fw-bold text-md-center rounded-pill mt-4 news-input"
                        style={{ backgroundColor: "#0d3e72", color: "#fff", border: "none" }}
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </Button>
                    </Form.Group>
                  </Form>
                </div>
              </Col>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Newsletter;
