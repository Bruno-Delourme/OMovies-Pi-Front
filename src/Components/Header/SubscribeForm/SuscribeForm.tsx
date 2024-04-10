

import { useState } from "react";
import { FaRegCircle, FaTimes } from "react-icons/fa";
import "./LoginForm.scss";

function SubscribeForm() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [date_of_birth, setdate_of_birth] = useState("");
  const [password, setPassword] = useState("");

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleSubmit = async (event : any) => {
    event.preventDefault(); // pour empêcher le rechargement de la page

    // L'URL côté back
    const url = "http://localhost:3000/api/user";

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pseudo,
          email,
          date_of_birth,
          password,
        }),
      });

      if (!response.ok) {
        const errorBody = await response.text(); 
        console.error(`Erreur lors de la requête: ${response.status} - ${errorBody}`);
        throw new Error(`Erreur: ${response.status}`);
      }

      const data = await response.json();
      console.log('Réponse du serveur:', data);
      

    } catch (error) {
      console.error(`Erreur lors de l'envoi des données:`, error);
    }
  };

  return (
    <>
      <div className="logo-container">
        <button className="acces-button" id="login-btn" onClick={toggleLoginForm}>
          <FaRegCircle size={32} />
        </button>
      </div>
      
      <div className={`LoginForm ${showLoginForm ? "active" : ""}`}>
        <button className="close-button" onClick={toggleLoginForm}>
          <FaTimes size={20} />
        </button>
        <form className="inscription-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="date" placeholder="Date de naissance" value={date_of_birth} onChange={(e) => setdate_of_birth(e.target.value)} />
          <input type="password" placeholder="Mot de Passe" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">S'inscrire</button>
          
        </form>
      </div>
    </>
  );
}

export default SubscribeForm;