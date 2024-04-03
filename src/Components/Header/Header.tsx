import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";
import SubscribeForm from "./SubscribeForm/SuscribeForm";
import Group from "../Group/Group"
// import LogoPandaRoux from "../../assets/pandaRoux.png";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrUserNew } from "react-icons/gr";

import "./Header.scss";

const Header = () => {
  return (
    
      <div className="black-banner">
        <img src="src/assets/pandaRoux2.png" className="LogoPandaRoux"  alt="Logo"/>
        <SearchBar/>
        <button className="acces-button" id="group-btn" onClick={Group}><FaPeopleGroup size={32}/></button>
        {/* <Group /> */}
        <button className="acces-button" id="login-btn" onClick={LoginForm}><FaRegCircleUser size={32}/></button>
        {/* <LoginForm /> */}
        <button className="acces-button" id="newUser-btn" onClick={SubscribeForm}><GrUserNew size={32}/></button>
        {/* <SubscribeForm /> */}
        
      </div>
  );
};

export default Header;