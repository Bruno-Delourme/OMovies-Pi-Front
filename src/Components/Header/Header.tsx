import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";
import SubscribeForm from "./SubscribeForm/SuscribeForm";
import Group from "../Group/Group"

import { FaPeopleGroup } from "react-icons/fa6";
import { GrUserNew } from "react-icons/gr";

import "./Header.scss";
import { Link } from "react-router-dom";
 
const LogoPandaRoux = "../../../src/assets/pandaRoux2.png"

const Header = () => {

  return (
    
      <div className="black-banner">
        
        <Link to="/"><img src={LogoPandaRoux} className="LogoPandaRoux" alt="Logo" /></Link>
        <SearchBar/>
        <div className="flex flex-col gap-1vh">
        {/* <Group /> */}
        <button className="acces-buttons" id="group-btn" onClick={Group}><FaPeopleGroup size={32}/></button>
        <LoginForm />
        
        </div>
      </div>
  );
};

export default Header;
