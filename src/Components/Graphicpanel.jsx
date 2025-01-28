import { Col, Container, Row } from 'react-bootstrap'
import graphic from '../assets/Designer girl-cuate (1).png'
import graphic1 from '../assets/Social networking-cuate (1).png'
import graphic2 from '../assets/UI-UX design-amico (1).png'


function Graphicpanel() {
  return (
    <div className='text'>
      <Container className='my-5'>

        <div
          className="border-top border-bottom"
          style={{
            borderTopWidth: "16px", // Increase top border thickness
            borderBottomWidth: "16px", // Increase bottom border thickness
            borderColor: "#094167", // Set the border color
            marginTop: "20px",
            width: "100%",
            height: "5px"
          }}
        ></div>

      </Container>
      <Container>
        <Row className='w-100'>
          <Col md={3} className='fade-in'>
            <div>
              <img
                src={graphic}
                className="animated-image img-fluid"
                style={{ width: '300px' }}
              />
            </div>
          </Col>
          <Col className='fade-in'>
            <div className=''>
              <h4 className='pt-5 fw-bold'>Graphic Design</h4>
              <h4 className='py-2 blue'>&quot;A Picture Is Worth More Than Words—We Capture That Power.&quot;</h4>
              <p>
                Build a brand that connects with your audience. We create unique logos and complete identity systems that reflect your business essence. Our designs ensure consistency across all platforms, boosting recognition and trust. Whether you&rsquo;re a startup or an established brand, we craft visual stories that engage your customers and drive success. Let’s bring your vision to life.
              </p>
            </div>
          </Col>
        </Row>

        <hr />
        <Row className='w-100'>
          <Col className='fade-in'>
            <div className=''>
              <h4 className='pt-5 fw-bold'>Digital Marketing</h4>
              <h4 className='py-2 blue'>&quot;Good Is Just the Beginning; Better Is the Goal.&quot;</h4>
              <p>

                Boost your brand’s presence with strategies that deliver real impact. We craft engaging content and powerful campaigns tailored to your audience, ensuring your brand stands out. From social media to SEO and online ads, we drive meaningful interactions that build loyalty and achieve measurable results. Let’s elevate your brand in the digital world.
              </p>
            </div>
          </Col>
          <Col md={3} className='fade-in'>
            <div>
              <img src={graphic1} className="animated-image img-fluid" style={{ width: '300px' }} />
            </div>
          </Col>
        </Row>

        <hr />
        <Row className='w-100'>
          <Col md={3} className='fade-in'>
            <div>
              <img src={graphic2} className="animated-image img-fluid" style={{ width: '300px' }} />
            </div>
          </Col>
          <Col className='fade-in'>
            <div className=''>
              <h2 className='pt-5 fw-bold'>UI /UX Design</h2>
              <h4 className='py-2 blue'>&quot;We believe that if you can think it, there’s an app for it—and we’re here to create it.&quot;</h4>
              <p>
                We’re excited to offer innovative UI/UX design solutions that merge creativity with technology, providing you with
                a seamless and intuitive user experience. Whether you&rsquo;re looking to build a new app for your business or redesign
                an existing one, we’re here to turn your vision into reality. With our expertise in crafting dynamic, user-friendly
                designs, we ensure that your app stands out and meets the needs of your audience. Let us help you create an app that
                enhances your business’s potential.
              </p>
            </div>
          </Col>
        </Row>

        <hr />
      </Container>
    </div>
  )
}

export default Graphicpanel