import "./our_work.css";
import MainImg from '../../assets/our work.jpg';
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import { SEO } from '../SEO';
const OurWork = () => {
  const [works, setWorks] = useState([]);

  const ourwork = [
    {
      h1: "Innovative and Personalized Logo Design Services in India",
      p1: "A logo serves as the first impression of your business, instantly reflecting your brand’s essence. As a top logo design company in India, our skilled designers specialize in creating impactful logos that leave a lasting impression and help establish a distinct identity.\n\nWe cater to a wide range of industries, including real estate, finance, food and hospitality, IT, fashion and apparel, and many others.\n\nOur logo design services come in various packages tailored to meet the unique needs of every business, ensuring you get the perfect logo to represent your brand.",
    },
    {
      h2: "Creative Brochure Design Services in India",
      p2: "A brochure is more than just marketing—it’s your brand’s legacy in print. It acts as a physical manifestation of your online presence, with each word and design element chosen to represent your brand’s finest qualities. Brochure design is not about pushing a product; it’s about positioning your brand for success.As a leading brochure design company in India, we provide a holistic range of design services. Our expertise includes creating brochures and flyers for a variety of purposes, including marketing and sales. For us, effective brochure design requires both creativity and craftsmanship.We offer brochure design services through different packages, catering to the diverse needs of businesses across all industries.",
    },
    {
      h3: "Custom Flyer Design Solutions for Every Business Need in India.",
      p3: "A flyer is your brand’s message in a nutshell—designed to capture attention and make an impact. It’s not just about promotion; it’s about connecting with your audience!With creative designs and a focus on clear communication, we ensure your flyer stands out.As a flyer design company in India, we offer a range of services from promotional to event flyers, ensuring each design reflects your brand’s uniqueness. Flyer design is about clarity, creativity, and impact.Our flyer design packages cater to every business need, big or small.",
    },
    {
      h4: "Stand Out in the Market with Unique and Creative Packaging Designs Across India",
      p4: "Here’s a shorter version for your Packaging Design Services:Packaging design is more than just a container—it’s your brand’s first impression. It grabs attention, tells a story, and communicates your product’s value.As a top packaging design company in India, we create innovative, functional designs that make your product stand out. From concept to final design, our solutions are tailored to reflect your brand and engage your customers.Our packaging design services come in various packages to suit businesses of all sizes and industries.",
    },
    {
      h5: "Elevate Your User Experience with Creative and Intuitive Icon Designs",
      p5: "Icons are the visual language of your brand—simple, yet powerful. They convey meaning at a glance and play a crucial role in enhancing user experience and brand identity.As a leading icon design company in India, we specialize in creating unique and memorable icons that perfectly represent your brand’s essence. Whether for your website, app, or branding materials, our designs are tailored to ensure clarity, simplicity, and visual impact.Our icon design services are available in flexible packages to suit the needs of businesses across various industries, big or small.",
    },
    {
      h6: "Professional UI/UX Design Packages in India to Improve Usability and Aesthetic Appeal",
      p6: "UI/UX design is the heart of user-centered digital experiences. A great design isn’t just about how something looks, but how it feels and functions. It’s about making every interaction seamless, intuitive, and enjoyable.As a top UI/UX design company in India, we specialize in crafting user interfaces and experiences that are both visually appealing and highly functional. Our UI/UX design services are offered in customizable packages to meet the unique needs of businesses, ensuring that your digital products provide optimal user satisfaction and performance.",
    },
    {
      h7: "Unique Stationery Design Packages in India to Elevate Your Brand’s Corporate Identity.",
      p7: "Stationery is a reflection of your brand's professionalism. From business cards to letterheads, every piece matters.As a top stationery design company in India, we create custom designs that elevate your brand identity. Whether it's business cards, letterheads, or envelopes, we ensure your stationery stands out.Our stationery design packages cater to businesses of all sizes, delivering consistent and high-quality designs.",
    },
    {
      h8: "Magazine Design Packages in India Crafted to Reflect Your Brand’s Personality and Vision",
      p8: "Magazine design is about storytelling—visually. It’s the art of blending design with content to create an engaging, cohesive experience for readers.As a top magazine design company in India, we specialize in creating layouts that are both aesthetically pleasing and easy to navigate. From cover design to internal spreads, we ensure your magazine captures attention and keeps readers engaged.Our magazine design packages are flexible, catering to a variety of styles and industries, ensuring your publication stands out on every page.",
    },
    {
      h9: "Impactful Visual Aid Design Packages for Clear, Memorable, and Persuasive Presentations.",
      p9: "Visual aids simplify complex information and make your message more engaging. Whether for presentations, education, or marketing, effective visuals make a difference.As a top visual aid design company in India, we create impactful infographics, charts, and diagrams that communicate clearly and effectively.Our visual aid design packages are tailored to meet the needs of businesses, ensuring your content is both informative and visually engaging.",
    },
    {
      h10: "Eye-catching Poster Designs in India That Capture Attention and Deliver Impact",
      p10: "A poster is a visual statement—it’s designed to grab attention, communicate a message, and leave a lasting impression.As a leading poster design company in India, we create striking, effective posters that align with your brand and purpose. Whether for an event, promotion, or advertisement, our designs ensure that your message stands out.Our poster design packages offer customized solutions for businesses of all sizes, ensuring your posters are impactful and memorable.",
    },
  ];

  const fetchOurWork = async () => {
    try {
      const response = await fetch("https://artisticify-backend.vercel.app/api/ourwork/fetch");
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Our work data:", data);
  
      // Assuming the API sends a 'data' field for the works array
      if (data && data.data && Array.isArray(data.data)) {
        setWorks(data.data); // Update the state with fetched works
      } else {
        console.warn("Unexpected API response structure:", data);
        setWorks([]); // Set empty if unexpected structure
      }
    } catch (error) {
      console.error("Error fetching Our Work data:", error);
      setWorks([]); // Fallback to empty array if fetch fails
    }
  };
  

  useEffect(() => {
    fetchOurWork();
  }, []);

  return (
    // <div>
    //   <div className="ourwork"></div>
    //   <Container>
    //     <div className="blue1 text-white p-3 w-50 logo-package">
    //       <h1 className="fw-bold">Logo Design Package</h1>
    //     </div>
    //     <Row className="mb-5 pb-5">
    //       <Col md={6}>
    //         <div className="our-content px-5">
    //           <h3
    //             className="mb-3"
    //             style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
    //           >
    //             {ourwork[0].h1}
    //           </h3>
    //           <p className="text-secondary text">{ourwork[0].p1}</p>
    //         </div>
    //       </Col>
    //       <Col md={6}>
    //         {works.length > 0 ? (
    //            <Carousel>
    //            {works
    //              .filter((work) => work.category === "logo") // Only show items where category is 'logo'
    //              .map((work) => (
    //                <Carousel.Item
    //                  key={work.id}
    //                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
    //                >
    //                  {work.images && work.images.length > 0 && (
    //                    <img
    //                      className="d-block our-img"
    //                      src={`data:${work.images[0].contentType};base64,${work.images[0].data}`}
    //                      alt={work.category}
    //                      
    //                    />
    //                  )}
    //                </Carousel.Item>
    //              ))}
    //          </Carousel>
    //         ) : (
    //           <p>Loading images or no images available...</p>
    //         )}
    //       </Col>
    //     </Row>
    //     <Row className="mb-5 pb-5">

    //       <Col md={6}>
    //         {works.length > 0 ? (
    //            <Carousel>
    //            {works
    //              .filter((work) => work.category === "brochure") // Only show items where category is 'logo'
    //              .map((work) => (
    //                <Carousel.Item
    //                  key={work.id}
    //                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
    //                >
    //                  {work.images && work.images.length > 0 && (
    //                    <img
    //                      className="d-block our-img"
    //                      src={`data:${work.images[0].contentType};base64,${work.images[0].data}`}
    //                      alt={work.category}
    //                      
    //                    />
    //                  )}
    //                </Carousel.Item>
    //              ))}
    //          </Carousel>
    //         ) : (
    //           <p>Loading images or no images available...</p>
    //         )}
    //       </Col>
    //       <Col md={6}>
    //         <div className="our-content px-5">
    //           <h3
    //             className="mb-3"
    //             style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
    //           >
    //             {ourwork[0].h1}
    //           </h3>
    //           <p className="text-secondary text">{ourwork[0].p1}</p>
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>

    // </div>
    <div>
    <SEO title="Our Work" description="Artisticify is a design company that provides design and Digital Marketing services to businesses." />
    <div className="text">
      
  <div className="image-container">
    <img src={MainImg} className="main-ourwork img-fluid" />
    <div className="mm overlay-text11">
      <h1 className="fw-bold extra-bold pb-2 text-start overlay-text11">
        Our Work...
      </h1>
      <h3>
        Stunning designs that make your brand unforgettable!
      </h3>
    </div>
  </div>
</div>

      <div className="d-flex justify-content-center align-items-center">
        <div className="text-center p-5 my-4 w-75 ">
          <h1 className="fw-bold extra-bold heading my-3">
            Graphic Design Packages
          </h1>
          <h4 className="blue my-3">
            Customizable Packages to Match Your Budget
          </h4>
          <p className="text-secondary text pt-2">
            Our team of expert designers is dedicated to bringing your vision to
            life! Every design will be meticulously tailored to your exact
            requirements, ensuring 100% personal attention and a unique touch
            that meets your needs perfectly. Whether you have a small or large
            project, we offer flexible options that fit your budget and exceed
            your expectations! No matter the scope or scale, we promise
            high-quality results that align with your goals. Let us help you
            create something amazing that stands out!
          </p>
        </div>
      </div>

      <Container>
        <div className="blue1 text-white p-3 w-50 logo-package">
          <h1 className="fw-bold">Logo Design Package</h1>
        </div>
        <Row className="mb-5 pb-5">
          <Col md={6} className="my-auto">
            <div className="our-content px-5">
              <h3
                className="mb-3"
                style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
              >
                {ourwork[0].h1}
              </h3>
              <p className="text-secondary text text">{ourwork[0].p1}</p>
            </div>
          </Col>
          <Col md={6}>
          {works.length > 0 ? (
               <Carousel>
               {works
                 .filter((work) => work.category === "logo") // Filter by category 'logo'
                 .map((work) =>
                   work.images.map((imageUrl, index) => (
                     <Carousel.Item
                       key={`${work._id}-${index}`} // Use `_id` from your API as the unique identifier
                       style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                     >
                       <div style={{ 
              width: "100%",
              paddingTop: "75%", // 4:3 aspect ratio - adjust as needed
              position: "relative" 
            }}>
              <img
                className="d-block our-img"
                src={imageUrl}
                alt={`${work.category}-${index}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  backgroundColor: "#f8f9fa" // Light background for transparent images
                }}
              />
            </div>
                     </Carousel.Item>
                   ))
                 )}
             </Carousel>
             
            ) : (
              <p>Loading images or no images available...</p>
            )}
          </Col>
        </Row>
      </Container>
      <Container className="">
        <div className="blue1 text-white p-3 w-50 logo-package ">
          <h1 className="fw-bold">Brochure Design Package</h1>
        </div>
        <Row className="mb-5 pb-5">
          <Col md={6}>
          {works.length > 0 ? (
               <Carousel>
               {works
                 .filter((work) => work.category === "brochure") // Filter by category 'logo'
                 .map((work) =>
                   work.images.map((imageUrl, index) => (
                     <Carousel.Item
                       key={`${work._id}-${index}`} // Use `_id` from your API as the unique identifier
                       style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                     >
                       <div style={{ 
              width: "100%",
              paddingTop: "75%", // 4:3 aspect ratio - adjust as needed
              position: "relative" 
            }}>
              <img
                className="d-block our-img"
                src={imageUrl}
                alt={`${work.category}-${index}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  backgroundColor: "#f8f9fa" // Light background for transparent images
                }}
              />
            </div>
                     </Carousel.Item>
                   ))
                 )}
             </Carousel>
            ) : (
              <p>Loading images or no images available...</p>
            )}
          </Col>
          <Col md={6} className="my-auto">
            <div className="our-content px-5">
              <h3
                className="mb-3"
                style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
              >
                {ourwork[1].h2}
              </h3>
              <p className="text-secondary text">{ourwork[1].p2}</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <div className="blue1 text-white p-3 w-50 logo-package">
          <h1 className="fw-bold">Flyer Design Package</h1>
        </div>
        <Row className="mb-5 pb-5">
          <Col md={6} className="my-auto">
            <div className="our-content px-5">
              <h3
                className="mb-3"
                style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
              >
                {ourwork[2].h3}
              </h3>
              <p className="text-secondary text">{ourwork[2].p3}</p>
            </div>
          </Col>
          <Col md={6}>
          {works.length > 0 ? (
               <Carousel>
               {works
                 .filter((work) => work.category === "flyer") // Filter by category 'logo'
                 .map((work) =>
                   work.images.map((imageUrl, index) => (
                     <Carousel.Item
                       key={`${work._id}-${index}`} // Use `_id` from your API as the unique identifier
                       style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                     >
                        <div style={{ 
              width: "100%",
              paddingTop: "75%", // 4:3 aspect ratio - adjust as needed
              position: "relative" 
            }}>
              <img
                className="d-block our-img"
                src={imageUrl}
                alt={`${work.category}-${index}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  backgroundColor: "#f8f9fa" // Light background for transparent images
                }}
              />
            </div>
                     </Carousel.Item>
                   ))
                 )}
             </Carousel>
            ) : (
              <p>Loading images or no images available...</p>
            )}
          </Col>
        </Row>
      </Container>
      <Container className="">
        <div className="blue1 text-white p-3 w-50 logo-package ">
          <h1 className="fw-bold">Packaging Design </h1>
        </div>
        <Row className="mb-5 pb-5">
          <Col md={6}>
          {works.length > 0 ? (
               <Carousel>
               {works
                 .filter((work) => work.category === "packaging") // Filter by category 'logo'
                 .map((work) =>
                   work.images.map((imageUrl, index) => (
                     <Carousel.Item
                       key={`${work._id}-${index}`} // Use `_id` from your API as the unique identifier
                       style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                     >
                       <div style={{ 
              width: "100%",
              paddingTop: "75%", // 4:3 aspect ratio - adjust as needed
              position: "relative" 
            }}>
              <img
                className="d-block our-img"
                src={imageUrl}
                alt={`${work.category}-${index}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  backgroundColor: "#f8f9fa" // Light background for transparent images
                }}
              />
            </div>
                     </Carousel.Item>
                   ))
                 )}
             </Carousel>
            ) : (
              <p>Loading images or no images available...</p>
            )}
          </Col>
          <Col md={6} className="my-auto">
            <div className="our-content px-5">
              <h3
                className="mb-3"
                style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
              >
                {ourwork[3].h4}
              </h3>
              <p className="text-secondary text">{ourwork[3].p4}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="blue1 text-white p-3 w-50 logo-package">
          <h1 className="fw-bold">Icon Design Package</h1>
        </div>
        <Row className="mb-5 pb-5">
          <Col md={6} className="my-auto">
            <div className="our-content px-5">
              <h3
                className="mb-3"
                style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
              >
                {ourwork[4].h5}
              </h3>
              <p className="text-secondary text">{ourwork[4].p5}</p>
            </div>
          </Col>
          <Col md={6}>
          {works.length > 0 ? (
              <Carousel>
              {works
                .filter((work) => work.category === "icon")
                .map((work) =>
                  work.images.map((imageUrl, index) => (
                    <Carousel.Item
                      key={`${work._id}-${index}`} // Use `_id` from your API as the unique identifier
                      style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                    >
                       <div style={{ 
              width: "100%",
              paddingTop: "75%", // 4:3 aspect ratio - adjust as needed
              position: "relative" 
            }}>
              <img
                className="d-block our-img"
                src={imageUrl}
                alt={`${work.category}-${index}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  backgroundColor: "#f8f9fa" // Light background for transparent images
                }}
              />
            </div>
                    </Carousel.Item>
                  ))
                )}
            </Carousel>
            ) : (
              <p>Loading images or no images available...</p>
            )}
          </Col>
        </Row>
      </Container>
      <Container className="">
        <div className="blue1 text-white p-3 w-50 logo-package ">
          <h1 className="fw-bold">UI/UX Design Package</h1>
        </div>
        <Row className="mb-5 pb-5">
          <Col md={6}>
          {works.length > 0 ? (
               <Carousel>
               {works
                 .filter((work) => work.category === "ui/ux") // Filter by category 'logo'
                 .map((work) =>
                   work.images.map((imageUrl, index) => (
                     <Carousel.Item
                       key={`${work._id}-${index}`} // Use `_id` from your API as the unique identifier
                       style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                     >
                       <div style={{ 
              width: "100%",
              paddingTop: "75%", // 4:3 aspect ratio - adjust as needed
              position: "relative" 
            }}>
              <img
                className="d-block our-img"
                src={imageUrl}
                alt={`${work.category}-${index}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  backgroundColor: "#f8f9fa" // Light background for transparent images
                }}
              />
            </div>
                     </Carousel.Item>
                   ))
                 )}
             </Carousel>
            ) : (
              <p>Loading images or no images available...</p>
            )}
          </Col>
          <Col md={6} className="my-auto">
            <div className="our-content px-5">
              <h3
                className="mb-3"
                style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
              >
                {ourwork[5].h6}
              </h3>
              <p className="text-secondary text">{ourwork[5].p6}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="blue1 text-white p-3 w-50 logo-package">
          <h1 className="fw-bold">Stationary Design Package</h1>
        </div>
        <Row className="mb-5 pb-5">
          <Col md={6} className="my-auto">
            <div className="our-content px-5">
              <h3
                className="mb-3"
                style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
              >
                {ourwork[6].h7}
              </h3>
              <p className="text-secondary text">{ourwork[6].p7}</p>
            </div>
          </Col>
          <Col md={6}>
          {works.length > 0 ? (
               <Carousel>
               {works
                 .filter((work) => work.category === "stationary") // Filter by category 'logo'
                 .map((work) =>
                   work.images.map((imageUrl, index) => (
                     <Carousel.Item
                       key={`${work._id}-${index}`} // Use `_id` from your API as the unique identifier
                       style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                     >
                       <div style={{ 
              width: "100%",
              paddingTop: "75%", // 4:3 aspect ratio - adjust as needed
              position: "relative" 
            }}>
              <img
                className="d-block our-img"
                src={imageUrl}
                alt={`${work.category}-${index}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  backgroundColor: "#f8f9fa" // Light background for transparent images
                }}
              />
            </div>
                     </Carousel.Item>
                   ))
                 )}
             </Carousel>
            ) : (
              <p>Loading images or no images available...</p>
            )}
          </Col>
        </Row>
      </Container>
      <Container className="">
        <div className="blue1 text-white p-3 w-50 logo-package ">
          <h1 className="fw-bold">Magazine Add Package</h1>
        </div>
        <Row className="mb-5 pb-5">
          <Col md={6}>
          {works.length > 0 ? (
               <Carousel>
               {works
                 .filter((work) => work.category === "magazine") // Filter by category 'logo'
                 .map((work) =>
                   work.images.map((imageUrl, index) => (
                     <Carousel.Item
                       key={`${work._id}-${index}`} // Use `_id` from your API as the unique identifier
                       style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                     >
                       <div style={{ 
              width: "100%",
              paddingTop: "75%", // 4:3 aspect ratio - adjust as needed
              position: "relative" 
            }}>
              <img
                className="d-block our-img"
                src={imageUrl}
                alt={`${work.category}-${index}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  backgroundColor: "#f8f9fa" // Light background for transparent images
                }}
              />
            </div>
                     </Carousel.Item>
                   ))
                 )}
             </Carousel>
            ) : (
              <p>Loading images or no images available...</p>
            )}
          </Col>
          <Col md={6} className="my-auto">
            <div className="our-content px-5">
              <h3
                className="mb-3"
                style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
              >
                {ourwork[7].h8}
              </h3>
              <p className="text-secondary text">{ourwork[7].p8}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="">
        <div className="blue1 text-white p-3 w-50 logo-package ">
          <h1 className="fw-bold">Visual Aid Package</h1>
        </div>
        <Row className="mb-5 pb-5">
          <Col md={6} className="my-auto">
            <div className="our-content px-5">
              <h3
                className="mb-3"
                style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
              >
                {ourwork[8].h9}
              </h3>
              <p className="text-secondary text">{ourwork[8].p9}</p>
            </div>
          </Col>
          <Col md={6}>
          {works.length > 0 ? (
               <Carousel>
               {works
                 .filter((work) => work.category === "visual aid") // Filter by category 'logo'
                 .map((work) =>
                   work.images.map((imageUrl, index) => (
                     <Carousel.Item
                       key={`${work._id}-${index}`} // Use `_id` from your API as the unique identifier
                       style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                     >
                       <div style={{ 
              width: "100%",
              paddingTop: "75%", // 4:3 aspect ratio - adjust as needed
              position: "relative" 
            }}>
              <img
                className="d-block our-img"
                src={imageUrl}
                alt={`${work.category}-${index}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  backgroundColor: "#f8f9fa" // Light background for transparent images
                }}
              />
            </div>
                     </Carousel.Item>
                   ))
                 )}
             </Carousel>
            ) : (
              <p>Loading images or no images available...</p>
            )}
          </Col>
        </Row>
      </Container>
      <Container className="">
        <div className="blue1 text-white p-3 w-50 logo-package ">
          <h1 className="fw-bold">Poster Package</h1>
        </div>
        <Row className="mb-5 pb-5">
          <Col md={6}>
          {works.length > 0 ? (
              <Carousel>
              {works
                .filter((work) => work.category === "poster") // Filter by category 'logo'
                .map((work) =>
                  work.images.map((imageUrl, index) => (
                    <Carousel.Item
                      key={`${work._id}-${index}`} // Use `_id` from your API as the unique identifier
                      style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                    >
                      
                      <div style={{ 
              width: "100%",
              paddingTop: "75%", // 4:3 aspect ratio - adjust as needed
              position: "relative" 
            }}>
              <img
                className="d-block our-img"
                src={imageUrl}
                alt={`${work.category}-${index}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  backgroundColor: "#f8f9fa" // Light background for transparent images
                }}
              />
            </div>
                    </Carousel.Item>
                  ))
                )}
            </Carousel>
            ) : (
              <p>Loading images or no images available...</p>
            )}
          </Col>
          <Col md={6} className="my-auto">
            <div className="our-content px-5">
              <h3
                className="mb-3"
                style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
              >
                {ourwork[9].h10}
              </h3>
              <p className="text-secondary text ">{ourwork[9].p10}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurWork;
