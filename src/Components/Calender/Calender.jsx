import { useEffect, useRef, useState } from 'react';
import PosterImage from '../../assets/poster.png';
import flyer1 from '../../assets/flyer3.jpg';
import flyer2 from '../../assets/flyer3.jpg';
import flyer3 from '../../assets/flyer3.jpg';
import { Col, Container, Row } from 'react-bootstrap';
function Calender() {
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
      const calenderPackages = data.filter(pkg => pkg.category === 'calender');

      // Limit the packages to 3 (Basic, Standard, Premium)
      setPackages(calenderPackages.slice(0, 3));
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
      <div className='text'>
        <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Creative and Functional Calendar Design Packages for Every Business or Event.</h2>

        <Container>
          <Row className="mb-5">
            <Col sm={12} md={6}>
              <div className="text-justify">
                <h4 className="fw-bold blue px-4 me-3 pb-2">Creative Packaging Design Company in India</h4>

                <div className="text-secondary text">
                  <p>Is your product packaging an extension of your brand or just tomorrow&rsquo;s garbage?

                  </p>

                  <p>At Artisticify, we are experts at developing innovative, practical, and brand-consistent packaging designs for your products that leave a difference. In this fast-paced marketplace, packaging can be a dynamic marketing tool, helping to heighten brand recall and increase sales.</p>

                  <p>Our team delivers packaging that is functional, consumer-friendly, and aesthetically pleasing, providing a reason for your customers to choose your brand. Whether it is box packaging, food packaging, pharma packaging, or wine bottles, our designs can enhance your brand&rsquo;s identity.</p>

                  <p>We make sure that the labels and graphics are applied, colors are chosen, fonts are selected, and images are implemented to help represent your brandrsquo;s vision in detail.
                    Cooperate with us for innovative, world-class product packaging design!
                  </p>


                </div>

              </div>
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-center">
              <div className="curve">
                <img src={PosterImage} className="p-5 rounded rounded-pill img-fluid" style={{ width: "500px", height: "500px" }} />
              </div>
            </Col>
          </Row>

          <Container>
            <div className="pt-5">
              <h3 className="text-center py-3 fw-bold">Why Choose #Artisticify for Your Calendar Design Needs?</h3>
              <p className="text-center w-75 d-flex justify-content-center mx-auto text-secondary mb-5">At Artisticify, we specialize in creating custom calendars that reflect your brand, services, and vision. Our skilled graphic designers tailor each calendar to meet your business needs, ensuring it captures your unique identity.

                We offer both printed and electronic calendar options.
                Electronic calendars (e-calendars) can be shared via email or used across devices like computers, tablets, and mobile phones.
                E-calendars are also perfect for sharing on social media platforms like Facebook, LinkedIn, Twitter, and more.
                We ensure that every calendar is both functional and a powerful marketing tool for your business.</p>
            </div>
            <h3 className="text-center  pt-3 fw-bold mb-5">See Our Creative Calender Design Creation</h3>
            <Row>
              <Col xs={12} md={4} className="mb-3">

                <div className="image-container1">
                  <img src={flyer1} className="w-100 image-hover" />
                </div>
              </Col>
              <Col xs={12} md={4} className="mb-3"><div className="image-container1">
                <img src={flyer2} className="w-100 image-hover" />
              </div></Col>
              <Col xs={12} md={4} className="mb-3"><div className="image-container1">
                <img src={flyer3} className="w-100 image-hover" />
              </div></Col>
            </Row>
          </Container>

        </Container>
        <div className="content-container mt-5 pt-5">

          <h3 className="text-center  pt-3 fw-bold mb-5"> Calender Design Packages</h3>


          <div className="packages">
            {packages.map((pkg, index) => (
              <div className="package mb-3 position-relative" key={index}>
                <div className="pb-5">
                  <h3 className="text-center ">{pkg.name}</h3>
                  <p>{pkg.description}</p>
                  <ul>
                    {pkg.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <button className="pck-btn rounded-pill d-flex justify-content-center mx-auto">
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

export default Calender