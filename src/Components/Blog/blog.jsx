import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/brand.jpg'

const blogs = [
  {
    id: 1,
    title: 'The Future of Office Spaces',
    description: 'Explore how modern offices are transforming the way we work with remote-friendly and hybrid spaces.',
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
    const navigate=useNavigate()
  return (
   <div style={{ backgroundColor: '#f8f9fa' }}>
     <Container  className="py-5" >
      <h1 className="text-center text-primary mb-4" style={{ color: '#13357b' }}>
        Our Blog
      </h1>
      <Row>
        {blogs.map((blog) => (
          <Col xs={12} md={6} lg={4} key={blog.id} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={blog.image} />
              <Card.Body>
                <Card.Title style={{ color: '#13357b' }}>{blog.title}</Card.Title>
                <Card.Text>{blog.description}</Card.Text>
                <Button
                  variant="primary"
                  style={{ backgroundColor: '#13357b', borderColor: '#13357b' }}
                  className="w-100"
                  onClick={()=>navigate("/blogdescription")}
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
