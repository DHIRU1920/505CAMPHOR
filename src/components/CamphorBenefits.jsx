import PropTypes from 'prop-types';

const BenefitCard = ({ icon, title, text }) => (
  <div className="bg-white rounded-2xl p-4 md:p-6 hover:shadow-xl transition-all duration-300 border border-[#eec3a2]/30 hover:border-[#eec3a2]/70 transform hover:-translate-y-1 group">
    <div className="flex justify-center items-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#eec3a2]/10 text-2xl md:text-3xl mb-4 md:mb-5 mx-auto group-hover:bg-[#eec3a2]/20 transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-lg md:text-xl font-semibold text-[#8b5a2b] mb-2 md:mb-3 text-center">{title}</h3>
    <p className="text-sm md:text-base text-[#8b5a2b]/80 leading-relaxed text-center">{text}</p>
  </div>
);

BenefitCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const FeatureItem = ({ children }) => (
  <li className="flex items-center gap-2 text-sm md:text-base text-[#8b5a2b]/80">
    <span className="text-[#eec3a2]">✦</span>
    {children}
  </li>
);

FeatureItem.propTypes = {
  children: PropTypes.node.isRequired,
};

const CamphorBenefits = () => {
  const benefits = [
    {
      icon: "🌿",
      title: "Natural Purification",
      text: "Effectively purifies surroundings while maintaining a balanced atmospheric harmony."
    },
    {
      icon: "⚡",
      title: "Therapeutic Relief",
      text: "Natural properties provide soothing comfort and promote overall wellness."
    },
    {
      icon: "🔮",
      title: "Ayurvedic Harmony",
      text: "Balances Kapha Dosha and provides relief from Vata-related discomfort."
    },
    {
      icon: "✨",
      title: "Holistic Benefits",
      text: "Creates an energetically balanced environment promoting complete well-being."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf6f2] to-white py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-[#eec3a2] font-light uppercase tracking-widest mb-2 md:mb-3 text-sm md:text-base">Pure & Natural</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-[#8b5a2b] mb-4 md:mb-6">
            Premium Camphor Solutions
          </h1>
          <p className="text-sm md:text-lg text-[#8b5a2b]/80 max-w-2xl mx-auto">
            Experience the ancient wisdom and natural benefits of our premium-grade camphor products
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-20">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
        
        {/* Divider */}
        <div className="flex items-center justify-center mb-8 md:mb-16">
          <div className="h-px bg-[#eec3a2]/30 w-1/3"></div>
          <div className="px-4 text-[#eec3a2]">✦</div>
          <div className="h-px bg-[#eec3a2]/30 w-1/3"></div>
        </div>
        
        {/* Additional Information Section */}
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-lg border border-[#eec3a2]/20 flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="md:w-1/2">
            <h3 className="text-xl md:text-2xl font-semibold text-[#8b5a2b] mb-4 md:mb-6">Why Choose Our Camphor?</h3>
            <ul className="space-y-2 md:space-y-3">
              <FeatureItem>100% Pure & Natural Ingredients</FeatureItem>
              <FeatureItem>Sustainably Sourced from Premium Trees</FeatureItem>
              <FeatureItem>Traditional Processing Methods</FeatureItem>
              <FeatureItem>Free from Harmful Chemicals</FeatureItem>
              <FeatureItem>Eco-friendly Packaging</FeatureItem>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl md:text-2xl font-semibold text-[#8b5a2b] mb-4 md:mb-6">How To Use</h3>
            <ul className="space-y-2 md:space-y-3">
              <FeatureItem>Place in living spaces for natural purification</FeatureItem>
              <FeatureItem>Add to bathwater for therapeutic benefits</FeatureItem>
              <FeatureItem>Use with a diffuser for aromatic wellness</FeatureItem>
              <FeatureItem>Incorporate into meditation practices</FeatureItem>
              <FeatureItem>Store with clothing for natural protection</FeatureItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamphorBenefits;