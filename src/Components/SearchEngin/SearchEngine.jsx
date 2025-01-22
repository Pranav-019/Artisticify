import { useEffect, useRef, useState } from 'react';
import PosterImage from '../../assets/poster.png';
// import PosterImg from '../../assets/Artboard 03.jpg';

import flyer1 from '../../assets/flyer3.jpg';
import flyer2 from '../../assets/flyer3.jpg';
import flyer3 from '../../assets/flyer3.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function SearchEngine() {
  const [setIsVisible] = useState(false);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);
  const navigate=useNavigate();
  useEffect(() => {
    fetchPackages(); // Fetch package data on component mount
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

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

      // Filter packages where category is 'brochure'
      const searchenginePackages = data.filter(pkg => pkg.category === 'searchengine');

      // Limit the packages to 3 (Basic, Standard, Premium)
      setPackages(searchenginePackages.slice(0, 3));
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  const loadMorePackages = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      fetchPackages(); // Re-fetch packages to simulate loading more
      setLoading(false);
    }, 1000); // Simulate loading delay
  };
  return (
    <div className='text'>
      <div className='about'>
        <div className='image-container mb-5'>
          {/* <img src={PosterImg} className='main-about img-fluid mb-5'/> */}

        </div>
      </div>
      <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Effective SEO solutions for better visibility, with premium options for extra impact.</h2>

      <Container>
        <Row className="mb-5">
          <Col sm={12} md={6}>
            <div className="text-justify">
              <h4 className="fw-bold blue px-4 me-3 pb-2">Boost Your Online Visibility with Our SEO Services</h4>

              <div className="text-secondary text">
                <p>At Artisticify, we offer expert SEO services designed to help your business rank higher in search engine results, drive targeted traffic, and improve conversions. Our team uses a combination of on-page and off-page SEO strategies, including:

                </p>

                <p><span className='fw-bold'>Technical SEO:</span> Ensuring your website is technically sound, fast, and mobile-friendly.</p>
                <p><span className='fw-bold'>Keyword Research & Optimization:  </span>   Identifying the right keywords to target your ideal audience.</p>
                <p><span className='fw-bold'>On-Page SEO:</span> Optimizing your website’s content, meta tags, headings, and internal linking structure.</p>
                <p><span className='fw-bold'>Off-Page SEO:</span>Building high-quality backlinks and improving your site’s authority.
                </p>
                <p><span className='fw-bold'>SEO Analytics & Reporting: </span>Continuous tracking and analysis to refine strategies and measure results.
                </p>

                <p>Contact us today to improve your search rankings and grow your business with our tailored SEO services.
                </p>


              </div>

            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <div className="curve">
              <img src={PosterImage} className="p-5 rounded rounded-pill img-fluid" style={{ width: "500px", height: "500px" }} />
            </div>
          </Col>
        </Row>

        <Container>
          <div className="pt-5">
            <h3 className="text-center py-3 fw-bold">Why Choose a SEO Services?</h3>
            <p className="text-center w-75 d-flex justify-content-center mx-auto text-secondary mb-5">Effective SEO plays a crucial role in improving your online visibility. We ensure our strategies are tailored to boost your website&rsquo;s ranking while driving organic traffic. SEO remains a timeless and cost-effective solution, effectively promoting products, services, offers, and brand presence online.</p>
          </div>
          <h3 className="text-center  pt-3 fw-bold mb-5">See Our SEO Services Creation</h3>
          <Row>
            <Col xs={12} md={4} className="mb-3">

              <div className="image-container1">
                <img src={flyer1} className="w-100 image-hover" />
              </div>
            </Col>
            <Col xs={12} md={4} className="mb-3"><div className="image-container1">
              <img src={flyer2} className="w-100 image-hover" />
            </div></Col>
            <Col xs={12} md={4} className="mb-3"><div className="image-container1">
              <img src={flyer3} className="w-100 image-hover" />
            </div></Col>
          </Row>
        </Container>

      </Container>
      <div className="content-container mt-5 pt-5">

        <h3 className="text-center  pt-3 fw-bold mb-5"> SEO Services     Packages</h3>


        <div className="packages">
        {packages.map((pkg, index) => (
       <div className="package mb-3 position-relative text" key={index}>
       <div className="pb-5">
      <h3 className="text-center">{pkg.name}</h3>
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
       <button className="pck-btn rounded-pill d-flex justify-content-center mx-auto" onClick={() => navigate('/contact')}>
        Enquire Now
       </button>
       </div>
      </div>
       ))}
        </div>
      </div>
    </div>)
}

export default SearchEngine