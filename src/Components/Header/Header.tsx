import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";
import SubscribeForm from "./SubscribeForm/SuscribeForm";
import Group from "../Group/Group"
import { FaRegCircleUser } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrUserNew } from "react-icons/gr";


import "./Header.scss";
import { Link } from "react-router-dom";

const LogoPandaRoux = "../../../public/pandaRoux2.png"

const Header = () => {
  
  return (
    
      <div className="black-banner">
        
        <Link to="/"><img src={LogoPandaRoux} className="LogoPandaRoux" alt="Logo" /></Link>
        <SearchBar/>
        <div className="acces-buttons">
        {/* <Group /> */}
        <button className="acces-button" id="group-btn" onClick={Group}><FaPeopleGroup size={32}/></button>
        {/* <LoginForm /> */}
        <button className="acces-button" id="login-btn" onClick={LoginForm}><FaRegCircleUser size={32}/></button>
        {/* <SubscribeForm /> */}
        <button className="acces-button" id="newUser-btn" onClick={SubscribeForm}><GrUserNew size={32}/></button>
        </div>
      </div>
  );
};

export default Header;
