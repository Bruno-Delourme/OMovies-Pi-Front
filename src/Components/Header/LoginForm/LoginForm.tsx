import { FormEvent} from "react";
import Field from "./Field/Field";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeField, login, logout } from "../../../store/action/action";
import SubscribeForm from "../SubscribeForm/SuscribeForm";
import { Link, useMatch, Route, Routes, Navigate } from "react-router-dom";
import { FaListCheck } from "react-icons/fa6";

import MemberSpace from '../../MemberSpace/MemberSpace';

function LoginForm() {
  const dispatch = useAppDispatch();

  //const id = useAppSelector((state) => state.user.id);
  
  const pseudo = useAppSelector((state) => state.user.pseudo || '');
  const password = useAppSelector((state) => state.user.password || ''); 
  const email = useAppSelector((state) => state.user.email);
  const birthday = useAppSelector((state) => state.user.birthday);
  const isLogged = useAppSelector((state) => state.user.logged);

  const userId = useAppSelector((state) => state.user.id);
  const id = Number(localStorage.getItem("id")); // Convert id to number
  
  console.log(pseudo);
  console.log(userId);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login({ pseudo, password }));
  
  };

  const handleChangeField = (name: "pseudo" | "password") => (value: string) => {
    dispatch(changeField({ value, name }))
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const match = useMatch(`/profil/${userId}`);


  return (
    <div className="login-form">
      {isLogged && (
              <div className="inline-flex items-center justify-evenly p-6">
                <p className="login-form-message pr-4 pl-4">
                  Bienvenue {pseudo}
                </p>
                <div className="mr-4">
                  <Link to={`/list/${userId}`} className="btn">
                    <FaListCheck size={32} />
                    <span className="ml-1">Ma liste</span>
                  </Link>
                </div>
                <label htmlFor="userProfil_modal" className="btn mr-4">
                  Mon Profil
                </label>
                <input type="checkbox" id="userProfil_modal" className="modal-toggle" />
                  <div id="userProfil_modal" className="modal" role="dialog">       
                    <div className="bg-white absolute rounded-lg">
                      <div className="">
                      <Routes>
                        <Route path="/" element={<MemberSpace id={0}/>} />
                      </Routes>
                      </div>
                    </div>
                    <label className="modal-backdrop" htmlFor="userProfil_modal">Close</label>
                  </div>
                <button
                  type="button"
                  className="login-form-button btn mr-4"
                  onClick={handleLogout}
                  >Déconnexion
                </button>
              </div>
            )}
      {!isLogged && (
        <div className="">
            <div className=""> 
                <form 
                  autoComplete="off"
                  className="inline-flex "
                  onSubmit={handleSubmit}
                >
                <Field
                  placeholder="Pseudo"
                  onChange={handleChangeField("pseudo")}
                  value={pseudo} />
                <Field
                  type="password"
                  placeholder="Mot de passe"
                  onChange={handleChangeField("password")}
                  value={password} />
              <div className="inline-flex ">
                <button type="submit" className="btn p-4 mr-1">
                  OK
                </button>
              </div>     
              </form>
            </div>
{/* Suscribe button */}
              <div className="pt-4">
                <button className="btn" onClick={()=>document.getElementById('inscription_modal').showModal()}>S'inscrire</button>
                  <dialog id="inscription_modal" className="modal">
                    <div className="bg-white rounded-lg absolute">
                      <button className="close-button absolute top-0 right-0 mt-2 mr-2 w-5 h-7.5 border border-gray-300 text-gray-500 rounded-md hover:bg-gray-100" onClick={() => document.getElementById('inscription_modal').close()}>
                        X
                      </button>
                      <div className="p-4">
                        <SubscribeForm />
                      </div> 
                    </div>
                  </dialog>
              </div>
        </div>
            
      )}
    </div>
  );
}

export default LoginForm;
