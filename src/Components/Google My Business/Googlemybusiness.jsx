import { useEffect, useRef, useState } from 'react';
import { 
  FaGoogle, 
  FaMapMarkerAlt, 
  FaSearchLocation, 
  FaChartLine, 
  FaEdit, 
  FaComments, 
  FaCalendarAlt,
  FaChartBar
} from 'react-icons/fa';
import { GiPositionMarker } from 'react-icons/gi';
import { MdManageAccounts, MdLocalOffer } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';

import PosterImg from '../../assets/google my business.jpg';
import gmbDashboard from '../../assets/gmb-dashboard.jpg';
import reviewsImg from '../../assets/reviews.jpg';
import postsImg from '../../assets/gmb-posts.jpg';

import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../SEO';

function Googlemybusiness() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetchPackages();
  }, []);

  const handleEnquire = () => {
    navigate('/contact', {
      state: { selectedService: 'Google My Business' }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMorePackages();
        }
      },
      { threshold: 1.0 }
    );
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await fetch("https://artisticify-backend.vercel.app/api/packages");
      const data = await response.json();
      const gmbPackages = data.filter(pkg => pkg.category === 'gmb');
      setPackages(gmbPackages.slice(0, 3));
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  const loadMorePackages = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      fetchPackages();
      setLoading(false);
    }, 1000);
  };
  
  return (
    <div className='text'>
      <SEO 
        title="Google My Business Marketing" 
        description="digital marketing
        marketing digital marketing
        digital marketing marketing
        digital marketing digital marketing
        a digital marketing
        digital marketing service
        performance marketing
        digital marketing company
        digital marketing agency
        top digital marketing companies
        services for digital marketing
        digital marketing near me
        digital marketing agency near me
        digital marketing and advertising companies
        best digital marketing agencies
        best digital marketing companies
        top digital marketing agency
        marketing agency digital
        digital agency marketing
        network marketer
        digital marketing and advertising agency" 
      />
      
      <div className='about'>
        <div className='image-container mb-5'>
          <img src={PosterImg} className='main-about img-fluid mb-5' alt="Google My Business Marketing" />
        </div>
      </div>
      
      <h2 className="text-center fw-bold text-white my-5 shadow logo-package">
        Get Found Locally – Attract More Customers with Google
      </h2>

      <Container>
        <Row className="mb-5 align-items-center">
          <Col sm={12} md={6}>
            <div className="text-justify">
              <h4 className="fw-bold blue px-4 me-3 pb-2">
                <GiPositionMarker className="me-2" />
                Google My Business Marketing Services
              </h4>

              <div className="text-secondary text">
                <p>Want your business to show up on Google Search and Maps when people search nearby?</p>

                <p>At Artisticify Digital Marketing Agency, we help you create and optimize your Google My Business (GMB) profile so more local customers can find and trust your business.</p>

                <p>We specialize in setting up and optimizing GMB profiles to ensure your business appears prominently in local searches. From accurate business information to managing customer reviews and posts, we handle every aspect of your Google My Business presence to drive more local traffic to your business.</p>

                <Button 
                  variant="primary" 
                  className="mt-3 fw-bold"
                  onClick={handleEnquire}
                  style={{ backgroundColor: "#13357B" }} 
                >
                  <RiCustomerService2Fill className="me-2" />
                  Get Started Today
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <div className="p-4">
              <img 
                src={gmbDashboard} 
                className="img-fluid rounded shadow-lg" 
                alt="Google My Business Dashboard" 
                style={{ maxHeight: '400px', border: '1px solid #ddd' }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Services Sections */}
      <div className='w-100 py-5'>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className='p-4'>
              <h3>
                <FaMapMarkerAlt className="me-2 " style={{ color: "#13357B" }}  />
                Google My Business Creation Service
              </h3>
              <h5 className='blue my-2'>Don't have a GMB profile yet? We'll set it up for you!</h5>
              <div className="text-secondary mt-3">
                <p>We help businesses establish their presence on Google Search and Maps by creating optimized GMB profiles. Our comprehensive setup includes:</p>
                <ul>
                  <li>Business verification with Google</li>
                  <li>Complete profile setup with accurate information</li>
                  <li>Category and attribute optimization</li>
                  <li>High-quality photos and logo upload</li>
                </ul>
                <Button 
                  variant="outline-primary" 
                  className="mt-2"
                  onClick={handleEnquire}
                  style={{ backgroundColor: "#13357B" , color: "#ffffff" }} 
                >
                  Get Your Business Listed
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <div className="p-4 text-center">
                <FaSearchLocation size={150} className=" mb-3" style={{ color: "#13357B" }}  />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='w-100 py-5' style={{ backgroundColor: "#F0F9FF" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="order-md-2">
              <div className="p-4">
                <h3>
                  <MdManageAccounts className="me-2" style={{ color: "#13357B" }}  />
                  Google My Business Optimization
                </h3>
                <h5 className='blue my-2'>Already have a profile? We'll make it perform better!</h5>
                <div className="text-secondary mt-3">
                  <p>Our optimization service includes:</p>
                  <ul>
                    <li>Information accuracy audit</li>
                    <li>Keyword optimization for local SEO</li>
                    <li>Posts and updates scheduling</li>
                    <li>Review management strategy</li>
                    <li>Performance tracking and reporting</li>
                  </ul>
                  <Button 
                    variant="outline-primary" 
                    className="mt-2"
                    onClick={handleEnquire}
                    style={{ color: "#ffffff",backgroundColor: "#13357B" }} 
                  >
                    Optimize Your Profile
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={6} className="order-md-1">
              <div className="p-4 text-center">
                <FaEdit size={120} className=" mb-4" style={{ color: "#13357B" }}  />
                <div className="d-flex justify-content-center">
                  <FaChartLine size={60} className="text-success mx-3" />
                  <FaComments size={60} className="text-info mx-3" />
                  <MdLocalOffer size={60} className="text-warning mx-3" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Benefits Section */}
      <div className='w-100 py-5'>
        <Container>
          <h2 className="text-center mb-5" style={{ color: "#13357B" }} >
            <FaGoogle className="me-3" style={{ color: "#13357B" }}  />
            Why Your Business Needs GMB
          </h2>
          <Row className="g-4">
            <Col md={4}>
              <div className="p-4 text-center h-100">
                <div className="bg-light p-4 rounded-circle d-inline-block mb-3">
                  <FaSearchLocation size={40} className="" style={{ color: "#13357B" }}  />
                </div>
                <h4>Local Visibility</h4>
                <p className="text-secondary">Appear in Google's local pack results when customers search for services like yours</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-4 text-center h-100">
                <div className="bg-light p-4 rounded-circle d-inline-block mb-3">
                  <FaChartBar size={40} className="text-success" />
                </div>
                <h4>Increased Traffic</h4>
                <p className="text-secondary">Get more website visits, phone calls, and store visits from local customers</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-4 text-center h-100">
                <div className="bg-light p-4 rounded-circle d-inline-block mb-3">
                  <FaComments size={40} className="text-info" />
                </div>
                <h4>Customer Trust</h4>
                <p className="text-secondary">Build credibility with positive reviews and complete business information</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Additional Features */}
      <div className='w-100 py-5' style={{ backgroundColor: "#F0F9FF" }}>
        <Container>
          <h2 className="text-center mb-5" style={{ color: "#13357B" }}>Our Comprehensive GMB Services</h2>
          <Row>
            <Col md={6} className="mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <div className="d-flex align-items-center mb-3">
                  <div className=" p-3 rounded-circle me-3" style={{ backgroundColor: "#13357B" }} >
                    <FaComments size={24} className="text-white" />
                  </div>
                  <h4 className="mb-0">Review Management</h4>
                </div>
                <p className="text-secondary">We monitor and professionally respond to all your Google reviews to build trust and improve your local reputation.</p>
                <div className="text-center mt-3">
                  <img 
                    src={reviewsImg} 
                    className="img-fluid rounded" 
                    alt="Google reviews" 
                    style={{ maxHeight: '200px' }}
                  />
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <div className="d-flex align-items-center mb-3" >
                  <div className=" p-3 rounded-circle me-3" style={{backgroundColor: "#13357B"}}>
                    <FaCalendarAlt size={24} className="text-white" />
                  </div>
                  <h4 className="mb-0">Regular Posts & Updates</h4>
                </div>
                <p className="text-secondary">We create and schedule regular posts to keep your profile active and engaging with offers, events, and news.</p>
                <div className="text-center mt-3">
                  <img 
                    src={postsImg} 
                    className="img-fluid rounded" 
                    alt="GMB posts example" 
                    style={{ maxHeight: '200px' }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


      {/* Packages */}
      <div className="content-container mt-5 pt-5">
        <div className='text-center fw-bold text-white my-5 shadow logo-package w-50 sm-w-75'>
          <h3 className="text-center fw-bold pkcg">
            Google My Business Packages
          </h3>
        </div>

        <div className="packages">
          {packages.map((pkg, index) => (
            <div className="package mb-3 position-relative text" key={index}>
              <div className="pb-5">
                <h3 className="text-center">
                  {pkg.type === "Basic"}
                  {pkg.type === "Standard"}
                  {pkg.type === "Premium"}
                  {pkg.name}
                </h3>
                <p>{pkg.description}</p>
                <ul className="text pb-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                {pkg.type === "Premium" ? (
                  <h4 className="text-center blue fw-bold price">Customizable</h4>
                ) : (
                  <h4 className="text-center blue fw-bold price">{pkg.price} /-</h4>
                )}
                <button 
                  className="pck-btn rounded-pill d-flex justify-content-center mx-auto" 
                  onClick={handleEnquire}
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Googlemybusiness;