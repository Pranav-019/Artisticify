import { useState, useEffect, useRef } from "react";
import "./logo.css"; // Ensure your CSS file path is correct
import { Col, Container, Row } from "react-bootstrap";
import LogoImg from '../../assets/logo design 2.jpg'
import Teddy from '../../assets/istockphoto-1421037079-612x612-removebg-preview.png'
import logo1 from '../../assets/logo.png'  // Fixed import for logo1
import { useNavigate } from "react-router-dom";

const Logo = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const [ setIsVisible] = useState(false);
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

      // Filter packages where category is 'logo'
      const logoPackages = data.filter(pkg => pkg.category === 'logo');

      // Limit the packages to 3 (Basic, Standard, Premium)
      setPackages(logoPackages.slice(0, 3));
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
    <div className="Logo text">
      <div className='about'>
        <div className='image-container'>
          <img src={LogoImg} className='main-about img-fluid '/>
        </div>
      </div>

      <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Professional Logo Design Agency Dedicated to Crafting Memorable Brands</h2>

      <Container>
        <Row className="mb-5">
          <Col>
            <div className="text-justify">
              <h4 className="fw-bold blue px-4 me-3 pb-2">Unique logo designs for businesses across India</h4>

              <div className="text-secondary">
                <p>Creative Logo Design Agency with Years of Experience That Speak for Themselves</p>
                <p>First impressions are everything – and you only get one. Make it count with a logo that perfectly represents your business.</p>
                <p>We are a professional creative logo design company, based in India, specializing in corporate and business logo design. As one of the top 10 logo design agencies in India, we realize the true impact of a logo and what&rsquo;s required for your brand&rsquo;s identity.</p>
                <p>Your logo is your company&rsquo;s face – it stands for you today and will into the future until your business finally closes down shop, and then beyond. Do not leave it to an amateur to do this work for you; our creative designer team will build a custom-made logo specifically tailored to your needs, so that your brand glows.</p>
                <p>Whether you&rsquo;re a start-up, mid-size company, or an enterprise, your logo will always be at the heart of your corporate identity. We provide custom solutions for businesses of all sizes. If you are not happy with your current logo and think that it no longer is true to the success achieved, let us work with you to redefine your logo for even greater effect.</p>
                <p>Looking for creative premium logo design services in India, the beyond? Artisticify Graphics is your go-to solution.</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <div className="curve">
              <img src={Teddy} className="p-5  rounded rounded-pill img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <div className="">
          <h3 className="text-center py-3 fw-bold">Our Creative Logo Design Works</h3>
          <p className="text-center w-50 d-flex justify-content-center mx-auto text-secondary mb-5">
            We promise you&rsquo;ll receive an outstanding logo design, regardless of your budget. With our higher-tier packages, you’ll benefit from more experienced designers and greater personalized assistance.
          </p>
        </div>
        <Row>
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

      {/* Scrollable Content */}
      <div className="content-container mt-5 pt-5">
        <h3 className="text-center pt-3 fw-bold">How Much does it Cost to Design a Logo?</h3>
        <p className="text-center w-50 d-flex justify-content-center mx-auto text-secondary my-5">
          We assure you that you&rsquo;ll receive an outstanding logo design regardless of your budget. Our premium packages provide access to highly experienced designers and personalized support.
        </p>

        <div className="packages text">
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
       <button className="pck-btn rounded-pill d-flex justify-content-center mx-auto"  onClick={() => navigate('/contact')}>
        Enquire Now
       </button>
       </div>
      </div>
       ))}
        </div>
      </div>
    </div>
  );
};

export default Logo;
