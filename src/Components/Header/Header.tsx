import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";
import SubscribeForm from "./SubscribeForm/SuscribeForm";
import Group from "../Group/Group"
import LogoPandaRoux from "../../assets/pandaRoux.png";

import "./Header.scss";

const Header = () => {
  return (
    <div>
      <div className="black-banner">
        <div className="LogoPandaRoux">
        <img src={LogoPandaRoux} alt="Logo" />
        </div>
        <SearchBar />
        <button className="GroupForm" onClick={Group}>Groupe</button>
        {/* <Group /> */}
        <button className="LoginForm" onClick={LoginForm}>Connexion</button>
        {/* <LoginForm /> */}
        <button className="SuscribeForm" onClick={SubscribeForm}>S'inscrire</button>
        {/* <SubscribeForm /> */}
        

      </div>
    </div>
  );
};

export default Header;
