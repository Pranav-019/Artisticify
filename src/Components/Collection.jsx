import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

function Collection() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://artisticify-backend.vercel.app/api/collection/fetchCollection")
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch collection images:", err);
      });
  }, []);

  return (
    <div className="text">
      <Container className="my-5">
        <div className="collection-container">
          <h1 className="text-center collection-title">Collections</h1>
        </div>
        <Row className="mt-5 mb-5">
          {images.map((image, index) => (
            <Col xs={12} md={4} className="mb-3" key={index}>
              <div className="image-container1 border border-secondary rounded">
                <img
                  src={image.image}
                  alt={`Collection Image ${index + 1}`}
                  className="w-100 image-hover"
                  style={{ width: "500px", height: "300px" }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Collection;
