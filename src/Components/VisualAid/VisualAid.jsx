import { useEffect, useRef, useState } from 'react';
import PackagingImage from '../../assets/visual aid.png';
import visualidImg from '../../assets/Visuals ads Design_1.jpg';
import { SEO } from '../SEO';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function VisualAid() {
  const [setIsVisible] = useState(false);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [logoImages, setLogoImages] = useState([]);
  const loaderRef = useRef(null);
  const navigate = useNavigate()
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
        const logoImages = data.filter(img => img.category === 'visualaid');

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
      const visualaidPackages = data.filter(pkg => pkg.category === 'visualaid');

      // Limit the packages to 3 (Basic, Standard, Premium)
      setPackages(visualaidPackages.slice(0, 3));
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
    <div>
      <SEO title="Creative Visual Aid Design Services to Make Your Presentations Clear and Impactful." description="Artisticify is a design company that provides design and Digital Marketing services to businesses." />
      <div className='text'>
        <div className='about'>
          <div className='image-container'>
            <img src={visualidImg} className='main-about img-fluid ' />
          </div>
        </div>
        <h2 className="text-center1 fw-bold text-white my-5 shadow logo-package">Creative Visual Aid Design Services to Make Your Presentations Clear and Impactful.</h2>

        <Container>
          <Row className="mb-5">
            <Col sm={12} md={6}>
              <div className="text-justify">
                <h4 className="fw-bold blue px-4 me-3 pb-2">Pharma Visual Aid Design Services to Boost Brand Awareness</h4>

                <div className="text-secondary text">
                  <p>Promoting your pharmaceutical product effectively is key to success in the competitive healthcare industry. At Artisticify, we specialize in creating impactful pharma visual aids that help elevate your brand’s presence in the market.

                  </p>

                  <p>Visual aids are one of the most effective promotional tools in the pharmaceutical industry, often taking center stage in product marketing strategies. They convey essential product information clearly and visually, making them an invaluable asset for healthcare professionals and consumers alike.</p>

                  <p>Our Pharma Visual Aid Designs include detailed product information such as brand name, composition, benefits, and usage instructions. We ensure that each visual aid is not only informative but also creatively designed to capture attention and engage viewers. A well-designed visual aid is aesthetically pleasing and easy to understand, providing your target audience with the knowledge they need to make informed decisions.</p>

                  <p>Let Artisticify help you create professional, informative, and visually compelling pharma visual aids that strengthen your brand and enhance product promotion.


                  </p>


                </div>

              </div>
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-center">
              <div className="curve">
                <img src={PackagingImage} className="p-5 rounded rounded-pill img-fluid" style={{ width: "500px", height: "500px" }} />
              </div>
            </Col>
          </Row>

          <Container>
            <div className="pt-5">
              <h3 className="text-center py-3 fw-bold">Why Are Visual Aids Important?</h3>
              <p className="text-center w-75 justify-content-center mx-auto text-secondary mb-5">
                Visual aids play a crucial role in conveying key information about a product, particularly in the medical field. They help doctors and medical representatives understand the product in detail, increasing the likelihood that the doctor will prescribe it to patients. A well-designed visual aid clearly displays essential details, such as the product’s brand name, composition, active ingredients, advantages, and indications. It also highlights who should and should not use the product, ensuring the right audience is informed effectively.
          </p>
            </div>
            <h3 className="text-center  pt-3 fw-bold mb-5">See Our Craetive Visual Aid Design Creations</h3>

            <Row>
              {logoImages.map((image, index) => (
                <Col xs={12} md={4} className="mb-3" key={index}>
                  <div className="image-container1">
                    <img src={image} className="w-100 image-hover" alt={`logo-${index}`} style={{width:"500px",height:"300px"}}/>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>

        </Container>
        <div className="content-container mt-5 pt-5">

          <h3 className="text-center  pt-3 fw-bold mb-5">Visual Aid Design Packages</h3>


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
      </div>
    </div>
  )
}

export default VisualAid