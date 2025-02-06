import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Offcanvas, Container } from 'react-bootstrap';
import logo from '../assets/artisticify-logo.png'; 
import '../App.css';
import SEO from './SEO';

function ArtisticifyNavbar() {
  const navigate = useNavigate();

  return (
    <>
      <SEO title="Artisticify" description="Artisticify is a design company that provides design and Digital Marketing services to businesses." />
      
      <div className="bg-body-tertiary">
        <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="Artisticify Logo" style={{ height: '42.5px' }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              className="custom-offcanvas"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-2">
                  <Nav.Link className="nav-link-custom" onClick={() => navigate('/home')}>Home</Nav.Link>
                  <Nav.Link className="nav-link-custom" onClick={() => navigate('/about')}>About</Nav.Link>
                  
                  <NavDropdown title="Design" id="designDropdown" className="nav-link-custom custom-dropdown">
                    <div className="dropdown-scroll">
                      <NavDropdown.Item className="dropdown-item-custom" href="/logo">Logo Design</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-item-custom" href="/Brochure">Brochure Design</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-item-custom" href="/Packaging">Packaging Design</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-item-custom" href="/Flyer">Flyer Design</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-item-custom" href="/Poster">Poster Design</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-item-custom" href="/UIUX">UI/UX Design</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-item-custom" href="/Magazine">Magazine Design</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-item-custom" href="/VisualAid">Visual Aid Design</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-item-custom" href="/Calender">Calendar Design</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-item-custom" href="/Icon">Icon Design</NavDropdown.Item>
                      
                      <NavDropdown.Divider />
                      <NavDropdown.Item className="text-danger dropdown-item-custom">Stationary Design 🡇</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-item-custom" href="/Stationary/LetterHead">Letter Head Design</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-item-custom" href="/Stationary/Envelope">Envelope Design</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-item-custom" href="/Stationary/VisitingCard">Visiting Card Design</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-item-custom" href="/Stationary/Certificate">Certificate Design</NavDropdown.Item>
                      <NavDropdown.Item className="dropdown-item-custom" href="/Stationary/MenuCard">Menu Card Design</NavDropdown.Item>
                    </div>
                  </NavDropdown>
                  
                  <NavDropdown title="Digital Marketing" id="marketingDropdown" className="nav-link-custom custom-dropdown">
                    <NavDropdown.Item className="dropdown-item-custom" href="/SearchEngine">SEO</NavDropdown.Item>
                    <NavDropdown.Item className="dropdown-item-custom" href="/SoacialMedia">Social Media</NavDropdown.Item>
                    <NavDropdown.Item className="dropdown-item-custom" href="/ContentMarketing">Content Marketing</NavDropdown.Item>
                    <NavDropdown.Item className="dropdown-item-custom" href="/PayPer">Pay Per Click</NavDropdown.Item>
                    <NavDropdown.Item className="dropdown-item-custom" href="/SpecialPAckages">Special Packages</NavDropdown.Item>
                  </NavDropdown>
                  
                  <Nav.Link className="nav-link-custom" onClick={() => navigate('/our-work')}>Our Work</Nav.Link>
                  <Nav.Link className="nav-link-custom" onClick={() => navigate('/Contact')}>Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>

      {/* Padding to prevent content overlap */}
      <div style={{ paddingTop: "" }}>
        {/* Your main page content goes here */}
      </div>

      {/* Custom CSS */}
      <style>
        {`
          .nav-link-custom {
            padding-left: 50px !important;
            font-size: 18px;
            font-weight: bold;
              
          }

          .dropdown-scroll {
            max-height: 300px;
            overflow-y: auto;
          }

          .dropdown-item-custom {
            font-size: 16px;
            font-weight: bold;
            color: black !important; /* Dropdown text is black */
          }

          .dropdown-item-custom:hover {
            background-color: #f1f1f1 !important;
          }

          .dropdown-item-custom.text-danger {
            color: red !important;
          }

          /* Custom Offcanvas Styles */
           .offcanvas .btn-close {
            filter: invert(1); /* Makes close button white */
          }
        `}
      </style>
    </>
  );
}

export default ArtisticifyNavbar;
