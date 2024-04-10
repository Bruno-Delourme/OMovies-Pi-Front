import { FormEvent} from "react";
import Field from "./Field/Field";
import './LoginForm.scss';
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeField, login, logout } from "../../../store/action/action";
import SubscribeForm from "../SubscribeForm/SuscribeForm";


function LoginForm() {
  const dispatch = useAppDispatch();

  const pseudo = useAppSelector((state) => state.user.pseudo);
  const password = useAppSelector((state) => state.user.password); 
  const email = useAppSelector((state) => state.user.email);
  const isLogged = useAppSelector((state) => state.user.logged);
  console.log(pseudo);
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(login({ pseudo, password }));
  };

  const handleChangeField = (name: "pseudo" | "password") => (value: string) => {
    console.log(name, value);
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
              </div>
            )}


      {!isLogged && (
        <><form
          autoComplete="off"
          className="login-form-element"
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
          <button type="submit" className="login-form-button">
            OK
          </button>

        </form><SubscribeForm /></>
      )}
    </div>
  );
}

export default LoginForm;
