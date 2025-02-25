/* eslint-disable no-unused-vars */
import React from "react";
import { Helmet } from "react-helmet"; // Import React Helmet
import { Link } from "react-router-dom";
import img4 from "../assets/Slider_IMG4.png";
import img5 from "../assets/Slider_IMG5.png";
import img2 from "../assets/Slider_IMG2.png";
import img1 from "../assets/Slider_IMG1.png";

const BlogList = () => {
  const posts = [
    {
      id: "505-camphor-sangli",
      title: "505 Camphor Sangli: Redefining Purity and Tradition",
      excerpt:
        "In the heart of Sangli, 505 Camphor has emerged as a trusted name...",
      date: "Sep 20, 2023",
      author: "Admin",
      image: img1,
    },
    {
      id: "best-camphor-brand-in-india",
      title: "505 Camphor: Best Camphor Brand in India",
      excerpt: "505 Camphor, a name synonymous with purity and tradition...",
      date: "Sep 20, 2023",
      author: "Admin",
      image: img2,
    },
    {
      id: "505-camphor-bridging-tradition-and-innovation",
      title:
        "505 Camphor: Bridging Tradition and Innovation for Health and Healing",
      excerpt:
        "505 Camphor is a white, crystalline substance derived from the wood...",
      date: "Sep 23, 2023",
      author: "Admin",
      image: img5,
    },
    {
      id: "505-camphor-eco-friendly-insect-repellent",
      title:
        "505 Camphor: An Eco-Friendly Insect Repellent for a Healthier Planet",
      excerpt:
        "As environmental awareness continues to grow, so does the demand...",
      date: "Sep 25, 2023",
      author: "Admin",
      image: img4,
    },
    {
      id: "505-camphor-natural-preservative",
      title:
        "505 Camphor: The Extraordinary Function of 505 Camphor as a Natural Preservative",
      excerpt: "505 Camphor is a crystalline substance that exudes a strong...",
      date: "Sep 26, 2023",
      author: "Admin",
      image: img1,
    },
    {
      id: "505-camphor-meditation-benefits",
      title:
        "The Healing Benefits of 505 Camphor in Meditation: An In-Depth Overview",
      excerpt: "Meditation is a practice deeply rooted in various cultures...",
      date: "Sep 27, 2023",
      author: "Admin",
      image: img2,
    },
    {
      id: "505-camphor-premium-quality",
      title:
        "Unveil the Wonders of 505 Camphor: The Purest and Most Premium Quality Camphor",
      excerpt:
        "505 Camphor, a natural chemical substance with a distinctive fragrance...",
      date: "Sep 28, 2023",
      author: "Admin",
      image: img5,
    },
  ];

  return (
    <>
      {/* Page-Specific SEO with React Helmet */}
      <Helmet>
        <title>Blog - 505 Camphor</title>
        <meta
          name="description"
          content="Explore our blog to learn about the benefits, uses, and cultural significance of 505 Camphor. Discover how our pure, natural camphor enhances worship, meditation, and wellness."
        />
        <meta
          name="keywords"
          content="505 Camphor blog, camphor benefits, camphor uses, camphor for worship, camphor for meditation, buy camphor online"
        />
        <meta property="og:title" content="Blog - 505 Camphor" />
        <meta
          property="og:description"
          content="Discover the latest insights about 505 Camphor, its benefits, and its role in enhancing spiritual and wellness practices."
        />
        <meta
          property="og:image"
          content="https://www.505camphor.com/images/blog-banner.jpg"
        />
        <link rel="canonical" href="https://www.505camphor.com/blog" />
      </Helmet>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  <Link to={`/blog/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {post.date} by {post.author}
                </p>
                <p className="text-gray-700 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default BlogList;
