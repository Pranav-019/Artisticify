import { Container, Row, Col } from "react-bootstrap";
import {
  FaChartLine,
  FaLaptopCode,
  FaBullseye,
  FaChartBar,
} from "react-icons/fa6";

const steps = [
  {
    title: "01. Conduct ",
    icon: <FaChartLine size={40} color="white" />,
    bgColor: "#f9c74f",
    textColor: "#f59e0b",
  },
  {
    title: "02. Execute",
    icon: <FaLaptopCode size={40} color="white" />,
    bgColor: "#90e0ef",
    textColor: "#3cb4ac",
  },
  {
    title: "03. Focus ",
    icon: <FaBullseye size={40} color="white" />,
    bgColor: "#f28482",
    textColor: "#ef4444",
  },
  {
    title: "04. Achieve",
    icon: <FaChartBar size={40} color="white" />,
    bgColor: "#adb5bd",
    textColor: "#333",
  },
];

const StepsDiagram = () => {
  return (
    <Container className="text-center my-5 position-relative">
      <style>
        {`
          .step-item {
            position: relative;
          }

          .step-circle {
            border-radius: 50%;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            z-index: 2;
          }

          /* Horizontal connectors for medium+ screens */
          @media (min-width: 768px) {
            .step-item:not(:last-child)::after {
              content: "";
              position: absolute;
              top: 40%;
              left: 90%;
              width: 40px;
              height: 3px;
              background-color: #ccc;
              transform: translateY(-50%);
              z-index: 1;
            }

            .step-item:not(:last-child)::before {
              content: "";
              position: absolute;
              top: 40%;
              left: calc(100% + 80px - 60px);
              border-width: 6px;
              border-style: solid;
              border-color: transparent transparent transparent #ccc;
              transform: translateY(-50%);
              z-index: 1;
            }
          }

          @media (min-width: 1024px) {
            .step-item:not(:last-child)::after {
              content: "";
              position: absolute;
              top: 40%;
              left: 200px ;
              width: 80px;
              height: 3px;
              background-color: #ccc;
              transform: translateY(-50%);
              z-index: 1;
            }

            .step-item:not(:last-child)::before {
              content: "";
              position: absolute;
              top: 40%;
              left: calc(100% + 80px - 40px);
              border-width: 6px;
              border-style: solid;
              border-color: transparent transparent transparent #ccc;
              transform: translateY(-50%);
              z-index: 1;
            }
          }

          @media (min-width: 1440px) {
            .step-item:not(:last-child)::after {
              content: "";
              position: absolute;
              top: 40%;
              left: 250px ;
              width: 150px;
              height: 3px;
              background-color: #ccc;
              transform: translateY(-50%);
              z-index: 1;
            }

            .step-item:not(:last-child)::before {
              content: "";
              position: absolute;
              top: 40%;
              left: calc(100% + 80px - 10px);
              border-width: 6px;
              border-style: solid;
              border-color: transparent transparent transparent #ccc;
              transform: translateY(-50%);
              z-index: 1;
            }
          }

          /* Vertical connectors for small screens */
          @media (max-width: 767.98px) {
            .step-item:not(:last-child)::after {
              content: "";
              position: absolute;
              top: 100%;
              left: 50%;
              width: 3px;
              height: 40px;
              background-color: #ccc;
              transform: translateX(-50%);
              z-index: 1;
            }

            .step-item:not(:last-child)::before {
              content: "";
              position: absolute;
              top: calc(100% + 60px - 20px);
              left: 50%;
              border-width: 6px;
              border-style: solid;
              border-color: #ccc transparent transparent transparent;
              transform: translateX(-50%);
              z-index: 1;
            }
          }
        `}
      </style>

      <Row className="justify-content-center align-items-center gx-4 gy-5">
        {steps.map((step, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={3}
            className="d-flex flex-column align-items-center step-item"
          >
            <div
              className="step-circle"
              style={{
                border: `3px dotted ${step.textColor}`,
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
