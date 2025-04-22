import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Container } from "react-bootstrap";
import axios from "axios";

function Awesome() {
  const [activeButton, setActiveButton] = useState("");
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [cardData, setCardData] = useState([]);

  // ✅ Fetch card images from API
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get(
          "https://artisticify-backend.vercel.app/api/cards/fetchCards"
        );
        if (res.data.success) {
          setCardData(res.data.cards);
        }
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  // Responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsPerView(1);
      } else if (width < 992) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleButtonClick = (direction) => {
    if (isTransitioning) {
      if (direction === "LeftArrow") {
        setVisibleIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : cardData.length - 1
        );
      } else if (direction === "RightArrow") {
        setVisibleIndex((prevIndex) => prevIndex + 1);
      }
    }
    setActiveButton(direction);
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => prevIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Loop effect
  useEffect(() => {
    if (visibleIndex === cardData.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setVisibleIndex(0);
      }, 500);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 600);
    }
  }, [visibleIndex, cardData.length]);

  return (
    <div style={{ marginTop: "120px" }}>
      <Container>
        <div className="text-center my-3">
          <h2 className="fw-bold py-2" style={{ color: "#094167" }}>
            Digital Success Starts Here
          </h2>
          <p className="text-secondary mx-3 text">
            Digital marketing uses targeted strategies like SEO, PPC, email
            marketing, and social media to help businesses grow online, increase
            brand visibility, generate leads, and build lasting relationships
            with customers in an ever-evolving digital environment.
          </p>
        </div>
      </Container>

      <div className="d-flex align-items-center justify-content-center py-5">
        {/* Left Arrow Button */}
        <Button
          variant=""
          className={`destiBtn rounded-pill py-3 me-1 me-md-4 ${
            activeButton === "LeftArrow" ? "active-btn" : ""
          }`}
          onClick={() => handleButtonClick("LeftArrow")}
        >
          <MdArrowBackIos />
        </Button>

        {/* Carousel */}
        <div className="overflow-hidden" style={{ width: "80%" }}>
          <div
            className="card-container"
            style={{
              display: "flex",
              transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
              transform: `translateX(-${
                visibleIndex * (100 / cardsPerView)
              }%)`,
            }}
          >
            {cardData.concat(cardData.slice(0, 3)).map((card, index) => (
              <Card className="packCard mx-2 mx-sm-2 mx-md-3 mx-lg-3" key={index}>
                <div className="card-img">
                  <Card.Img variant="top" src={card.image} />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <Button
          variant=""
          className={`destiBtn rounded-pill py-3 ms-1 ms-md-4 ${
            activeButton === "RightArrow" ? "active-btn" : ""
          }`}
          onClick={() => handleButtonClick("RightArrow")}
        >
          <MdArrowForwardIos />
        </Button>
      </div>
    </div>
  );
}

export default Awesome;