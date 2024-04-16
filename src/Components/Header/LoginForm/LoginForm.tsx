import { FormEvent} from "react";
import Field from "./Field/Field";
import './LoginForm.scss';
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeField, login, logout } from "../../../store/action/action";
import SubscribeForm from "../SubscribeForm/SuscribeForm";
import { Link } from "react-router-dom";


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
                {/* <button className="btn close-button" onClick={() => document.getElementById('loggin_modal').close()}>
                  Annuler
                </button> */}
              </div>     
              </form>
            </div>
{/* Suscribe button */}
              <div className="pt-4">
                <button onClick={()=>document.getElementById('inscription_modal').showModal()}>S'inscrire</button>
                  <dialog id="inscription_modal" className="modal">
                    <div className="modal-box flex flex-col">
                      <button className="close-button absolute top-0 right-0 mt-2 mr-2 w-5 h-7.5 border border-gray-300 text-gray-500 rounded-md hover:bg-gray-100" onClick={() => document.getElementById('inscription_modal').close()}>
                        X
                      </button>
                      <div className="">
                        <SubscribeForm />
                      </div>
                      <div className="">
                        <form method="dialog">
                          <button className="btn ml-5">Annuler</button>
                        </form>
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
