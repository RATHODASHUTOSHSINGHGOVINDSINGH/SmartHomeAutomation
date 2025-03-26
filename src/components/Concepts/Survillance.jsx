import React from 'react'

function Survillance() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[60vh] md:h-[80vh] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("/public/concepts/surve1.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-xl  text-white mb-4">
          Be Aware. Anywhere.
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
            
24×7 Uninterrupted Surveillance
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong className="block text-lg mb-1">LIVE HD Streaming and Recording</strong>
                <p>
                Instantly stream live videos right to your smartphone to know what is happening within and outside your house.
                </p>
              </li>
              <li>
                <strong className="block text-lg mb-1">
                Intelligent Motion Detection Alerts
                </strong>
                <p>
                Get instant alerts and notifications for any unwanted movement in and around your home premises. Turn on the camera and see it for yourself.
                </p>
              </li>
              <li>
                <strong className="block text-lg mb-1">
                Weatherproof Protection
                </strong>
                <p>
                Rugged design and built-up to sustain any weather conditions may it be freezing cold or heavy rainfall.
                </p>
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/public/concepts/surve2.jpg"
              alt="Ambient lighting"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>
        </div>
      </section>

      <section className=" bg-white">
      <div className="p-6 bg-gray-100 min-h-screen">
      <div className="text-center text-2xl font-bold mb-8">
      A Home With a Surveillance System Has …
      </div>

      <div className="grid grid-cols-2 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 flex items-center justify-center border-4 border-teal-500 rounded-full">
            <span className="text-2xl font-bold">70%</span>
          </div>
          <p className="mt-2">Deterrent Rate</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 flex items-center justify-center border-4 border-teal-500 rounded-full">
            <span className="text-2xl font-bold">95%</span>
          </div>
          <p className="mt-2">Alarm Success Rate</p>
        </div>
      </div>

      <div className=" mx-auto bg-white p-6 rounded-lg shadow mt-8">
        <h3 className="text-lg font-semibold mb-4">Top Reasons For Theft Aversion</h3>
        <div className="mb-2">
          <p>Neighbour Activity (35%)</p>
          <div className="bg-gray-300 h-2 rounded-full"><div className="bg-teal-500 h-2 w-[35%] rounded-full"></div></div>
        </div>
        <div className="mb-2">
          <p>Security Cameras (65%)</p>
          <div className="bg-gray-300 h-2 rounded-full"><div className="bg-teal-500 h-2 w-[65%] rounded-full"></div></div>
        </div>
        <div className="mb-2">
          <p>Home Alarm System (75%)</p>
          <div className="bg-gray-300 h-2 rounded-full"><div className="bg-teal-500 h-2 w-[75%] rounded-full"></div></div>
        </div>
        <div>
          <p>Illuminated Entrance (45%)</p>
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
              src="/public/concepts/surve3.jpg"
              alt="Plug and Play Setup"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Secure your main door areas</h3>
            <p className="leading-relaxed mb-4">
            Keep a tab on visitors and know about who is paying you surprise visits. For better safety, check out who is there at your main door before opening it.
            </p>
            <p className="leading-relaxed mb-4">
            If at office or on a vacation, you can even monitor the main-door status from remote locations for the ultimate-peace-of-your-mind.
            </p>
          </div>
        </div>
      </section>
      

      {/* Create the Perfect Mood Section (Dark Background) */}
      <section className="bg-white-800 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Monitor every movement</h3>
            <p className="leading-relaxed mb-4">
            Keep a check within and around your home premises 24×7. Activate the motion alert sensors in your surveillance cameras to capture any unwanted movements.
            </p>
            <p className="leading-relaxed">
            Get instant alerts and notifications about such movements on your smart devices and take the necessary action ahead.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/public/concepts/surve4.jpg"
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
              src="/public/concepts/surve5.jpg"
              alt="Plug and Play Setup"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Safety at any time of the day</h3>
            <p className="leading-relaxed mb-4">
            Make sure that your security and surveillance cameras are active any time of the day. Most of the security cameras today come with HD streaming facilities and help you watch crystal clear videos right on your smartphones.
            </p>
            <p className="leading-relaxed mb-4">
            Also, one of the essential requirements of the smart security surveillance cameras is too exceptional night vision capabilities to help you monitor and view the surveillance zone with proper clearity.
            </p>
          </div>
        </div>
      </section>
      </div>
  )
}

export default Survillance
