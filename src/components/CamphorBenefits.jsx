/* eslint-disable react/prop-types */
const BenefitCard = ({ icon, title, text }) => (
    <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border-2 border-green-200 shadow-sm">
      <div className="text-4xl mb-4 border-b border-green-100 pb-3">{icon}</div>
      <h3 className="text-xl font-medium text-green-800 mb-3">{title}</h3>
      <p className="text-green-700/90 leading-relaxed">{text}</p>
    </div>
  );
  
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
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-8 border-t-4 border-green-500">
        <div className="max-w-7xl mx-auto border border-green-100 rounded-3xl p-8 bg-white/50 shadow-md">
          <header className="text-center mb-16 border-b border-green-200 pb-8">
            <h1 className="text-3xl font-semibold text-green-900 mb-4">
              Premium Camphor Solutions
            </h1>
            <p className="text-green-700 text-lg max-w-2xl mx-auto">
              Experience the pure and natural benefits of premium-grade camphor
            </p>
          </header>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default CamphorBenefits;
  