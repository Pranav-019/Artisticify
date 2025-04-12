import { useEffect, useRef, useState } from 'react';
import PosterImage from '../../assets/social media.png';
import PosterImg from '../../assets/special package for marketing.jpg';
import social1 from '../../assets/azwyxexsop.jpg'
import social3 from '../../assets/bigstock-Web-Traffic-business-Technol-166581227.4b2ff768.jpg'
import social4 from '../../assets/images.jpg'
import fb from '../../assets/Facebook-marketing-strategy-that-works-in-2021-1.jpg'
import insta from '../../assets/Feature-Image-2-1-1.png'
import linkdin from '../../assets/linkdin.png'
import twitter from '../../assets/Twitter-Marketing.png'
import youtube from '../../assets/youtube.jpg'



import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import FAQs from '../FAQs';
import { SEO } from '../SEO';
function SocialMedia() {
  const [setIsVisible] = useState(false);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
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

  const fetchPackages = async () => {
    try {
      const response = await fetch("https://artisticify-backend.vercel.app/api/packages");
      const data = await response.json();

      // Filter packages where category is 'brochure'
      const socialmediaPackages = data.filter(pkg => pkg.category === 'socialmedia');

      // Limit the packages to 3 (Basic, Standard, Premium)
      setPackages(socialmediaPackages.slice(0, 3));
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
      <SEO title="Social Media Marketing" description="digital marketing
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
          <img src={PosterImg} className='main-about img-fluid mb-5' />

        </div>
      </div>
      <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Boost your brand’s presence with social media services, tailored to your needs.</h2>

      <Container>
        <Row className="mb-5 ">
          <Col sm={12} md={6}>
            <div className="text-justify">
              <h4 className="fw-bold blue px-4 me-3 pb-2">Social Media Digital Marketing Services in India</h4>

              <div className="text-secondary text">
                <p>In today’s digital age, social media is not just a platform for sharing content—it’s a powerful marketing tool that connects businesses with their audience, drives engagement, and boosts brand visibility.

                </p>

                <p>At Artisticify, we offer comprehensive social media digital marketing services designed to elevate your brand’s online presence. Whether you&rsquo;re looking to increase followers, drive traffic to your website, or engage with customers on a deeper level, our tailored strategies deliver measurable results.</p>

                <p>We specialize in creating targeted campaigns across platforms like Facebook, Instagram, LinkedIn, Twitter, and TikTok, ensuring that your brand&rsquo;s voice is heard and resonates with your audience. From content creation and community management to paid advertising and analytics, we handle every aspect of your social media marketing to ensure sustained growth and engagement.</p>

                <p>Partner with Artisticify to develop a social media strategy that enhances your online presence and drives business success.
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
      </Container>
      <div className='w-100' >
        <Container>
          <div>
            <Row>
              <Col md={6} className='my-5 p-5 m-auto'>
                <h3>Develop Brand Awareness (Followers)</h3>
                <h5 className='blue my-2'>Expand Your Reach & Grow Your Brand!</h5>
                <p className='text-secondary mt-3'>Maximize your social media presence with our expert marketing services! We help you attract real, engaged followers by targeting the right audience based on demographics, interests, and behavior. With our strategic approach, you will see increased brand awareness, higher engagement, and more referrals.

                </p>
                <p className='text-secondary'>Let’s build your success—start growing today!</p>

                <Button className=' bg-whitw boreder blue custom-button fw-bold p-3 my-3 img-fluid' style={{ color: "#13357b" }} onClick={() => navigate('/contact')}>Find Out More</Button>
              </Col>
              <Col md={6}>

                <div className="curved-image-container">
                  <img src={social1} alt="Social" className="curved-image img-fluid" style={{ width: "600px", height: "400px" }} />
                </div>

              </Col>
            </Row>

          </div>
        </Container>

      </div>

      <div className='w-100' style={{ backgroundColor: "#F0F9FF" }}>
        <Container>
          <div>
            <Row>
              <Col md={6}>

                <div className="curved-image-container">
                  <img src={social3} alt="Social" className="curved-image img-fluid" style={{ width: "600px", height: "400px" }} />
                </div>

              </Col>
              <Col md={6} className='p-5 m-auto'>
                <h3>Increase Website Exposure (Traffic & Conversions)</h3>
                <h5 className='blue my-2'>Boost Your Website Traffic & Drive More Sales!</h5>
                <p className='text-secondary mt-3'>Increasing website traffic can be tough, but it directly impacts your leads and sales. That is where we come in! We design tailored social media campaigns with a clear focus on driving traffic. Through strategic retargeting, we re-engage recent website visitors, turning them into loyal customers.

                </p>
                <p className='text-secondary'>Let us help you increase conversions and grow your brand’s visibility with our proven strategies!</p>

                <Button className=' bg-whitw boreder blue custom-button fw-bold p-3 my-3 img-fluid' style={{ color: "#13357b" }} onClick={() => navigate('/contact')}>Get More Traffic & More Engagement</Button>
              </Col>

            </Row>

          </div>

        </Container>

      </div>
      <div>
        <Container>
          <Row className='my-5'>

            <Col md={6} className='p-5 m-auto'>
              <h3>Why Partner with Our Social Media Marketing Agency?</h3>

              <p className='text-secondary mt-3'>Partnering with us means working with a team of experts dedicated to your brand’s success. We focus on building strong relationships with your target audience through data-driven strategies, creative campaigns, and continuous engagement. Here’s why you should choose us:

              </p>
              <ul className='text-secondary'>
                <li>Tailored Strategies: Customized to fit your brand and goals.</li>
                <li>Proven Results: Boost engagement, traffic, and conversions.</li>
                <li>Expert Team: Always ahead of trends for your success.</li>
                <li>Ongoing Support: We’re with you every step of the way.</li>
              </ul>


            </Col>
            <Col md={6}>

              <div className="curved-image-container">
                <img src={social4} alt="Social" className="curved-image img-fluid" style={{ width: "600px", height: "400px" }} />
              </div>

            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ backgroundColor: "#F0F9FF" }}>
        <Container>
          <Row className='my-5'>
            <Col md={6}>

              <div className="curved-image-container">
                <img src={fb} alt="Social" className="curved-image img-fluid" style={{ width: "600px", height: "400px" }} />
              </div>

            </Col>
            <Col md={6} className='p-5 m-auto'>
              <h3>FaceBook Marketing</h3>
              <h5 className='blue my-2'>Drive Engagement & Grow Your Brand!</h5>
              <p className='text-secondary mt-3'>We help you expand your reach and connect with the right audience on Facebook. By targeting users already interested in your brand, we boost engagement through meaningful interactions—likes, comments, and shares. More engagement means stronger relationships, increased loyalty, and better brand visibility.

              </p>
              <p className='text-secondary'>Let’s elevate your Facebook presence and turn followers into loyal customers!</p>


            </Col>


          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row className='my-5'>


            <Col md={6} className='p-5 m-auto'>
              <h3>Instagram Marketing</h3>
              <h5 className='blue my-2'>Boost Engagement & Build Your Brand!</h5>
              <p className='text-secondary mt-3'>We help you grow your Instagram presence by connecting with the right audience. Through targeted strategies, we increase engagement with likes, comments, and shares, strengthening relationships and building brand loyalty. More interaction means greater visibility and a stronger community around your brand.

              </p>
              <p className='text-secondary'>Let’s take your Instagram to the next level and turn followers into loyal customers!</p>


            </Col>

            <Col md={6}>

              <div className="curved-image-container">
                <img src={insta} alt="Social" className="curved-image img-fluid" style={{ width: "600px", height: "400px" }} />
              </div>

            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ backgroundColor: "#F0F9FF" }}>
        <Container>
          <Row className='my-5'>

            <Col md={6}>

              <div className="curved-image-container">
                <img src={linkdin} alt="Social" className="curved-image img-fluid" style={{ width: "600px", height: "400px" }} />
              </div>

            </Col>
            <Col md={6} className='p-5 m-auto'>
              <h3>Linkdin Marketing</h3>
              <h5 className='blue my-2'>Expand Your Network & Grow Your Business!</h5>
              <p className='text-secondary mt-3'>We help you establish a strong presence on LinkedIn by connecting with the right professionals. Through targeted strategies, we boost engagement with meaningful interactions—likes, comments, and shares—enhancing credibility and building lasting business relationships. More engagement means increased visibility, stronger connections, and greater opportunities.
              </p>
              <p className='text-secondary'>Let’s elevate your LinkedIn presence and turn connections into valuable partnerships!</p>


            </Col>


          </Row>
        </Container>
      </div>
      <div >
        <Container>
          <Row className='my-5'>


            <Col md={6} className='p-5 m-auto'>
              <h3>Twitter Marketing</h3>
              <h5 className='blue my-2'>Amplify Your Reach & Engage Your Audience!</h5>
              <p className='text-secondary mt-3'>We help you build a strong presence on Twitter by connecting with the right audience. Through targeted strategies, we increase engagement with likes, retweets, and meaningful interactions, boosting your brand’s visibility and credibility. More engagement means stronger connections, higher brand awareness, and greater influence.
              </p>
              <p className='text-secondary'>Let’s grow your Twitter presence and turn followers into loyal supporters!</p>


            </Col>
            <Col md={6}>

              <div className="curved-image-container">
                <img src={twitter} alt="Social" className="curved-image img-fluid" style={{ width: "600px", height: "400px" }} />
              </div>

            </Col>

          </Row>
        </Container>
      </div>
      <div >
        <Container>
          <Row className='my-5'>

            <Col md={6}>

              <div className="curved-image-container">
                <img src={youtube} alt="Social" className="curved-image img-fluid" style={{ width: "600px", height: "400px" }} />
              </div>

            </Col>
            <Col md={6} className='p-5 m-auto'>
              <h3>Youtube Marketing</h3>
              <h5 className='blue my-2'>Grow Your Audience & Boost Engagement!</h5>
              <p className='text-secondary mt-3'>We help you build a powerful presence on YouTube by reaching the right viewers. Through targeted strategies, we increase engagement with likes, comments, shares, and subscriptions—enhancing your brand’s visibility and credibility. More engagement means stronger connections, higher brand awareness, and greater influence.
              </p>
              <p className='text-secondary'>Let’s take your YouTube channel to the next level and turn viewers into loyal subscribers!</p>


            </Col>


          </Row>
        </Container>
      </div>
      <FAQs />

      <div className="content-container mt-5 pt-5">


      <div className='text-center fw-bold text-white my-5 shadow logo-package w-50 sm-w-75'>
         <h3 className="text-center  fw-bold  pkcg"> Social Media Packages</h3>
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
    </div>)
}

export default SocialMedia