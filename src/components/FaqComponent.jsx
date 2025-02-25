/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import { ChevronDown } from 'lucide-react';

const FaqComponent = ({ categories = defaultCategories }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleFaq = (itemId) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      {/* Add Helmet to manage the document head */}
      <Helmet>
        <title>Frequently Asked Questions - 505 Camphor</title>
        <meta
          name="description"
          content="Explore frequently asked questions about 505 Camphor, its benefits, uses, spiritual significance, and more. Find answers to all your queries here."
        />
        <meta
          name="keywords"
          content="505 Camphor, FAQ, benefits of camphor, spiritual uses of camphor, camphor for worship, buy camphor"
        />
      </Helmet>

      <h1 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">
        {categories.map((category, categoryIndex) => (
          <div key={`category-${categoryIndex}`} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {category.category}
            </h2>

            <div className="space-y-3">
              {category.items.map((item, itemIndex) => {
                const itemId = `${categoryIndex}-${itemIndex}`;
                const isOpen = openItems.has(itemId);

                return (
                  <div key={itemId}
                    className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                    <button
                      onClick={() => toggleFaq(itemId)}
                      className="w-full px-4 py-3 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${itemId}`}
                    >
                      <span className="font-medium text-gray-900">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                          isOpen ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${itemId}`}
                        className="px-4 pb-3 text-gray-600"
                        role="region"
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const defaultCategories = [
  {
    category: "About 505 Camphor",
    items: [
      {
        question: "What is 505 Camphor?",
        answer: "505 Camphor is a premium-quality camphor widely used for religious rituals, meditation, and aromatherapy. It is known for its pure, natural fragrance and symbolic importance in spiritual practices like Buddhism and Hinduism."
      },
      {
        question: "What makes 505 Camphor different from regular camphor?",
        answer: "505 Camphor stands out for its superior purity, long-lasting aroma, and eco-friendly manufacturing process. It is free from harmful chemicals, making it ideal for spiritual and daily use."
      },
      {
        question: "Does 505 Camphor come with a certification of purity?",
        answer: "Yes, 505 Camphor is certified for its quality and purity, ensuring you receive a product that meets the highest standards for spiritual and personal use."
      }
    ]
  },
  {
    category: "Benefits and Uses",
    items: [
      {
        question: "What are the benefits of using 505 Camphor?",
        answer: "505 Camphor offers multiple benefits, including purifying the air with its antimicrobial properties, enhancing meditation and spiritual focus, acting as a natural insect repellent, and promoting relaxation and reducing stress with its calming aroma."
      },
      {
        question: "Can 505 Camphor be used for aromatherapy?",
        answer: "Yes, 505 Camphor is perfect for aromatherapy. Its natural fragrance promotes relaxation, clears the mind, and creates a calming ambiance."
      },
      {
        question: "Does 505 Camphor help in air purification?",
        answer: "Yes, 505 Camphor has natural antimicrobial properties that purify the air, eliminating bacteria, germs, and unpleasant odors."
      },
      {
        question: "Can I use 505 Camphor as an insect repellent?",
        answer: "Yes, 505 Camphor acts as a natural insect repellent. Place it in corners of your home or cupboards to keep mosquitoes and other pests away."
      },
      {
        question: "What are the health benefits of 505 Camphor?",
        answer: "505 Camphor helps in relieving stress and anxiety, acting as a natural decongestant for cold and cough, and purifying the air and eliminating bacteria."
      }
    ]
  },
  {
    category: "Spiritual and Cultural Significance",
    items: [
      {
        question: "How is 505 Camphor used in Buddhism?",
        answer: "In Buddhism, 505 Camphor symbolizes purity and enlightenment. It is used during meditation, prayer, and rituals to create a serene environment and uplift spiritual energy."
      },
      {
        question: "What are the spiritual uses of 505 Camphor?",
        answer: "505 Camphor is used for lighting lamps during prayers, meditation, and ceremonies. It is believed to ward off negative energy and attract positive vibrations in spiritual spaces."
      },
      {
        question: "What are the cultural significances of 505 Camphor?",
        answer: "505 Camphor holds cultural importance in rituals, festivals, and prayers in Hinduism and Buddhism. It represents purity, devotion, and the dispelling of darkness."
      },
      {
        question: "Why is camphor burning important in spiritual practices?",
        answer: "Burning camphor is believed to dispel negativity, purify the environment, and connect devotees to divine energy. It acts as a bridge between the physical and spiritual realms."
      }
    ]
  },
  {
    category: "Safety and Storage",
    items: [
      {
        question: "Is 505 Camphor safe to use?",
        answer: "Yes, 505 Camphor is made from high-quality natural ingredients and is safe for use in religious ceremonies, aromatherapy, and daily pujas. Always follow the instructions for safe handling."
      },
      {
        question: "Does 505 Camphor contain any harmful chemicals?",
        answer: "No, 505 Camphor is 100% natural and free from harmful chemicals, ensuring safety for spiritual and household use."
      },
      {
        question: "How should 505 Camphor be stored?",
        answer: "Store 505 Camphor in a cool, dry place away from direct sunlight and moisture. Ensure it is kept in an airtight container to retain its aroma and effectiveness."
      }
    ]
  },
  {
    category: "Purchasing and Availability",
    items: [
      {
        question: "Where can I buy 505 Camphor?",
        answer: "You can purchase authentic 505 Camphor on our website or from trusted online marketplaces like Amazon, Flipkart, and other authorized retailers."
      },
      {
        question: "What are the packaging options available for 505 Camphor?",
        answer: "505 Camphor is available in multiple packaging options, including small, medium, and bulk packs, catering to individual and commercial needs."
      }
    ]
  },
  {
    category: "Camphor in Sangli, Maharashtra, India",
    items: [
      {
        question: "What is the significance of using camphor in worship?",
        answer: "Camphor symbolizes purity and the transformation of ego into devotion. During worship, burning camphor represents the removal of negative energies and the elevation of spiritual focus, making it an essential element in Hindu and Buddhist rituals."
      },
      {
        question: "Why is 505 Camphor considered the best for worship in Sangli?",
        answer: "505 Camphor is renowned for its high purity, long-lasting fragrance, and chemical-free composition. Its superior quality ensures a smoke-free and clean burn, ideal for spiritual practices in homes and temples in Sangli, Maharashtra."
      },
      {
        question: "Where can I buy 505 Camphor in Sangli, Maharashtra?",
        answer: "You can purchase 505 Camphor at local stores in Sangli or order it online from trusted retailers such as Amazon, Flipkart, or the official 505 Camphor website."
      },
      {
        question: "Can 505 Camphor be used for temple rituals in Sangli?",
        answer: "Yes, 505 Camphor is widely used in temples across Sangli due to its purity and symbolic significance. It is perfect for aarti, havan, and other religious ceremonies."
      },
      {
        question: "How should I store 505 Camphor in Sangli’s humid climate?",
        answer: "To preserve its quality, store 505 Camphor in an airtight container in a cool, dry place. Avoid exposing it to direct sunlight or moisture."
      }
    ]
  }
];

export default FaqComponent;