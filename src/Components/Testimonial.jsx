import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import a1 from "../assets/profile 1.png";
import a2 from "../assets/profile 1.png";
import a3 from "../assets/profile 1.png";
import a4 from "../assets/profile 1.png";
import a5 from "../assets/profile 1.png";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Col, Container, Row } from "react-bootstrap";
import { FaStar, FaRegStar } from "react-icons/fa";

function TestimonialSection() {
    const [activeButton, setActiveButton] = useState("");
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [cardsPerView, setCardsPerView] = useState(3);
    const [ratings, setRatings] = useState([]);

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

    const cards = [
        { src: a1, name: "John Doe", position: "CEO, Company X", text: "This service helped us scale our business quickly and efficiently." },
        { src: a2, name: "Jane Smith", position: "Marketing Director, Company Y", text: "An amazing experience. Our marketing strategy is much stronger now!" },
        { src: a3, name: "Mark Johnson", position: "Founder, Startup Z", text: "We saw a huge increase in engagement and leads. Highly recommend!" },
        { src: a4, name: "Sarah Lee", position: "Product Manager, Company A", text: "The best marketing solution we've used. Our sales soared!" },
        { src: a5, name: "David Turner", position: "CTO, Company B", text: "Excellent support and strategies that worked wonders for us!" },
    ];

    // Assign random ratings (3 to 5) to each card only once
    useEffect(() => {
        const generateRatings = cards.map(() => Math.floor(Math.random() * 3) + 3); // 3, 4, or 5
        setRatings(generateRatings);
    }, []);

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
        <div style={{ marginTop: "120px" }}>
            <Container>
                <div className="text-center my-3">
                    <h2 className="fw-bold py-2" style={{ color: "#094167" }}>
                        What Our Clients Say
                    </h2>
                    <p className="text-secondary mx-3 text">
                        Our clients trust us to elevate their brands with powerful digital strategies.
                        We’re proud to help businesses grow, connect, and succeed in the digital world.
                    </p>
                </div>

            </Container>

            <div className="d-flex align-items-center justify-content-center py-5">
                <Button
                    variant=""
                    className={`destiBtn rounded-pill py-3 me-1 me-md-4 ${activeButton === "LeftArrow" ? "active-btn" : ""}`}
                    onClick={() => handleButtonClick("LeftArrow")}
                >
                    <MdArrowBackIos />
                </Button>

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
                        {extendedCards.map((card, index) => {
                            const rating = ratings[index % cards.length] || 3;
                            return (
                                <Card className="packCard mx-3 p-4" key={index}>
                                    <Row>
                                        <Col xs={4}>
                                            <Card.Img
                                                variant="top"
                                                src={card.src}
                                                className="rounded-circle dotted-border"
                                            />
                                        </Col>
                                        <Col xs={8} className="my-auto">
                                            <Card.Text>
                                                <strong>{card.name}</strong>
                                                <p className="text-wrap">{card.position}</p>
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                    <Card.Body>
                                        <Card.Text>{card.text}</Card.Text>
                                        <div className="d-flex gap-1 mt-2">
                                            {[...Array(5)].map((_, i) =>
                                                i < rating ? (
                                                    <FaStar key={i} color="#094167" />
                                                ) : (
                                                    <FaRegStar key={i} color="#ccc" />
                                                )
                                            )}
                                        </div>
                                    </Card.Body>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                <Button
                    variant=""
                    className={`destiBtn rounded-pill py-3 ms-1 ms-md-4 ${activeButton === "RightArrow" ? "active-btn" : ""}`}
                    onClick={() => handleButtonClick("RightArrow")}
                >
                    <MdArrowForwardIos />
                </Button>
            </div>

            <style>
                {`
          .dotted-border {
            border: 3px dotted #094167;
            padding: 5px;
            background-color: white;
          }
        `}
            </style>
        </div>
    );
}

export default TestimonialSection;
