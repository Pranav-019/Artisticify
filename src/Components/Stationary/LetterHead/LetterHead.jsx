import  { useEffect, useRef, useState } from 'react';
import PosterImage from '../../../assets/letter head.png';
import bannerImg from '../../../assets/Letterhead Design Serivces.jpg';
import { SEO } from '../../SEO';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LetterHead() {
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
        const logoImages = data.filter(img => img.category === 'letterhead');
  
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
      const letterheadPackages = data.filter(pkg => pkg.category === 'letterhead');

      // Limit the packages to 3 (Basic, Standard, Premium)
      setPackages(letterheadPackages.slice(0, 3));
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
  <SEO title="Letterhead" description="Artisticify is a design company that provides design and Digital Marketing services to businesses." />
  <div className='about'>
          <div className='image-container'>
            <img src={bannerImg} className='main-about img-fluid ' />
          </div>
        </div>
       <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Your perfect letterhead, crafted within your budget. Premium packages add more expert design and personalization.</h2>
   
       <Container>
         <Row className="mb-5">
           <Col sm={12} md={6}>
             <div className="text-justify">
               <h4 className="fw-bold blue px-4 me-3 pb-2">Professional Letterhead Design Services in India</h4>
   
               <div className="text-secondary text">
                 <p>A well-designed letterhead is more than just a piece of paper—it’s a powerful branding tool that communicates your company&rsquo;s professionalism and establishes a sense of trust with clients, partners, and customers.
   
   </p>
   
                 <p>At Artisticify, we create customized, sleek, and professional letterheads that reflect your brand’s personality. Whether you’re sending a formal letter or a promotional flyer, your letterhead is the first impression you make.</p>
   
                 <p>Our letterhead designs are crafted with careful attention to detail, from logo placement and color schemes to typography, ensuring every element aligns with your brand&rsquo;s visual identity. We make sure your letterhead is versatile, adaptable, and effective across digital and print formats, helping you leave a lasting impression in all your business communications.</p>
   
                 <p>Work with us to create a polished, memorable letterhead that stands out and reinforces your brand’s credibility.
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
                   <h3 className="text-center py-3 fw-bold">Why Choose a Letter Head Design Company?</h3>
                   <p className="text-center w-75 d-flex justify-content-center mx-auto text-secondary mb-5">A professional letterhead design company ensures your business looks credible and consistent. It creates a strong brand identity, enhances communication, and helps with legal compliance. Custom designs reflect your company’s personality, and experts ensure high-quality, print-ready results, saving you time and effort.</p>
                 </div>
                 <h3 className="text-center  pt-3 fw-bold mb-5">See Our Creative Letter Head Design Creation</h3>
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
   
         
        
      <div className='text-center fw-bold text-white my-5 shadow logo-package w-50 sm-w-75'>
         <h3 className="text-center  fw-bold  pkcg">  Letter Design Packages</h3>
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
     </div>  )
}

export default LetterHead