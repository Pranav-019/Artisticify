import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion"; 
import SEO from "../SEO";

// Counter Component
function Counter({ endValue }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 6000; 
    const incrementTime = 50; 
    const steps = duration / incrementTime;
    const stepSize = endValue / steps;

    const timer = setInterval(() => {
      start += stepSize;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [endValue]);

  return <h1>{count}+</h1>;
}

// Count Component
function Count() {
  const [boxData, setBoxData] = useState([]);

  useEffect(() => {
    fetch("https://artisticify-backend.vercel.app/api/counter/get")
      .then((response) => response.json())
      .then((response) => {
        const dataArray = response.data;
        const validData = dataArray.filter(
          (item) =>
            item && item.count !== undefined && item.title && item.description
        );
        const sortedData = validData.sort((a, b) => a.boxNo - b.boxNo);
        setBoxData(sortedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="count-container">
      <SEO title="Counter" description="This is Counter Page." />
      <div className="count-background"></div>

      <div className="count-overlay">
        <Container className="py-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <h2 className="text-center text-white fw-bold mb-5">
              Behind Your Successful Careers
            </h2>
          </motion.div>

          <div className="count-text py-3">
            <Row>
              {boxData.map((box, index) => (
                <Col key={index} xs={12} sm={12} md={6} lg={3} xl={3} xxl={3} className="my-2 custom-col">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={scrollVariants}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className="w-100 "
                  >
                    <div className="blue-bg-transpernt text-center my-3 custom-responsive-div ">
                      <Counter
                        endValue={parseInt((box.count || "0").replace("+", ""))}
                      />
                      <h4 className="">{box.title || "N/A"}</h4>
                      <p className="text">{box.description || "N/A"}</p>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Count;
