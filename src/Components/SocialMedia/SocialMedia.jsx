import  { useEffect, useRef, useState } from 'react';
import PosterImage from '../../assets/poster.png';
// import PosterImg from '../../assets/Artboard 03.jpg';

import flyer1 from '../../assets/flyer3.jpg';
import flyer2 from '../../assets/flyer3.jpg';
import flyer3 from '../../assets/flyer3.jpg';
import { Col, Container, Row } from 'react-bootstrap';
function SocialMedia() {
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
        const socialmediaPackages = data.filter(pkg => pkg.category === 'socialmedia');
  
        // Limit the packages to 3 (Basic, Standard, Premium)
        setPackages(socialmediaPackages.slice(0, 3));
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
       <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Boost your brand’s presence with social media services, tailored to your needs.</h2>
   
       <Container>
         <Row className="mb-5">
           <Col sm={12} md={6}>
             <div className="text-justify">
               <h4 className="fw-bold blue px-4 me-3 pb-2">Social Media Digital Marketing Services in India</h4>
   
               <div className="text-secondary text">
                 <p>In today’s digital age, social media is not just a platform for sharing content—it’s a powerful marketing tool that connects businesses with their audience, drives engagement, and boosts brand visibility.
   
   </p>
   
                 <p>At Artisticify, we offer comprehensive social media digital marketing services designed to elevate your brand’s online presence. Whether you&rsquo;re looking to increase followers, drive traffic to your website, or engage with customers on a deeper level, our tailored strategies deliver measurable results.</p>
   
                 <p>We specialize in creating targeted campaigns across platforms like Facebook, Instagram, LinkedIn, Twitter, and TikTok, ensuring that your brand&rsquo;s voice is heard and resonates with your audience. From content creation and community management to paid advertising and analytics, we handle every aspect of your social media marketing to ensure sustained growth and engagement.</p>
   
                 <p>Partner with Artisticify to develop a social media strategy that enhances your online presence and drives business success.
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
                 <h3 className="text-center  pt-3 fw-bold mb-5">Our Creatives Social Media Portfolio</h3>
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
   
         <h3 className="text-center  pt-3 fw-bold mb-5"> Social Media Packages</h3>
        
   
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

export default SocialMedia