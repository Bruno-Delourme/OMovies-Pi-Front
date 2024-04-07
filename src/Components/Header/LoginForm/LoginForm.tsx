import { useState } from "react";
import { FaRegCircle, FaTimes } from "react-icons/fa";
import "./LoginForm.scss";

function LoginForm() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <>
      <div className="logo-container">
        <button className="acces-button" id="login-btn" onClick={toggleLoginForm}>
          <FaRegCircle size={32} />
        </button>
      </div>
      
        <div className={`LoginForm ${showLoginForm ? "active" : ""}`}>
          {/* Bouton de fermeture */}
          <button className="close-button" onClick={toggleLoginForm}>
            <FaTimes size={20} />
          </button>
          <form className="inscription-form">
            <input type="text" placeholder="Pseudo" />
            <input type="password" placeholder="Mot de Passe" />
            <button type="submit">S'inscrire</button>
          </form>
        </div>
      
    </>
  );
}

export default LoginForm;