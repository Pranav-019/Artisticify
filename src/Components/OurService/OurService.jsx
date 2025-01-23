import { FaBullhorn } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { MdCorporateFare } from "react-icons/md";
import { PiBandaidsFill } from "react-icons/pi";
import { MdOutlineMenuBook } from "react-icons/md";
import { Col, Container, Row } from "react-bootstrap";
function OurService() {
  return (
    <div style={{ backgroundColor: "#f0f9ff" }} className="py-5">
      <h1 className="text-center py-2">Our Services</h1>
      <h2 className="text-center pb-5">Take Your Business to the Next Level</h2>
      <Container>
        <Row className="gap-4">
          <Col className="ourWork bg-white rounded rounded-3">
            <div className="p-4 ">
              <FaBullhorn className="fs-2 my-2 blue" />
              <h4 className="my-2">Advertisement Design Solutions</h4>
              <p>
              Looking to make your brand shine? Artisticify specializes in
                creating eye-catching digital ads, ensuring top-quality results
                at affordable prices. Let our expert team bring your vision to
                life using the latest design tools, helping your business stand
                out and capture attention!
              </p>
            </div>
          </Col>
          <Col  className="ourWork bg-white rounded rounded-3">
            <div className="p-4">
              <MdDesignServices className="fs-2 my-2 blue" />
              <h4 className="my-2">Custom Logo Design Services</h4>
              <p>
              Make the right first impression with a logo that reflects your
                business&rsquo;s identity. Whether you&rsquo;re a startup or an
                established enterprise, Artisticify creates custom logos that
                speak to your success. If you’re ready to upgrade your old logo
                or start fresh, get in touch with us to redefine your brand’s
                image!
              </p>
            </div>
          </Col>
        </Row>

        <Row className="gap-4 mt-4">
          <Col  className="ourWork bg-white rounded rounded-3">
            <div className="p-4">
              <MdOutlineMenuBook className="fs-2 my-2 blue" />
              <h4 className="my-2">Creative Brochure Design Agency</h4>
              <p>
              While digital marketing is essential, offline brochures still
                play a key role in reaching clients and promoting your business
                locally. Artisticify creates stunning brochures that capture
                attention and effectively communicate your brand&rsquo;s
                message. Let us help you create the perfect marketing material
                for your business!
              </p>
            </div>
          </Col>
          <Col  className="ourWork bg-white rounded rounded-3">
            <div className="p-4">
              <FaLaptopCode className="fs-2 my-2 blue" />
              <h4 className="my-2">Advertisement Design Solutions</h4>
              <p>
              Already have a website and ad campaigns running? Let Artisticify
                take your designs to the next level! Whether it&rsquo;s
                customizing your theme, or creating stunning banners and on-page
                graphics, we&rsquo;re here to bring your vision to life. Our
                skilled design team, will deliver results even better than you
                imagined!
              </p>
            </div>
          </Col>
        </Row>

        <Row className="gap-4 mt-4">
          <Col  className="ourWork bg-white rounded rounded-3">
            <div className="p-4">
              <MdCorporateFare className="fs-2 my-2 blue" />
              <h4 className="my-2">Custom Corporate Identity Experts</h4>
              <p>
              Artisticify offers a wide range of creative Brand Identity
                Design services to help your business stand out. Whether
                you&rsquo;re a small startup or a large corporation, we
                understand that a strong brand is key to success. We create
                unique designs that elevate your brand&rsquo;s identity and make
                a lasting impression!
              </p>
            </div>
          </Col>
          <Col  className="ourWork bg-white rounded rounded-3">
            <div className="p-4">
              <PiBandaidsFill className="fs-2 my-2 blue" />
              <h4 className="my-2">Innovative Pharmaceutical Design Company</h4>
              <p>
              Artisticify specializes in creating illustrative and informative
                graphics for the pharmaceutical industry. Give your medicine a
                captivating design and engaging tagline to stand out. With
                experience working with big and small pharma companies, we craft
                impactful ads , visual aids to help you connect with clients!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OurService;
