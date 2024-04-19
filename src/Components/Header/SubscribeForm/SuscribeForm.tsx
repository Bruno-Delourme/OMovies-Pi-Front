import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../store/action/action";
import { useAppSelector } from "../../../hooks/redux";
import { Action, AnyAction } from "redux";
import { RootState } from "../../../store";
import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";

function SubscribeForm() {
  const [formData, setFormData] = useState({
    pseudo: "",
    email: "",
    birthday: "",
    password: "",
  });

  //const dispatch = useDispatch();
  type AppThunkAction = ThunkAction<void, RootState, unknown, Action<string>>;
  type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
  
  const dispatch = useDispatch<AppDispatch>();

  const message = useAppSelector((state) => state.user.message); // access to message using redux state

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <div>
      {message && <p>{message}</p>}
      <form className="inscription-form" onSubmit={handleSubmit}>
        <div className="items-baseline justify-between">
        <p>Pseudo</p>
        <input
          className="m-5"
          type="text"
          placeholder="Pseudo"
          name="pseudo"
          value={formData.pseudo}
          onChange={handleChange}
        />
        </div>
        <div className="items-baseline justify-between">
        <p>Email</p>
        <input
          className="m-5 mr-20"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        </div>
        <div className="items-baseline justify-between">
        <p>Date de naissance</p>
        <input
          className="m-5 mr-20"
          type="date"
          placeholder="Date de naissance"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
        />
        </div>
        <div className="items-baseline justify-between">
        <p>Mot de passe</p>
        <input
          className="m-5 mr-36"
          type="password"
          placeholder="Mot de Passe"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        </div>
        <div className="inline-flex">
          <button type="submit" className="btn mr-4">
            S'inscrire
          </button>
          <form method="dialog">
            <button className="btn">Annuler</button>
          </form>
        </div>
      </form>
    </div>
  );
}

export default SubscribeForm;