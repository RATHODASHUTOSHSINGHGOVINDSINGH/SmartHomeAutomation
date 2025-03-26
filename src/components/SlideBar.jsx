import { useState, useEffect } from "react";

const images = [
  "images/home1.jpg",
  "images/home2.jpg",
];

const SlideBar = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative flex items-center justify-center bg-gray-200"
      style={{
        width: "100%",
        height: "90vh",  // Increased height from 80vh to 90vh
        marginTop: "64px",  // Starts right below the navbar
        position: "relative",
        overflow: "hidden", // Ensure nothing spills out
      }}
    >
      <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <img
          src={images[current]}
          alt="Slide"
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover",  // This ensures the image covers the container without distortion
            objectPosition: "center" // Center the image
          }}
          onError={(e) => {
            console.error(`Failed to load image: ${images[current]}`);
            e.target.src = "images/fallback.jpg"; // Optional fallback image
          }}
        />
      </div>
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 px-4 py-2 rounded-full shadow-lg hover:bg-opacity-100 transition-all"
        onClick={prevSlide}
      >
        ←
      </button>
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 px-4 py-2 rounded-full shadow-lg hover:bg-opacity-100 transition-all"
        onClick={nextSlide}
      >
        →
      </button>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${current === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideBar;
