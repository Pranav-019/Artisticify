import { Container, Row, Col } from "react-bootstrap";
import {
  FaChartLine,
  FaLaptopCode,
  FaBullseye,
  FaChartBar,
} from "react-icons/fa6";

const steps = [
  {
    title: "01. Conduct Research",
    icon: <FaChartLine size={40} color="white" />,
    bgColor: "#f9c74f",
    textColor: "#f59e0b",
  },
  {
    title: "02. Execute Implementation",
    icon: <FaLaptopCode size={40} color="white" />,
    bgColor: "#90e0ef",
    textColor: "#3cb4ac",
  },
  {
    title: "03. Focus on Targeting",
    icon: <FaBullseye size={40} color="white" />,
    bgColor: "#f28482",
    textColor: "#ef4444",
  },
  {
    title: "04. Achieve Positive ROI",
    icon: <FaChartBar size={40} color="white" />,
    bgColor: "#adb5bd",
    textColor: "#333",
  },
];

const StepsDiagram = () => {
  return (
    <Container className="text-center my-5 position-relative">
      <Row className="justify-content-center align-items-center gx-4 gy-5 position-relative">
        {steps.map((step, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={3}
            className="d-flex flex-column align-items-center position-relative"
          >
            <div
              style={{
                borderRadius: "50%",
                border: `3px dotted ${step.textColor}`,
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: step.bgColor,
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  zIndex: 1,
                }}
              >
                {step.icon}
              </div>
            </div>

            <div
              style={{
                marginTop: "15px",
                color: step.textColor,
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              {step.title}
            </div>

            
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StepsDiagram;
