import { useState } from 'react';
import { FaRegCircle } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GrUserNew } from "react-icons/gr";
import { useAppSelector } from '../../hooks/redux';

import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";
import SubscribeForm from "./SubscribeForm/SuscribeForm";
import Group from "../Group/Group"

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

  const userId = useAppSelector((state) => state.user.id);
  //console.log(userId);
  
  return (
    
    <div className="black-banner">
        <Link to="/"><img onClick={scrollToTop} src={LogoPandaRoux} className="LogoPandaRoux" alt="Logo" />
        </Link>
        <SearchBar/>
    {/* <Group /> */}
      <div className="inline-flex gap-1vh">
        <Link to={`/list/${userId}`}>
          <button className="acces-buttons" id="group-btn" onClick={Group}><FaPeopleGroup size={32}/>
          </button>
        </Link>
    {/* <List /> */}
        <Link to={`/list/${userId}`}>
          <button className="acces-buttons" id="list-btn">btn list
          </button>
        </Link>
    {/* LoginForm/> */}
        <button className="acces-buttons" onClick={toggleLoginForm}>
          <FaRegCircle size={32} />
        </button>
      {isLoginFormVisible && <LoginForm />}
      </div>
    </div>
    );
  };

export default Header;
