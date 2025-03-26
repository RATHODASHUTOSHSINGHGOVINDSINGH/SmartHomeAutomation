import React, { useState, useEffect } from "react";
 

const EnergyMonitor = () => {
  const [data, setData] = useState([]);
  const [currentEnergy, setCurrentEnergy] = useState(0);
   
  
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newEnergy = (Math.random() * 100).toFixed(2);
      setCurrentEnergy(newEnergy);

      setData((prevData) => {
        const newData = [...prevData, { time: new Date().toLocaleTimeString(), energy: parseFloat(newEnergy) }];
        return newData.length > 10 ? newData.slice(1) : newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
   
  
  return (
    <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl w-full">
      {/* Title Section */}
      <div className="flex items-center space-x-3 mb-4">
        <span className="text-orange-500 text-2xl">⚡</span>
        <h2 className="text-2xl font-bold text-gray-800">Energy Monitor</h2>
      </div>

      {/* Live Energy Card */}
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm mb-4 w-full">
        <span className="text-lg text-gray-600">Current Energy Usage:</span>
        <span className="text-2xl font-bold text-green-600">{currentEnergy} kWh</span>
      </div>

       
    </div>
  );
};

export default EnergyMonitor;
