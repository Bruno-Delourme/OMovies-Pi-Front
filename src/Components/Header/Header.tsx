import { useState } from 'react';
import { FaRegCircle } from "react-icons/fa";

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
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  const toggleLoginForm = () => setIsLoginFormVisible(!isLoginFormVisible);

//pour remonter en cliquant sur le logo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    
      <div className="black-banner">
        
        <button onClick={scrollToTop} style={{ all: 'unset' }}>
          <img src={LogoPandaRoux} className="LogoPandaRoux" alt="Logo" />
        </button>
        <SearchBar/>
        <div className="flex flex-col gap-1vh">
        {/* <Group /> */}
        <button className="acces-buttons" id="group-btn" onClick={Group}><FaPeopleGroup size={32}/></button>
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
