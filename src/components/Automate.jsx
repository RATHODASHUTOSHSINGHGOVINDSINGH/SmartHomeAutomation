
import React from "react";
import { useNavigate } from "react-router-dom";

const concepts = [
  { image: "/automate/1.jpg", link: "/lighting" },
  { image: "/automate/2.jpg", link: "/home-security" },
  { image: "/automate/3.jpg", link: "/interactive-home" },
  { image: "/automate/4.jpg", link: "/energy-efficiency" },
  { image: "/automate/5.jpg", link: "/protection" },
  { image: "/automate/6.jpg", link: "/climate" },
  { image: "/automate/7.jpg", link: "/survillance" },
];

const items = [
  {
    title: "Smart Lighting",
    description:
      "Our smart lighting solutions are instant mood setters. Want to turn your living room into a discotheque, or create a romantic setup in your bedroom? Setting mood and changing color is now as easy as pressing a button on your smartphone.",
    link: "/lighting",
  },
  {
    title: "Intelligent Security",
    description:
      "Protect your home from intruders with our intelligent security solutions. Once configured, door/window and motion sensors notify you when someone tries to break in your home, even when you’re away.",
      link: "/home-security",
  },
  {
    title: "Interactive Home",
    description:
      "You no longer have to reach out to switchboards or operate a dozen remotes. You can now control everything in your home through your smartphone or just using your voice.",
      link: "/interactive-home",
  },
  {
    title: "Energy Efficiency",
    description:
      "Use the power of technology to save money. Our intelligent sensors automatically turn off your air-conditioner, lights, and fans when you’re not home. Get insights into energy consumption and create personalized schedules.",
      link: "/energy-efficiency",
  },
  {
    title: "Protection",
    description:
      "Get instant alerts on your smartphone when your home is hit by fire, flood, or any other disaster. Configure the central automation system to take corrective action instantly.",
      link: "/protection",
  },
  {
    title: "Climate Control",
    description:
      "Home automation takes comfort to the next level. You can now keep track of ambient temperature across corners and automatically send commands to your central cooling unit to facilitate optimum cooling.",
      link: "/climate",
  },
  {
    title: "Surveillance",
    description:
      "Keep a tab on your home, even while you’re away in the office or on vacation. With intelligent CCTV cameras that provide round-the-clock monitoring, staying connected with what matters is easy.",
      link: "/survillance",
  },
];

const Automate = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-100 py-10">
      {/* Header Section */}
      <div className="bg-teal-500 text-white text-center py-10">
        <h1 className="text-3xl font-bold">Home Automation Concepts</h1>
        <p className="mt-2">
          Wondering where to get started? Browse through our home automation concepts to get a feel of a smart home experience.
        </p>
      </div>

      {/* Concepts Grid */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {concepts.map((concept, index) => (
          <div
            key={index}
            className="relative cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => navigate(concept.link)}
          >
            <img
              src={concept.image}
              alt="Home Automation"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Description Section */}
      <div className="w-full min-h-screen bg-gray-100 py-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl font-bold text-gray-900">Smart Home Automation</h1>
          <p className="mt-4 text-gray-700">
            Home automation is connecting all the functional elements of your home to a network (Internet) and putting it to work for you. From lighting to air-conditioning, from television to door-locks, you can now control, monitor, and track your home from anywhere in the world.
          </p>
          <p className="mt-4 text-gray-700">
            Unlike a car, where you have to build the whole system to make it work, you don’t have to buy the entire home automation experience to kickstart an intelligent lifestyle. You can start with any of the home automation concepts and build your smart home from there.
          </p>
        </div>

        {/* Concepts List */}
        <div className="max-w-3xl mx-auto mt-10 px-6 space-y-6">
          {items.map((item, index) => (
            <div key={index}>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-teal-500 text-xl font-semibold hover:underline"
                >
                  {item.title}
                </a>
              ) : (
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              )}
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Automate;

