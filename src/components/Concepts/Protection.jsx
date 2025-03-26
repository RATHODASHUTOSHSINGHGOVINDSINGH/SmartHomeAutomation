import React from 'react'

function Protection() {
  return (
    <div className="bg-white text-gray-800">
    {/* Hero Section */}
    <section
      className="relative flex items-center justify-center h-[60vh] md:h-[80vh] bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url("/public/images/home2.jpg")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
        Protect Your Loved Ones 
        </h1>
        <p className="text-white text-lg md:text-xl">
        Get instant alerts on your smartphone when your home is hit by fire, flood or any other disaster and configure the central automation system to take corrective action instantly.
        </p>
      </div>
    </section>

    <section className="bg-white-800 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
            Protection Against Natural Accidents</h3>

            <p className='text-2xl mb-4'>Sensors for all-round protection</p>
            <p className="leading-relaxed">
            Quick detection of any natural events like sudden rise in temperature due to fire, or gas leakage or water leakage from any unapproachable area in your home.
            </p>

            <p className='text-2xl mb-4 mt-5'>Instant Alerts and Notifications</p>
            <p className="leading-relaxed">
            Notifies you instantly and within time about the occurring of any natural disaster and helps you prevent any further damage.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/public/concepts/pro1.jpg"
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
              src="/public/concepts/pro2.jpg"
              alt="Plug and Play Setup"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Smoke and Temperature Sensing</h3>
            <p className="leading-relaxed mb-4">
            Some Smoke Sensor also have an additional feature of temperature sensing. Apart from being just a smoke sensor, it is also senses sudden changes in temperature. Sometimes it might be possible that there is not enough smoke sensed to trigger the alarm, but the temperature goes high.
            </p>
            <p className="leading-relaxed">
            Any rise in temperature above 54 degree will be detected by the sensor and an threat alert will be raised.
            </p>
          </div>
        </div>
      </section>


      <section className="bg-white-800 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
            Protection Against Natural Accidents</h3>

            <p className="leading-relaxed mb-4">
            The Fibaro Flood sensor has a robust design to sustain any temperature within the range of -10 to +95 degree Celcius. It is capable of handling fast and well as slow floods.
            </p>
            <p className="leading-relaxed">
            Also the entire enclosure is waterproof and so it is difficult for the sensor to submerge and it will float over the water so that it keeps sending signal to the main controller.


            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/public/concepts/pro3.jpg"
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
              src="/public/concepts/pro4.jpg"
              alt="Plug and Play Setup"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Configure with other Devices</h3>
            <p className="leading-relaxed mb-4">
            The Fibaro Smoke Sensor can be configured to work in synchrony with other devices of the Fibaro Ecosystem. The Smoke Sensor can report to the HC2 soon to take action in case of any fire breaks-in.
            </p>
            <p className="leading-relaxed">
            With one touch configuration, you can open blinds, doors, windows, light up the escape pathway and much more.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Protection
