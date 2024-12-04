import React from 'react';

export function UmbrellaLogo() {
  return (
    <div className="flex items-center">
      <svg
        viewBox="0 0 100 100"
        className="h-8 w-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="45" fill="#FF0000" />
        <path
          d="M50 15
          A 35 35 0 1 1 15 50
          L 50 50
          Z"
          fill="white"
        />
        <path
          d="M50 15
          A 35 35 0 1 0 85 50
          L 50 50
          Z"
          fill="white"
        />
      </svg>
      <span className="ml-2 text-xl font-bold text-gray-800">Turismo Umbrela</span>
    </div>
  );
}