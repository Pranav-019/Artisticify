import  { useEffect, useRef, useState } from 'react';
import PosterImage from '../../assets/packaging.png';
// import PosterImg from '../../assets/Artboard 03.jpg';


import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../SEO';
function SpecialPackages() {
  const [setIsVisible] = useState(false);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [logoImages, setLogoImages] = useState([]);
  const loaderRef = useRef(null);

  const navigate=useNavigate()

  useEffect(() => {
    fetchPackages(); // Fetch package data on component mount
  }, []);

  const handleEnquire = () => {
    navigate('/contact', {
      state: { selectedService: 'Special Package (combined services)' }
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
        const response = await fetch("https://artisticify-backend.vercel.app/api/design/get");
        const data = await response.json();
  
        // Filter images by category (logo)
        const logoImages = data.filter(img => img.category === 'specialpackages');
  
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
      const specialpackagesPackages = data.filter(pkg => pkg.category === 'specialpackages');

      // Limit the packages to 3 (Basic, Standard, Premium)
      setPackages(specialpackagesPackages);
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
      <SEO title="Special Packages" description="digital marketing
marketing digital marketing
digital marketing marketing
digital marketing digital marketing
a digital marketing
digital marketing service
performance marketing
digital marketing company
digital marketing agency
top digital marketing companies
services for digital marketing
digital marketing near me
digital marketing agency near me
digital marketing and advertising companies
best digital marketing agencies
best digital marketing companies
top digital marketing agency
marketing agency digital
digital agency marketing
network marketer
digital marketing and advertising agency" />
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
               <h4 className="fw-bold blue px-4 me-4 pb-2">Exclusive Special Packages Tailored for Your Business Needs</h4>
   
               <div className="text-secondary text">
                 <p>At Artisticify, we understand that every business has unique goals and budget constraints. That is why we offer special packages designed to provide comprehensive solutions for all your digital marketing and graphic design needs—without breaking the bank.
   
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
                 <h3 className="text-center  pt-3 fw-bold mb-5">See Our Creative Special Package to tailored exclusively to your business needs</h3>
                 <Row>
         
          {logoImages.map((image, index) => (
            <Col xs={12} md={4} className="mb-3" key={index}>
              <div className="image-container1">
                <img src={image} className="w-100 image-hover" alt={`logo-${index}`} style={{width:"500px", height:"400px"}}/>
              </div>
            </Col>
          ))}
        </Row>
               </Container>
         
       </Container>
       <div className="content-container mt-5 pt-5">
   
         <div className='text-center fw-bold text-white my-5 shadow logo-package w-50 '>
         <h3 className="text-center  fw-bold  pkcg"> Special Packages</h3>
         </div>
        
   
         <div className="packages">
  {packages.map((pkg, index) => (
    <div className="package mb-3 position-relative text" key={index} style={{width:"325px"}}>
      <div className="pb-5">
        <h3 className="text-center">{pkg.name}</h3>
        <p>{pkg.description}</p>
        <ul className="text pb-5" style={{ marginBottom: '70px' }}>
  {pkg.features.map((feature, i) => (
    <li key={i}>
      {feature}
    </li>
  ))}
</ul>
        {pkg.type.toLowerCase() === "premium" ? (
          <h4 className="text-center blue fw-bold price "style={{marginTop:"20px"}} >
            Starting From Rs {pkg.price}/- Per month
          </h4>
        ) : (
          <h4 className="text-center blue fw-bold price">
            {pkg.price} /-
          </h4>
        )}
        <button className="pck-btn rounded-pill d-flex justify-content-center mx-auto" onClick={handleEnquire}>
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