import React, { useState } from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';

export function SearchBar() {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [people, setPeople] = useState('1');

  return (
    <div className="max-w-6xl mx-auto px-4 -mt-8 relative z-10">
      <div className="bg-white rounded-lg shadow-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Destino"
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="date"
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="date"
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <div className="relative">
            <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <select
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
            >
              {[1, 2, 3, 4, 5, '6+'].map((num) => (
                <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="mt-4 flex justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
            <Search className="h-5 w-5" />
            Buscar excursiones
          </button>
        </div>
      </div>
    </div>
  );
}