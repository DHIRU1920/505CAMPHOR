import  { useEffect } from 'react';
import footerImage from '../assets/footer.jpg'; // Import the image
import './StatsCounter.module.css'; // Import the CSS file for additional custom styles

const StatsCounter = () => {
  // Counter Animation Function
  const animateCounter = (id, targetValue) => {
    const element = document.getElementById(id);
    let currentValue = 0;
    const increment = Math.ceil(targetValue / 100);

    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(interval);
      }
      element.textContent = currentValue;
    }, 20); // Update every 20ms
  };

  // Trigger Animation on Component Mount
  useEffect(() => {
    animateCounter("experience", 65);
    animateCounter("distributors", 200);
    animateCounter("products", 25);
    animateCounter("states", 10);
  }, []);

  return (
<div
  className="flex justify-center items-center min-h-[70vh] bg-cover bg-center" // Reduced height to 70vh
  style={{ backgroundImage: `url(${footerImage})` }} // Inline style for background image
>
  <div className="w-full max-w-7xl p-8 bg-orange-400/90 text-white rounded-lg shadow-2xl">
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-white mb-4">Our Achievements</h1>
      <p className="text-orange-100 text-lg">Proudly showcasing our milestones and success</p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
      {/* Stats */}
      <div className="p-6 transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h1 className="text-5xl font-extrabold" id="experience">0</h1>
        <p className="mt-2 text-lg uppercase">Years of Experience</p>
      </div>
      <div className="p-6 transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h1 className="text-5xl font-extrabold" id="distributors">0</h1>
        <p className="mt-2 text-lg uppercase">Distributors</p>
      </div>
      <div className="p-6 transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h1 className="text-5xl font-extrabold" id="products">0</h1>
        <p className="mt-2 text-lg uppercase">Products</p>
      </div>
      <div className="p-6 transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h1 className="text-5xl font-extrabold" id="states">0</h1>
        <p className="mt-2 text-lg uppercase">States</p>
      </div>
    </div>
  </div>
</div>
  );
};

export default StatsCounter;