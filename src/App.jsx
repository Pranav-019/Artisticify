import  {  useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import statueImage from "./assets/homepage-bg.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import Design from "./Components/Design/design";
import About from "./Components/About/about";
import OurWork from "./Components/Our - Work/our_work";
import DigitalMarketing from "./Components/Digital Marketing/digitalMarketing";

// Tiles
import Logo from "./Components/Logo/logo";
import Packaging from "./Components/Packaging/packaging";
import Poster from "./Components/Poster/poster";
import Icon from "./Components/Icon/icon";
import Stationary from "./Components/Stationary/stationary";
import Flyer from "./Components/Flyer/flyer";
import Exhibition from "./Components/Exibition/exibition";
import Brochure from "./Components/Brochure/brochure";
import UIUX from "./Components/UIUX/uiux";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";
import SearchEngine from "./Components/SearchEngin/SearchEngine";
import SocialMedia from "./Components/SocialMedia/SocialMedia";
import ContentMarketing from "./Components/ContentMarketing/ContentMarketing";
import PayPer from "./Components/PayPer/PayPer";
import SpecialPackages from "./Components/SpecialPackages/SpecialPackages";
import GrowBusiness from "./Components/GrowBusines/GrowBusiness";
import Magazine from "./Components/Magzine/Magazine";
import VisualAid from "./Components/VisualAid/VisualAid";
import Calender from "./Components/Calender/Calender";
import LetterHead from "./Components/Stationary/LetterHead/LetterHead";
import Envelope from "./Components/Stationary/Envelope/Envelope";
import VisitingCard from "./Components/Stationary/VisitingCard/VisitingCard";
import Certificate from "./Components/Stationary/Certificate/Certificate";
import MenuCard from "./Components/Stationary/MenuCard/MenuCard";
import OurService from "./Components/OurService/OurService";
import FAQs from "./Components/FAQs";
import Collection from "./Components/Collection";
<<<<<<< HEAD
import Graphicpanel from "./Components/Graphicpanel";
=======
import Testimonial from "./Components/Testimonial/Testinonial";
>>>>>>> 0fa603dec995a3acd6991cbfedc366929724ccf7



const App = () => {
  

  // Create a reference to the contact form section

  

  


  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".bottom-images-container");
      if (container) {
        const containerPosition = container.getBoundingClientRect();
        container.classList.toggle("scrolled", containerPosition.top <= window.innerHeight && containerPosition.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to the contact form section
 

  return (
   <div>
     <div className="app">
      
      <main className="hero-section">
        <h1 className="hero-title">Bring Your Imagination To Life</h1>
        <div className="hero-image-container">
          <div className="yellow-accent yellow-accent-1"></div>
          <div className="yellow-accent yellow-accent-2"></div>
          <div className="yellow-accent yellow-accent-3"></div>
          <div className="yellow-accent yellow-accent-4"></div>
          <div className="yellow-accent yellow-accent-5"></div>
          <img src={statueImage} alt="Artistic statue with sunglasses" className="hero-image" />
        </div>

        {/* <section className="form-section" ref={contactFormRef}>
          <h2 className="form-title">Let's Get in Touch</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="serviceSelected">Service Selected</label>
              <input
                type="text"
                id="serviceSelected"
                name="serviceSelected"
                placeholder="Enter the service selected"
                value={formData.serviceSelected}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>

          {acknowledgmentMessage && <div className="acknowledgment-message">{acknowledgmentMessage}</div>} {/* Show acknowledgment message 
        </section> */}
      </main>

    </div>
    <Graphicpanel/>
    <Collection/>
    <OurService/>
    <Testimonial />
    <FAQs/>
   </div>
    
  );
};

const Root = () => (
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact />} />

      <Route path="/home" element={<App />} />
      <Route path="/design" element={<Design />} />
      <Route path="/digitalMarketing" element={<DigitalMarketing />} />
      <Route path="/our-work" element={<OurWork />} />
      <Route path="/logo" element={<Logo />} />
      <Route path="/Brochure" element={<Brochure/>} />
      <Route path="/packaging" element={<Packaging />} />
      <Route path="/flyer" element={<Flyer />} />
      <Route path="/poster" element={<Poster />} />
      <Route path="/exhibition" element={<Exhibition />} />
      <Route path="/uiux" element={<UIUX />} />
      <Route path="/icon" element={<Icon />} />
      <Route path="/stationary" element={<Stationary />} />
      <Route path="/FAQs" element={<FAQs/>} />



      {/* ************************Degital Marketing*********************** */}
      <Route path="/SearchEngine" element={<SearchEngine />} />
      <Route path="/SoacialMedia" element={<SocialMedia />} />
      <Route path="/ContentMarketing" element={<ContentMarketing />} />
      <Route path="/PayPer" element={<PayPer />} />
      <Route path="/SpecialPAckages" element={<SpecialPackages/>} />
      <Route path="/GrowBusiness" element={<GrowBusiness />} />

      <Route path="/Magazine" element={<Magazine />} />
      <Route path="/VisualAid" element={<VisualAid />} />
      <Route path="/Calender" element={<Calender />} />


      {/* *********************Stationaary********************* */}

      <Route path="/Stationary/LetterHead" element={<LetterHead/>} />
      <Route path="/Stationary/Envelope" element={<Envelope/>} />
      <Route path="/Stationary/VisitingCard" element={<VisitingCard/>} />
      <Route path="/Stationary/Certificate" element={<Certificate/>} />
      <Route path="/Stationary/MenuCard" element={<MenuCard/>} />







    </Routes>
    <Newsletter/>
    <Footer/> 
  </Router>
);

export default Root;
