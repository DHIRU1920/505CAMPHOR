  import { lazy, Suspense } from "react";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  import FixedNavbar from "./components/FixedNavbar";
  import Footer from "./components/GlobalFooter";
  import WhatsAppButton from "./components/WhatsAppButton";
  import MarqueeHeader from "./components/MarqueeHeader";
  import LoadingSpinner from "./components/LoadingSpinner";

  // Lazy load components
  const Introduction = lazy(() => import("./components/Introduction"));
  const AboutPage = lazy(() => import("./components/AboutPage"));
  const FaqComponent = lazy(() => import("./components/FaqComponent"));
  const ProductGallery = lazy(() => import("./components/ProductGallery"));
  const ProductSection = lazy(() => import("./components/ProductSection"));
  const ContactForm = lazy(() => import("./components/ContactForm"));
  const BlogList = lazy(() => import("./components/BlogList"));
  const BlogPost = lazy(() => import("./components/BlogPost"));

  function App() { 
    return (
      <Router>
        <MarqueeHeader />
        <FixedNavbar />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Introduction />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faq" element={<FaqComponent />} />
              <Route path="/product-gallery" element={<ProductGallery />} />
              <Route path="/product/:id" element={<ProductSection />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:postId" element={<BlogPost />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </Router>
    );
  }

  export default App;
