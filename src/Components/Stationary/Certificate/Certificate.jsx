import  { useEffect, useRef, useState } from 'react';
import PosterImage from '../../../assets/certificate 500-500.png';
import PosterImg from '../../../assets/Certificate Design Serivces.jpg';


import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../../SEO';
function Certificate() {
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
      state: { selectedService: 'Certificate Design' }
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
        const logoImages = data.filter(img => img.category === 'certificate');
  
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
      const certificatePackages = data.filter(pkg => pkg.category === 'certificate');

      // Limit the packages to 3 (Basic, Standard, Premium)
      setPackages(certificatePackages.slice(0, 3));
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
  <SEO title="Certificate" description="Artisticify is a design company that provides design and Digital Marketing services to businesses." />
       <div className='about'>
        <div className='image-container mb-5'>
          <img src={PosterImg} className='main-about img-fluid mb-5'/>
         
        </div>
      </div>
       <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Professional certificate design with premium options for added flair.</h2>
   
       <Container>
         <Row className="mb-5">
           <Col sm={12} md={6}>
             <div className="text-justify">
               <h4 className="fw-bold blue px-4 me-3 pb-2">Creative Certificate Design Company in India</h4>
   
               <div className="text-secondary text">
                 <p>A certificate is more than just a piece of paper—it’s a symbol of achievement, recognition, and professionalism. Whether for academic awards, corporate milestones, or event participation, a well-designed certificate enhances its value and adds a personal touch.
   
   </p>
   
                 <p>At Artisticify, we specialize in creating elegant, custom-designed certificates that elevate the significance of your awards and recognition programs. Our team ensures that each certificate reflects your brand&rsquo;s identity, whether you&rsquo;re looking for a traditional, formal design or something more modern and creative.</p>
   
                 <p>We focus on details such as typography, color schemes, and logos to make sure your certificates are not only visually appealing but also aligned with your brand’s ethos. Whether you need a series of certificates for an event or a special one-off design, we offer tailored solutions to suit your needs.</p>
   
                 <p>Partner with Artisticify to create certificates that leave a lasting impression and celebrate achievements with style and sophistication.


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
                   <h3 className="text-center py-3 fw-bold">Why Choose a Certificate Design Company?</h3>
                   <p className="text-center w-75 d-flex justify-content-center mx-auto text-secondary mb-5">Creative certificate design adds value to your awards and recognition efforts. We craft custom designs that reflect your brand and enhance the significance of each achievement, leaving a lasting impression.</p>
                 </div>
                 <h3 className="text-center  pt-3 fw-bold mb-5">See Our Awesome Certificate Design</h3>
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
         <h3 className="text-center  fw-bold  pkcg">  Certificate Design Packages</h3>
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
     </div>  )
}

export default Certificate