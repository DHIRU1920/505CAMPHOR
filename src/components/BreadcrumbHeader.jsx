import { useLocation, Link, useParams } from "react-router-dom";
import products from "./products";
import "./Breadcrumb.css";

const BreadcrumbHeader = () => {
  const location = useLocation();
  const { id } = useParams();

  if (location.pathname === "/") return null;

  const routes = {
    about: "About",
    "product-gallery": "Product Gallery",
    faq: "FAQ",
    contact: "Contact",
    testimonials: "Testimonials",
  };

  let pathSegments = location.pathname.split("/").filter(Boolean);
  let breadcrumbItems = [];
  let path = "";

  pathSegments.forEach((segment) => {
    if (segment === id) {
      path = `/product-gallery/${id}`;
      breadcrumbItems.push({ path: "/product-gallery", displayName: "Product Gallery" });

      const product = products.find((p) => p.id === parseInt(id, 10));
      breadcrumbItems.push({ path, displayName: product ? product.name : "Product" });

      return;
    }

    path += `/${segment}`;
    breadcrumbItems.push({ path, displayName: routes[segment] || segment.replace(/-/g, " ").toUpperCase() });
  });

  return (
    <div className="breadcrumb-container">
      <div className="breadcrumb-content">
        <h1 className="breadcrumb-title">{breadcrumbItems.at(-1)?.displayName || "HOME"}</h1>
        <div className="breadcrumb-path-container">
          <p className="breadcrumb-path">
            <Link to="/" className="breadcrumb-home">Home</Link>
            {breadcrumbItems.map((item, index) => (
              <span key={item.path}>
                {" / "}
                {index === breadcrumbItems.length - 1 ? (
                  <span className="breadcrumb-current">{item.displayName}</span>
                ) : (
                  <Link to={item.path} className="breadcrumb-item">
                    {item.displayName}
                  </Link>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbHeader;
