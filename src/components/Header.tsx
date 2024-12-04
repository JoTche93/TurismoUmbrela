import React from 'react';
import { Menu, LogOut, User } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UmbrellaLogo } from './UmbrellaLogo';
import { useAuthStore } from '../store/authStore';
import { CurrencySelector } from './CurrencySelector';
import toast from 'react-hot-toast';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('¡Hasta pronto!');
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <UmbrellaLogo />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-red-600">Inicio</Link>
            <Link to="/excursiones" className="text-gray-600 hover:text-red-600">Excursiones</Link>
            <Link to="/alojamiento" className="text-gray-600 hover:text-red-600">Alojamiento</Link>
            <Link to="/comidas" className="text-gray-600 hover:text-red-600">Comidas</Link>
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center text-gray-600 hover:text-red-600">
                  <User className="h-5 w-5 mr-1" />
                  <span>{user?.name}</span>
                </Link>
                <CurrencySelector />
                <button
                  onClick={handleLogout}
                  className="flex items-center text-red-600 hover:text-red-700"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Salir
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Iniciar sesión
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-red-600">Inicio</Link>
              <Link to="/excursiones" className="block px-3 py-2 text-gray-600 hover:text-red-600">Excursiones</Link>
              <Link to="/alojamiento" className="block px-3 py-2 text-gray-600 hover:text-red-600">Alojamiento</Link>
              <Link to="/comidas" className="block px-3 py-2 text-gray-600 hover:text-red-600">Comidas</Link>
              {isAuthenticated ? (
                <>
                  <Link to="/profile" className="block px-3 py-2 text-gray-600 hover:text-red-600">
                    <User className="h-5 w-5 inline mr-2" />
                    Mi Perfil
                  </Link>
                  <div className="px-3 py-2">
                    <CurrencySelector />
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center px-3 py-2 text-red-600 hover:text-red-700"
                  >
                    <LogOut className="h-5 w-5 mr-1" />
                    Salir
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="block px-3 py-2 text-red-600 hover:text-red-700"
                >
                  Iniciar sesión
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}