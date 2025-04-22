import { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Blog = () => {
  const navigate = useNavigate();

  const [blog, setBlog] = useState([]);
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

  console.log("all blogs : ", blog)

  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>
      <Container className="py-5">
        <h1 className="text-center  mb-4" style={{ color: '#13357b' }}>
          Our Blog
        </h1>
        <Row>
          {blog.map((blog) => (
            <Col xs={12} md={6} lg={4} key={blog._id} className="my-4">
              <Card className="shadow-sm h-100 d-flex flex-column">
                <Card.Img
                  variant="top"
                  src={blog.image || "default-image.jpg"}
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title style={{ color: '#13357b' }}>
                    {blog.mainTitle}
                  </Card.Title>
                  <Card.Text>
                    {blog.shortDescription || blog.description.slice(0, 100)}...
                  </Card.Text>
                  <Button
                    variant="primary"
                    style={{ backgroundColor: '#13357b', borderColor: '#13357b' }}
                    className="mt-auto"
                    onClick={() => navigate(`/blogdescription/${blog._id}`)}
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
