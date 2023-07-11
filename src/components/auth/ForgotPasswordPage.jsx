import React from 'react';
import './Auth.css';

const ForgotPasswordPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); 
  };

  return (
    <div className="container" id="container">
      <div className="form-container forget-container">
        <form onSubmit={handleSubmit}>
          <h1>Trouvez votre compte</h1>
          <p>Veuillez entrer votre e-mail pour rechercher votre compte</p>
          <input type="email" placeholder="Email" name="email" />
          <button type="submit" value="submit">Soumettre</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
