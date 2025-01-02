import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FixedNavbar from "./components/FixedNavbar";
import ContactForm from "./components/ContactForm";
import AboutPage from "./components/AboutPage";
import FaqComponent from "./components/FaqComponent";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import MarqueeHeader from "./components/MarqueeHeader";
import ProductGallery from "./components/ProductGallery";
import WhatsAppButton from "./components/WhatsAppButton";
import BreadcrumbHeader from "./components/BreadcrumbHeader";
import CamphorBenefits from "./components/CamphorBenefits";


function App() {
  return (
    <Router>
      <MarqueeHeader />
      <FixedNavbar />
      <BreadcrumbHeader />
      <main>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqComponent />} />
          <Route path="/product-gallery" element={<ProductGallery />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
