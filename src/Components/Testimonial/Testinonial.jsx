import  { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

function Testimonial() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeButton, setActiveButton] = useState('');
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const testimonial = [
    {
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt tenetur sapiente atque. Magni non explicabo beatae sit, vel reiciendis consectetur numquam id similique sunt error obcaecati ducimus officia maiores.",
      src: "/testimonial-1.jpg",
      title: "Johan Abraham",
      text1: "New York, USA",
      text2: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>
    },
    {
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt tenetur sapiente atque. Magni non explicabo beatae sit, vel reiciendis consectetur numquam id similique sunt error obcaecati ducimus officia maiores.",
      src: "/testimonial-2.jpg",
      title: "Johan Abraham",
      text1: "New York, USA",
      text2: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>
    },
    {
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt tenetur sapiente atque. Magni non explicabo beatae sit, vel reiciendis consectetur numquam id similique sunt error obcaecati ducimus officia maiores.",
      src: "/testimonial-3.jpg",
      title: "Johan Abraham",
      text1: "New York, USA",
      text2: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>
    },
    {
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt tenetur sapiente atque. Magni non explicabo beatae sit, vel reiciendis consectetur numquam id similique sunt error obcaecati ducimus officia maiores.",
      src: "/testimonial-4.jpg",
      title: "Johan Abraham",
      text1: "New York, USA",
      text2: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>
    }
  ];

  const extendedCards = [...testimonial, ...testimonial.slice(0, 3)];

  const handleButtonClick = (direction) => {
    if (isTransitioning) {
      if (direction === 'LeftArrow') {
        setVisibleIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : testimonial.length - 1));
      } else if (direction === 'RightArrow') {
        setVisibleIndex(prevIndex => prevIndex + 1);
      }
    }
    setActiveButton(direction);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex(prevIndex => prevIndex + 1);
    }, 3000); // Change the duration as per your requirement (in milliseconds)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Check when to reset the position to create an infinite loop effect
  useEffect(() => {
    if (visibleIndex === extendedCards.length - 3) {
      setTimeout(() => {
        setIsTransitioning(false);
        setVisibleIndex(0); // Reset to the first set of cards
      }, 500); // Time it to match the CSS transition duration

      // Restore the transition effect after resetting
      setTimeout(() => {
        setIsTransitioning(true);
      }, 600);
    }
  }, [visibleIndex, extendedCards.length]);

  // Find the center card index based on visibleIndex
  const centerIndex = (visibleIndex + 1) % testimonial.length;

  return (
    <div className="testi" style={{ marginTop: "120px" }}>
      <Container style={{ overflow: 'hidden' }}>
        <h4 className="colorBlue pt-5 pb-2 text-center">
          ----- Testimonial -----
        </h4>
        <h1 className="text-center">Our Client Say!!!</h1>

        {/* Button section with margins */}
        <div className='d-flex justify-content-between align-items-center py-2'>
          <Button
            variant=""
            className={`destiBtn rounded-pill mx-2 ${activeButton === 'LeftArrow' ? 'active-btn' : ''}`}
            onClick={() => handleButtonClick('LeftArrow')}
          >
            <FaArrowLeft />
          </Button>

          <Button
            variant=""
            className={`destiBtn rounded-pill mx-2 ${activeButton === 'RightArrow' ? 'active-btn' : ''}`}
            onClick={() => handleButtonClick('RightArrow')}
          >
            <FaArrowRight />
          </Button>
        </div>

        {/* Card section */}
        <div
          className="card-container d-flex my-5"
          style={{
            display: 'flex',
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
            transform: `translateX(-${visibleIndex * (100 / 3)}%)`,
          }}
        >
          {extendedCards.map((testi, index) => (
            <Card
              className={`packCard1 mx-3 ${index % testimonial.length === centerIndex ? 'center-card' : ''}`}
              style={{ width: '450px', border: "none" }}
              key={index}
            >
              <Card.Body>
                <div
                  className={`testiDiv pb-5 ${index % testimonial.length === centerIndex ? 'center-background' : ''}`}
                >
                  <Card.Text className="p-3">
                    {testi.para}
                  </Card.Text>
                </div>
                <Card.Img variant="top" src={testi.src} className="rounded rounded-circle" style={{
                  border: '2px dotted #000',
                  padding: '5px',
                  color: "#13357B",
                }} />
                <Card.Title className="mt-5 text-center">{testi.title}</Card.Title>
                <Card.Text className="text-center pt-0">{testi.text1}</Card.Text>
                <Card.Text className="text-center testi-i">{testi.text2}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Testimonial;