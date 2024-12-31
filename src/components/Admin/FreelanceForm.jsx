import React, { useState } from 'react';
import CompetenceManager from './CompetenceManager';

const FreelanceForm = ({ freelance, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(freelance || {
    name: '',
    title: '',
    disponibilite: 'disponible',
    competences: [],
    tjm: '',
  });

  // ... reste du code FreelanceForm

  return (
    <form className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      {/* ... JSX du formulaire */}
    </form>
  );
};

export default FreelanceForm;