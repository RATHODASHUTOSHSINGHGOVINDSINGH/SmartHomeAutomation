import React, { useState } from "react";
import { FaFan, FaSnowflake, FaTv, FaPowerOff } from "react-icons/fa";

const DeviceControl = () => {
  const [devices, setDevices] = useState([
    { id: 1, name: "Fan", status: "off", icon: <FaFan /> },
    { id: 2, name: "AC", status: "off", icon: <FaSnowflake /> },
    { id: 3, name: "TV", status: "off", icon: <FaTv /> },
  ]);
 

  const toggleDevice = (id) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id
          ? { ...device, status: device.status === "on" ? "off" : "on" }
          : device
      )
    );
  };

  return (
    <div className="p-6 bg-white shadow-xl rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🔌 Device Control</h2>

      <ul>
        {devices.map((device) => (
          <li
            key={device.id}
            className={`flex items-center justify-between p-4 rounded-lg shadow-md mb-3 transition ${
              device.status === "on" ? "bg-green-100" : "bg-gray-100"
            }`}
          >
            <div className="flex items-center gap-3 text-lg">
              <span className={`text-2xl ${device.status === "on" ? "text-green-500" : "text-gray-500"}`}>
                {device.icon}
              </span>
              <span className="font-medium">
                {device.name}:{" "}
                <span className={device.status === "on" ? "text-green-600 font-bold" : "text-gray-500"}>
                  {device.status}
                </span>
              </span>
            </div>
            <button
              onClick={() => toggleDevice(device.id)}
              className="p-3 rounded-full bg-gray-300 hover:bg-gray-400 transition duration-300"
            >
              <FaPowerOff className={device.status === "on" ? "text-red-500" : "text-green-500"} />
              
            </button>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceControl;
