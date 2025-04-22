import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Col, Container, Row } from "react-bootstrap";
import { FaStar, FaRegStar } from "react-icons/fa";
import axios from "axios";

function TestimonialSection() {
    const [testimonials, setTestimonials] = useState([]);
    const [activeButton, setActiveButton] = useState("");
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [cardsPerView, setCardsPerView] = useState(3);

    // Fetch testimonials from API
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await axios.get('https://artisticify-backend.vercel.app/api/testimonials/fetchTestimonial');
                console.log("response : ", res)
                setTestimonials(res.data.testimonials);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };
        fetchTestimonials();
    }, []);

    // Handle responsiveness
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

    const extendedCards = [...testimonials, ...testimonials.slice(0, 3)];

    const handleButtonClick = (direction) => {
        if (isTransitioning) {
            if (direction === "LeftArrow") {
                setVisibleIndex((prevIndex) =>
                    prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1
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
                <div className="text-center ">
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
                        {extendedCards.map((card, index) => (
                            <Card className="packCard mx-3 py-4 px-2 px-lg-4" key={index}>
                                <Row>
                                    <Col xs={5}>
                                        <Card.Img
                                            variant="top"
                                            src={card.image}
                                            className="profile-img rounded-circle dotted-border"
                                        />
                                    </Col>

                                    <Col xs={7} className="my-auto ">
                                        <Card.Text>
                                            <strong>{card.name}</strong>
                                            <p className="text-wrap">{card.position}</p>
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Card.Body className="d-flex flex-column justify-content-between py-3 pt-3">
                                    <div>
                                        <Card.Text>{card.text}</Card.Text>
                                    </div>
                                    <div className="d-flex gap-1 mt-3">
                                        {[...Array(5)].map((_, i) =>
                                            i < card.rating ? (
                                                <FaStar key={i} color="#094167" />
                                            ) : (
                                                <FaRegStar key={i} color="#ccc" />
                                            )
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
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
                .profile-img {
                    width: 100px;
                    height: 100px;
                    object-fit: cover;
                }
                `}
            </style>
        </div>
    );
}

export default TestimonialSection;
