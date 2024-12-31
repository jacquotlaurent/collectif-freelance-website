import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
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
        <h2 className="text-3xl font-bold mb-8">Bienvenue sur le site du Collectif Freelance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Les cartes des freelances seront affichées ici */}
        </div>
      </main>
    </div>
  );
};

export default Homepage;