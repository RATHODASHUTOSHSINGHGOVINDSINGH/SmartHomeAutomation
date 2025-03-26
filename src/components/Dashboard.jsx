import React from "react";
import DeviceControl from "./DeviceControl";
import EnergyMonitor from "./EnergyMonitor";
import IoTIntegration from "./IoTIntegration";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 py-10 px-4 w-full">
      <div className="w-full max-w-6xl p-8 bg-white rounded-xl shadow-lg">
        {/* Improved Heading */}
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
          Smart Home Dashboard
        </h1>

        {/* Widget Layout */}
        <div className="flex flex-wrap justify-center gap-6">
          <DeviceControl />
          <EnergyMonitor />
          <IoTIntegration />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
