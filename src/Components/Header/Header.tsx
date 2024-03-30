import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";
import SubscribeForm from "./SubscribeForm/SuscribeForm";
import LogoPandaRoux from "../../assets/pandaRoux.png";

import "./Header.scss";

const Header = () => {
  return (
    <div>
      <div className="black-banner">
        <div className="LogoPandaRoux">
        <img src={LogoPandaRoux} alt="Logo" />
        </div>

        <LoginForm />
        <SubscribeForm />
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
