import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";

function FAQs() {
  const navigate=useNavigate()
  return (
    <div style={{ paddingTop: "50px" }}>
      <Container>
        <div className="mx-lg-4">
          <div className="p-4 rounded rounded-4" style={{backgroundColor:"#0d3e72"}}>
          <h1 className="fw-bold text-white text-center ">Frequently Asked Questions</h1>

          </div>
          <div className="mt-5  mb-5 bg-white rounded">
            {/* Single Accordion with unique event keys */}
              {/* First Accordion Item */}
              
                  {/* Nested Accordion for FAQs */}
                  <Accordion defaultActiveKey="" className="text-start ">
                    <Accordion.Item eventKey="0" className="accor">
                      <Accordion.Header>
                        <h6 className="dark fw-bold">What services do you offer in graphic design and digital marketing?</h6>
                      </Accordion.Header>
                      <Accordion.Body>
                      We offer a comprehensive range of services to help businesses establish and enhance their visual identity and online presence. Our graphic design services include branding, logo design, packaging design, UI/UX design, brochure design, poster design, exhibition stall design, and more. On the digital marketing side, we provide services such as social media marketing, search engine optimization (SEO), pay-per-click (PPC) advertising, content marketing, and email marketing. Whether you need a stunning visual identity or a strategic online marketing campaign, we have the expertise to deliver impactful solutions tailored to your business goals.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="accor">
                      <Accordion.Header>
                        <h6 className="dark fw-bold">How much do your services cost?</h6>
                      </Accordion.Header>
                      <Accordion.Body>
                      The cost of our services depends on several factors, including the complexity of the project, the number of design revisions required, the scope of marketing efforts, and the specific needs of your business. We offer flexible pricing models, including one-time project-based pricing and monthly retainers for ongoing services. Our goal is to provide high-quality services that fit within your budget while delivering maximum value. To get an accurate quote, we recommend discussing your specific requirements with our team, who will provide a customized package based on your objectives and budget.

                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="accor">
                      <Accordion.Header>
                        <h6 className="dark fw-bold">How long does it take to complete a project or see results?</h6>
                      </Accordion.Header>
                      <Accordion.Body>
                      The timeline for each project varies based on its complexity and scope. For graphic design projects, simple designs such as logos or business cards can typically be completed within a few days, while more intricate projects like brochures, packaging, or UI/UX designs may take several weeks. On the digital marketing side, SEO campaigns generally take 3 to 6 months to show significant results, while PPC and social media marketing can yield quicker outcomes within a few weeks. We work efficiently to meet deadlines and ensure timely delivery without compromising on quality.


                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="accor">
                      <Accordion.Header>
                        <h6 className="dark fw-bold">Can I request revisions for my project?</h6>
                      </Accordion.Header>
                      <Accordion.Body>
                      Yes, we understand that your satisfaction is our top priority, and we include a set number of revisions in all our design and marketing packages. Our revision process allows you to provide feedback, request adjustments, and ensure the final deliverables align with your vision. Additional revisions beyond the agreed limit can be accommodated for an extra fee. We believe in a collaborative approach to fine-tune designs and strategies until you are completely satisfied with the results.

                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className="accor">
                      <Accordion.Header>
                        <h6 className="dark fw-bold">What file formats will I receive for graphic design projects?</h6>
                      </Accordion.Header>
                      <Accordion.Body>
                      We provide design files in various formats to ensure compatibility with different platforms and uses. You will receive high-resolution files suitable for both digital and print purposes, including commonly used formats such as JPEG and PNG for web use, as well as PDF, AI (Adobe Illustrator), PSD (Adobe Photoshop), and EPS for professional printing and editing purposes. Our team ensures that all files are organized and delivered in a format that is easy to use, whether you need them for online marketing, printing, or further modifications.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className="accor">
                      <Accordion.Header>
                        <h6 className="dark fw-bold">Do you provide print-ready designs and optimized marketing materials?</h6>
                      </Accordion.Header>
                      <Accordion.Body>
                      Absolutely! All our graphic design work is optimized for printing to ensure perfect color accuracy, resolution, and quality. We take care of aspects such as bleed, margins, and color profiles (CMYK for print, RGB for digital) to guarantee flawless print output. Similarly, our digital marketing materials, such as social media graphics, website banners, and email templates, are optimized for various platforms to ensure high engagement and professional presentation. Our goal is to provide you with files that are ready to use without any technical issues.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6" className="accor">
                      <Accordion.Header>
                        <h6 className="dark fw-bold">Can you handle my business&rsquo;s branding and online presence from scratch?</h6>
                      </Accordion.Header>
                      <Accordion.Body>
                      Yes, we offer complete branding and digital marketing solutions to help businesses establish a strong presence from the ground up. Our team can work with you to create a unique brand identity, starting with logo design, brand guidelines, color schemes, typography, and other visual elements. Once your brand identity is in place, we implement effective digital marketing strategies to build your online presence, including website development, social media management, SEO, and targeted advertising campaigns. We ensure consistency across all platforms to strengthen your brand image and connect with your audience effectively.
                      </Accordion.Body>
                    </Accordion.Item>
                   
                    
                    <p className="text-danger text-end fw-bold animate-text mt-2" onClick={() => navigate('/contact')}>If you have any questions, feel free to contact us.....</p>
                  </Accordion>
                

            
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FAQs;