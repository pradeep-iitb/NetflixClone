import React from 'react';

const RedConvexButton = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div 
        className="relative w-16 h-16 bg-red-500 rounded-full cursor-pointer transition-all duration-200 hover:scale-105"
        style={{
          boxShadow: `
            0 0 0 4px rgba(255, 255, 255, 0.2),
            0 0 0 8px rgba(59, 130, 246, 0.3),
            0 8px 20px rgba(0, 0, 0, 0.3),
            inset 0 2px 4px rgba(255, 255, 255, 0.3),
            inset 0 -2px 4px rgba(0, 0, 0, 0.2)
          `
        }}
      >
        {/* Inner highlight for convex effect */}
        <div 
          className="absolute inset-1 rounded-full bg-gradient-to-br from-red-400 to-red-600"
          style={{
            boxShadow: `
              inset 0 1px 2px rgba(255, 255, 255, 0.4),
              inset 0 -1px 2px rgba(0, 0, 0, 0.2)
            `
          }}
        />
        
        {/* Top highlight */}
        <div 
          className="absolute top-2 left-3 w-6 h-3 bg-white rounded-full opacity-30 blur-sm"
        />
      </div>
    </div>
  );
};

export default RedConvexButton;