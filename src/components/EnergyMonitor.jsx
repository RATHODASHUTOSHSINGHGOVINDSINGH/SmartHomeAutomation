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
    <div className="p-4 bg-white shadow-lg rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl h-full">
      {/* Title Section */}
      <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
        <span className="text-orange-500 text-xl sm:text-2xl">⚡</span>
        <h2 className="text-xl font-bold text-gray-800">Energy Monitor</h2>
      </div>

      {/* Live Energy Card */}
      <div className="flex justify-between items-center bg-gray-100 p-3 sm:p-4 rounded-lg shadow-sm mb-4 w-full">
        <span className="text-sm sm:text-lg text-gray-600">Current Energy Usage:</span>
        <span className="text-lg sm:text-2xl font-bold text-green-600">{currentEnergy} kWh</span>
      </div>

      {/* Energy Usage History */}
      <div className="bg-gray-100 p-3 sm:p-4 rounded-lg">
        <h3 className="text-sm sm:text-base font-medium text-gray-700 mb-2">Recent Energy Data</h3>
        <div className="overflow-auto max-h-32">
          <table className="w-full text-xs sm:text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-1 px-2 text-left">Time</th>
                <th className="py-1 px-2 text-right">Energy (kWh)</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(-5).map((item, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="py-1 px-2">{item.time}</td>
                  <td className="py-1 px-2 text-right">{item.energy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EnergyMonitor;
