import { Col, Container, Row } from "react-bootstrap";
import BrochureImage from '../../assets/brochure.png';
import brochureImg from '../../assets/brochure Design.jpg';
import brochure1 from '../../assets/brochre1.png';
import brochure2 from '../../assets/brochre1.png';
import brochure3 from '../../assets/brochre1.png';
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SEO } from '../SEO';

function Brochure() {  // Change "brochure" to "Brochure"
  // const [menuOpen, setMenuOpen] = useState(false);
  const [setIsVisible] = useState(false);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [logoImages, setLogoImages] = useState([]);
  const loaderRef = useRef(null);
  const navigate=useNavigate();
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
        const logoImages = data.filter(img => img.category === 'brochure');
  
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
      const brochurePackages = data.filter(pkg => pkg.category === 'brochure');

      // Limit the packages to 3 (Basic, Standard, Premium)
      setPackages(brochurePackages.slice(0, 3));
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
    <div className="text">
      <SEO title="Brochure" description="Artisticify is a design company that provides design and Digital Marketing services to businesses." />
       <div className='about'>
              <div className='image-container'>
                <img src={brochureImg} className='main-about img-fluid '/>
              </div>
            </div>
      <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Brochure Design and Branding Services</h2>

      <Container>
  <Row className="mb-5">
    <Col xs={12} md={6}>
    <div className="text-justify">
  <h4 className="fw-bold blue px-4 me-3 pb-2">Get impactful brochure designs that capture customer attention.</h4>

  <div className="text-secondary">
    <p>As a leading brochure design company, we understand the importance of printed materials. While digital media grows, offline brochures remain essential for engaging walk-in customers and local communities.</p>

    <p>At Artisticify Graphics, we specialize in creating visually striking brochures, from bi-folds to catalogs, that effectively convey your message and boost your brand’s credibility.</p>

    <p>Our expert team in Vadodara, India, provides high-quality brochure designs tailored to industries like pharma and more, helping you reach your target audience with professional, creative materials.</p>
    <Row className="text-secondary">
   <p>We offer high-quality brochure and catalog design services at affordable prices, tailored to your brand’s vision and goals.</p>

<p>Our professional designers carefully choose colors, fonts, and concepts to create unique and impactful designs for various products.</p>

<Col xs={6} md={6}>
  <p>• Mailers</p>
  <p>• Flyers</p>
  <p>• Tri-fold brochures</p>
  <p>• Catalogs</p>
  <p>• Sales brochures</p>
</Col>
<Col xs={6} md={6}>
  <p>• Business brochures</p>
  <p>• Marketing brochures</p>
  <p>• Corporate brochures</p>
  <p>• Company profiles</p>
  <p>• E-Brochures</p>
</Col>

<p>Our reliable team ensures timely delivery, helping businesses effectively communicate with professionally designed brochures. We work with you to assess marketing needs, research, and create designs that reflect your brand.</p>

  </Row>

  </div>
</div>

    </Col>
    <Col xs={12} md={6} className="d-flex justify-content-center">
      <div className="curve">
        <img src={BrochureImage} className="p-5  rounded rounded-pill img-fluid" style={{width:"500px"}}/>
      </div>
    </Col>
  </Row>

 
  <Container>
  <div className="">
          <h3 className="text-center py-3 fw-bold">Our Creative Brochure Design Works</h3>
          <p className="text-center w-75 d-flex justify-content-center mx-auto text-secondary mb-5">
          At Artisticify, we create visually stunning brochures that effectively showcase your brand. Our designs are tailored to engage your audience, with creative layouts and compelling content that leave a lasting impression.
          </p>
        </div>
    <Row>
    {logoImages.map((image, index) => (
            <Col xs={12} md={4} className="mb-3" key={index}>
              <div className="image-container1">
                <img src={image} className="w-100 image-hover" alt={`logo-${index}`} style={{width:"500px", height:"400px"}} />
              </div>
            </Col>
          ))}
        </Row>
        <div className="pt-5">
      <h3 className="text-center py-3 fw-bold">How Much does it Cost to Design a Brochure?</h3>
      <p className="text-center w-50 d-flex justify-content-center mx-auto text-secondary mb-5">No matter your budget, we guarantee a stunning brochure design that meets your needs. Our premium packages provide expert design services and personalized attention to elevate your brand’s presence..</p>
    </div>
  </Container>

</Container>

      <div className="content-container mt-5 pt-5">

        <h3 className="text-center  pt-3 fw-bold mb-5"> Brochure Design Packages</h3>
       

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
       <button className="pck-btn rounded-pill d-flex justify-content-center mx-auto"  
  onClick={() => navigate('/contact')}>
        Enquire Now
       </button>
       </div>
      </div>
       ))}
        </div>
      </div>
    </div>
  );
}

export default Brochure;  // Use the capitalized component name
