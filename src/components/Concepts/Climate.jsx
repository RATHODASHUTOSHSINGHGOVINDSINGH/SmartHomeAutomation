import React from 'react'

function Climate() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[60vh] md:h-[80vh] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("/public/concepts/climate.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Experience ultimate comfort
          </h1>
          <p className="text-white text-lg md:text-xl mb-6">
          Keep track of ambient temperature across corners and automatically send commands to your central cooling unit to facilitate optimum cooling. Intelligently save energy by automatically turning off AC/cooling system if a window/door is left open for too long.
          </p>
        </div>
      </section>

      {/* Create Your Own Ambience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
            Smart Climate Control for Perfect Living
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong className="block text-lg mb-1">Set the right temperature</strong>
                <p>
                Turn on your AC minutes before you reach home from a tiring day at office. Monitor the room temperature and set the room temperature based on the climate conditions for optimum energy use.
                </p>
              </li>
              <li>
                <strong className="block text-lg mb-1">
                Smart Control Based on Climate Changes
                </strong>
                <p>
                Turn on home lights in case of dark clouds coming in and reduction in ambient light. In case of rains, turn off garden water sprinklers by sensing the soil moisture.
                </p>
              </li>
              <li>
                <strong className="block text-lg mb-1">
                Smart Learning
                </strong>
                <p>
                The Smart Controller learns your usage patterns based on your daily routines over the course of time and triggers other smart devices/appliances automatically.
                </p>
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/public/concepts/climate1.jpg"
              alt="Ambient lighting"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>
        </div>
      </section>

          {/* Control from Smartphone */}
          <section className="bg-white-800 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/public/concepts/climate2.jpg"
              alt="Plug and Play Setup"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Control From Your Smartphone</h3>
            <p className="leading-relaxed mb-4">
            Make optimum use of energy and set your living room to the perfect temperature you desire. Turn on your living room ACs just minutes before you arrive home at evening and let your home give you a cozy welcome.
            </p>
            <p className="leading-relaxed mb-4">
            Based on the ambient climatic conditions and temperature fluctuations, let your thermostat take smart decisions to keep your in-house at certain levels that best suit your needs.
            </p>
          </div>
        </div>
      </section>
      

      {/* Create the Perfect Mood Section (Dark Background) */}
      <section className="bg-white-800 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Learn Usage Patterns</h3>
            <p className="leading-relaxed mb-4">
            The smart thermostats will learn your energy usage patterns and requirements based on your daily schedules and trigger necessary smarthome device as per the need.
            </p>
            <p className="leading-relaxed">
            This reduces your burden and job of keeping a check on the energy usage and changing the smart settings.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/public/concepts/climate3.jpg"
              alt="Perfect Mood"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Climate
