// Progress.jsx
import React from 'react';

const Progress = ({ value }) => {
  const clampedValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden mb-4 shadow-inner">
      <div
        className="h-full bg-black transition-all duration-300 ease-in-out"
        style={{ width: `${clampedValue}%` }}
      />
    </div>
  );
};

export { Progress};
