import { useState } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";

// Import du composant group + icon group :
// import Group from "../Group/Group";
// import { FaPeopleGroup } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { useAppSelector } from '../../hooks/redux';

const LogoPandaRoux = "../../../src/assets/pandaRoux2.png";

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
  

  return (
    <div className="black-banner">
      <Link to="/"><img src={LogoPandaRoux} className="LogoPandaRoux pl-4" alt="Logo" /></Link>
      <SearchBar />
      <div className="flex flex-col gap-1vh">
        {userId !== 0 && (
          <div>
            {/* <Link to={`/group/${userId}`}>
              <button className="acces-buttons" id="group-btn" onClick={Group}>
                <FaPeopleGroup size={32} />
              </button>
            </Link> */}

            {/* <Link to={`/list/${userId}`}>
              <button className="btn" id="list-btn" >
              <FaListCheck size={32} />
              </button>
            </Link> */}
          </div>
        )}

        {userId === 0 && (
          <>
              {/* <button className="acces-buttons-disabled" id="group-btn-disabled" onClick={Group}>
                <FaPeopleGroup size={32} />
              </button> */}
            
              {/* <button className="acces-buttons-disabled" id="list-btn-disabled">
              <FaListCheck size={32} />
              </button> */}
          </>
        )}

        <div className="pt-4">
        <label htmlFor="loggin_modal" className="btn mr-4">
        <FaRegCircleUser size={32} />
        </label>
        <input type="checkbox" id="loggin_modal" className="modal-toggle" />
        <div id="loggin_modal" className="modal" role="dialog">       
          <div className="bg-white rounded-lg absolute p-4">
            <div className="inline-flex">
              <div className="">
                <LoginForm /> 
              </div>
            </div>
          </div>
          <label className="modal-backdrop" htmlFor="loggin_modal">Close</label>
        </div>
      </div> 
      </div>
    </div>
  );
};

export default Header;