import React from 'react'
import { FaMicrophone, FaMusic, FaGlobe } from 'react-icons/fa';

function InteractiveHome() {
  return (
    <div className="bg-white text-gray-800">
    {/* Hero Section */}
    <section
     className="relative flex items-center justify-center h-[60vh] md:h-[80vh] bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url("/public/concepts/home1.jpg")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Don't Think. Just Ask.
        </h1>
        <p className="text-white text-lg md:text-xl mb-6">
        Introducing Amazon Echo, the world’s first voice-assistant that can hear you from anywhere. Want to turn your air-conditioner? Need help planning your grocery list? Want to call an Uber? No need to grab that smartphone. Just ask Alexa.
        </p>
      </div>
    </section>
    <div className="p-8 font-sans">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Interactive Smart Home Control</h1>
      </header>

      {/* Features Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="mb-8 flex items-start">
            <FaMicrophone className="text-blue-500 text-2xl mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Control Your Smart Home devices through Voice Commands</h3>
              <p className="text-gray-600">Control most of your Smart Home appliances either individually or in pre-set themes just over your voice commands. Speak the trigger word and get things done.</p>
            </div>
          </div>

          <div className="mb-8 flex items-start">
            <FaMusic className="text-blue-500 text-2xl mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Stream Music Directly from your Smartphone</h3>
              <p className="text-gray-600">Just pair your smartphone to the Amazon Echo over Bluetooth and play music on-the-go over the Echo. Control your playlist, change tracks, and set volume using voice commands.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaGlobe className="text-blue-500 text-2xl mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Ask almost anything and everything</h3>
              <p className="text-gray-600">Your Amazon Echo is your on-the-go encyclopedia. Know about the latest news, set reminders, get valuable suggestions, and much more.</p>
            </div>
          </div>
        </div>

        {/* Device and Apps Section */}
        <div className="relative">
          <img src="/public/concepts/home2.jpg" className="w-150 mx-auto" />
        </div>
      </section>
      
      <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <img src="/public/concepts/home3.jpg" alt="Couple Cooking" className="w-full rounded-lg" />
        <div>
          <h1 className="text-4xl font-bold mb-4">Always your Companion at any time of the day</h1>
          <p className="text-gray-600 mb-4">With the interactive voice control, you can talk to Amazon Echo just like another member of your home. Spend your recreational time by listening to your favourite music stations or playing your favourite music from your smartphone.</p>
          <p className="text-gray-600">Ask any random questions, get recipes, current news, upcoming events, and much more.</p>
        </div>
      </section>

      {/* Section 2: Far-Field Voice Recognition */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Far-Field Voice Recognition</h2>
          <p className="text-gray-600 mb-4">The Amazon Echo comes with built-in seven microphones under the top ring that come with beam-forming and enhanced noise cancellation technologies.</p>
          <p className="text-gray-600">The far-field voice recognition technology helps Echo to listen to your commands even when the music is playing.</p>
        </div>
        <img src="/public/concepts/home4.jpg" alt="Voice Recognition Visualization" className="w-full rounded-lg" />
      </section>

      <section className="grid md:grid-cols-2 gap-8 mt-5 items-center mb-12">
        <img src="/public/concepts/home5.jpg" alt="Couple Cooking" className="w-full rounded-lg" />
        <div>
          <h1 className="text-4xl font-bold mb-4">Control Your Smart Home</h1>
          <p className="text-gray-600 mb-4">Take your Home Automation experience to a whole new level with the Echo. Amazon Echo adds the interactive and responsive feature to your hoe automation wherein you can actually to the devices in the home and get things done.</p>
          <p className="text-gray-600">Once you have paired your Echo with other third party devices like SmartThings, LIFX or Philips Hue, just ask “Alexa” to operate your lights, fans, switches etc.</p>
        </div>
      </section>
    </div>
    
    </div>
    
  )
}

export default InteractiveHome
