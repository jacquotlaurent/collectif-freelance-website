import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FreelanceCard = ({ freelance }) => {
  const getDispoStyle = (dispo) => {
    switch(dispo) {
      case 'disponible':
        return 'bg-green-500 text-white';
      case 'disponible-1-mois':
        return 'bg-orange-400 text-white';
      case 'non-disponible':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getDispoText = (dispo) => {
    switch(dispo) {
      case 'disponible':
        return 'Disponible';
      case 'disponible-1-mois':
        return 'Dispo. sous 1 mois';
      case 'non-disponible':
        return 'Non disponible';
      default:
        return dispo;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1">
      <img 
        src="/api/placeholder/300/200" 
        alt={freelance.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold">{freelance.name}</h3>
            <p className="text-gray-600">{freelance.title}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${getDispoStyle(freelance.disponibilite)}`}>
            {getDispoText(freelance.disponibilite)}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {freelance.competences.map((comp, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
              {comp}
            </span>
          ))}
        </div>
        <div className="pt-4 border-t border-gray-100">
          <p className="text-gray-700 font-semibold">TJM : {freelance.tjm}€</p>
        </div>
      </div>
    </div>
  );
};

const Homepage = () => {
  const [freelances, setFreelances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFreelances = async () => {
      try {
        const response = await window.fs.readFile('data/freelances.json', { encoding: 'utf8' });
        const data = JSON.parse(response);
        setFreelances(data.freelances);
      } catch (err) {
        console.error('Erreur lors du chargement des freelances:', err);
        setError('Impossible de charger les freelances');
      } finally {
        setLoading(false);
      }
    };

    loadFreelances();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Collectif Freelance</h1>
          <Link 
            to="/admin"
            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
          >
            Administration
          </Link>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Nos Freelances</h2>
        
        {loading && (
          <div className="text-center py-8">Chargement...</div>
        )}

        {error && (
          <div className="text-red-600 text-center py-8">{error}</div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelances.map(freelance => (
            <FreelanceCard key={freelance.id} freelance={freelance} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Homepage;