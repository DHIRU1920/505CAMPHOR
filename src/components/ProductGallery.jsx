import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import Helmet
import "./ProductGallery.css";
import products from "./products";
import ProductCard from "./ProductCard";

const ProductGallery = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState("name");
  const [filterCategory, setFilterCategory] = useState("All");
  const navigate = useNavigate();

  const sortProducts = (option) => {
    let sortedProducts = [...filteredProducts];
    if (option === "name") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "weight") {
      sortedProducts.sort((a, b) => a.weight - b.weight);
    }
    setFilteredProducts(sortedProducts);
  };

  const filterProducts = (category) => {
    const filtered = category === "All" ? products : products.filter((product) => product.category === category);
    setFilterCategory(category);
    setFilteredProducts(filtered);
  };

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="gallery-container">
      {/* Add Helmet for SEO and document head management */}
      <Helmet>
        <title>Premium Camphor Collection - 505 Camphor</title>
        <meta
          name="description"
          content="Explore our premium camphor collection, featuring high-quality products crafted for purity and excellence. Filter and sort by category or weight."
        />
        <meta
          name="keywords"
          content="505 Camphor, premium camphor, camphor collection, buy camphor, camphor for worship"
        />
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Premium Camphor Collection - 505 Camphor" />
        <meta
          property="og:description"
          content="Explore our premium camphor collection, featuring high-quality products crafted for purity and excellence."
        />
        <meta property="og:image" content="https://yourwebsite.com/assets/camphor-collection.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/product-gallery" />
      </Helmet>

      <div className="header">
        <h1>Premium Camphor Collection</h1>
        <p>Explore our high-quality camphor products, crafted for purity and excellence.</p>
      </div>

      <div className="controls">
        <div className="sort">
          <label>Sort by</label>
          <select
            value={sortOption}
            onChange={(e) => {
              setSortOption(e.target.value);
              sortProducts(e.target.value);
            }}
          >
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>

        <div className="filter">
          <label>Category</label>
          <select
            value={filterCategory}
            onChange={(e) => filterProducts(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product)} />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;