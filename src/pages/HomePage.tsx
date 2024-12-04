import React from 'react';
import { Link } from 'react-router-dom';
import { Tent, UtensilsCrossed, Mountain } from 'lucide-react';

export function HomePage() {
  const services = [
    {
      title: 'Excursiones',
      description: 'Descubre paisajes increíbles con nuestros guías expertos',
      icon: Mountain,
      path: '/excursiones',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Alojamiento',
      description: 'Encuentra el lugar perfecto para descansar',
      icon: Tent,
      path: '/alojamiento',
      image: 'https://images.unsplash.com/photo-1618767689160-da3fb810aad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Comidas',
      description: 'Saborea la auténtica gastronomía local',
      icon: UtensilsCrossed,
      path: '/comidas',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1682686581580-d99b0230064e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Bienvenido a Turismo Umbrela</h1>
            <p className="text-xl md:text-2xl">Tu destino para experiencias únicas</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link 
                key={service.title}
                to={service.path}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform group-hover:scale-105">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <service.icon className="h-6 w-6 text-red-600" />
                      <h3 className="text-xl font-semibold ml-2">{service.title}</h3>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}