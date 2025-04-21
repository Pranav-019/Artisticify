import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BlogDescription = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const [blog, setBlog] = useState([]);
  const [blogDetails, setBlogDetails] = useState(null);
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(
        "https://artisticify-backend.vercel.app/api/blogs/allBlogs"
      );
      setBlog(res.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (blog.length > 0) {
      const matchedBlog = blog.find((item) => item._id === blogId);
      setBlogDetails(matchedBlog);
    }
  }, [blog, blogId]);

  console.log("blogs Id:", blogId);
  console.log("All blogs:", blog);
  console.log("Blog Details:", blogDetails);

  return (
    <Container className="py-5">
      {/* Title */}

      {/* Image and Side Content */}
      <Row className="mb-4">
        <Col xs={12} md={12} lg={8} xl={8} xxl={8}>
          {!blogDetails ? (
            <p>Loading blog details...</p>
          ) : (
            <img src={blogDetails.image} alt="SEO" className="img-fluid w-100" />
          )}
        </Col>
        <Col xs={12} md={12} lg={4} xl={4} xxl={4}>
          <Card
            className="w-100 h-100 p-4 shadow border-0 position-relative"
            style={{
              borderRadius: "20px",
              backgroundColor: "#f9fbfd",
              overflow: "hidden",
            }}
          >
            {/* Vertical stripe */}
            <div className="my-auto">
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "8px",
                  backgroundColor: "#13357B",
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
              ></div>

              {/* Card Content */}
              <h5 className=" fw-bold mb-4" style={{ color: "#13357B" }}>
                🚀 Quick Productivity Tips
              </h5>
              <ul className="list-unstyled mb-0" style={{ fontSize: "1rem" }}>
                {[
                  { icon: "🕒", text: "Establish a consistent daily schedule" },
                  {
                    icon: "📵",
                    text: "Silence notifications to limit distractions",
                  },
                  { icon: "📋", text: "Use task apps like Notion or Trello" },
                  { icon: "🎧", text: "Wear noise-canceling headphones" },
                  { icon: "💬", text: "Network and engage during breaks" },
                ].map((item, index) => (
                  <li key={index} className="mb-3 d-flex align-items-start">
                    <span
                      className="me-2 fs-5"
                      style={{
                        color: "#13357B",
                      }}
                    >
                      {item.icon}
                    </span>
                    <span className="text text-secondary">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Description */}
      {!blogDetails ? (
        <p>Loading blog details...</p>
      ) : (
        <Row className="py-4 border-none">
          <Col md={12}>
            <Card className="py-4 border-0">
              <Card.Text>
                <h3 className="fw-bold pb-3">{blogDetails.mainTitle}</h3>
                <p className="text text-secondary">{blogDetails.description}</p>
                <div className="mt-5">
                  {blogDetails.sections?.map((section, index) => (
                    <div key={section._id}>
                      <h4>
                        {index + 1}.{section.title}
                      </h4>
                      <p className="text text-secondary">{section.content}</p>
                    </div>
                  ))}
                </div>
              </Card.Text>
            </Card>
          </Col>
        </Row>
      )}

      <Row>
        {[...blog]
          .sort(() => 0.5 - Math.random()) // Shuffle the array
          .slice(0, 3) // Take the first 3
          .map((blog) => (
            <Col xs={12} md={6} lg={4} key={blog.id} className="mb-4">
              <Card className="shadow-sm h-100 d-flex flex-column">
                <Card.Img
                  variant="top"
                  src={blog.image}
                  alt={blog.mainTitle}
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title style={{ color: "#13357b" }}>
                    {blog.mainTitle}
                  </Card.Title>
                  <Card.Text>
                    {blog.shortDescription || blog.description.slice(0, 100)}...
                  </Card.Text>
                  <Button
                    variant="primary"
                    style={{
                      backgroundColor: "#13357b",
                      borderColor: "#13357b",
                    }}
                    className="mt-auto"
                    onClick={() => navigate("/blogdescription/:blogId")}
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default BlogDescription;
