import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/seoblog.jpg';

const blogs = [
  {
    id: 1,
    title: 'Boost Your Online Visibility with Proven SEO Strategies',
    description: 'Unlock your website’s potential with proven SEO strategies that increase visibility, drive targeted traffic, and boost your search engine rankings. From keyword research to technical SEO, these tactics help you stand out in search results and attract the right audience.',
    image: img1,
  },
  {
    id: 2,
    title: 'Boosting Productivity at Work',
    description: 'Learn effective techniques to stay focused and increase your productivity at the office.',
    image: img1,
  },
  {
    id: 3,
    title: 'Office Design Trends in 2025',
    description: 'Discover the latest trends in office interior design that enhance employee well-being.',
    image: img1,
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>
      <Container className="py-5">
        <h1 className="text-center  mb-4" style={{ color: '#13357b' }}>
          Our Blog
        </h1>
        <Row>
          {blogs.map((blog) => (
            <Col xs={12} md={6} lg={4} key={blog.id} className="mb-4">
              <Card className="shadow-sm h-100 d-flex flex-column">
                <Card.Img variant="top" src={blog.image} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title style={{ color: '#13357b' }}>{blog.title}</Card.Title>
                  <Card.Text>{blog.description}</Card.Text>
                  <Button
                    variant="primary"
                    style={{ backgroundColor: '#13357b', borderColor: '#13357b' }}
                    className="mt-auto"
                    onClick={() => navigate("/blogdescription")}
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
