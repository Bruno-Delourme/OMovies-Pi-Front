import  { useState} from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import "./LoginForm.scss";


function LoginForm() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <>
      <div className="logo-container">
        {/* Modification du onClick pour appeler toggleLoginForm */}
        <button className="acces-button" id="login-btn" onClick={toggleLoginForm}>
          <FaRegCircleUser size={32} />
        </button>
      </div>
      {showLoginForm && (
        <div className="LoginForm active">
          {/* Ajout d'un formulaire d'inscription simple */}
          <form className="inscription-form">
            <label>Nom d'utilisateur</label>
            <input type="text" />
            <label>Mot de passe</label>
            <input type="password" />
            <button type="submit">S'inscrire</button>
          </form>
        </div>
      )}
    </>
  );
}

export default LoginForm;