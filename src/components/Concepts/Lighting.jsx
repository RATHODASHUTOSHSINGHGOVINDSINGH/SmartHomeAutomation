import React from "react";
import ImageWithFallback from "../ImageErrorBoundary";

const Lighting = () => {
  return (
    <div className="bg-white text-gray-800 pt-16">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[60vh] md:h-[80vh] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("/concepts/automate1.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Control Your Lights, Your Way
          </h1>
          <p className="text-white text-lg md:text-xl mb-6">
            Discover a smarter way to control your lights. Sync the hue and
            brightness, set schedules to turn them on/off. Control them from
            your smartphone while you&apos;re away. And all this, without the
            hassle of internal wiring.
          </p>
        </div>
      </section>

      {/* Create Your Own Ambience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Create Your Own Ambience
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong className="block text-lg mb-1">Infinite Colours</strong>
                <p>
                  Based on your mood or time of the day, you can customize your
                  lighting by selecting from a wide range of 16 million colours.
                </p>
              </li>
              <li>
                <strong className="block text-lg mb-1">
                  Control From Anywhere in the World
                </strong>
                <p>
                  Smart lighting can be controlled from anywhere in the world.
                  You can even set triggers or group lights in different rooms
                  to give an impression that you&apos;re never away.
                </p>
              </li>
              <li>
                <strong className="block text-lg mb-1">
                  Connect with Other Smart Home Devices
                </strong>
                <p>
                  Your smart lighting gets inputs from compatible smart home
                  devices and intelligently reacts to your routines.
                </p>
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <ImageWithFallback
              src="/concepts/automate2.jpg"
              alt="Ambient lighting"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>
        </div>
      </section>

      {/* Stats + Control Section (Dark Background) */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
            <div>
              <p className="text-4xl font-bold text-red-600">16</p>
              <p className="text-lg">Million Colours</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-yellow-600">15</p>
              <p className="text-lg">Mood Presets</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">50</p>
              <p className="text-lg">Max Connected Bulbs</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-600">80%</p>
              <p className="text-lg">Energy Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Control from Smartphone */}
      <section className="bg-white-800 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <ImageWithFallback
              src="/concepts/automate3.jpg"
              alt="Smartphone Control"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Control From Your Smartphone</h3>
            <p className="leading-relaxed mb-4">
            Smart lighting offers endless possibilities to control your lights from your smartphone or a tablet. Select the range of warm cool white lights and change its intensity that suits your need. Add splashes of different lights and colors and transform your every occasion into a unique memory.
            </p>
          </div>
        </div>
      </section>
      

      {/* Create the Perfect Mood Section (Dark Background) */}
      <section className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Create the Perfect Mood</h3>
            <p className="leading-relaxed">
              Want to highlight your favourite music and make it dance along
              with your party? Just import your music, and your smart lighting
              will sync to the beat, turning your living room into a mini dance
              floor. You can even set up dynamic party lights, and as you keep
              gaming, the lighting transitions to your game environment. A VR
              viewing experience like never before.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <ImageWithFallback
              src="/concepts/automate4.jpg"
              alt="Perfect Mood"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>
        </div>
      </section>

      {/* Plug-and-Play Setup Section (Dark Background) */}
      <section className="bg-white-800 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <ImageWithFallback
              src="/concepts/automate5.jpg"
              alt="Plug and Play Setup"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Plug-and-Play Setup</h3>
            <p className="leading-relaxed mb-4">
              As each bulb comes with the injector for communicating to your
              home Wi-Fi network, it makes the setup for smart bulbs super easy.
              Need any more freedom? Introduce a smart hub in your system, and
              you can bridge all your traditional lights. The entire
              installation can be completed in mere plug-and-play steps.
            </p>
            <p className="leading-relaxed">
              (1) Install your bulb, (2) Download the app, (3) Connect to Wi-Fi
              and enjoy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lighting;
