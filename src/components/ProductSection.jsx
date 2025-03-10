import { useParams, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import Helmet
import products from "./products"; // Import product data
import "./ProductSection.css";
import { useNavigate } from "react-router-dom"; // For navigation

const ProductSection = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate
  let product = location.state?.product;

  // Debugging: Log the product from location.state
  console.log("Product from location.state:", product);

  // If product data is missing, find it from the products array
  if (!product) {
    product = products.find((p) => p.id === parseInt(id, 10));
    console.log("Product from products array:", product);
  }

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  // Handle Read More click
  const handleReadMore = () => {
    navigate("/contact"); // Redirect to contact page
  };

  return (
    <div className="product-section">
      {/* Add Helmet for SEO and document head management */}
      <Helmet>
        <title>{product.name} - 505 Camphor</title>
        <meta
          name="description"
          content={`Discover ${product.name}, a premium camphor product from 505 Camphor. ${product.description}`}
        />
        <meta
          name="keywords"
          content={`505 Camphor, ${product.name}, ${product.category}, camphor for worship, buy camphor`}
        />
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={`${product.name} - 505 Camphor`} />
        <meta
          property="og:description"
          content={`Discover ${product.name}, a premium camphor product from 505 Camphor. ${product.description}`}
        />
        <meta property="og:image" content={product.image} />
        <meta property="og:url" content={`https://yourwebsite.com/product/${product.id}`} />
      </Helmet>

      <div className="product-container">
        {/* Product Details */}
        <div className="product-details">
          <div className="left-section">
            {/* 1. Name */}
            <h1 className="product-name">
              <span className="product-name-main">{product.name}</span>
            </h1>

            {/* 2. Info */}
            <div className="info-item">
              <strong className="info-label"></strong>
              <span className="info-value">
                {product.info || "No additional information available."}
              </span>
            </div>

            {/* 3. Type */}
            <div className="info-item">
              <strong className="info-label">Type:</strong>
              <span className="info-value">{product.category}</span>
            </div>

            {/* 4. Quantity */}
            <div className="info-item">
              <strong className="info-label">Quantity:</strong>
              <span className="info-value">{product.weight}g</span>
            </div>

            {/* Read More Button */}
            <button className="read-more-btn" onClick={handleReadMore}>
              Enquire Now
            </button>
          </div>

          <div className="right-section">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              onError={(e) => (e.target.src = "/assets/default.png")}
            />
          </div>
        </div>

        {/* 5. Description */}
        <div className="product-description-section">
          <h2 className="section-title">Description</h2>
          <p className="product-full-description">{product.description}</p>
        </div>

        {/* 6. Advantages */}
        {product.advantages && (
          <div className="advantages-section">
            <h2 className="section-title">Advantages</h2>
            <ul className="advantages-list">
              {product.advantages.map((advantage, index) => {
                const colonIndex = advantage.indexOf(":");
                const title =
                  colonIndex !== -1
                    ? advantage.slice(0, colonIndex)
                    : advantage;
                const desc =
                  colonIndex !== -1 ? advantage.slice(colonIndex + 1) : "";
                return (
                  <li key={index}>
                    <strong>{title}:</strong> {desc}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSection;