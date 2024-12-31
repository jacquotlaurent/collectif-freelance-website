import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import FreelanceForm from './FreelanceForm';

const AdminDashboard = () => {
  const [freelances, setFreelances] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentFreelance, setCurrentFreelance] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const loadData = async () => {
    try {
      const response = await window.fs.readFile('data/freelances.json', { encoding: 'utf8' });
      const data = JSON.parse(response);
      setFreelances(data.freelances);
    } catch (err) {
      const initialData = {
        freelances: []
      };
      await window.fs.writeFile('data/freelances.json', JSON.stringify(initialData, null, 2));
      setFreelances(initialData.freelances);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    let newFreelances;
    if (currentFreelance) {
      newFreelances = freelances.map(f => 
        f.id === currentFreelance.id ? { ...formData, id: f.id } : f
      );
    } else {
      newFreelances = [...freelances, { ...formData, id: Date.now() }];
    }
    await window.fs.writeFile('data/freelances.json', JSON.stringify({ freelances: newFreelances }, null, 2));
    setFreelances(newFreelances);
    setIsFormOpen(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6 text-center">Administration</h2>
          <LoginForm onLogin={setIsAuthenticated} />
        </div>
      </div>
    );
  }

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Le reste du composant AdminDashboard */}
    </div>
  );
};

export default AdminDashboard;