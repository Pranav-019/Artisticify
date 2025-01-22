import  { useEffect, useRef, useState } from 'react';
import PosterImage from '../../assets/poster.png';
import PosterImg from '../../assets/Artboard 03.jpg';

import flyer1 from '../../assets/flyer3.jpg';
import flyer2 from '../../assets/flyer3.jpg';
import flyer3 from '../../assets/flyer3.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Poster = () => {
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
      const posterPackages = data.filter(pkg => pkg.category === 'poster');

      // Limit the packages to 3 (Basic, Standard, Premium)
      setPackages(posterPackages.slice(0, 3));
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
          <img src={PosterImg} className='main-about img-fluid mb-5'/>
         
        </div>
      </div>
       <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Eye-catching Poster Design Solutions to Make Your Promotion Stand Out.</h2>
   
       <Container>
         <Row className="mb-5">
           <Col sm={12} md={6}>
             <div className="text-justify">
               <h4 className="fw-bold blue px-4 me-3 pb-2">Professional Poster Design Services Agency in India</h4>
   
               <div className="text-secondary text">
                 <p>Posters are more than just visuals—they’re an impactful storytelling medium that conveys your message and captures attention. Their ability to instantly engage an audience makes them one of the most effective promotional tools, and their relevance continues to grow in offline marketing.
   
   </p>
   
                 <p>At Artisticify, we specialize in designing posters that not only stand out but also communicate your message effectively. Whether you&rsquo;re launching a product, promoting an event, or announcing a special offer, our poster design services are tailored to meet your business’s unique needs and objectives.</p>
   
                 <p>We understand that great design can transform a simple poster into a powerful marketing tool. Our team works closely with you to create posters that reflect your brand identity, while also ensuring they are eye-catching, informative, and impactful. Whether for a corporate campaign or a small event, we provide creative solutions that resonate with your audience.</p>
   
                 <p>Artisticify is committed to delivering high-quality poster designs at affordable rates, making sure that businesses of all sizes can harness the power of visual marketing. Along with design, we offer creative strategies to help your posters effectively reach the public and generate success.
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
                   <h3 className="text-center py-3 fw-bold">Why Choose a Poster Design Company?</h3>
                   <p className="text-center w-75 d-flex justify-content-center mx-auto text-secondary mb-5">Creative poster design plays a crucial role in boosting your marketing campaign. We ensure our designs are visually appealing while conveying the right amount of information. Posters remain a timeless and cost-effective solution, effectively showcasing details like products, services, offers, and business profiles.</p>
                 </div>
                 <h3 className="text-center  pt-3 fw-bold mb-5">See Our Creative Poster Design Creation</h3>
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
   
         <h3 className="text-center  pt-3 fw-bold mb-5"> Poster Design Packages</h3>
        
   
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
  );
};

export default Poster;
