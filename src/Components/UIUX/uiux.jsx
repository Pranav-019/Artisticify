import  { useEffect, useRef, useState } from 'react';
import PackagingImage from '../../assets/ui-ux (1).png';
import uiuxImg from '../../assets/ui ux design 01.jpg';


import { Col, Container, Row } from 'react-bootstrap';
import './uiux.css';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../SEO';
const uiux = () => {
 const [isVisible, setIsVisible] = useState(false);
const [packages, setPackages] = useState([]);
const [loading, setLoading] = useState(false);
const [logoImages, setLogoImages] = useState([]);
const loaderRef = useRef(null);
const navigate = useNavigate();

useEffect(() => {
  fetchPackages(); // Fetch package data on component mount
}, []);

const handleEnquire = () => {
  navigate('/contact', {
    state: { selectedService: 'UI/UX Design' }
  });
};

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
      const response = await fetch(
        "https://artisticify-backend.vercel.app/api/design/get"
      );
      const data = await response.json();

      // Filter images by category (uiux)
      const logoImages = data.filter((img) => img.category === "uiux");

      // Set images to state (ensure we're accessing the correct URLs)
      setLogoImages(logoImages.map((img) => img.images).flat()); // Assuming 'images' is an array in the response
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
      const uiuxPackages = data.filter(pkg => pkg.category === 'uiux');

      // Limit the packages to 3 (Basic, Standard, Premium)
      setPackages(uiuxPackages.slice(0, 3));
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
      <SEO title="UI/UX" description="Artisticify is a design company that provides design and Digital Marketing services to businesses." />
       <div className='about'>
              <div className='image-container'>
                <img src={uiuxImg} className='main-about img-fluid '/>
              </div>
            </div>
       <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Expert UI/UX Design Solutions Tailored to Enhance User Interaction and Satisfaction.</h2>
   
       <Container>
         <Row className="mb-5">
           <Col sm={12} md={6}>
             <div className="text-justify">
               <h4 className="fw-bold blue px-4 me-3 pb-2">Creative UI/UX Design Services in India</h4>
   
               <div className="text-secondary text">
                 <p>In today’s digital world, user experience is paramount. Whether you’re launching a website or a mobile app, a seamless UI/UX design can make all the difference in how users interact with your product and ultimately how successful it becomes.
   
   </p>
   
                 <p>At Artisticify, we specialize in creating dynamic, user-centric UI/UX designs that blend creativity with functionality. Our goal is to design digital experiences that not only look great but are intuitive, engaging, and easy to use. We focus on every touchpoint of the user journey, ensuring that the interface is simple, the experience is smooth, and the design aligns with your brand’s identity.</p>
   
                 <p>From wireframes and prototypes to full design implementation, our UI/UX services help businesses—whether startups or established enterprises—create products that meet their customers’ needs while enhancing usability and engagement. We work closely with you to ensure that every design decision adds value and contributes to the overall success of your digital products.</p>
   
                 <p>With Artisticify, you’re not just getting a design—you’re getting a thoughtful, user-focused approach that leads to better conversions, user satisfaction, and business growth.
   </p>
   
                 
               </div>
             
             </div>
           </Col>
           <Col  xs={12} md={6} className="d-flex justify-content-center">
             <div className="curve">
               <img src={PackagingImage} className="p-5 rounded rounded-pill img-fluid" style={{width:"500px", height:"400px"}}/>
             </div>
           </Col>
         </Row>
        
          <Container>
                 <div className="pt-5">
                   <h3 className="text-center py-3 fw-bold">
                   What Makes Our UI/UX Design Unique?</h3>
                   <p className="text-center w-75 d-flex justify-content-center mx-auto text-secondary mb-5">At our core, we understand that great design is essential for both startups and established businesses. Whether you need a simple logo or complete brand management, we provide affordable, dynamic, and visually captivating UI/UX designs that make a real impact. Our goal is to create designs that not only look amazing but also drive business growth, user engagement, and long-term success. With a keen focus on innovation, usability, and personalized experiences, we deliver solutions that help you stand out in a competitive market

                   </p>

                 </div>
                 <h3 className="text-center  pt-3 fw-bold mb-5">See Our Craetive UI/UX Design Creations</h3>
                 <Row>
          {logoImages.map((image, index) => (
            <Col xs={12} md={4} className="mb-3" key={index}>
              <div className="image-container1">
                <img src={image} className="w-100 image-hover" alt={`logo-${index}`} style={{width:"500px", height:"400px"}} />
              </div>
            </Col>
          ))}
        </Row>
               </Container>
         
       </Container>
       <div className="content-container mt-5 pt-5">
   
        
         
      <div className='text-center fw-bold text-white my-5 shadow logo-package w-50 sm-w-75'>
         <h3 className="text-center  fw-bold  pkcg">  UI/UX Design Packages</h3>
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
       <button className="pck-btn rounded-pill d-flex justify-content-center mx-auto" onClick={handleEnquire}>
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

export default uiux;