import  { useEffect, useRef, useState } from 'react';
import PosterImage from '../../assets/poster.png';
// import PosterImg from '../../assets/Artboard 03.jpg';

import flyer1 from '../../assets/flyer3.jpg';
import flyer2 from '../../assets/flyer3.jpg';
import flyer3 from '../../assets/flyer3.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function ContentMarketing() {
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
      const contentmarketingPackages = data.filter(pkg => pkg.category === 'contentmarketing');

      // Limit the packages to 3 (Basic, Standard, Premium)
      setPackages(contentmarketingPackages.slice(0, 3));
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
       <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Effective content strategies to increase reach and build brand loyalty</h2>
   
       <Container>
         <Row className="mb-5">
           <Col sm={12} md={6}>
             <div className="text-justify">
               <h4 className="fw-bold blue px-4 me-3 pb-2">Content Marketing Services in India</h4>
   
               <div className="text-secondary text">
                 <p>Great content is the backbone of any successful digital marketing strategy. It drives engagement, nurtures relationships, and helps build trust with your audience. At Artisticify, we specialize in creating compelling content that not only resonates with your target audience but also boosts your brand’s visibility and credibility.
   
   </p>
   
                 <p>Our content marketing services are designed to provide valuable, relevant, and consistent content across multiple channels, including blogs, social media, websites, email newsletters, and more. We craft engaging content that educates, informs, and entertains while aligning with your business goals and brand message.</p>
   
                 <p>We take a data-driven approach to content marketing, analyzing audience behavior and trends to ensure your content is seen by the right people at the right time. Whether you&rsquo;re looking to generate leads, increase conversions, or enhance customer loyalty, we develop customized content strategies to meet your objectives.</p>
   
                 <p>Partner with Artisticify to create content that not only speaks to your audience but drives measurable results and business growth.
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
                   <h3 className="text-center py-3 fw-bold">Why Choose a content marketing Company?</h3>
                   <p className="text-center w-75 d-flex justify-content-center mx-auto text-secondary mb-5">Creative content marketing plays a crucial role in enhancing your brand’s presence. We ensure our content is engaging while delivering the right message to your audience. Content marketing remains a powerful and cost-effective solution, effectively promoting products, services, offers, and brand stories.</p>
                 </div>
                 <h3 className="text-center  pt-3 fw-bold mb-5">See Our Creative Content Marketing Creation</h3>
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
   
         <h3 className="text-center  pt-3 fw-bold mb-5"> Content Marketing Packages</h3>
        
   
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

export default ContentMarketing