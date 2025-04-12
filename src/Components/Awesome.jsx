import  { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import a1 from '../assets/Page 1 Logo Design (1).jpg'
import a2 from '../assets/Page 2 Packeging.jpg'
import a3 from '../assets/Page 3 UI_UX.jpg'
import a4 from '../assets/Page 4_Packeging.jpg'
import a5 from '../assets/Page 5_ Visual Ads.jpg'


function Awesome() {
  const [activeButton, setActiveButton] = useState('');
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const cards = [
    {
      
      src: a1,
      
    },
    {
      
      src: a2,
     
    },
    {
      
      src: a3,
     
    },
    {
      
      src: a4,
     
    }, {
      
      src: a5,
     
    }
  ];

  // Clone the first 3 cards to make the infinite loop effect
  const extendedCards = [...cards, ...cards.slice(0, 3)];

  const handleButtonClick = (direction) => {
    if (isTransitioning) {
      if (direction === 'LeftArrow') {
        setVisibleIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : cards.length - 1));
      } else if (direction === 'RightArrow') {
        setVisibleIndex(prevIndex => prevIndex + 1);
      }
    }
    setActiveButton(direction);
  };

  // Automatically move the carousel after every 3 seconds
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

  return (
    <div className='' style={{ marginTop: '120px' }}>
      <Container>
      
        <div className='d-flex justify-content-between py-5'>
          <Button
            variant=""
            className={`destiBtn rounded-pill py-3 mx-1 ${activeButton === 'LeftArrow' ? 'active-btn' : ''}`}
            onClick={() => handleButtonClick('LeftArrow')}
          >
            <FaArrowLeft />
          </Button>

          <Button
            variant=""
            className={`destiBtn rounded-pill py-3 mx-1 ${activeButton === 'RightArrow' ? 'active-btn' : ''}`}
            onClick={() => handleButtonClick('RightArrow')}
          >
            <FaArrowRight />
          </Button>
        </div>

        <div className="overflow-hidden">
          <div
            className="card-container"
            style={{
              display: 'flex',
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
              transform: `translateX(-${visibleIndex * (100 / 3)}%)`,
            }}
          >
            {extendedCards.map((card, index) => (
              <Card className="packCard mx-3 " key={index} >
                <div className=' card-img ' style={{height:"350px"}}>
                  <Card.Img variant="top" className='' src={card.src} />
                  <div className='explore1 d-flex bg-secondary bg-opacity-50'>
                    <p className='px-3 text-light py-1 '>{card.place} </p>
                    <p className='days px-3 text-light py-1 '>{card.days} </p>
                    <p className='px-3 text-light py-1 '>{card.person} </p>
                  </div>
                  <div className='opaci1'></div>
                </div>

                
                
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Awesome;