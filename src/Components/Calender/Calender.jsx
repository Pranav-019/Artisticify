import { useEffect, useRef, useState } from 'react';
import PosterImage from '../../assets/poster.png';
import flyer1 from '../../assets/flyer3.jpg';
import calenderImg from '../../assets/Calender Design Services.jpg';

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
      const calenderPackages = data.filter(pkg => pkg.category === 'calendar');

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
         <div className='about'>
                <div className='image-container'>
                  <img src={calenderImg} className='main-about img-fluid '/>
                </div>
              </div>
        <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Creative and Functional Calendar Design Packages for Every Business or Event.</h2>

        <Container>
          <Row className="mb-5">
            <Col sm={12} md={6}>
              <div className="text-justify">
                <h4 className="fw-bold blue px-4 me-3 pb-2">Creative Corporate Calendar Design Services in India</h4>

                <div className="text-secondary text">
                  <p>Looking for a unique and professional calendar design for your business? Artisticify offers stunning, custom calendar designs that elevate your brand and help you stay top of mind throughout the year.

                    Calendars are not only a functional tool but also an excellent marketing asset. They are widely used by individuals and businesses alike, making them a powerful promotional item. A well-designed calendar on a wall or desk becomes a daily reminder of your brand, keeping it visible year-round.

                  </p>

                  <p>At Artisticify, we design calendars that are both practical and visually appealing. Whether it&rsquo;s a desk calendar, wall calendar, photo calendar, or a personalized calendar, we customize each design to match your brand identity and promotional goals. Highlight important dates, special promotions, or upcoming events with a calendar that tells your story while keeping your customers engaged.</p>

                  <p>We offer a range of calendar designs, including die-cut, hardbound, New Year, and festival-themed designs like Diwali calendars, to cater to your specific needs. Our team ensures that each graphic, image, and piece of content aligns with your brand&rsquo;s vision and messaging.

                    Let Artisticify help you create a functional yet eye-catching calendar that serves as both a marketing tool and a beautiful piece of art in your clients’ spaces.</p>




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
      </div>
    </div>
  )
}

export default Calender