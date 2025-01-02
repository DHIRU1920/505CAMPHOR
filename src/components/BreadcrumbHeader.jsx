import { useLocation, Link } from "react-router-dom";
import "./Breadcrumb.css";

const BreadcrumbHeader = () => {
  const location = useLocation();
  
  if (location.pathname === "/") return null;

  // Define routes and their display names
  const routes = {
    "about": "About",
    "product-gallery": "Product Gallery",
    "faq": "FAQ",
    "contact": "Contact",
    "testimonials": "Testimonials"
  };

  // Get current path segments
  const pathSegments = location.pathname
    .replace(/\/$/, '')  // Remove trailing slash
    .split("/")           // Split into segments
    .filter(part => part); // Filter empty parts

  // Create breadcrumb items with proper formatting
  const breadcrumbItems = pathSegments.reduce((acc, segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const displayName = routes[segment] || segment.replace(/-/g, ' ').toUpperCase();
    acc.push({ path, displayName });
    return acc;
  }, []);

  // Determine the display name of the current page
  const currentPageDisplayName = breadcrumbItems[breadcrumbItems.length - 1]?.displayName || 'HOME';

  return (
    <div className="breadcrumb-container">
      <div className="breadcrumb-content">
        <h1 className="breadcrumb-title">{currentPageDisplayName}</h1>
        <div className="breadcrumb-path-container">
          <p className="breadcrumb-path">
            <Link to="/" className="breadcrumb-home">Home</Link>
            {breadcrumbItems.map((item, index) => (
              <span key={item.path}>
                {' / '}
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
