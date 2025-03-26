import React from "react";
import SlideBar from "./SlideBar";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <>
    <div className="w-full">
    <SlideBar />
    <div className="bg-gray-100 py-16 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side - Image */}
        <div className="lg:w-1/2">
          <img
            src="images/image1.jpg"
            alt="Woman using smart home assistant"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
          <h2 className="text-3xl font-semibold text-gray-900">
            Live in the Future
          </h2>
          <div className="mt-6 space-y-6">
            <div className="flex items-start">
              <span className="text-teal-500 text-2xl mr-4">📱</span>
              <div>
                <h3 className="text-xl font-semibold">Control Everything at Your Fingertips</h3>
                <p className="text-gray-600">
                  Turn on your lights, play your favourite music or change your room temperature, at the tap of your smartphone.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-teal-500 text-2xl mr-4">⚙️</span>
              <div>
                <h3 className="text-xl font-semibold">Run Personalized Schedules</h3>
                <p className="text-gray-600">
                  Have your coffee ready when you wake up. Automatically turn everything off when you leave for work. Experience true intelligence.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-teal-500 text-2xl mr-4">🎙️</span>
              <div>
                <h3 className="text-xl font-semibold">Talk to Your Home or Make it Talk</h3>
                <p className="text-gray-600">
                  Simply talk to your virtual voice assistant, and ask it to do anything for you – be it ordering groceries to solving a math problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white py-16 px-6 lg:px-20">
      {/* Features Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <img src="images/1.png" alt="Renowned Brands" className="w-24 h-24" />
          <h3 className="mt-4 text-lg font-semibold">Renowned Brands</h3>
          <p className="text-gray-600">
            We handpick devices from some of the best home automation brands in the world.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <img src="images/2.png" alt="Wireless Configuration" className="w-24 h-24" />
          <h3 className="mt-4 text-lg font-semibold">Wireless Configuration</h3>
          <p className="text-gray-600">
            Our entire system is completely wireless, so no added cost of internal wiring.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <img src="images/3.png" alt="Personalized Setup" className="w-24 h-24" />
          <h3 className="mt-4 text-lg font-semibold">Personalized Setup</h3>
          <p className="text-gray-600">
            We help you find that sweet spot, between what you need and what automation can offer.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center">
          <img src="images/4.png" alt="Online Support" className="w-24 h-24" />
          <h3 className="mt-4 text-lg font-semibold">Online Support</h3>
          <p className="text-gray-600">
            We'll be with you throughout your smart home journey, available via chat or email.
          </p>
        </div>
      </div>

      
    </div>
    </div>
    </>

  );
};

export default Home;
