import React from "react";
import { FaBell, FaVideo, FaHome } from "react-icons/fa";
import ImageWithFallback from "../ImageErrorBoundary";

const SecurityPage = () => {
  return (
    <div className="bg-white text-gray-800 pt-16">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[60vh] md:h-[80vh] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("/concepts/security1.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Take Your Home With You
          </h1>
          <p className="text-white text-lg md:text-xl">
            Protect your home from intruders. Keep a tab on visitors. Lock and
            unlock your doors from anywhere. Get instant notifications on your
            smartphone and trigger a loud alarm if someone tries to break in.
          </p>
        </div>
      </section>

      {/* Easy Control & Monitoring Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Easy Control and Monitoring. Instant Alerts – Anywhere, Anytime
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Unlock Your Doors From Anywhere
              </h3>
              <p className="text-gray-600">
                Grant access to anyone at your home. Give timed access to
                visitors and never worry about lost keys again.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Instant Alerts and Notifications
              </h3>
              <p className="text-gray-600">
                Get real-time mobile device alerts in case of any security
                breach. Stay informed and take the necessary corrective action.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Talk to Your Guests
              </h3>
              <p className="text-gray-600">
                Interact with guests from anywhere in the world. Ask the
                delivery boy to drop a package, and keep an eye on suspicious
                people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Charts Section */}
      <section className=" bg-white">
      <div className="p-6 bg-gray-100 min-h-screen">
      <div className="text-center text-2xl font-bold mb-8">
        A Home With a Security Alarm System Has ...
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
      {/* Visitors & Monitoring Section */}
      <section className="bg-wite-800 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Always stay informed about visitors at your door</h3>
            <p className="leading-relaxed">
            You can keep a watch as to what happens around your main door anytime and from anywhere in the world. The Live Video feed lets you see your main door area right from your mobile application. You can also see, hear and talk to visitors at your main door. Capture images, snapshots and much more for ultimate-peace-of-mind.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <ImageWithFallback
              src="/concepts/security2.jpg"
              alt="Door Security"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>
        </div>
      </section>

          <section className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Monitoring 24×7</h3>
            <p className="leading-relaxed">
            Most of home security devices are equipped with a night vision camera that helps you to keep an eye on your home eve during the dark hours of the day. Also some of the video door bells also have built-in motion detection sensor that will quickly report you about any suspicious and unwanted movement at your main door.
            </p>
            <p className="mt-5">You can also configure with other third-party devices to turn ON lights if any motion is detected for an additional layer of security.</p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <ImageWithFallback
              src="/concepts/security3.jpg"
              alt="24/7 Monitoring"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>
        </div>
      </section>
      <section className="bg-wite-800 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Sensors for every application</h3>
            <p className="leading-relaxed">
            A wholistic approach to home security is very essential. In addition to having sensors that can detect and report any intrusion or unwanted motion, sensor that can report any accidental events like smoke leakage, gas leakage are equally important to ensure overall home safety.
            </p>
            <p className="mt-5">Also the control over the multiple sensors at a time should be quick and less cumbersome. A remote keyfob or a smartphone application can let you have instant access and better control over your home security.</p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <ImageWithFallback
              src="/concepts/security4.jpg"
              alt="Security Sensors"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;
