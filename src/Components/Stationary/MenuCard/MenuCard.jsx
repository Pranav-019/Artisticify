import  { useEffect, useRef, useState } from 'react';
// import PosterImage from '../../../assets/poster.png';
import PosterImg from '../../../assets/Menu Card Design Services (1).jpg';

import flyer1 from '../../../assets/flyer3.jpg';
import flyer2 from '../../../assets/flyer3.jpg';
import flyer3 from '../../../assets/flyer3.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function MenuCard() {
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
        const menucardPackages = data.filter(pkg => pkg.category === 'menucard');
  
        // Limit the packages to 3 (Basic, Standard, Premium)
        setPackages(menucardPackages.slice(0, 3));
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
       <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Stylish menu card design for any budget, with premium options for extra customization.</h2>
   
       <Container>
         <Row className="mb-5">
           <Col sm={12} md={6}>
             <div className="text-justify">
               <h4 className="fw-bold blue px-4 me-3 pb-2">Unique Restaurant, Hotel, Cafe, and Bar Menu Design Services in India</h4>
   
               <div className="text-secondary text">
                 <p>Your menu is more than just a list of food and drinks – it’s a silent ambassador that communicates your brand and sets the tone for the dining experience. As the first interaction with your customers, a thoughtfully designed menu creates an impression and influences their choices.
   
   </p>
   
                 <p>Whether you’re opening a new restaurant, bar, hotel, or updating your existing menu, Abhishek Graphics offers innovative and visually appealing menu card design services that reflect your establishment’s essence and attract customers from the get-go.</p>
   
                 <p>Our skilled team of designers specializes in crafting high-quality, bespoke menus for all types of restaurants, from cozy cafes to upscale fine dining establishments. We focus on blending creativity with functionality to produce a design that not only grabs attention but also makes it easier for customers to navigate and make selections.

</p>
   
                 
   
                 
               </div>
             
             </div>
           </Col>
           <Col  xs={12} md={6} className="d-flex justify-content-center">
             <div className="curve">
               {/* <img src={PosterImage} className="p-5 rounded rounded-pill img-fluid" style={{width:"500px", height:"500px"}}/> */}
             </div>
           </Col>
         </Row>
         <Row className="mb-5">
         <h3 className="text-center py-5 fw-bold">Types of Menu We Design</h3>
          <Col sm={12} md={4} className='text-secondary' >
              <p>•	Restaurant Menu Design</p>
              <p>•	Takeaway Menu Design</p>
              <p>•	Pub Menu Design</p>
              <p>•	Hotel Menu Design</p>

          </Col>
          <Col sm={12} md={4} className='text-secondary'>
          <p>•	Cafe Menu Design</p>
          <p>•	Wall Menu Board Design</p>
          <p>•	Digital Menu Design</p>
          <p>•	Birthday party’s menu cards</p>


          </Col>
          <Col sm={12} md={4} className='text-secondary'>
          <p>•	Bar menu card designs</p>
          <p>•	Food Truck Menu Design</p>
          <p>•	Holiday Meals Menu Design</p>
          <p>•	Anniversary parties Menu Design</p>

          </Col>

         </Row>
        
          <Container>
                 <div className="pt-5">
                   <h3 className="text-center py-3 fw-bold">Why Choose a Menu Card Design Company?</h3>
                   <p className="text-center w-75 d-flex justify-content-center mx-auto text-secondary mb-5">A well-designed menu card is an essential tool in your restaurant&rsquo;s marketing strategy. We focus on creating visually appealing menus that provide clear, concise information. Menus are a timeless and cost-effective way to showcase your offerings, whether it&rsquo;s food, drinks, seasonal specials, or promotions.</p>
                 </div>
                 <h3 className="text-center  pt-3 fw-bold mb-5">See Our Creative Menu Card Design Creation</h3>
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
   
         <h3 className="text-center  pt-3 fw-bold mb-5"> Menu Card Design Packages</h3>
        
   
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

export default MenuCard