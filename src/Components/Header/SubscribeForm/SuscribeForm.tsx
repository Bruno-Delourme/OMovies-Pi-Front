import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../store/action/action";


function SubscribeForm() {
  const [formData, setFormData] = useState({
    pseudo: "",
    email: "",
    date_of_birth: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <div>
      <form className="inscription-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pseudo"
          name="pseudo"
          value={formData.pseudo}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="date"
          placeholder="Date de naissance"
          name="date_of_birth"
          value={formData.date_of_birth}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Mot de Passe"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="acces-buttons">
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default SubscribeForm;