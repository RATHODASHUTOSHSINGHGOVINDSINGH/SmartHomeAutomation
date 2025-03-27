import React from "react";
import Navbar from "./Navbar";
import ImageWithFallback from "./ImageErrorBoundary";

const useCases = [
  {
    image: "/usecases/1.png",
    text: "Flash team colour on LIFX lights when they score.",
  },
  {
    image: "/usecases/2.png",
    text: "Ask Alexa to trigger Party Mode",
  },
  {
    image: "/usecases/3.png",
    text: "Have Alexa turn off TV",
  },
  {
    image: "/usecases/4.png",
    text: "Flash your LIFX Lights When You Get a Text",
  },
  {
    image: "/usecases/5.png",
    text: "Automatically turn off Philips hue lights at sunrise.",
  },
];

const UseCase = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-black min-h-screen text-white py-16 pt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">Use-Cases</h2>
        <p className="text-gray-400 text-center mt-4">
          Know what it's like to interact with home automation systems inside your home. The below use-cases run on the Internet and provide an extraordinary connected experience.
        </p>

        {/* Use Cases List */}
        <div className="mt-12 space-y-10">
          {useCases.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-start">
              {/* Image with Error Handling */}
              <ImageWithFallback 
                src={item.image} 
                alt="Use Case" 
                className="w-64 h-36 object-cover rounded-lg shadow-lg" 
              />

              {/* Text */}
              <p className="text-lg text-white md:ml-10 mt-4 md:mt-0 border-l-4 border-teal-400 pl-4">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default UseCase;
