import { useState } from 'react';
import { FaRegCircle } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";


import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";
import SubscribeForm from "./SubscribeForm/SuscribeForm";
import Group from "../Group/Group"


import { GrUserNew } from "react-icons/gr";

import "./Header.scss";
 
const LogoPandaRoux = "../../../src/assets/pandaRoux2.png"

const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
    };

const Header = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  const toggleLoginForm = () => setIsLoginFormVisible(!isLoginFormVisible);
  return (
    
      <div className="black-banner">
        
        <Link to="/"><img onClick={scrollToTop} src={LogoPandaRoux} className="LogoPandaRoux" alt="Logo" /></Link>
        <SearchBar/>
        <div className="flex flex-col gap-1vh">
        {/* <Group /> */}
        <Link className="acces-buttons" id="group-btn" to="/group" onClick={Group}><FaPeopleGroup size={32}/></Link>
        {/* LoginForm/> */}
        <button className="acces-buttons" onClick={toggleLoginForm}>
        <FaRegCircle size={32} /> {/* Adjust size as needed */}
      </button>
      {isLoginFormVisible && <LoginForm />}
        </div>
      </div>
  );
};

export default Header;


