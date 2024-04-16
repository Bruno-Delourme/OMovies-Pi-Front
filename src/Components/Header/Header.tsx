import { useState } from 'react';
import { FaRegCircle } from "react-icons/fa";
import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";
import SubscribeForm from "./SubscribeForm/SuscribeForm";
import Group from "../Group/Group";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrUserNew } from "react-icons/gr";
import "./Header.scss";
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
  console.log(userId);

  return (
    <div className="black-banner">
      <Link to="/"><img src={LogoPandaRoux} className="LogoPandaRoux" alt="Logo" /></Link>
      <SearchBar />
      <div className="flex flex-col gap-1vh">
        {userId !== 0 && (
          <>
            <Link to={`/group/${userId}`}>
              <button className="acces-buttons" id="group-btn" onClick={Group}>
                <FaPeopleGroup size={32} />
              </button>
            </Link>

            <Link to={`/list/${userId}`}>
              <button className="acces-buttons" id="list-btn" >
                btn list
              </button>
            </Link>
          </>
        )}

        {userId === 0 && (
          <>
              <button className="acces-buttons-disabled" id="group-btn-disabled" onClick={Group}>
                <FaPeopleGroup size={32} />
              </button>
            
              <button className="acces-buttons-disabled" id="list-btn-disabled">
                btn list
              </button>
          </>
        )}
        
        <label htmlFor="my_modal_1" onClick={() => document.getElementById('my_modal_1').showModal().toggleLoginForm()} className="btn">
        <FaRegCircle size={32} />
        </label>
        <input type="checkbox" id="my_modal_1" className="modal-toggle" />
        <div id="my_modal_1" className="modal" role="dialog">       
          <div className="modal-box ">
            <LoginForm />
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_1">Close</label>
        </div>
      </div>
    </div>
  );
};

export default Header;