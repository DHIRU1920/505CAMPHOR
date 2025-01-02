import { useState } from 'react';
import './Faq.css'; // Import CSS for the FAQ component

const FaqComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Camphor used for?",
      answer: "Camphor is used in medicine, religious ceremonies, and as a fragrant ingredient in skincare products."
    },
    {
      question: "How is Camphor produced?",
      answer: "Camphor is produced through steam distillation of the wood from camphor trees, followed by purification."
    },
    {
      question: "What are the benefits of using Camphor?",
      answer: "Camphor has anti-inflammatory, analgesic, and antiseptic properties, making it beneficial for various ailments."
    },
    {
      question: "Is Camphor safe for all skin types?",
      answer: "Camphor is generally safe for most skin types, but it may cause irritation for sensitive skin. Always perform a patch test."
    },
    {
      question: "Can Camphor be ingested?",
      answer: "Camphor is toxic when ingested in large quantities and should not be consumed. Always consult a healthcare professional."
    },
    {
      question: "Where can I buy Camphor products?",
      answer: "Camphor products can be purchased at pharmacies, health stores, and online retailers."
    },
    {
      question: "What is the shelf life of Camphor?",
      answer: "Camphor typically has a shelf life of about three to five years when stored properly in a cool, dry place."
    },
    {
      question: "Can Camphor be used for pain relief?",
      answer: "Yes, Camphor is often used in topical pain relief products to soothe muscle and joint pain."
    },
    {
      question: "Is Camphor safe for children?",
      answer: "Camphor should be used with caution around children, and it is advised to consult a pediatrician before use."
    },
    {
      question: "What is the difference between natural and synthetic Camphor?",
      answer: "Natural Camphor is derived from camphor trees, while synthetic Camphor is produced chemically. Both have similar properties."
    },
  ];

  return (
    <div className="faq-component">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-content">
              <div className="faq-question">
                <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
                {item.question}
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;
