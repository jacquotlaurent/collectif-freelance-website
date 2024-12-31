import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      onLogin(true);
    } else {
      setError('Identifiants invalides');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... JSX du formulaire de login */}
    </form>
  );
};

export default LoginForm;