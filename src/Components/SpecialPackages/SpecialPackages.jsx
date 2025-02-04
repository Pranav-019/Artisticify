import  { useEffect, useRef, useState } from 'react';
import PosterImage from '../../assets/packaging.png';
// import PosterImg from '../../assets/Artboard 03.jpg';

import flyer1 from '../../assets/flyer3.jpg';
import flyer2 from '../../assets/flyer3.jpg';
import flyer3 from '../../assets/flyer3.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../SEO';
function SpecialPackages() {
  const [setIsVisible] = useState(false);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
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

  const fetchPackages = async () => {
    try {
      const response = await fetch("https://artisticify-backend.vercel.app/api/packages");
      const data = await response.json();

      // Filter packages where category is 'brochure'
      const specialpackagesPackages = data.filter(pkg => pkg.category === 'specialpackages');

      // Limit the packages to 3 (Basic, Standard, Premium)
      setPackages(specialpackagesPackages.slice(0, 3));
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
      <SEO title="Special Packages" description="Artisticify is a design company that provides design and Digital Marketing services to businesses." />
       <div className='about'>
        <div className='image-container mb-5'>
          {/* <img src={PosterImg} className='main-about img-fluid mb-5'/> */}
         
        </div>
      </div>
       <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Exclusive special packages tailored to meet your unique needs.</h2>
   
       <Container>
         <Row className="mb-5">
           <Col sm={12} md={6}>
             <div className="text-justify">
               <h4 className="fw-bold blue px-4 me-3 pb-2">Exclusive Special Packages Tailored for Your Business Needs</h4>
   
               <div className="text-secondary text">
                 <p>At Artisticify, we understand that every business has unique goals and budget constraints. That’s why we offer special packages designed to provide comprehensive solutions for all your digital marketing and graphic design needs—without breaking the bank.
   
   </p>
   
                 <p>Our specially curated packages include services such as:</p>
   
                 <p><span className='fw-bold'>Digital Marketing Packages:</span> SEO, social media management, pay-per-click (PPC), content marketing, and email marketing to help you grow your online presence.</p>
                 <p><span className='fw-bold'>Graphic Design Packages: </span>  Logo design, brochure design, social media creatives, packaging design, and more to establish a strong brand identity.</p>
                 <p><span className='fw-bold'>Website & UI/UX Packages:</span> Custom website design, responsive UI/UX solutions, and web development tailored to your business needs.</p>
                 <p><span className='fw-bold'>Branding Packages:</span> Comprehensive brand development solutions, including business stationery, marketing collaterals, and digital branding.</p>
   
                 <p>Get in touch with us today to explore our special packages and take your business to new heights with Artisticify!


   </p>
   
                 
               </div>
             
             </div>
           </Col>
           <Col  xs={12} md={6} className="d-flex justify-content-center">
             <div className="curve">
               <img src={PosterImage} className="p-5 rounded rounded-pill img-fluid" style={{width:"500px", height:"500px"}}/>
             </div>
           </Col>
         </Row>
        
          <Container>
                 <div className="pt-5">
                   
                 </div>
                 <h3 className="text-center  pt-3 fw-bold mb-5">See Our Creative Special Packages Creation</h3>
                 <Row>
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
                 </Row>
               </Container>
         
       </Container>
       <div className="content-container mt-5 pt-5">
   
         <h3 className="text-center  pt-3 fw-bold mb-5"> Special Packages Packages</h3>
        
   
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
     </div>  )
}

export default SpecialPackages