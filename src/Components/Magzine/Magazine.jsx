import { useEffect, useRef, useState } from 'react';
import PackagingImage from '../../assets/magazine (1).png';
import magzineImg from '../../assets/Magazine Design Servics.jpg';
import { SEO } from '../SEO';

import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Magazine() {
  const [setIsVisible] = useState(false);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [logoImages, setLogoImages] = useState([]);
  const loaderRef = useRef(null);
   const navigate=useNavigate()
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

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://artisticify-backend.vercel.app/api/design/get");
        const data = await response.json();
  
        // Filter images by category (logo)
        const logoImages = data.filter(img => img.category === 'magazine');
  
        // Set images to state (ensure we're accessing the correct URLs)
        setLogoImages(logoImages.map(img => img.images).flat()); // Assuming 'images' is an array in the response
  
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
  
    fetchImages(); // Fetch images when the component mounts
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await fetch("https://artisticify-backend.vercel.app/api/packages");
      const data = await response.json();

      // Filter packages where category is 'brochure'
      const magazinePackages = data.filter(pkg => pkg.category === 'magazine');


      // Limit the packages to 3 (Basic, Standard, Premium)
      setPackages(magazinePackages.slice(0, 3));
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
    <div>
      <SEO title="Creative Magazine Design Services That Elevate Your Publication’s Visual Appeal." description="Artisticify is a design company that provides design and Digital Marketing services to businesses." />
      <div className='text'>
         <div className='about'>
                <div className='image-container'>
                  <img src={magzineImg} className='main-about img-fluid '/>
                </div>
              </div>
        <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Creative Magazine Design Services That Elevate Your Publication’s Visual Appeal.</h2>

        <Container>
          <Row className="mb-5">
            <Col sm={12} md={6}>
              <div className="text-justify">
                <h4 className="fw-bold blue px-4 me-3 pb-2">Magazine & Newsletter Design  Company in India</h4>

                <div className="text-secondary text">
                  <p>Local magazines are trusted sources of information, and your ad in one is more than just a promotion—it’s a recommendation from a respected publication. At Artisticify, we specialize in magazine and newsletter designs that engage readers and enhance credibility.

                  </p>

                  <p>Our services include cover page design, page layout, and production, catering to industries like corporate, architecture, interior design, and education. With years of experience in print and advertising design, we offer fixed per-page pricing, ensuring cost-effective, high-quality results.</p>

                  <p>We focus on creating designs that align with your brand&rsquio;s identity while keeping the audience’s experience in mind. Our goal is to help you effectively communicate your message and promote your brand in a visually appealing and professional manner.</p>

                  <p>Let Artisticify help you create impactful magazine designs that build trust and attract attention.


                  </p>


                </div>

              </div>
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-center">
              <div className="curve">
                <img src={PackagingImage} className="p-5 rounded rounded-pill img-fluid" style={{width:"500px", height:"400px"}}/>
              </div>
            </Col>
          </Row>

          <Container>
            <div className="pt-5">
              <h3 className="text-center py-3 fw-bold">Why Choose #Artisticify for Your Magazine Projects?</h3>
              <p className="text-center w-75 justify-content-center mx-auto text-secondary mb-5">
              <p>•	We ensure perfect image quality with detailed color correction and enhancement.</p>
          <p>•	   We deliver 100% problem-free, print-ready files.</p>
          <p>•	  Experts in design and production with deep knowledge of commercial printing.</p>
          <p>•	   On-time delivery—never missed a deadline.</p>
          <p>•	   We’re dedicated to your success!</p>

              










</p>
            </div>
            <h3 className="text-center  pt-3 fw-bold mb-5">See Our Craetive Magzine Design Creations</h3>

            <Row>
          {logoImages.map((image, index) => (
            <Col xs={12} md={4} className="mb-3" key={index}>
              <div className="image-container1">
                <img src={image} className="w-100 image-hover" alt={`logo-${index}`} />
              </div>
            </Col>
          ))}
        </Row>
          </Container>

        </Container>
        <div className="content-container mt-5 pt-5">

         

          <div className='text-center fw-bold text-white my-5 shadow logo-package w-50 sm-w-75'>
         <h3 className="text-center  fw-bold  pkcg">  Magazine Design Packages</h3>
         </div>

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
      </div>
    </div>
  )
}

export default Magazine