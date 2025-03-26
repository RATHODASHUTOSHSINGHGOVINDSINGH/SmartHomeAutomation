import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
        height: "90vh", 
        maxHeight: "800px", // Set a max height for very large screens
        minHeight: "300px", // Set a min height for small screens
        marginTop: "64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="w-full h-full overflow-hidden">
        <img
          src={images[current]}
          alt="Smart Home Slider"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            console.error(`Failed to load image: ${images[current]}`);
            e.target.src = "images/fallback.jpg";
          }}
        />
      </div>
      
      {/* Text overlay for slider */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-8">
        <div className="bg-black bg-opacity-50 p-4 md:p-8 rounded-lg max-w-3xl">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
            Smart Living Made Simple
          </h1>
          <p className="text-sm md:text-lg text-white max-w-lg mx-auto">
            Control your home from anywhere with our cutting-edge smart home automation solutions
          </p>
        </div>
      </div>
      
      <button 
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 md:p-3 rounded-full shadow-lg hover:bg-opacity-100 transition-all focus:outline-none"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-gray-800" />
      </button>
      <button 
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 md:p-3 rounded-full shadow-lg hover:bg-opacity-100 transition-all focus:outline-none"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FaChevronRight className="text-gray-800" />
      </button>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${current === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideBar;
