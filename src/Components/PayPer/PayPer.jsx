import  { useEffect, useRef, useState } from 'react';
import PosterImage from '../../assets/poster.png';
// import PosterImg from '../../assets/Artboard 03.jpg';

import flyer1 from '../../assets/flyer3.jpg';
import flyer2 from '../../assets/flyer3.jpg';
import flyer3 from '../../assets/flyer3.jpg';
import { Col, Container, Row } from 'react-bootstrap';
function PayPer() {
  const [setIsVisible] = useState(false);
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(false);
    const loaderRef = useRef(null);
  
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
          {/* <img src={PosterImg} className='main-about img-fluid mb-5'/> */}
         
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
           <Col  xs={12} md={6} className="d-flex justify-content-center">
             <div className="curve">
               <img src={PosterImage} className="p-5 rounded rounded-pill img-fluid" style={{width:"500px", height:"500px"}}/>
             </div>
           </Col>
         </Row>
        
          <Container>
                 <div className="pt-5">
                   <h3 className="text-center py-3 fw-bold">Why Choose a Pay-Per-Click marketing Company?</h3>
                   <p className="text-center w-75 d-flex justify-content-center mx-auto text-secondary mb-5">Effective PPC marketing plays a crucial role in driving targeted traffic to your business. We ensure our campaigns are strategically crafted while delivering measurable results. PPC remains a powerful and cost-effective solution, effectively promoting products, services, offers, and business goals.</p>
                 </div>
                 <h3 className="text-center  pt-3 fw-bold mb-5">See Our Creative Pay-Per-Click marketing Creation</h3>
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
   
         <h3 className="text-center  pt-3 fw-bold mb-5"> Pay-Per-Click marketing Packages</h3>
        
   
         <div className="packages">
         {packages.map((pkg, index) => (
       <div className="package mb-3 position-relative text" key={index}>
       <div className="pb-5">
      <h3 className="text-center">{pkg.name}</h3>
      <p>{pkg.description}</p>
      <ul className="text">
        {pkg.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
       </ul>
       {pkg.type === "Premium" ? (
  <h4 className="text-center blue fw-bold">Customizable</h4>
) : (
  <h4 className="text-center blue fw-bold">{pkg.price} /-</h4>
)}
       <button className="pck-btn rounded-pill d-flex justify-content-center mx-auto">
        Enquire Now
       </button>
       </div>
      </div>
       ))}
         </div>
       </div>
     </div>  )
}

export default PayPer