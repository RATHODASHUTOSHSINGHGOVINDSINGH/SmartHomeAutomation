import React from 'react'
 
const IoTIntegration = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-xl border border-gray-200 h-full">
      <h2 className="text-xl font-bold text-gray-800 mb-4">IoT Integration</h2>
      <div className="space-y-4">
        <img className="w-full h-auto rounded-lg shadow-sm" src="/iot/1.png" alt="IoT Integration" /> 
        <div className="grid grid-cols-2 gap-4">
          <img className="w-full h-auto rounded-lg shadow-sm" src="/iot/2.png" alt="IoT Connection" /> 
          <img className="w-full h-auto rounded-lg shadow-sm" src="/iot/3.png" alt="IoT Network" /> 
        </div>
      </div>
    </div>
  )
}
 
export default IoTIntegration
