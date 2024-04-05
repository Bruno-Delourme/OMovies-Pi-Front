import React, { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import "./LoginForm.scss";


function LoginForm() {
  
  const [showLoginForm, setShowLoginForm] = useState(true); // Pas besoin de spécifier <boolean> ici, TypeScript infère le type à partir de la valeur initiale

  // Fonction pour basculer l'affichage du LoginForm
  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm); // Bascule l'état de visibilité
  };

  return (
    <>
      <div className="logo-container">
        <button className="acces-button" id="login-btn" onClick={toggleLoginForm}>
          <FaRegCircleUser size={32}/>
        </button>
      </div>
      {showLoginForm && ( // Affiche le LoginForm si showLoginForm est true
        <div className="LoginForm active"></div>
      )} 
    </>
  );
}

export default LoginForm;
