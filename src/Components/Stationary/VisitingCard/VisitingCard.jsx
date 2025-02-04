import  { useEffect, useRef, useState } from 'react';
import PosterImage from '../../../assets/visiting card.png';
import PosterImg from '../../../assets/Visiting Card Design Serivces.jpg';


import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function VisitingCard() {
  const [setIsVisible] = useState(false);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [logoImages, setLogoImages] = useState([]);
  const loaderRef = useRef(null);
const navigate=useNavigate()
  useEffect(() => {
    fetchPackages(); 
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
        const logoImages = data.filter(img => img.category === 'visitingcard');
  
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
      const visitingcardPackages = data.filter(pkg => pkg.category === 'visitingcard');

      // Limit the packages to 3 (Basic, Standard, Premium)
      setPackages(visitingcardPackages.slice(0, 3));
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
       <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Professional visiting card design, with premium options for extra customization.</h2>
   
       <Container>
         <Row className="mb-5">
           <Col sm={12} md={6}>
             <div className="text-justify">
               <h4 className="fw-bold blue px-4 me-3 pb-2">Elevate Your Brand with Custom Visiting Cards in india</h4>
   
               <div className="text-secondary text">
                 <p>Your visiting card is more than just a contact detail it&rsquo;s a reflection of your business identity and a representation of your values. A thoughtfully designed card can create a lasting impression and spark meaningful conversations.
   
   </p>
   
                 <p>At Artisticify, we bring your brand to life with bespoke visiting card designs that capture your unique style and message. Whether you need a sleek, professional look or a creative, attention-grabbing design, we work closely with you to produce a card that aligns perfectly with your brand’s persona.</p>
   
                 <p>We focus on creating visiting cards that blend creativity with practicality. From vibrant color palettes to premium finishes, we ensure that every design detail enhances your brand’s professionalism and leaves a strong impact. Our cards are designed to be more than just a way to share information—they’re crafted to strengthen relationships and reinforce your brand’s presence.</p>
   
                 <p>Let Artisticify help you make a great first impression with a visiting card that’s as memorable as your business.
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
                   <h3 className="text-center py-3 fw-bold">Why Choose a Visiting Card Design Company?</h3>
                   <p className="text-center w-75 d-flex justify-content-center mx-auto text-secondary mb-5">A professional visiting card design ensures a memorable first impression, showcasing your business’s credibility. Designers create visually appealing, custom cards that align with your brand identity and messaging. Just like creative posters, visiting cards are cost-effective, impactful, and a timeless marketing tool. A design company guarantees attention to detail, consistency, and high-quality materials, ensuring your card stands out and strengthens your business connections.</p>
                 </div>
                 <h3 className="text-center  pt-3 fw-bold mb-5">See Our Visiting Card Design Creation</h3>
                 <Row>
          {logoImages.map((image, index) => (
            <Col xs={12} md={4} className="mb-3" key={index}>
              <div className="image-container1">
                <img src={image} className="w-100 image-hover" alt={`logo-${index}`} />
              </div>
            </Col>
          ))}
        </Row>
               </Container>
         
       </Container>
       <div className="content-container mt-5 pt-5">
   
         <h3 className="text-center  pt-3 fw-bold mb-5"> Visiting Card Design Packages</h3>
        
   
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

export default VisitingCard