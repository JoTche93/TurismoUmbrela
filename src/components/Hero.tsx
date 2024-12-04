import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[600px] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Explora Nuestras Excursiones</h1>
          <p className="text-xl md:text-2xl">Descubre experiencias únicas guiadas por expertos locales</p>
        </div>
      </div>
    </div>
  );
}