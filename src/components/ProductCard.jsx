  // ProductCard.jsx
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // For prop validation
import "./ProductCard.css"; // Basic styling

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} state={{ product }}>
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => (e.target.src = "/assets/default.png")} // Fallback image
        />
        <h3>{product.name}</h3>
        <div className="weight">{product.weight}</div>
      </Link>
    </div>
  );
};

// Prop validation
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;