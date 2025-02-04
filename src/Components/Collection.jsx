import { Col, Container, Row } from "react-bootstrap"
import logo1 from '../assets/visiting card.jpg' 
import logo2 from '../assets/Visual Aid 1.jpeg' 
import logo3 from '../assets/icon 1.jpeg' 
import logo4 from '../assets/icon.jpeg' 
import logo5 from '../assets/ui 1.jpg' 
import logo6 from '../assets/Calendar.jpeg' 
import logo7 from '../assets/ui.jpg' 
import logo8 from '../assets/magazine 1.jpg' 
import logo9 from '../assets/flyer.jpg' 
import logo10 from '../assets/brochure.jpg' 
import logo11 from '../assets/2025 Calendar Design - Parves Mosharof.jpeg' 
import logo12 from '../assets/brochure 1.jpg' 
import logo13 from '../assets/visiting card.jpg' 
const images = [
  { src: logo1, alt: "Visiting Card 1" },
  { src: logo2, alt: "Visual Aid 1" },
  { src: logo3, alt: "Icon 1" },
  { src: logo4, alt: "Visiting Card 2" },
  { src: logo5, alt: "UI Design 1" },
  { src: logo6, alt: "Visiting Card 3" },
  { src: logo7, alt: "Visiting Card 4" },
  { src: logo8, alt: "Visiting Card 5" },
  { src: logo9, alt: "Visiting Card 6" },
  { src: logo10, alt: "Visiting Card 7" },
  { src: logo11, alt: "Visiting Card 8" },
  { src: logo12, alt: "Visiting Card 9" },
];

function Collection() {
  return (
    <div className="text">
        <Container className="my-5">
            <div className="collection-container">
            <h1 className="text-center collection-title ">Collections</h1>

            </div>
            <Row className="mt-5 mb-5">
          {images.map((image, index) => (
            <Col xs={12} md={4} className="mb-3" key={index}>
              <div className="image-container1 border border-secondary rounded ">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-100 image-hover"
                  style={{width:"500px",height:"300px"}}
                />
              </div>
            </Col>
          ))}
        </Row>
        </Container>
    </div>
  )
}

export default Collection