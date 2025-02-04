import { useEffect, useRef, useState } from 'react';
import PosterImage from '../../assets/ppc (1).png';
import PosterImg from '../../assets/Pay Per Click Services.jpg';

import flyer1 from '../../assets/flyer3.jpg';
import flyer2 from '../../assets/flyer3.jpg';
import flyer3 from '../../assets/flyer3.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaTags } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { FaUserDoctor } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaBusSimple } from "react-icons/fa6";
function PayPer() {
  const [setIsVisible] = useState(false);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  const navigate = useNavigate()
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
      const payperclickPackages = data.filter(pkg => pkg.category === 'payperclick');

      // Limit the packages to 3 (Basic, Standard, Premium)
      setPackages(payperclickPackages.slice(0, 3));
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
          <img src={PosterImg} className='main-about img-fluid mb-5' />

        </div>
      </div>
      <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Achieve higher conversions with strategic PPC management, tailored for you.</h2>

      <Container>
        <Row className="mb-5">
          <Col sm={12} md={6}>
            <div className="text-justify">
              <h4 className="fw-bold blue px-4 me-3 pb-2">Maximize Your ROI with Our Pay-Per-Click (PPC) Marketing Services</h4>

              <div className="text-secondary text">
                <p>Looking to drive instant traffic and boost conversions? Artisticify offers expert PPC digital marketing services to help your business reach the right audience at the right time. Our data-driven approach ensures that every click counts, delivering measurable results and maximizing your return on investment (ROI).

                </p>

                <p>We specialize in managing PPC campaigns across platforms like Google Ads, Facebook Ads, LinkedIn Ads, Instagram Ads, and more. From keyword research and ad creation to campaign optimization and performance tracking, we handle everything to ensure your ads are cost-effective and impactful.</p>

                <p>With our strategic targeting and continuous monitoring, we help businesses of all sizes generate qualified leads, increase brand visibility, and achieve their marketing goals. Whether you want to increase website traffic, drive sales, or enhance brand awareness, our tailored PPC solutions are designed to fit your needs.</p>

                <p>Partner with Artisticify today and take your online advertising to the next level with our expert PPC strategies.
                </p>


              </div>

            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <div className="curve">
              <img src={PosterImage} className="p-5 rounded rounded-pill img-fluid" style={{ width: "500", height: "500px" }} />
            </div>
          </Col>
        </Row>

        <Container>
          <div className="pt-5">
            <h3 className="text-center py-3 fw-bold">Why Choose a Pay-Per-Click marketing Company?</h3>
            <p className="text-center w-75 d-flex justify-content-center mx-auto text-secondary mb-5">Effective PPC marketing plays a crucial role in driving targeted traffic to your business. We ensure our campaigns are strategically crafted while delivering measurable results. PPC remains a powerful and cost-effective solution, effectively promoting products, services, offers, and business goals.</p>
          </div>

          {/* <Row>
                   <Col  xs={12} md={4} className="mb-3">
                  
                     <div className="image-container1">
                       <img src={flyer1} className="w-100 image-hover" />
                     </div>
                   </Col>
                   <Col  xs={12} md={4} className="mb-3"><div className="image-container1">
                     <img src={flyer2} className="w-100 image-hover" />
                   </div></Col>
                   <Col  xs={12} md={4} className="mb-3"><div className="image-container1">
                     <img src={flyer3} className="w-100 image-hover" />
                   </div></Col>
                 </Row> */}
        </Container>

      </Container>
      <div className='w-100' style={{ backgroundColor: "#F0F9FF" }}>
        <Container>
          <div>
            <h3 className='text-center fw-bold pb-2 pt-5'>Benefits of PPC Services</h3>
            <Row className="mt-4 mb-4 pb-5">
              <Col md={6} className="mb-4">
                <div className='bg-white p-5 text-center rounded-4 tag'>
                  <div className='mx-auto d-flex justify-content-center align-items-center rounded-circle' style={{ backgroundColor: '#0d3e72', width: '80px', height: '80px' }}>
                    <FaTags className='text-white' style={{ width: '40px', height: '40px' }} />
                  </div>
                  <div className='my-4 shadow-none'>
                    <h3 className='mb-2'>Immediate Results</h3>
                    <p className='text-secondary'>
                      It looks like you're comparing PPC with SEO. Do you want to add more examples of marketing strategies that provide immediate results, like social media ads or influencer marketing? 
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={6} className="mb-4">
                <div className='bg-white p-5 text-center rounded-4 tag'>
                  <div className='mx-auto d-flex justify-content-center align-items-center rounded-circle' style={{ backgroundColor: '#0d3e72', width: '80px', height: '80px' }}>
                    <FaTags className='text-white' style={{ width: '40px', height: '40px' }} />
                  </div>
                  <div className='my-4 shadow-none'>
                    <h3 className='mb-2'>Highly Targeted</h3>
                    <p className='text-secondary'>
                    PPC allows highly targeted ads, reaching specific demographics, locations, and interests. It ensures your ads are shown to people already searching for products or services like yours, driving quality leads.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={6} className="mb-4">
                <div className='bg-white p-5 text-center rounded-4 tag'>
                  <div className='mx-auto d-flex justify-content-center align-items-center rounded-circle' style={{ backgroundColor: '#0d3e72', width: '80px', height: '80px' }}>
                    <FaTags className='text-white' style={{ width: '40px', height: '40px' }} />
                  </div>
                  <div className='my-4 shadow-none'>
                    <h3 className='mb-2'>Scalable</h3>
                    <p className='text-secondary'>
                    PPC is scalable, meaning as your business grows, you can increase your ad spend and reach more customers without compromising on ad quality or targeting. This flexibility allows you to adapt to changing business needs and goals.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={6} className="mb-4">
                <div className='bg-white p-5 text-center rounded-4 tag'>
                  <div className='mx-auto d-flex justify-content-center align-items-center rounded-circle' style={{ backgroundColor: '#0d3e72', width: '80px', height: '80px' }}>
                    <FaTags className='text-white' style={{ width: '40px', height: '40px' }} />
                  </div>
                  <div className='my-4 shadow-none'>
                    <h3 className='mb-2'>Measurable</h3>
                    <p className='text-secondary'>
                     
PPC offers measurable ROI, allowing you to track performance metrics like click-through rates (CTR), conversion rates, and cost per click (CPC). This data helps you assess the effectiveness of your campaigns and optimize for better results.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>

          </div>
        </Container>
      </div>

      <Container>
      <Row className="text-center mt-4 mb-4 py-5">
        <div>
        <h3 className="fw-bold">Industry Specialized PPC Services</h3>
        <h5 className="py-3 blue">Get tangible PPC results with industry-specific services, tailored to reach the right audience effectively.</h5>
        <p>
          At RankON Technologies, we offer expert PPC services to businesses in various industries, including:
        </p>
        </div>
      

      {/* Columns for small screens */}
      <Col xs={12} sm={6} md={4} lg={4} className="d-flex justify-content-center align-items-center mb-4 ppc-column">
        <div className="text-center py-5">
          <TiShoppingCart className="my-2" style={{ width: "100px", height: "100px", color: "#0d3e72" }} />
          <h5>E-commerce</h5>
        </div>
      </Col>

      <Col xs={12} sm={6} md={4} lg={4} className="d-flex justify-content-center align-items-center mb-4 ppc-column">
        <div className="text-center py-5">
          <FaUserDoctor className="my-2" style={{ width: "100px", height: "100px", color: "#0d3e72" }} />
          <h5>Healthcare</h5>
        </div>
      </Col>

      <Col xs={12} sm={6} md={4} lg={4} className="d-flex justify-content-center align-items-center mb-4 ppc-column">
        <div className="text-center py-5">
          <GiTakeMyMoney className="my-2" style={{ width: "100px", height: "100px", color: "#0d3e72" }} />
          <h5>Finance</h5>
        </div>
      </Col>

      <Col xs={12} sm={6} md={4} lg={4} className="d-flex justify-content-center align-items-center mb-4 ppc-column">
        <div className="text-center py-5">
          <GiNotebook className="my-2" style={{ width: "100px", height: "100px", color: "#0d3e72" }} />
          <h5>Education</h5>
        </div>
      </Col>

      <Col xs={12} sm={6} md={4} lg={4} className="d-flex justify-content-center align-items-center mb-4 ppc-column">
        <div className="text-center py-5">
          <MdOutlineRealEstateAgent className="my-2" style={{ width: "100px", height: "100px", color: "#0d3e72" }} />
          <h5>Real Estate</h5>
        </div>
      </Col>

      <Col xs={12} sm={6} md={4} lg={4} className="d-flex justify-content-center align-items-center mb-4 ppc-column">
        <div className="text-center py-5">
          <FaBusSimple className="my-2" style={{ width: "100px", height: "100px", color: "#0d3e72" }} />
          <h5>Travel</h5>
        </div>
      </Col>
    </Row>
      </Container>
      <div className="content-container mt-5 pt-5">

        <h3 className="text-center  pt-3 fw-bold mb-5"> Pay-Per-Click marketing Packages</h3>


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

export default PayPer