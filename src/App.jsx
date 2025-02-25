import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import React Helmet
import FixedNavbar from "./components/FixedNavbar";
import Footer from "./components/GlobalFooter";
import WhatsAppButton from "./components/WhatsAppButton";
import MarqueeHeader from "./components/MarqueeHeader";
import LoadingSpinner from "./components/LoadingSpinner";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load components
const Introduction = lazy(() => import("./components/Introduction"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const FaqComponent = lazy(() => import("./components/FaqComponent"));
const BreadcrumbHeader = lazy(() => import("./components/BreadcrumbHeader")); // Lazy-loaded BreadcrumbHeader
const ProductGallery = lazy(() => import("./components/ProductGallery"));
const ProductSection = lazy(() => import("./components/ProductSection"));
const ContactForm = lazy(() => import("./components/ContactForm"));
const BlogList = lazy(() => import("./components/BlogList"));
const BlogPost = lazy(() => import("./components/BlogPost"));

function App() {
  return (
    <Router>
      {/* Default Helmet for the entire app */}
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="505 Camphor - Pure, natural camphor for worship, meditation, and wellness. Trusted by temples and households across India."
        />
        <meta
          name="keywords"
          content="505 Camphor, pure camphor, worship camphor, natural camphor, meditation camphor, buy camphor online"
        />
        <link rel="canonical" href="https://www.505camphor.com/" />
      </Helmet>

      <MarqueeHeader />
      <FixedNavbar />
      <main>
        <ScrollToTop />
        <Suspense fallback={<LoadingSpinner />}>
          <BreadcrumbHeader />
          <Routes>
            {/* Homepage */}
            <Route
              path="/"
              element={
                <>
                  <Helmet>
                    <title>Home - 505 Camphor</title>
                    <meta
                      name="description"
                      content="Welcome to 505 Camphor! Explore our pure, natural camphor for worship, meditation, and wellness."
                    />
                  </Helmet>
                  <Introduction />
                </>
              }
            />

            {/* About Page */}
            <Route
              path="/about"
              element={
                <>
                  <Helmet>
                    <title>About Us - 505 Camphor</title>
                    <meta
                      name="description"
                      content="Learn about 505 Camphor's mission, history, and commitment to delivering the purest camphor for worship and wellness."
                    />
                  </Helmet>
                  <AboutPage />
                </>
              }
            />

            {/* FAQ Page */}
            <Route
              path="/faq"
              element={
                <>
                  <Helmet>
                    <title>FAQs - 505 Camphor</title>
                    <meta
                      name="description"
                      content="Find answers to frequently asked questions about 505 Camphor, its uses, benefits, and where to buy."
                    />
                  </Helmet>
                  <FaqComponent />
                </>
              }
            />

            {/* Product Gallery */}
            <Route
              path="/product-gallery"
              element={
                <>
                  <Helmet>
                    <title>Product Gallery - 505 Camphor</title>
                    <meta
                      name="description"
                      content="Browse our collection of pure, natural camphor products for worship, meditation, and wellness."
                    />
                  </Helmet>
                  <ProductGallery />
                </>
              }
            />

            {/* Product Details */}
            <Route
              path="/product/:id"
              element={
                <>
                  <Helmet>
                    <title>Product Details - 505 Camphor</title>
                    <meta
                      name="description"
                      content="View detailed information about this pure, natural camphor product from 505 Camphor."
                    />
                  </Helmet>
                  <ProductSection />
                </>
              }
            />

            {/* Contact Page */}
            <Route
              path="/contact"
              element={
                <>
                  <Helmet>
                    <title>Contact Us - 505 Camphor</title>
                    <meta
                      name="description"
                      content="Get in touch with 505 Camphor for inquiries, support, or bulk orders."
                    />
                  </Helmet>
                  <ContactForm />
                </>
              }
            />

            {/* Blog Page */}
            <Route
              path="/blog"
              element={
                <>
                  <Helmet>
                    <title>Blog - 505 Camphor</title>
                    <meta
                      name="description"
                      content="Read our latest blog posts about camphor, its uses, benefits, and spiritual significance."
                    />
                  </Helmet>
                  <BlogList />
                </>
              }
            />

            {/* Blog Post */}
            <Route
              path="/blog/:postId"
              element={
                <>
                  <Helmet>
                    <title>Blog Post - 505 Camphor</title>
                    <meta
                      name="description"
                      content="Read this blog post about camphor and its uses in worship, meditation, and wellness."
                    />
                  </Helmet>
                  <BlogPost />
                </>
              }
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;