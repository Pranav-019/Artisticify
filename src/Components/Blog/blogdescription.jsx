import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const BlogDescription = () => {
  return (
    <Container className="py-5">
      {/* Title */}
      <Row className="mb-4 text-center">
        <Col>
          <h1 className="text-primary" style={{ color: '#6BB7BE' }}>
            How to Maximize Productivity in a Shared Workspace
          </h1>
        </Col>
      </Row>

      {/* Image */}
      <Row className="mb-4">
        <Col>
          <Image 
            src="https://source.unsplash.com/800x400/?workspace,office" 
            alt="Blog Header" 
            fluid 
            rounded 
            className="shadow-sm"
          />
        </Col>
      </Row>

      {/* Description */}
      <Row>
        <Col md={12}>
          <Card className="p-4 shadow-sm">
            <Card.Text style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Shared workspaces are becoming increasingly popular among freelancers, startups, and even larger enterprises.
              They offer flexibility, cost savings, and a sense of community. To truly benefit from them, it's important to
              set boundaries, use productivity tools, and find the right balance between social interaction and focused work.
              <br /><br />
              In this post, we'll walk through some practical tips to help you make the most out of your shared office
              experience.
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDescription;
