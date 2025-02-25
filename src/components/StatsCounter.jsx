import { useEffect } from "react";
import "./StatsCounter.module.css"; // Import the CSS file for additional custom styles

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
    <div className="flex justify-center items-center bg-gradient-to-br from-[#fef3e7] to-[#fde4d3] py-8 md:py-16">
      <div className="w-full max-w-7xl p-4 md:p-8 bg-white/30 backdrop-blur-md text-[#ea580c] rounded-lg shadow-lg border border-white/40">
        <div className="text-center mb-6 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#ea580c] mb-2 md:mb-4">Our Achievements</h1>
          <p className="text-[#ea580c]/80 text-base md:text-lg">Proudly showcasing our milestones and success</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 text-center">
          {/* Stats */}
          <div className="p-4 md:p-6 transform transition duration-300 hover:-translate-y-1 hover:shadow-lg bg-white/40 rounded-lg border border-white/50">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#ea580c]" id="experience">0</h1>
            <p className="mt-2 text-base md:text-lg uppercase text-[#ea580c]/80">Years of Experience</p>
          </div>
          <div className="p-4 md:p-6 transform transition duration-300 hover:-translate-y-1 hover:shadow-lg bg-white/40 rounded-lg border border-white/50">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#ea580c]" id="distributors">0</h1>
            <p className="mt-2 text-base md:text-lg uppercase text-[#ea580c]/80">Distributors</p>
          </div>
          <div className="p-4 md:p-6 transform transition duration-300 hover:-translate-y-1 hover:shadow-lg bg-white/40 rounded-lg border border-white/50">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#ea580c]" id="products">0</h1>
            <p className="mt-2 text-base md:text-lg uppercase text-[#ea580c]/80">Products</p>
          </div>
          <div className="p-4 md:p-6 transform transition duration-300 hover:-translate-y-1 hover:shadow-lg bg-white/40 rounded-lg border border-white/50">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#ea580c]" id="states">0</h1>
            <p className="mt-2 text-base md:text-lg uppercase text-[#ea580c]/80">States</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;