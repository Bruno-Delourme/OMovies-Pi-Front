import { FormEvent, useState } from "react";
import Field from "./Field";
import "./styles.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeField, login } from "../../../store/action/action";

function LoginForm() {
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.user.email);
  const password = useAppSelector((state) => state.user.password);
  const loggedMessage = useAppSelector((state) => state.user.loggedMessage);

  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleChangeField = (name: "email" | "password") => (value: string) => {
    dispatch(changeField({ value, name }));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div className="login-form">
      {token ? (
        <div className="login-form-logged">
          <p className="login-form-message">{loggedMessage}</p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      ) : (
        <form
          autoComplete="off"
          className="login-form-element"
          onSubmit={handleSubmit}
        >
          <Field
            placeholder="Adresse Email"
            onChange={handleChangeField("email")}
            value={email}
          />
          <Field
            type="password"
            placeholder="Mot de passe"
            onChange={handleChangeField("password")}
            value={password}
          />
          <button type="submit" className="login-form-button">
            OK
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
