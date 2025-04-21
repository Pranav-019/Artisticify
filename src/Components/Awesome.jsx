import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import a1 from "../assets/Page 1 Logo Design (1).jpg";
import a2 from "../assets/Page 2 Packeging.jpg";
import a3 from "../assets/Page 3 UI_UX.jpg";
import a4 from "../assets/Page 4_Packeging.jpg";
import a5 from "../assets/Page 5_ Visual Ads.jpg";
import { Container } from "react-bootstrap";

function Awesome() {
  const [activeButton, setActiveButton] = useState("");
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsPerView(1); // Mobile
      } else if (width < 992) {
        setCardsPerView(2); // Tablet
      } else {
        setCardsPerView(3); // Desktop
      }
    };

    updateCardsPerView(); // Call on load
    window.addEventListener("resize", updateCardsPerView);

    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cards = [
    { src: a1 },
    { src: a2 },
    { src: a3 },
    { src: a4 },
    { src: a5 },
  ];

  const extendedCards = [...cards, ...cards.slice(0, 3)];

  const handleButtonClick = (direction) => {
    if (isTransitioning) {
      if (direction === "LeftArrow") {
        setVisibleIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : cards.length - 1
        );
      } else if (direction === "RightArrow") {
        setVisibleIndex((prevIndex) => prevIndex + 1);
      }
    }
    setActiveButton(direction);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (visibleIndex === extendedCards.length - 3) {
      setTimeout(() => {
        setIsTransitioning(false);
        setVisibleIndex(0);
      }, 500);

      setTimeout(() => {
        setIsTransitioning(true);
      }, 600);
    }
  }, [visibleIndex, extendedCards.length]);

 
  return (
    <div style={{ marginTop: "100px" }}>
      <Container>
        <div className="text-center my-3">
          <h2 className="fw-bold py-2" style={{ color: "#094167" }}>
            Digital Success Starts Here
          </h2>

          <p className="text-secondary mx-3">
            Digital marketing uses targeted strategies like SEO, PPC, email
            marketing, and social media to help businesses grow online, increase
            brand visibility, generate leads, and build lasting relationships
            with customers in an ever-evolving digital environment.
          </p>
        </div>
      </Container>
      <div className="d-flex align-items-center justify-content-center py-5">
        {/* Left Arrow Button with margin-end */}
        <Button
          variant=""
          className={`destiBtn rounded-pill py-3 me-4 ${
            activeButton === "LeftArrow" ? "active-btn" : ""
          }`}
          onClick={() => handleButtonClick("LeftArrow")}
        >
          <FaArrowLeft />
        </Button>

        {/* Carousel */}
        <div className="overflow-hidden" style={{ width: "80%" }}>
          <div
            className="card-container"
            style={{
              display: "flex",
              transition: isTransitioning
                ? "transform 0.5s ease-in-out"
                : "none",
              transform: `translateX(-${visibleIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {extendedCards.map((card, index) => (
              <Card className="packCard mx-3" key={index}>
                <div className="card-img">
                  <Card.Img variant="top" src={card.src} />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Arrow Button with margin-start */}
        <Button
          variant=""
          className={`destiBtn rounded-pill py-3 ms-4 ${
            activeButton === "RightArrow" ? "active-btn" : ""
          }`}
          onClick={() => handleButtonClick("RightArrow")}
        >
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default Awesome;
