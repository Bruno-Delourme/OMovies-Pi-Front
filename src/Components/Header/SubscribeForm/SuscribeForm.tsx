import React, { Dispatch, useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../store/action/action";

import { RootState } from "../../../store";
import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";

import { AnyAction, Action } from 'redux';
import { useAppSelector } from "../../../hooks/redux";

function SubscribeForm() {
  const [formData, setFormData] = useState({
    pseudo: "",
    email: "",
    date_of_birth: "",
    password: "",
  });

  //const dispatch = useDispatch();
  type AppThunkAction = ThunkAction<void, RootState, unknown, Action<string>>;
  type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
  
  const dispatch = useDispatch<AppDispatch>();

  const message = useAppSelector((state: RootState) => state.user.message); // access to message using redux state

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const target = e.target as HTMLInputElement;
  setFormData({ ...formData, [target.name]: target.value });
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <div>
      {message && <p>{message}</p>} 
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