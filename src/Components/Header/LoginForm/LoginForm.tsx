import { FormEvent} from "react";
import Field from "./Field/Field";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeField, login, logout } from "../../../store/action/action";
import SubscribeForm from "../SubscribeForm/SuscribeForm";
import { useState } from "react";
import { Link } from "react-router-dom";


function LoginForm() {
  const dispatch = useAppDispatch();

  //const id = useAppSelector((state) => state.user.id);
  
  const pseudo = useAppSelector((state) => state.user.pseudo || '');
  const password = useAppSelector((state) => state.user.password || ''); 
  const email = useAppSelector((state) => state.user.email);
  const isLogged = useAppSelector((state) => state.user.logged);

  const userId = useAppSelector((state) => state.user.id);
  const id = Number(localStorage.getItem("id")); // Convert id to number
  
  console.log(pseudo);
  console.log(userId);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(login({
      pseudo, password,
      email: "",
      date_of_birth: ""
    }));
    dispatch(login({ pseudo, password }));
  
  };

  const handleChangeField = (name: "pseudo" | "password") => (value: string) => {
    dispatch(changeField({ value, name }))
  };

  const handleLogout = () => {
    dispatch(logout());
  };

    
  return (
    <div className="login-form">
      
      {isLogged && (
              <div className="login-form-logged">
                <p className="login-form-message">
                  Bienvenue {pseudo}
                </p>
                <button
                  type="button"
                  className="login-form-button"
                  onClick={handleLogout}
                >
                  Déconnexion
                </button>
                <Link to={`/profil/${userId}`}>
                <button className="acces-buttons" id="list-btn">
                    Mon Profil
                </button>
                </Link>
              </div>
            )}


      {!isLogged && (
        <div className="">
                            
              <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <form className="inline-flex pb-6"
                  onSubmit={handleSubmit}
                  autoComplete="off">
                  <Field
                    placeholder="Pseudo"
                    onChange={handleChangeField("pseudo")}
                    value={pseudo} />
                  <Field
                    type="password"
                    placeholder="Mot de passe"
                    onChange={handleChangeField("password")}
                    value={password} />
                  <button type="submit" className="flex items-center justify-center pl-4 pr-4 rounded-lg border">
                    OK
                  </button>
                  
                </form>
                <SubscribeForm/>
              </div>
              </dialog>
                
        </div>
      )}
    </div>
  );}

export default LoginForm;