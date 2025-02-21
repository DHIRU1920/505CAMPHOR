import { useParams, useLocation } from "react-router-dom";
import products from "./products"; // Import product data
import "./ProductSection.css";

const ProductSection = () => {
  const { id } = useParams();
  const location = useLocation();
  let product = location.state?.product;

  // Debugging: Log the product from location.state
  console.log("Product from location.state:", product);

  // If product data is missing, find it from the products array
  if (!product) {
    product = products.find((p) => p.id === parseInt(id, 10));
    console.log("Product from products array:", product);
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-section">
      <div className="product-details">
        <div className="left-section">
          <h1>{product.name}</h1>
          <p>{product.description || "No description available."}</p>
          <ul>
            <li>
              <strong>Type:</strong> {product.category}
            </li>
            <li>
              <strong>Quantity:</strong> {product.weight}g
            </li>
          </ul>
        </div>
        <div className="right-section">
          {product.image ? (
            <img src={product.image} alt={product.name} />
          ) : (
            <p>No image available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;