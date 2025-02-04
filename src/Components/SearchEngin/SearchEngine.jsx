import { useEffect, useRef, useState } from 'react';
import PosterImage from '../../assets/seo (1).png';
import PosterImg from '../../assets/Search Engine Optimization.jpg';

import increse from '../../assets/imcrese-visibility.jpg';
import performance from '../../assets/performance.png';
import desired from '../../assets/desired.jpg';
import brand from '../../assets/brand.jpg';

import i1 from '../../assets/i1.png';
import i2 from '../../assets/i2.png';
import i3 from '../../assets/i3.png';
import i4 from '../../assets/i4.png';
import i5 from '../../assets/i5.png';
import i6 from '../../assets/i6.png';
import i7 from '../../assets/i7-1.png';
import i8 from '../../assets/i8.png';
import i9 from '../../assets/i9.png';

import seo1 from '../../assets/Communication-Tools-Yeahhub.jpg';
import seo2 from '../../assets/content marketing.jpg';
import seo3 from '../../assets/keyword.png';
import seo4 from '../../assets/1634576048261.jpg';
import seo5 from '../../assets/anylisis.png';
import seo6 from '../../assets/images (5).jpg';
import seo7 from '../../assets/local.png';
import seo8 from '../../assets/digital-marketing-media-virtual-icon-globe-shape-business-open-his-hand-working-touch-screen-tablet-4096x2731.jpg';
import seo9 from '../../assets/report.jpg';

  
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Success1 from '../../assets/Group-56-1.png'
import Success2 from '../../assets/Group-57-1.png'
import Success3 from '../../assets/Group-58.png'
import Success4 from '../../assets/Group-61.png'

function SearchEngine() {
  const [setIsVisible] = useState(false);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);
  const navigate = useNavigate();
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
      const searchenginePackages = data.filter(pkg => pkg.category === 'searchengine');

      // Limit the packages to 3 (Basic, Standard, Premium)
      setPackages(searchenginePackages.slice(0, 3));
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
          <img src={PosterImg} className='main-about img-fluid mb-5' />

        </div>
      </div>
      <h2 className="text-center fw-bold text-white my-5 shadow logo-package">Effective SEO solutions for better visibility, with premium options for extra impact.</h2>

      <Container>
        <Row className="mb-5">
          <Col sm={12} md={6} className='m-auto'>
            <div className="text-justify ">
              <h4 className="fw-bold blue px-4 me-3 pb-2">Boost Your Online Visibility with Our SEO Services</h4>

              <div className="text-secondary text">
                <p>At Artisticify, we offer expert SEO services designed to help your business rank higher in search engine results, drive targeted traffic, and improve conversions. Our team uses a combination of on-page and off-page SEO strategies, including:

                </p>

                <p>We offer top-quality SEO services in India at affordable rates, ensuring maximum value for your investment. Specializing in both on-page and off-page SEO, we optimize website content and implement strategic link-building to boost search rankings. Our expertise in technical SEO sets us apart, helping businesses attract search engine crawlers with high-quality content. As a leading SEO provider, we deliver result-driven strategies to enhance your online presence and drive long-term success.
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
          <div className=''>
            <h3 className='fw-bold text-center mt-5 mb-5'>Rise to the Top – Proven SEO Strategies for Success!</h3>
            <Row className=''>
              <Col sm={12} md={6} className="mt-3 mb-3"> {/* Added mt-3 and mb-3 */}
                <div className='seo-success'>
                  {/* Text block above the icon and heading */}
                  <div className='increse-visi p-5 text-dark' id="text-block">
                    <div className='visibility '>
                      <h4 className='mt-5 fw-bold'>Increase Visibility</h4>
                      <p className='mt-3'>We focus on ensuring your brand captures the attention of your target audience at the perfect moment. Through tailored strategies, we enhance engagement with your posts and activities, making sure your brand stays visible and connects with the right people.</p>
                    </div>
                  </div>

                  {/* Icon and Heading below the text */}
                  <div className='overlay' />
                  <div className='icon-heading'>
                    <img src={Success1} className='w-25 h-50 fw-bold mb-3' />
                    <h3 className='fw-bold'>Increased Visibility</h3>
                  </div>

                  {/* Image */}
                  <img
                    src={increse}
                    className='img-fluid seo-img w-100'
                    style={{ height: '350px' }}
                  />
                </div>
              </Col>

              <Col sm={12} md={6} className="mt-3 mb-3"> {/* Added mt-3 and mb-3 */}
                <div className='seo-success'>
                  {/* Text block above the icon and heading */}
                  <div className='increse-visi p-5 text-dark' id="text-block">
                    <div className='visibility '>
                      <h4 className='mt-5 fw-bold'>Online Performance Tracking</h4>
                      <p className='mt-3'>See your business growth in real-time with our transparent SEO services. We provide clear insights, allowing you to track progress and understand how our strategies are driving results for your brand.</p>
                    </div>
                  </div>

                  {/* Icon and Heading below the text */}
                  <div className='overlay' />
                  <div className='icon-heading'>
                    <img src={Success2} className='w-25 h-50 fw-bold mb-3' />
                    <h3 className='fw-bold'>Online Performance Tracking</h3>
                  </div>

                  {/* Image */}
                  <img
                    src={performance}
                    className='img-fluid seo-img w-100'
                    style={{ height: '350px' }}
                  />
                </div>
              </Col>

              <Col sm={12} md={6} className="mt-3 mb-3"> {/* Added mt-3 and mb-3 */}
                <div className='seo-success sm-mb-3'>
                  {/* Text block above the icon and heading */}
                  <div className='increse-visi p-5 text-dark' id="text-block">
                    <div className='visibility '>
                      <h4 className='mt-5 fw-bold'>Desired Results</h4>
                      <p className='mt-3'>We don't make false promises! With our expert SEO strategies, you can expect real, measurable results for all your business promotions, ensuring your campaigns achieve the success you desire.</p>
                    </div>
                  </div>

                  {/* Icon and Heading below the text */}
                  <div className='overlay' />
                  <div className='icon-heading'>
                    <img src={Success3} className='w-25 h-50 fw-bold mb-3' />
                    <h3 className='fw-bold'>Desired Results</h3>
                  </div>

                  {/* Image */}
                  <img
                    src={desired}
                    className='img-fluid seo-img w-100'
                    style={{ height: '350px' }}
                  />
                </div>
              </Col>

              <Col sm={12} md={6} className="mt-3 mb-3"> {/* Added mt-3 and mb-3 */}
                <div className='seo-success'>
                  {/* Text block above the icon and heading */}
                  <div className='increse-visi p-5 text-dark' id="text-block">
                    <div className='visibility '>
                      <h4 className='mt-5 fw-bold'>Enhanced Brand Recognition</h4>
                      <p className='mt-3'>Our strategic SEO services work to amplify your brand’s presence. By strengthening your online identity, we help convert your target audience into loyal, long-term supporters, boosting brand recognition and trust.</p>
                    </div>
                  </div>

                  {/* Icon and Heading below the text */}
                  <div className='overlay' />
                  <div className='icon-heading'>
                    <img src={Success4} className='w-25 h-50 fw-bold mb-3' />
                    <h3 className='fw-bold'>Enhanced Brand Recognition</h3>
                  </div>

                  {/* Image */}
                  <img
                    src={brand}
                    className='img-fluid seo-img w-100'
                    style={{ height: '350px' }}
                  />
                </div>
              </Col>
            </Row>


          </div>
        </Container>
        <Container>
          <div className="pt-5">
            <h3 className="text-center py-3 fw-bold">Why Choose a SEO Services?</h3>
            <p className="text-center w-75 d-flex justify-content-center mx-auto text-secondary mb-5">Effective SEO plays a crucial role in improving your online visibility. We ensure our strategies are tailored to boost your website&rsquo;s ranking while driving organic traffic. SEO remains a timeless and cost-effective solution, effectively promoting products, services, offers, and brand presence online.</p>
          </div>


        </Container>
        <Container>
          <Row>
            <div className='text-center'>
              <h3 className='fw-bold'>
                Boost Your Visibility and Attract Quality Traffic with Our Expert SEO Services
              </h3>
            </div>
            <Col md={4} className="mt-3 mb-3">
              <div className='seo-success1'>
                <div className='increse-visi1 p-5 text-dark' id="text-block">
                  <div className='visibility1 '>
                    <h4 className='mt-5 fw-bold'>SEO Audit</h4>
                    <p className='mt-3'>
                      We conduct a comprehensive analysis of your website to identify areas for improvement and develop strategic action plans. Our detailed SEO reports help address shortcomings, optimize performance, and drive your brand toward its ultimate business goals.
                    </p>
                  </div>
                </div>
                <div className='overlay1' />
                <div className='icon-heading1'>
                  <img src={i1} className='w-50  fw-bold mb-3' />
                  <h4 className='fw-bold'>SEO Audit</h4>
                </div>
                <img
                  src={seo1}
                  className='img-fluid seo-img1 w-100'
                  style={{ height: '350px' }}
                />
              </div>
            </Col>

            <Col md={4} className="mt-3 mb-3">
              <div className='seo-success1'>
                <div className='increse-visi1 p-5 text-dark' id="text-block">
                  <div className='visibility1 '>
                    <h4 className='mt-5 fw-bold'>Content Marketing</h4>
                    <p className='mt-3'>
                      Content is king in SEO! We optimize your website content to engage visitors and align with search engine algorithms, ensuring higher rankings on SERPs and increased visibility for your brand.
                    </p>
                  </div>
                </div>
                <div className='overlay1' />
                <div className='icon-heading1'>
                  <img src={i2} className='w-25 h-50 fw-bold mb-3' />
                  <h4 className='fw-bold'>Content Marketing</h4>
                </div>
                <img
                  src={seo2}
                  className='img-fluid seo-img1 w-100'
                  style={{ height: '350px' }}
                />
              </div>
            </Col>

            <Col md={4} className="mt-3 mb-3">
              <div className='seo-success1'>
                <div className='increse-visi1 p-5 text-dark' id="text-block">
                  <div className='visibility1 '>
                    <h4 className='mt-5 fw-bold'>Expert Keyword Research</h4>
                    <p className='mt-3'>
                      Keyword research is the foundation of online success. We identify the most relevant keywords, analyze search volume, and optimize your website to drive maximum traffic and business growth.
                    </p>
                  </div>
                </div>
                <div className='overlay1' />
                <div className='icon-heading1'>
                  <img src={i3} className='w-25 h-50 fw-bold mb-3' />
                  <h4 className='fw-bold'>Expert Keyword Research</h4>
                </div>
                <img
                  src={seo3}
                  className='img-fluid seo-img1 w-100'
                  style={{ height: '350px' }}
                />
              </div>
            </Col>

            <Col md={4} className="mt-3 mb-3">
              <div className='seo-success1'>
                <div className='increse-visi1 p-5 text-dark' id="text-block">
                  <div className='visibility1 '>
                    <h4 className='mt-5 fw-bold'>Desired Results</h4>
                    <p className='mt-3'>
                      Our on-page SEO strategies optimize your website content, meta titles, and more, while our off-page SEO services focus on building high-quality backlinks. Together, these approaches drive better rankings, increased traffic, and long-term success.
                    </p>
                  </div>
                </div>
                <div className='overlay1' />
                <div className='icon-heading1'>
                  <img src={i4} className='w-25 h-50 fw-bold mb-3' />
                  <h4 className='fw-bold'>On Page/Off Page</h4>
                </div>
                <img
                  src={seo4}
                  className='img-fluid seo-img1 w-100'
                  style={{ height: '350px' }}
                />
              </div>
            </Col>

            <Col md={4} className="mt-3 mb-3">
              <div className='seo-success1'>
                <div className='increse-visi1 p-5 text-dark' id="text-block">
                  <div className='visibility1 '>
                    <h4 className='mt-5 fw-bold'>Competitor Analysis</h4>
                    <p className='mt-3'>
                      To succeed in the market, you need to analyze your competitors and strategically outrank them. Our in-depth competitor analysis helps you stay ahead, ensuring your business maintains a competitive edge.
                    </p>
                  </div>
                </div>
                <div className='overlay1' />
                <div className='icon-heading1'>
                  <img src={i5} className='w-25 h-50 fw-bold mb-3' />
                  <h4 className='fw-bold'>Competitor Analysis</h4>
                </div>
                <img
                  src={seo5}
                  className='img-fluid seo-img1 w-100'
                  style={{ height: '350px' }}
                />
              </div>
            </Col>

            <Col md={4} className="mt-3 mb-3">
              <div className='seo-success1'>
                <div className='increse-visi1 p-5 text-dark' id="text-block">
                  <div className='visibility1 '>
                    <h4 className='mt-5 fw-bold'>GMB Management</h4>
                    <p className='mt-3'>
                      We optimize and manage your Google My Business listing to align with your marketing goals. From services and offers to engaging creatives, our GMB management helps enhance your brand’s visibility and expand its global reach.
                    </p>
                  </div>
                </div>
                <div className='overlay1' />
                <div className='icon-heading1'>
                  <img src={i6} className='w-25 h-50 fw-bold mb-3' />
                  <h4 className='fw-bold'>GMB Management</h4>
                </div>
                <img
                  src={seo6}
                  className='img-fluid seo-img1 w-100'
                  style={{ height: '350px' }}
                />
              </div>
            </Col>

            <Col md={4} className="mt-3 mb-3">
              <div className='seo-success1'>
                <div className='increse-visi1 p-5 text-dark' id="text-block">
                  <div className='visibility1 '>
                    <h4 className='mt-5 fw-bold'>Local Citation Analysis</h4>
                    <p className='mt-3'>
                      Get noticed locally with accurate and consistent NAP (Name, Address, Phone Number) across all platforms. We optimize your local citations to strengthen your SEO and improve search rankings for better visibility.
                    </p>
                  </div>
                </div>
                <div className='overlay1' />
                <div className='icon-heading1'>
                  <img src={i7} className='w-25 h-50 fw-bold mb-3' />
                  <h4 className='fw-bold'>Local Citation Analysis</h4>
                </div>
                <img
                  src={seo7}
                  className='img-fluid seo-img1 w-100'
                  style={{ height: '350px' }}
                />
              </div>
            </Col>

            <Col md={4} className="mt-3 mb-3">
              <div className='seo-success1'>
                <div className='increse-visi1 p-5 text-dark' id="text-block">
                  <div className='visibility1 '>
                    <h4 className='mt-5 fw-bold'>Backlink Analysis</h4>
                    <p className='mt-3'>
                      As a leading SEO service provider in Chennai, we help businesses drive conversions through in-depth backlink analysis and strategic link-building. Combined with effective content marketing, our approach ensures optimal SEO results and improved rankings.
                    </p>
                  </div>
                </div>
                <div className='overlay1' />
                <div className='icon-heading1'>
                  <img src={i8} className='w-25 h-50 fw-bold mb-3' />
                  <h4 className='fw-bold'>Backlink Analysis</h4>
                </div>
                <img
                  src={seo8}
                  className='img-fluid seo-img1 w-100'
                  style={{ height: '350px' }}
                />
              </div>
            </Col>

            <Col md={4} className="mt-3 mb-3">
              <div className='seo-success1'>
                <div className='increse-visi1 p-5 text-dark' id="text-block">
                  <div className='visibility1 '>
                    <h4 className='mt-5 fw-bold'>Detailed Monthly Reports</h4>
                    <p className='mt-3'>
                      We provide comprehensive monthly reports, giving you clear insights into your website’s performance. From backlink analysis to content marketing strategies, our reports help track progress and ensure your business achieves optimal SEO results.
                    </p>
                  </div>
                </div>
                <div className='overlay1' />
                <div className='icon-heading1'>
                  <img src={i9} className='w-25 h-50 fw-bold mb-3' />
                  <h4 className='fw-bold'>Detailed Monthly Reports</h4>
                </div>
                <img
                  src={seo9}
                  className='img-fluid seo-img1 w-100'
                  style={{ height: '350px' }}
                />
              </div>
            </Col>
          </Row>

        </Container>
      </Container>
      <div className="content-container mt-5 pt-5">

        <h3 className="text-center  pt-3 fw-bold mb-5"> SEO Services     Packages</h3>


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

export default SearchEngine