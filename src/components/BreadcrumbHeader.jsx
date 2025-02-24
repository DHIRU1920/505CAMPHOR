import { useLocation, Link } from "react-router-dom";
import "./Breadcrumb.css";

const BreadcrumbHeader = () => {
  const location = useLocation();

  if (location.pathname === "/" || location.pathname.startsWith("/product/")) return null;

  const routeNames = {
    about: "About",
    "product-gallery": "Product Gallery",
    faq: "FAQ",
    contact: "Contact",
    testimonials: "Testimonials",
  };

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const breadcrumbItems = [];
  let accumulatedPath = "";

  pathSegments.forEach((segment) => {
    accumulatedPath += `/${segment}`;

    breadcrumbItems.push({
      path: accumulatedPath,
      displayName: routeNames[segment] || segment.replace(/-/g, " "),
    });
  });

  return (
    <div className="breadcrumb-container">
      <div className="breadcrumb-content">
        <h1 className="breadcrumb-title">
          {breadcrumbItems.length > 0 ? breadcrumbItems.at(-1).displayName : "HOME"}
        </h1>
        <div className="breadcrumb-path-container">
          <p className="breadcrumb-path">
            <Link to="/" className="breadcrumb-home">
              Home
            </Link>
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
