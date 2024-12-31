import React, { useState } from 'react';

const CompetenceManager = ({ freelance, onUpdate }) => {
  const [newCompetence, setNewCompetence] = useState('');
  const [competences, setCompetences] = useState(freelance?.competences || []);

  // ... reste du code CompetenceManager

  return (
    <div className="space-y-2">
      {/* ... JSX du gestionnaire de compétences */}
    </div>
  );
};

export default CompetenceManager;