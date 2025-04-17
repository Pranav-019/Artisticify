import { FaBookOpen, FaBullhorn, FaChartBar, FaShapes } from "react-icons/fa6";
import {
  FaSearch,              // SEO Audit
  FaPenFancy,            // Content Marketing
  FaMousePointer,        // Pay Per Click
  FaMapMarkerAlt,        // Google My Business
  FaGift,                 // Special Packages
  FaCalendarAlt
} from "react-icons/fa";

import { Col, Container, Row } from "react-bootstrap";
import { SEO } from '../SEO';
import { Tab, Tabs } from 'react-bootstrap';
import dm1 from '../../assets/Communication-Tools-Yeahhub.jpg';
import dm2 from '../../assets/socialmedia.jpg';
import dm3 from '../../assets/contentmarketing.jpg';
import dm4 from '../../assets/payperclick.jpg';
import dm5 from '../../assets/gogglemybusiness.jpg';
import dm6 from '../../assets/specialpackages.jpg';
import { useNavigate } from "react-router-dom";
import { FaPaintBrush, FaFileAlt, FaBoxOpen, FaFly, FaStickyNote, FaLaptopCode, FaGlobe, FaPen, FaEnvelope, FaIdCard, FaAward, FaUtensils } from "react-icons/fa";
import logoImg from '../../assets/logodesign.jpg';
import brochureImg from '../../assets/brovhuredesign.jpg';
import packagingImg from '../../assets/packagingdesign.avif';
import flyerImg from '../../assets/flyerdesign.jpg';
import posterImg from '../../assets/posterdesign.jpg';
import uiuxImg from '../../assets/uiuxdesign.jpg';
import websiteImg from '../../assets/websitedesign.jpg';
import letterheadImg from '../../assets/letterheaddesign.jpg';
import envelopeImg from '../../assets/envelopedesign.jpg';
import visitingCardImg from '../../assets/visitingcarddesign.jpg';
import certificateImg from '../../assets/Certificate-Template-Cover.jpg';
import menuImg from '../../assets/menucarddesign.png';
import magazineImg from '../../assets/magazinedesign.png';
import visualAidImg from '../../assets/visualaid.png';
import calendarImg from '../../assets/calenderdesign.jpg';
import iconImg from '../../assets/icondesign.jpg';
function OurService() {
  const navigate=useNavigate()
  const iconStyle = {
    backgroundColor: '#13357b',
    color: '#fff',
    borderRadius: '50%',
    padding: '15px',
    fontSize: '22px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const digitalMarketingServices = [
    {
      id: 1,
      title: 'SEO Audit',
      image: dm1,
      icon: <div style={iconStyle}><FaSearch /></div>,
      description:
        'We evaluate your website’s SEO health to uncover critical issues. Get detailed, actionable insights to boost visibility, improve rankings, and drive more organic traffic to your site.',
        route:"/SearchEngine"
    },
    {
      id: 2,
      title: 'Social Media Marketing',
      image: dm2,
      icon: <div style={iconStyle}><FaBullhorn /></div>,
      description:
        'Boost your brand’s presence across Facebook, Instagram, LinkedIn, and more. We create data-driven, engaging campaigns that connect with your audience and grow your community effectively.',
         route:"/SocialMedia"
    },
    {
      id: 3,
      title: 'Content Marketing',
      image: dm3,
      icon: <div style={iconStyle}><FaPenFancy /></div>,
      description:
        'Crafting high-quality, SEO-optimized content that informs, entertains, and converts. Our strategy builds trust, increases domain authority, and brings long-term organic growth.',
         route:"/ContentMarketing"
    },
    {
      id: 4,
      title: 'Pay Per Click',
      image: dm4,
      icon: <div style={iconStyle}><FaMousePointer /></div>,
      description:
        'Maximize ROI through precision-targeted Google and social ads. We optimize every click with smart budget allocation, compelling ad copy, and real-time performance monitoring.',
         route:"/PayPer"
    },
    {
      id: 5,
      title: 'Google My Business',
      image: dm5,
      icon: <div style={iconStyle}><FaMapMarkerAlt /></div>,
      description:
        'Enhance your local search visibility and manage your online reputation. We optimize your GMB profile to help you rank in the map pack and attract nearby customers easily.',
         route:"/Googlemybusiness"
    },
    {
      id: 6,
      title: 'Special Packages',
      image: dm6,
      icon: <div style={iconStyle}><FaGift /></div>,
      description:
        'Affordable, customized marketing packages tailored to your goals. Choose from flexible plans combining SEO, ads, content, and social media support to elevate your digital strategy.',
         route:"/SpecialPackages"
    },
  ];
  

  
  
  const designServices = [
    {
      id: 1,
      title: 'Logo Design',
      image: logoImg,
      icon: <div style={iconStyle}><FaPaintBrush /></div>,
      description: 'We craft unique and memorable logos that truly reflect your brand’s identity and values, helping you stand out in the market and make a lasting first impression.',
      route: '/logo',
    },
    {
      id: 2,
      title: 'Brochure Design',
      image: brochureImg,
      icon: <div style={iconStyle}><FaFileAlt /></div>,
      description: 'Our brochure designs are tailored to highlight your business’s key offerings and deliver persuasive content with visual appeal, perfect for promotions and events.',
      route: '/Brochure',
    },
    {
      id: 3,
      title: 'Packaging Design',
      image: packagingImg,
      icon: <div style={iconStyle}><FaBoxOpen /></div>,
      description: 'We design innovative and attractive packaging that not only protects your product but also boosts shelf appeal and enhances brand recognition.',
      route: '/Packaging',
    },
    {
      id: 4,
      title: 'Flyer Design',
      image: flyerImg,
      icon: <div style={iconStyle}><FaFly /></div>,
      description: 'Catch attention instantly with our vibrant flyer designs that are strategically crafted to communicate your message and drive audience engagement.',
      route: '/Flyer',
    },
    {
      id: 5,
      title: 'Poster Design',
      image: posterImg,
      icon: <div style={iconStyle}><FaStickyNote /></div>,
      description: 'From promotional campaigns to events, our bold and impactful poster designs ensure your visuals command attention and leave a strong visual mark.',
      route: '/Poster',
    },
    {
      id: 6,
      title: 'UI/UX Design',
      image: uiuxImg,
      icon: <div style={iconStyle}><FaLaptopCode /></div>,
      description: 'We create intuitive UI/UX designs that enhance user satisfaction by improving the usability, accessibility, and interaction of your digital product.',
      route: '/UIUX',
    },
    {
      id: 7,
      title: 'Website Design',
      image: websiteImg,
      icon: <div style={iconStyle}><FaGlobe /></div>,
      description: 'Our responsive and modern website designs are tailored to your brand, offering visually engaging interfaces and seamless user experiences across all devices.',
      route: '/Websitedesign',
    },
    {
      id: 8,
      title: 'Magazine Design',
      image: magazineImg,
      icon: <div style={iconStyle}><FaBookOpen /></div>,
      description: 'Stylish and organized magazine layouts that engage readers and convey your content with visual flair.',
      route: '/Magazine',
    },
    {
      id: 9,
      title: 'Visual Aid Design',
      image: visualAidImg,
      icon: <div style={iconStyle}><FaChartBar /></div>,
      description: 'Informative and impactful visual aid designs ideal for presentations, pitches, and educational materials.',
      route: '/VisualAid',
    },
    {
      id: 10,
      title: 'Calendar Design',
      image: calendarImg,
      icon: <div style={iconStyle}><FaCalendarAlt /></div>,
      description: 'Custom-designed calendars that combine practicality with your brand’s aesthetic for daily visibility.',
      route: '/Calender',
    },
    {
      id: 11,
      title: 'Icon Design',
      image: iconImg,
      icon: <div style={iconStyle}><FaShapes /></div>,
      description: 'Crisp, modern icon sets tailored to suit apps, websites, and digital products for intuitive UI.',
      route: '/Icon',
    },
    {
      id: 12,
      title: 'Letter Head Design',
      image: letterheadImg,
      icon: <div style={iconStyle}><FaPen /></div>,
      description: 'Build your professional identity with custom letterhead designs that reinforce brand consistency.',
      route: '/Stationary/LetterHead',
    },
    {
      id: 13,
      title: 'Envelope Design',
      image: envelopeImg,
      icon: <div style={iconStyle}><FaEnvelope /></div>,
      description: 'Branded envelope designs perfect for correspondence, invitations, and official communication.',
      route: '/Stationary/Envelope',
    },
    {
      id: 14,
      title: 'Visiting Card Design',
      image: visitingCardImg,
      icon: <div style={iconStyle}><FaIdCard /></div>,
      description: 'Sleek and professional visiting cards designed to make a strong and memorable impression.',
      route: '/Stationary/VisitingCard',
    },
    {
      id: 15,
      title: 'Certificate Design',
      image: certificateImg,
      icon: <div style={iconStyle}><FaAward /></div>,
      description: 'Elegant certificates for awards, training programs, and events that mark achievement with class.',
      route: '/Stationary/Certificate',
    },
    {
      id: 16,
      title: 'Menu Card Design',
      image: menuImg,
      icon: <div style={iconStyle}><FaUtensils /></div>,
      description: 'Attractive and functional menu card designs tailored for cafes, restaurants, and food outlets.',
      route: '/Stationary/MenuCard',
    },
  ];
  ;
   

  return (
    <div style={{ backgroundColor: "#f0f9ff" }} className="py-5">
      <SEO title="Artisticify" description="Artisticify is a design company that provides design and Digital Marketing services to businesses." />

      <Container className="mt-5">
        <div className='text-center my-5'>
          <h2 className='fw-bold' style={{ color: "#094167" }}>Creative Graphic Design & Digital Marketing Company in India</h2>
          <h4 className='py-3 fw-semibold d-flex justify-content-center text-center w-75 mx-auto'>
            Unlock Creativity with Our Comprehensive Design & Digital Marketing Solutions—All Under One Roof!
          </h4>

          <p className='text-secondary text'>
            From stunning web designs to impactful print materials and result-driven digital marketing strategies, we provide quality solutions tailored to elevate your brand.
            Since 2024, our expertise has spanned diverse industries, delivering innovative designs and strategic marketing campaigns that leave a lasting impression. Whether you need branding, marketing collateral, social media promotions, or digital assets, we ensure precision, creativity, and performance-driven results.
            Let’s bring your ideas to life with designs that captivate and marketing strategies that convert!
          </p>
        </div>

        <div className="custom-tabs-wrapper  ">
          <Tabs defaultActiveKey="digital" id="custom-tabs" className="custom-tabs" justify>
            <Tab eventKey="digital" title="Digital Marketing">
              <div className="tab-content-box">
                <Row>
                  {digitalMarketingServices.map((service) => (
                    <Col md={4} className="mt-3 mb-3" key={service.id} onClick={()=>navigate(service.route)}>
                      <div className="seo-success1 rounded">
                        <div className="increse-visi1 p-5 text-dark" id="text-block">
                          <div className="visibility1">
                            <h4 className="mt-5 fw-bold">{service.title}</h4>
                            <p className="mt-3">
                              {service.description}
                            </p>
                          </div>
                        </div>
                        <div className="overlay1" />
                        <div className="icon-heading1 d-flex flex-column align-items-center gap-3">
                          {service.icon}
                          <h4 className="fw-bold text-white">{service.title}</h4>
                        </div>
                        <img
                          src={service.image}
                          className="img-fluid seo-img1 w-100"
                          style={{ height: '350px', objectFit: 'cover' }}
                          alt={service.title}
                        />
                      </div>
                    </Col>
                  ))}
                </Row>


              </div>
            </Tab>
            <Tab eventKey="design" title="Design">
              <div className="tab-content-box">
              <Row>
  {designServices.map((service) => (
    <Col md={3} className="mt-3 mb-3" key={service.id} onClick={() => navigate(service.route)}>
      <div className="seo-success1 rounded">
        <div className="increse-visi1 p-5 text-dark" id="text-block">
          <div className="visibility1">
            <h4 className="mt-5 fw-bold">{service.title}</h4>
            <p className="mt-3">{service.description}</p>
          </div>
        </div>
        <div className="overlay1" />
        <div className="icon-heading1 d-flex flex-column align-items-center gap-3">
          {service.icon}
          <h4 className="fw-bold text-white">{service.title}</h4>
        </div>
        <img
          src={service.image}
          className="img-fluid seo-img1 w-100"
          style={{ height: '350px', objectFit: 'cover' }}
          alt={service.title}
        />
      </div>
    </Col>
  ))}
</Row>

              </div>
            </Tab>
          </Tabs>
        </div>

        <style>{`
        .custom-tabs-wrapper {
          // background: #f8f9fa;
          border-radius: 15px;
        
        }

        .custom-tabs .nav-item {
          margin-right: 15px;
        }

        .custom-tabs .nav-link {
          border: none;
          color: #094167;
          font-weight: 600;
          background-color: transparent;
          border-radius: 12px;
          padding: 12px 20px;
          transition: background-color 0.3s, color 0.3s;
        }

        .custom-tabs .nav-link:hover {
          background-color: rgba(9, 65, 103, 0.1);
          color: #094167;
        }

        .custom-tabs .nav-link.active {
          background-color: #13357b;
          color: #fff;
        }

        .tab-content-box {
          // background-color: white;
          margin-top: 20px;
          border-radius: 10px;
        }

        .tab-content-box h3 {
          color: #094167;
        }
      `}</style>
      </Container>
      {/* <Container className="px-3 mx-auto">
        <h1 className="text-center py-2">Our Services</h1>
        <h2 className="text-center pb-5">Take Your Business to the Next Level</h2>
        
        <Row className="g-4 justify-content-center">
          <Col xs={12} sm={6} md={6} lg={5} className="ourWork bg-white rounded-3 p-4 mx-3">
            <FaBullhorn className="fs-2 my-2 blue" />
            <h4 className="my-2">Advertisement Design Solutions</h4>
            <p>
              Looking to make your brand shine? Artisticify specializes in creating eye-catching digital ads, ensuring top-quality results at affordable prices.
            </p>
          </Col>
          <Col xs={12} sm={6} md={6} lg={5} className="ourWork bg-white rounded-3 p-4 mx-3">
            <MdDesignServices className="fs-2 my-2 blue" />
            <h4 className="my-2">Custom Logo Design Services</h4>
            <p>
              Make the right first impression with a logo that reflects your business’s identity. Upgrade or start fresh with Artisticify’s custom logo designs!
            </p>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center mt-4">
          <Col xs={12} sm={6} md={6} lg={5} className="ourWork bg-white rounded-3 p-4 mx-3">
            <MdCorporateFare className="fs-2 my-2 blue" />
            <h4 className="my-2">Custom Corporate Identity Experts</h4>
            <p>
              Artisticify provides brand identity design services for startups and enterprises to create a unique, lasting impression.
            </p>
          </Col>
          <Col xs={12} sm={6} md={6} lg={5} className="ourWork bg-white rounded-3 p-4 mx-3">
            <PiBandaidsFill className="fs-2 my-2 blue" />
            <h4 className="my-2">Innovative Pharmaceutical Design</h4>
            <p>
              We specialize in creating impactful visual aids and ads for pharmaceutical companies, helping them stand out.
            </p>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default OurService;
