import { useEffect, useRef, useState } from 'react';
import PosterImage from '../../assets/content writing.png';
import PosterImg from '../../assets/Content Marketing Serivces.jpg';
import cm11 from '../../assets/istockphoto-1320095004-612x612-removebg-preview.png';
import cm21 from '../../assets/keywords-writer-illustration-download-in-svg-png-gif-file-formats--analyzing-campaign-business-and-seo-pack-web-illustrations-1819860.png';
import cm31 from '../../assets/media-player-software-computer-application-geolocation-app-location-determination-function-male-implementor-programmer-cartoon-character_335657-2579-removebg-preview.png';
import cm41 from '../../assets/backlinks-strategies-boost-seo.png';
import cm1 from '../../assets/content-marketing-data.png';
import cm2 from '../../assets/content-marketing-relevance.png';
import cm3 from '../../assets/content-marketing.jpg.optimal.jpg';
import cm4 from '../../assets/content-marketing.png';

import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../SEO';
function ContentMarketing() {
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
      const contentmarketingPackages = data.filter(pkg => pkg.category === 'contentmarketing');

      // Limit the packages to 3 (Basic, Standard, Premium)
      setPackages(contentmarketingPackages.slice(0, 3));
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
  <SEO title="Content Marketing" description="Artisticify is a design company that provides design and Digital Marketing services to businesses." />
       <div className='about'>

    <div className='text'>
      <div className='about'>

        <div className='image-container mb-5'>
          <img src={PosterImg} className='main-about img-fluid mb-5' />

        </div>
      </div>
      <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Effective content strategies to increase reach and build brand loyalty</h2>

      <Container>
        <Row className="mb-5">
          <Col sm={12} md={6}>
            <div className="text-justify">
              <h4 className="fw-bold blue px-4 me-3 pb-2">Content Marketing Services in India</h4>

              <div className="text-secondary text">
                <p>Great content is the backbone of any successful digital marketing strategy. It drives engagement, nurtures relationships, and helps build trust with your audience. At Artisticify, we specialize in creating compelling content that not only resonates with your target audience but also boosts your brand’s visibility and credibility.

                </p>

                <p>Our content marketing services are designed to provide valuable, relevant, and consistent content across multiple channels, including blogs, social media, websites, email newsletters, and more. We craft engaging content that educates, informs, and entertains while aligning with your business goals and brand message.</p>

                <p>We take a data-driven approach to content marketing, analyzing audience behavior and trends to ensure your content is seen by the right people at the right time. Whether you&rsquo;re looking to generate leads, increase conversions, or enhance customer loyalty, we develop customized content strategies to meet your objectives.</p>

                <p>Partner with Artisticify to create content that not only speaks to your audience but drives measurable results and business growth.
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
      <div className='w-100 py-5' style={{ backgroundColor: "#F0F9FF" }}>
        <Container>
          <div className='text-center py-5'>
            <h3 className='my-3 fw-bold'>Role of Content marketing in SEO</h3>
            <p className='text-secondary'>Content marketing plays a significant role in boosting SEO by aligning content creation with search engine algorithms. Here are some ways in which content marketing supports SEO:</p>
          </div>
          <Row >
            <Col md={6} className=" mb-2">
              <div className="text-center bg-white p-5 role-div">
                <img src={cm11} style={{ width: "250px", height: "250px" }} className="img-fluid" />
                <h5 className="fw-bold">Relevant and high-quality content</h5>
                <p className="text-secondary">
                  High-quality, relevant content attracts visitors and encourages backlinks, improving search rankings. This signals authority and boosts visibility on search engines.
                </p>
              </div>
            </Col>

            <Col md={6} className=" mb-2">
              <div className="text-center bg-white p-5 role-div">
                <img src={cm21} style={{ width: "250px", height: "250px" }} className="img-fluid" />
                <h5 className="fw-bold">Keywords</h5>
                <p className="text-secondary">

                  Relevant keywords help search engines understand content and improve rankings. However, they should be used naturally to avoid keyword stuffing and maintain readability.
                </p>
              </div>
            </Col>

            <Col md={6} className="mt-4 mb-2">
              <div className="text-center bg-white p-5 role-div">
                <img src={cm31} style={{ width: "250px", height: "250px" }} className="img-fluid" />
                <h5 className="fw-bold"> Internal Linking</h5>
                <p className="text-secondary">
                  Internal linking helps search engines crawl and index a website more effectively, improving search rankings. It also enhances user navigation and site structure.
                </p>
              </div>
            </Col>

            <Col md={6} className="mt-4 mb-2">
              <div className="text-center bg-white p-5 role-div">
                <img src={cm41} style={{ width: "250px", height: "250px" }} className="img-fluid" />
                <h5 className="fw-bold">Backlinks</h5>
                <p className="text-secondary">

                  Creating shareable, high-quality content can attract backlinks, boosting a website’s authority and search rankings. Backlinks signal trust and relevance to search engines.
                </p>
              </div>
            </Col>
          </Row>

        </Container>

      </div>
      <Container>
        <div className="pt-5 pb-5">
          <h3 className="text-center py-3 fw-bold">Why Choose a content marketing Company?</h3>
          <p className="text-center w-75 d-flex justify-content-center mx-auto text-secondary mb-5">Creative content marketing plays a crucial role in enhancing your brand’s presence. We ensure our content is engaging while delivering the right message to your audience. Content marketing remains a powerful and cost-effective solution, effectively promoting products, services, offers, and brand stories.</p>
        </div>


      </Container>

      <Container>
        <Row>
          <div className='text-center'>
            <h3 className='fw-bold py-3'>
              How Much Does Content Marketing Cost?
            </h3>
            <p className='text-secondary py-4'>The cost of content marketing can vary significantly based on several factors, making it important to carefully consider the resources needed for an effective campaign. Some of the key cost factors to consider when estimating the overall cost of content marketing include:</p>
          </div>
          <Col md={6} className="mt-3 mb-3">
            <div className='seo-success1'>
              <div className='increse-visi1 p-5 text-dark' id="text-block">
                <div className='visibility1 '>
                  <h4 className='mt-5 fw-bold'>Content creation costs</h4>
                  <p className='mt-3'>
                    Content creation costs depend on the type of content, expertise required, and production time. For example, videos typically cost more than blog posts due to the need for equipment, editing, and specialized skills.
                  </p>
                </div>
              </div>
              <div className='overlay1' />
              <div className='icon-heading1'>
                <img src="" className='w-50  fw-bold mb-3' />
                <h2 className='fw-bold'>Content creation costs</h2>
              </div>
              <img
                src={cm1}
                className='img-fluid seo-img1 w-100'
                style={{ height: '350px' }}
              />
            </div>
          </Col>
          <Col md={6} className="mt-3 mb-3">
            <div className='seo-success1'>
              <div className='increse-visi1 p-5 text-dark' id="text-block">
                <div className='visibility1 '>
                  <h4 className='mt-5 fw-bold'>Distribution costs</h4>
                  <p className='mt-3'>
                    Distribution costs vary based on the channels used and the level of promotion. Paid advertising on social media or other platforms typically costs more than organic promotion, such as sharing through email or social media posts.
                  </p>
                </div>
              </div>
              <div className='overlay1' />
              <div className='icon-heading1'>
                <img src="" className='w-50  fw-bold mb-3' />
                <h2 className='fw-bold'>Distribution costs</h2>
              </div>
              <img
                src={cm2}
                className='img-fluid seo-img1 w-100'
                style={{ height: '350px' }}
              />
            </div>
          </Col>
          <Col md={6} className="mt-3 mb-3">
            <div className='seo-success1'>
              <div className='increse-visi1 p-5 text-dark' id="text-block">
                <div className='visibility1 '>
                  <h4 className='mt-5 fw-bold'>Tools & resources</h4>
                  <p className='mt-3'>

                    Content creation and distribution often require tools like graphic design software, video editors, and social media management platforms. These tools can incur additional costs based on their features and subscription plans. Investing in the right tools helps ensure efficient and high-quality content production.
                  </p>
                </div>
              </div>
              <div className='overlay1' />
              <div className='icon-heading1'>
                <img src="" className='w-50  fw-bold mb-3' />
                <h2 className='fw-bold'>Tools & resources</h2>
              </div>
              <img
                src={cm3}
                className='img-fluid seo-img1 w-100'
                style={{ height: '350px' }}
              />
            </div>
          </Col>
          <Col md={6} className="mt-3 mb-3">
            <div className='seo-success1'>
              <div className='increse-visi1 p-5 text-dark' id="text-block">
                <div className='visibility1 '>
                  <h4 className='mt-5 fw-bold'>Personnel costs</h4>
                  <p className='mt-3'>
                  Personnel costs can vary based on campaign size, requiring businesses to hire additional staff or freelancers for content creation, distribution, and promotion. The costs depend on the level of expertise and experience needed for each role. Highly skilled professionals or specialized services typically incur higher fees.
                  </p>
                </div>
              </div>
              <div className='overlay1' />
              <div className='icon-heading1'>
                <img src="" className='w-50  fw-bold mb-3' />
                <h2 className='fw-bold'>Personnel costs</h2>
              </div>
              <img
                src={cm4}
                className='img-fluid seo-img1 w-100'
                style={{ height: '350px' }}
              />
            </div>
          </Col>

        </Row>

      </Container>


      <div className="content-container mt-5 pt-5">

        <h3 className="text-center  pt-3 fw-bold mb-5"> Content Marketing Packages</h3>


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
    </div>
  )
}

export default ContentMarketing