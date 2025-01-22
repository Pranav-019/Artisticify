import  { useEffect, useRef, useState } from 'react';
import PosterImage from '../../assets/poster.png';
import flyer1 from '../../assets/flyer3.jpg';
import flyer2 from '../../assets/flyer3.jpg';
import flyer3 from '../../assets/flyer3.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Icon = () => {
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
        const iconPackages = data.filter(pkg => pkg.category === 'icon');
  
        // Limit the packages to 3 (Basic, Standard, Premium)
        setPackages(iconPackages.slice(0, 3));
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
       <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Icon Design Packages That Combine Creativity and Usability for Seamless User Interfaces.</h2>
   
       <Container>
         <Row className="mb-5">
           <Col sm={12} md={6}>
             <div className="text-justify">
               <h4 className="fw-bold blue px-4 me-3 pb-2">Creative Icon Design Company in India</h4>
   
               <div className="text-secondary text">
                 <p>Icon design involves creating graphical symbols that represent concepts or objects, playing a key role in enhancing user experience and brand identity. Effective icons are clear, functional, and scalable, maintaining their clarity from large to small sizes. Whether for apps, websites, or marketing materials, our custom icons are tailored to fit your brand&rsquo;s aesthetic and ensure intuitive navigation. We focus on simplicity, usability, and consistency, crafting icons that are visually appealing and easy to understand across various platforms. Our icons help elevate your brand’s visual presence, ensuring they communicate effectively with your audience. We ensure that each icon is carefully designed for both aesthetic impact and practical functionality. Let us create icons that reflect your brand’s values and resonate with users.
   </p>
   <p>We focus on factors such as:

<p>Simplicity & Clarity: Ensuring that icons are easily recognizable and meaningful.</p>
<p>Scalability: Guaranteeing icons retain their details and clarity across different sizes.
</p>
<p>Consistency: Maintaining a uniform style that aligns with your brand’s visual identity.
</p>
<p>Versatility: Designing icons that work across various digital and print media.</p>
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
                   <h3 className="text-center py-3 fw-bold">Pictograms</h3>
                   <p className="text-center w-75 d-flex justify-content-center mx-auto text-secondary mb-5">Pictograms, also known as pictographs or icons in digital contexts, are visual symbols that represent ideas or objects through their resemblance to the real thing. They are used in various industries like tourism, education, and mining to convey information quickly and universally, often overcoming language barriers. Pictograms are simple, clear, and effective for signage, websites, mobile apps, and educational materials. They help in delivering concise messages, especially in environments where clarity and speed are crucial.</p>
                 </div>
                 <div className="pt-5">
                   <h3 className="text-center py-3 fw-bold">Illustrations</h3>
                   <p className="text-center w-75 d-flex justify-content-center mx-auto text-secondary mb-5">Illustrations are graphic representations of concepts or subjects, created through drawings, paintings, sketches, or photographs. The term originates from the Latin word illustra&rsquo;tio, meaning to enlighten. Used to visually explain or decorate stories and products, illustrations are crucial in industries like pharmaceuticals, medicine, and chemical processing. They can be executed in various techniques, including watercolor, ink, charcoal, and oil, offering unique artistic styles.</p>
                 </div>
                 <h3 className="text-center  pt-3 fw-bold mb-5">See Our Creative Icon Design Creation</h3>
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
   
         <h3 className="text-center  pt-3 fw-bold mb-5"> Icon Design Packages</h3>
        
   
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
     </div>
  );
};

export default Icon;
