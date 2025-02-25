import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import React Helmet
import "./Breadcrumb.css";

const BreadcrumbHeader = () => {
  const location = useLocation();

  // Hide breadcrumb on homepage or product detail pages
  if (location.pathname === "/" || location.pathname.startsWith("/product/")) return null;

  // Map route segments to display names
  const routeNames = {
    about: "About",
    "product-gallery": "Product Gallery",
    faq: "FAQ",
    contact: "Contact",
    testimonials: "Testimonials",
  };

  // Split the path into segments and filter out empty strings
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // Build breadcrumb items
  const breadcrumbItems = [];
  let accumulatedPath = "";

  pathSegments.forEach((segment) => {
    accumulatedPath += `/${segment}`;

    breadcrumbItems.push({
      path: accumulatedPath,
      displayName: routeNames[segment] || segment.replace(/-/g, " "),
    });
  });

  // Get the current page title for SEO
  const currentPageTitle = breadcrumbItems.length > 0 ? breadcrumbItems.at(-1).displayName : "Home";

  return (
    <>
      {/* Page-Specific SEO with React Helmet */}
      <Helmet>
        <title>{currentPageTitle} - 505 Camphor</title>
        <meta
          name="description"
          content={`Explore ${currentPageTitle} on 505 Camphor. Learn more about our products, services, and commitment to quality.`}
        />
        <meta
          name="keywords"
          content={`505 Camphor, ${currentPageTitle}, camphor benefits, camphor uses, camphor for worship, camphor for meditation`}
        />
        <meta property="og:title" content={`${currentPageTitle} - 505 Camphor`} />
        <meta
          property="og:description"
          content={`Explore ${currentPageTitle} on 505 Camphor. Learn more about our products, services, and commitment to quality.`}
        />
        <link rel="canonical" href={`https://www.505camphor.com${location.pathname}`} />
      </Helmet>

      {/* Breadcrumb UI */}
      <div className="breadcrumb-container">
        <div className="breadcrumb-content">
          <h1 className="breadcrumb-title">{currentPageTitle}</h1>
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
    </>
  );
};

export default BreadcrumbHeader;