import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/seoblog.jpg'
import seoimg from '../../assets/seoblog.jpg';
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
const BlogDescription = () => {
  const navigate=useNavigate()
  return (
    <Container className="py-5">
      {/* Title */}


      {/* Image and Side Content */}
      <Row className="mb-4">
        <Col xs={12} md={12} lg={8} xl={8} xxl={8}>
          <img src={seoimg} alt="SEO" className="img-fluid w-100" />
        </Col>
        <Col xs={12} md={12} lg={4} xl={4} xxl={4}>
          <Card
            className="w-100 h-100 p-4 shadow border-0 position-relative"
            style={{
              borderRadius: '20px',
              backgroundColor: '#f9fbfd',
              overflow: 'hidden',
            }}
          >
            {/* Vertical stripe */}
            <div className='my-auto'>
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '8px',
                  backgroundColor: '#13357B',
                  borderTopLeftRadius: '20px',
                  borderBottomLeftRadius: '20px',
                }}
              ></div>

              {/* Card Content */}
              <h5
                className=" fw-bold mb-4"
                style={{ color: '#13357B' }}
              >
                🚀 Quick Productivity Tips
              </h5>
              <ul className="list-unstyled mb-0" style={{ fontSize: '1rem' }}>
                {[
                  { icon: '🕒', text: 'Establish a consistent daily schedule' },
                  { icon: '📵', text: 'Silence notifications to limit distractions' },
                  { icon: '📋', text: 'Use task apps like Notion or Trello' },
                  { icon: '🎧', text: 'Wear noise-canceling headphones' },
                  { icon: '💬', text: 'Network and engage during breaks' },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="mb-3 d-flex align-items-start"
                    
                  >
                    <span
                      className="me-2 fs-5"
                      style={{
                        color: '#13357B',
                        
                      }}
                    >
                      {item.icon}
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Description */}
      <Row className="p-4 border-none">
        <Col md={12}>
          <Card className="p-4 border-0">
            <Card.Text >
              <h3 className='fw-bold pb-3'>Boost Your Online Visibility with Proven SEO Strategies</h3>
              <p className='text text-secondary'>Looking to boost your online presence and attract more organic traffic? SEO is the key to making your website more visible on search engines like Google. With proven strategies like keyword research, content optimization, mobile responsiveness, and link building, you can significantly improve your search rankings. SEO not only drives the right audience to your site but also builds trust and credibility over time. It helps reduce marketing costs by focusing on users actively searching for your services. Whether you're a startup or an established brand, SEO delivers long-term results. Stay ahead of your competition and turn clicks into conversions with expert SEO strategies. Let your website become your most powerful marketing tool.

              </p>
              <div className='mt-5'>
              <h4>1.Keyword Research</h4>
              <p className='text text-secondary'>Keyword research is the foundation of SEO. By identifying and targeting the right keywords that your audience is searching for, you can create content that meets their needs. Use tools like Google Keyword Planner or Ahrefs to find keywords with high search volume and low competition. By optimizing your content around these keywords, you increase your chances of ranking higher on search engines and attracting relevant traffic.</p>
              <h4>2.Content Optimization</h4>
              <p className='text text-secondary'>Content optimization ensures that your website is providing valuable and high-quality information to your visitors. Make sure your content is relevant, engaging, and answers the questions your target audience is asking. Use your keywords strategically in headings, meta descriptions, and throughout your content. Additionally, focus on creating content that satisfies user intent, as Google ranks content that is useful and provides value to readers.</p>
              <h4>3.Mobile Responsiveness</h4>
              <p className='text text-secondary'>With the increasing number of users accessing websites from mobile devices, having a mobile-responsive website is crucial for SEO. Google prioritizes mobile-friendly websites in its rankings. Ensure that your website design is adaptable to different screen sizes, loads quickly, and provides a seamless browsing experience across devices. A mobile-responsive site improves both user experience and SEO rankings.</p>
              <h4>4.Link Building</h4>
              <p className='text text-secondary'>Link building is the practice of getting other websites to link back to your site. These backlinks act as endorsements, signaling to search engines that your content is valuable and trustworthy. Focus on acquiring high-quality, relevant backlinks from reputable sites in your industry. This not only improves your SEO but also drives referral traffic to your site, boosting visibility and credibility.</p>
              <h4>5.Technical SEO</h4>
              <p className='text text-secondary'>Technical SEO focuses on improving the backend structure of your website, making it easier for search engines to crawl and index your content. This includes optimizing site speed, improving URL structures, fixing broken links, creating an XML sitemap, and using schema markup. A well-optimized website ensures that search engines can easily navigate and rank your pages, resulting in better visibility on search engine results pages (SERPs).</p>
              </div>
            </Card.Text>
          </Card>
        </Col>
      </Row>
      
      
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

  );
};

export default BlogDescription;
