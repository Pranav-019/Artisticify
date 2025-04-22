import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Design from "./Components/Design/design";
import About from "./Components/About/about";
import OurWork from "./Components/Our - Work/our_work";
import DigitalMarketing from "./Components/Digital Marketing/digitalMarketing";
import { HelmetProvider } from "react-helmet-async";

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
import Graphicpanel from "./Components/Graphicpanel";
import Awesome from "./Components/Awesome";
import ReverseCara from "./Components/ReverseCara";
import Googlemybusiness from "./Components/Google My Business/Googlemybusiness";
import Websitedesign from "./Components/Website Design/Websitedesign";
import Count from "./Components/Counter/counter";
import StepsDiagram from "./Components/StepsDiagram/StepsDiagram";
import Blog from "./Components/Blog/blog";
import BlogDetail from "./Components/Blog/blogdescription";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import star from "./assets/star.png";
import world from "./assets/images-removebg-preview (1).png";
import { Carousel } from "react-bootstrap";
import img1 from "./assets/poster_500-500-removebg-preview.png";
import img2 from "./assets/istockphoto-1281819457-612x612-removebg-preview.png";
import img3 from "./assets/letter_head-removebg-preview.png";
import TestimonialSection from "./Components/Testimonial";

const App = () => {
  // Create a reference to the contact form section
  const navigate = useNavigate();
  const totalSymbols = 30;
  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".bottom-images-container");
      if (container) {
        const containerPosition = container.getBoundingClientRect();
        container.classList.toggle(
          "scrolled",
          containerPosition.top <= window.innerHeight &&
            containerPosition.bottom >= 0
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to the contact form section
  const symbols = [star, world];
  return (
    <div>
      {/* <div className="app">
        <main className="hero-section">
          <h1 className="hero-title">Bring Your Imagination To Life</h1>
          <div className="hero-image-container">
            <div className="yellow-accent yellow-accent-1"></div>
            <div className="yellow-accent yellow-accent-2"></div>
            <div className="yellow-accent yellow-accent-3"></div>
            <div className="yellow-accent yellow-accent-4"></div>
            <div className="yellow-accent yellow-accent-5"></div>
            <img
              src={statueImage}
              alt="Artistic statue with sunglasses"
              className="hero-image"
            />
          </div>
        </main>
      </div> */}
      <section className="hero-wrapper ">
        {Array.from({ length: totalSymbols }, (_, i) => {
          const top = Math.random() * 100; // vh
          const left = Math.random() * 100; // vw
          const animationName = `move-${Math.floor(Math.random() * 4) + 1}`;
          const duration = `${10 + Math.random() * 10}s`;
          const delay = `${Math.random() * 5}s`;
          const randomSymbol =
            symbols[Math.floor(Math.random() * symbols.length)];

          return (
            <img
              key={i}
              src={randomSymbol}
              alt="symbol"
              className={`floating-symbol ${animationName}`}
              style={{
                top: `${top}vh`,
                left: `${left}vw`,
                animationDuration: duration,
                animationDelay: delay,
              }}
            />
          );
        })}

        {/* Main content */}
        <div className="hero">
          <div className="hero-content">
            <h5 className="fw-bold pb-3">
              CREATIVE DESIGN & DIGITAL MARKETING COMPANY IN INDIA
            </h5>
            <h1>YOUR GROWTH PARTNER IN THE DIGITAL WORLD</h1>
            <p>
              Artisticify empowers brands with impactful digital strategies,
              creative excellence, and smart innovation—building strong
              foundations for lasting visibility, engagement, and success.
            </p>
            <button className="" onClick={() => navigate("/Contact")}>
              {" "}
              Get Started
            </button>
          </div>
          <div className="hero-image">
            <Carousel interval={2000} controls={false} indicators={false} fade>
              <Carousel.Item>
                <img className="d-block w-100" src={img1} alt="Slide 1" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img2} alt="Slide 2" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img3} alt="Slide 3" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>

      <OurService />
      <StepsDiagram />
      <Awesome />
      <Graphicpanel />
      <ReverseCara />
      <Count />
      <Collection />
      <TestimonialSection />
      <FAQs />
    </div>
  );
};

const Root = () => (
  <HelmetProvider>
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdescription/:blogId" element={<BlogDetail />} />

        <Route path="/home" element={<App />} />
        <Route path="/design" element={<Design />} />
        <Route path="/digitalMarketing" element={<DigitalMarketing />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/Brochure" element={<Brochure />} />
        <Route path="/packaging" element={<Packaging />} />
        <Route path="/flyer" element={<Flyer />} />
        <Route path="/poster" element={<Poster />} />
        <Route path="/exhibition" element={<Exhibition />} />
        <Route path="/uiux" element={<UIUX />} />
        <Route path="/Websitedesign" element={<Websitedesign />} />
        <Route path="/icon" element={<Icon />} />
        <Route path="/stationary" element={<Stationary />} />
        <Route path="/FAQs" element={<FAQs />} />

        {/* ************************Degital Marketing*********************** */}
        <Route path="/SearchEngine" element={<SearchEngine />} />
        <Route path="/SocialMedia" element={<SocialMedia />} />
        <Route path="/ContentMarketing" element={<ContentMarketing />} />
        <Route path="/PayPerClick" element={<PayPer />} />
        <Route path="/SpecialPackages" element={<SpecialPackages />} />
        <Route path="/Googlemybusiness" element={<Googlemybusiness />} />
        <Route path="/GrowBusiness" element={<GrowBusiness />} />

        <Route path="/Magazine" element={<Magazine />} />
        <Route path="/VisualAid" element={<VisualAid />} />
        <Route path="/Calender" element={<Calender />} />

        {/* *********************Stationaary********************* */}

        <Route path="/Stationary/LetterHead" element={<LetterHead />} />
        <Route path="/Stationary/Envelope" element={<Envelope />} />
        <Route path="/Stationary/VisitingCard" element={<VisitingCard />} />
        <Route path="/Stationary/Certificate" element={<Certificate />} />
        <Route path="/Stationary/MenuCard" element={<MenuCard />} />
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  </HelmetProvider>
);

export default Root;
