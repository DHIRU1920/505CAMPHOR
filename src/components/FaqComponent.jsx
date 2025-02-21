/* eslint-disable react/prop-types */
import { useState } from 'react';
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
    category: "Company",
    items: [
      { 
        question: "Is 505Camphor an Indian company?",
        answer: "Yes, 505Camphor is based in India, specializing in high-quality camphor products."
      },
      {
        question: "What does 505Camphor stand for?",
        answer: "505Camphor represents purity, tradition, and innovation in camphor-based solutions."
      },
      {
        question: "Can I get samples or discounts?",
        answer: "We offer samples and occasional discounts. Contact us for more details."
      }
    ]
  },
  {
    category: "Nutritional & Dietary",
    items: [
      {
        question: "Is camphor safe for consumption?",
        answer: "Only edible-grade camphor is safe for limited use in food preparations. Always check the label."
      },
      {
        question: "Are 505Camphor products organic?",
        answer: "We offer both natural and synthetic camphor products, ensuring the highest quality and purity."
      }
    ]
  },
  {
    category: "Products",
    items: [
      {
        question: "How to use camphor for aromatherapy?",
        answer: "Camphor can be used in diffusers or essential oil blends to promote relaxation and purification."
      },
      {
        question: "What is the shelf life of camphor?",
        answer: "Camphor typically lasts 3-5 years if stored in a cool, dry place away from direct sunlight."
      }
    ]
  }
];

export default FaqComponent;