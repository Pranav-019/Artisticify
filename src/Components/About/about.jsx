import './about.css';
import { Col, Container, Row } from 'react-bootstrap';
import Why from "../About/aaa.png";
import MainImg from '../../assets/postive-caring-relationships-teachers 1.png' 

const About = () => {
  return (
    <div className="">
      <div className='about'>
  <div className='image-container'>
    <img src={MainImg} className='main-about img-fluid '/>
    <div className='overlay-text overlay-text11'>
      <h1 className='fw-bold display-4 pb-2 text-start text-md-start text-center ms-md-5 ps-md-5'>About Artisticify Branding</h1>
      <h3 className='lead  fw-bold text-md-start text-center ms-md-5 ps-md-5'>Logo, Graphics, Brochures and much more ...</h3>
    </div>
  </div>
</div>


      <div className="d-flex justify-content-center align-items-center ">
        <div className="text-center p-5 my-4 w-75">
          <h2 className='fw-bold extra-bold animate-heading '>Who we are.</h2>
          <div className="blue-line"></div>

          <p className='text-secondary pt-2'>
            On December 11, 2024, Artisticify Branding came into existence as a bold and ambitious agency. Despite starting with minimal resources and infrastructure, it quickly established itself by consistently surpassing expectations and building a distinctive identity. The agency&rsquo;s focus has always been on delivering innovative and impactful creative solutions, driven by a deep commitment to brand excellence and a visionary approach to design and strategy.
          </p>


        </div>


      </div>

      <div className="d-flex justify-content-center align-items-center ">

        <Container>
          <Row className='mb-5'>
            <Col className=''>
              <div className='about-col p-5 h-100'>
                <h2 className='text-center pb-2'>Our History</h2>
                <p className='text-start'>
                  Founded in 2024, our digital marketing company started with a simple vision: to stand out as the leading design provider in Pune. Today, we proudly serve clients with innovative and high-quality design solutions, tailored to fit any budget. Whether you are looking for comprehensive brand development, ongoing monthly design services, or large-scale hoarding designs, we are dedicated to delivering exceptional results for businesses of all sizes. Our commitment is to provide unmatched service and creative excellence at every stage.
                </p>
              </div>
            </Col>
            <Col>
              <div className='about-col p-5 h-100'>
                <h2 className='text-center pb-2'>Our Present</h2>
                <p>
                  Established in December 2024, we quickly set our sights on becoming the best in Pune and have proudly achieved recognition as one of the top design companies in Maharastra. Along our journey, we wholeheartedly embraced the Make in India initiative, integrating it into our core values. Today, we take pride in contributing to this movement by ensuring that most of our team and products are locally sourced and crafted by hardworking Indian talent.
                </p>
              </div>
            </Col>

            <Col>
              <div className='about-col p-5 h-100'>
                <h2 className='text-center pb-2'>Our Future</h2>
                <p>
                  The future is unpredictable, but one thing is certain—digital marketing will be crucial in the years to come. While we aim to be the best globally, we remain rooted in the Make in India mission. With India-made products and services, we strive to serve the entire world. Our commitment to excellence and customer satisfaction drives us forward. Together, we can build impactful and innovative solutions. We invite you to join us in shaping a dynamic digital future!
                </p>
              </div>
            </Col>

          </Row>
        </Container>



      </div>

      <Container>
        <div className='text-center'>
          <div className=' '>
            <h2 className="fw-bold extra-bold pb-2 animate-heading mt-5">Why to choose US?</h2>
            <div className="blue-line"></div>
          </div>
          <p className=' text-secondary pt-2'>What distinguishes Artisticify Agency from other design firms is our commitment to outstanding customer service and rapid response times (we won’t keep you waiting for weeks). We deliver fast results and maintain a straightforward, honest approach to all our projects.Our pricing is also highly reasonable, more affordable than most reputable graphic design studios. While we’re not the cheapest, we provide top-quality, flawless work with no hidden fees and a transparent pricing structure, ensuring you get the best value.</p>
        </div>
      </Container>

      <Container>
        <Row className='my-5'>
          <Col md={8}>
            <div className='p-5 my-5 '>
              <p className='text-secondary'>              Komal Shingare - Creative Head, Artisticify Branding
              </p>

              <p className='text-secondary'>
                Welcome to Artisticify Branding! As the proud Creative Head of this design and development firm, I’ve had the incredible privilege of building a company that has evolved into a complete one-stop solution for all your graphic design needs.

                Over the years, our team has grown into a network of talented professionals specializing in graphic arts, website design, and content creation. The only reason we stand apart is the promise of quality and our &quot;Made in India&quot; culture. We only engage or hire talent residing in India and make sure each project delivers that sense of skill and artistry India is renowned for.
                At Artisticify Branding, we strive hard for something way more awesome. Let us bring that website you had envisioned or content, perhaps help in your graphics designs or perhaps everything into one - with no time lost.


              </p>
              <p className='text-secondary'> Let&rsquo;s make it incredible!</p>
            </div>

          </Col>
          <Col md={4}>
            <div>
              <img src={Why} alt="Polygon Image"  className='why'/>
            </div>


          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;