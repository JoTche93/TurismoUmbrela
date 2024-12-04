import React from 'react';
import { Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@turismolocal.com" className="hover:text-green-400">
                  info@turismolocal.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+56968443254" className="hover:text-green-400">
                  +569 68443254
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400">Inicio</a></li>
              <li><a href="#" className="hover:text-green-400">Excursiones</a></li>
              <li><a href="#" className="hover:text-green-400">Alojamiento</a></li>
              <li><a href="#" className="hover:text-green-400">Comidas</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-green-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-green-400">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Turismo Umbrela. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}