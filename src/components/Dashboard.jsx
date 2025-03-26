import React from "react";
import DeviceControl from "./DeviceControl";
import EnergyMonitor from "./EnergyMonitor";
import IoTIntegration from "./IoTIntegration";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 py-20 px-4 w-full">
      <div className="w-full max-w-6xl p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-lg">
        {/* Improved Heading */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 text-center mb-6 md:mb-8">
          Smart Home Dashboard
        </h1>

        {/* Widget Layout - More responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          <div className="md:col-span-2 xl:col-span-1">
            <DeviceControl />
          </div>
          <div className="md:col-span-2 xl:col-span-1">
            <EnergyMonitor />
          </div>
          <div className="md:col-span-2 xl:col-span-1">
            <IoTIntegration />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
