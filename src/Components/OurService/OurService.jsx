import { FaBullhorn } from "react-icons/fa6";
import { MdDesignServices, MdCorporateFare } from "react-icons/md";
import { PiBandaidsFill } from "react-icons/pi";
import { Col, Container, Row } from "react-bootstrap";
import { SEO } from '../SEO';

function OurService() {
  return (
    <div style={{ backgroundColor: "#f0f9ff" }} className="py-5">
      <SEO title="Artisticify" description="Artisticify is a design company that provides design and Digital Marketing services to businesses." />
      <Container className="px-3 mx-auto">
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
      </Container>
    </div>
  );
}

export default OurService;
