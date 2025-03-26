import React from 'react'

function EnergyEfficiency() {
  return (
    <div className="bg-white text-gray-800">
    {/* Hero Section */}
    <section
      className="relative flex items-center justify-center h-[60vh] md:h-[80vh] bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url("/public/concepts/energy1.jpg")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
        Discover a Smarter Way to Save Energy.
        </h1>
        <p className="text-white text-lg md:text-xl">
        Use the power of technology to intelligently save money. Automatically turn off your air-conditioner, lights and fans when you’re not home. Get detailed insights into how much energy you’re consuming. Create personalized schedules to optimize energy consumption and comfort.
        </p>
      </div>
    </section>

    <section className="mb-12">
        <h2 className="text-4xl font-semibold mb-6 mt-10">Energy Management turns Simpler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-start mb-6">
              <span className="text-3xl mr-4">📱</span>
              <div>
                <h3 className="text-xl font-semibold">One Touch Control</h3>
                <p className="text-gray-600">Check and monitor the status of all your home electrical appliances over your smartphone. Control the devices at convenience and ease.</p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <span className="text-3xl mr-4">📊</span>
              <div>
                <h3 className="text-xl font-semibold">Energy Monitoring and Saving</h3>
                <p className="text-gray-600">Monitor and Control the energy usage patterns of different electrical appliances in your home. Trigger lights based on presence and day-time schedules for optimum energy usage.</p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <span className="text-3xl mr-4">💙</span>
              <div>
                <h3 className="text-xl font-semibold">Learn Usage Patterns</h3>
                <p className="text-gray-600">Based on your daily behavior and routine, your smart home devices will learn your energy usage patterns and optimize them giving you peace-of-mind.</p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="/public/concepts/energy2.jpg" 
              alt="Smart Home Illustration" 
              className=" w-full rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </section>
      <section className=" bg-white">
      <div className="p-6 bg-gray-100 min-h-screen">
      <div className="text-center text-2xl font-bold mb-8">
        A Home With a Security Alarm System Has ...
      </div>

      <div className="grid grid-cols-2 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 flex items-center justify-center border-4 border-teal-500 rounded-full">
            <span className="text-2xl font-bold">65%</span>
          </div>
          <p className="mt-2">Save Energy</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 flex items-center justify-center border-4 border-teal-500 rounded-full">
            <span className="text-2xl font-bold">95%</span>
          </div>
          <p className="mt-2">Optimize Consumption</p>
        </div>
      </div>

      <div className=" mx-auto bg-white p-6 rounded-lg shadow mt-8">
        <h3 className="text-lg font-semibold mb-4">Top Reasons For Theft Aversion</h3>
        <div className="mb-2">
          <p>Air Conditioner (35%)</p>
          <div className="bg-gray-300 h-2 rounded-full"><div className="bg-teal-500 h-2 w-[35%] rounded-full"></div></div>
        </div>
        <div className="mb-2">
          <p>Lights (25%)</p>
          <div className="bg-gray-300 h-2 rounded-full"><div className="bg-teal-500 h-2 w-[65%] rounded-full"></div></div>
        </div>
        <div className="mb-2">
          <p>Fans (15%)</p>
          <div className="bg-gray-300 h-2 rounded-full"><div className="bg-teal-500 h-2 w-[75%] rounded-full"></div></div>
        </div>
        <div>
          <p>Other Electrical Apppliances
          (25%)</p>
          <div className="bg-gray-300 h-2 rounded-full"><div className="bg-teal-500 h-2 w-[45%] rounded-full"></div></div>
        </div>
      </div>
    </div>
      </section>

      <section className="bg-white-800 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/public/concepts/energy3.jpg"
              alt="Plug and Play Setup"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Detailed Analysis for Energy Usage</h3>
            <p className="leading-relaxed mb-4">
            Get complete and detailed analysis about the energy usage patterns by each of your home electrical appliances.
            </p>
            <p className="leading-relaxed">
            Based on the generated chart patterns, allow the main controller to take proper decisions of controlling your appliances as per need. For e.g. turn off all the appliances when you set the controller to “away” mode.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white-800 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Scheduling of events</h3>
            <p className="leading-relaxed">
            Set a timer on all your electrical appliances and save on your monthly bills. Control and schedule your devices like geyser or an air-conditioner. Also set up a weekly schedule which will eliminate the need of manually switching!.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/public/concepts/energy4.jpg"
              alt="Perfect Mood"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>
        </div>
      </section>

      <section className="bg-white-800 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/public/concepts/energy5.jpg"
              alt="Plug and Play Setup"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Learning Usage Patterns</h3>
            <p className="leading-relaxed mb-4">
            How about your home loves you back? Brews coffee for you, turns the geyser on all the while when you are snoozing your alarm for that five minutes of your precious morning sleep? Your smart home controller learns your habits and tunes your appliances to make you feel more comfortable and safe.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnergyEfficiency
