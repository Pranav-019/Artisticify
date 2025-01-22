import  { useEffect, useRef, useState } from 'react';
import PosterImage from '../../../assets/poster.png';
import flyer1 from '../../../assets/flyer3.jpg';
import flyer2 from '../../../assets/flyer3.jpg';
import flyer3 from '../../../assets/flyer3.jpg';
import { Col, Container, Row } from 'react-bootstrap';
function Envelope() {
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
        const envelopePackages = data.filter(pkg => pkg.category === 'envelope');
  
        // Limit the packages to 3 (Basic, Standard, Premium)
        setPackages(envelopePackages.slice(0, 3));
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
       <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Stylish envelope design for any budget, with premium options for extra customization.</h2>
   
       <Container>
         <Row className="mb-5">
           <Col sm={12} md={6}>
             <div className="text-justify">
               <h4 className="fw-bold blue px-4 me-3 pb-2">Custom Envelope Design Services in India</h4>
   
               <div className="text-secondary text">
                 <p>Your envelope is often the first physical touchpoint a client or partner has with your brand. Make sure it leaves a lasting impression with a custom envelope design that speaks to your professionalism and creativity.
   
   </p>
   
                 <p>At Artisticify, we specialize in designing envelopes that enhance your brand’s identity and elevate your correspondence. Our designs are tailored to reflect your company’s vision, whether it&rsquo;s for business letters, promotional materials, or invitations.</p>
   
                 <p>We focus on the finer details—using your brand&rsquo;s colors, fonts, and logo to create an envelope that not only protects the contents but also makes your mail stand out in a crowded inbox. Whether you need standard envelopes or custom sizes, our designs are made to be functional, stylish, and impactful.</p>
   
                 <p>Let Artisticify help you send the right message with beautifully crafted envelopes that align with your branding and create a memorable first impression.
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
                   <h3 className="text-center py-3 fw-bold">Why Choose a Envelope Design Company?</h3>
                   <p className="text-center w-75 d-flex justify-content-center mx-auto text-secondary mb-5">Creative envelope design is key to making your business communications stand out. It reflects your brand identity and creates a strong first impression.

We specialize in custom envelope designs that align with your brand’s image, adding professionalism to your correspondence and making your marketing materials memorable.</p>
                 </div>
                 <h3 className="text-center  pt-3 fw-bold mb-5">See Our Creative Envelope Design Creation</h3>
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
   
         <h3 className="text-center  pt-3 fw-bold mb-5"> Envelope Design Packages</h3>
        
   
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

export default Envelope