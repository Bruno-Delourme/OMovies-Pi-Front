
import { useState } from 'react';
import { FaRegCircle } from "react-icons/fa";
// import LoginForm from "../../Header/LoginForm/LoginForm";
// import SearchBar from "../../Header/SearchBar/SearchBar";
// import SubscribeForm from "../../Header/SubscribeForm/SuscribeForm";
// import Group from "../../Group/Group";
// import { FaPeopleGroup } from "react-icons/fa6";
// import { GrUserNew } from "react-icons/gr";
// import { Link } from "react-router-dom";
// import { useAppSelector } from '../../../hooks/redux';

import "./HeaderProfil.scss";

import Layout from "../../Layout/Layout";
import Header from "../../Header/Header";

const LogoPandaRoux = "../../../src/assets/pandaRoux2.png";

function HeaderProfil() {
    return (
        <div className="BodyAllProject">
        <Layout>
            <Header />
        </Layout>
        </div>
    );
}

export default HeaderProfil;


// const HeaderProfil = () => {
//   const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
//   const toggleLoginForm = () => setIsLoginFormVisible(!isLoginFormVisible);

//   const userId = useAppSelector((state) => state.user.id);
//   console.log(userId);


  
//   return (
//         <div className="black-banner">
//         <Link to="/"><img src={LogoPandaRoux} className="LogoPandaRoux" alt="Logo" /></Link>
//         <h1>Mon profil</h1>
//         <SearchBar />

//         <div className="flex flex-col gap-1vh">
//             {userId !== 0 && (
//             <>
//                 <Link to={`/group/${userId}`}>
//                 <button className="acces-buttons" id="group-btn" onClick={Group}>
//                     <FaPeopleGroup size={32} />
//                 </button>
//                 </Link>

//                 <Link to={`/list/${userId}`}>
//                 <button className="acces-buttons" id="list-btn">
//                     btn list
//                 </button>
//                 </Link>

//                 <div>
  
//                 </div>
//             </>
//             )}

//             {userId === 0 && (
//             <>
//                 <button className="acces-buttons-disabled" id="group-btn-disabled" onClick={Group}>
//                     <FaPeopleGroup size={32} />
//                 </button>
                
//                 <button className="acces-buttons-disabled" id="list-btn-disabled">
//                     btn list
//                 </button>
//                 <Link to={`/profil/${userId}`}>
//                 <button className="acces-buttons" id="list-btn">
//                     Mon Profil
//                 </button>
//                 </Link>
//             </>
//             )}

//             <button className="acces-buttons" onClick={toggleLoginForm}>
//             <FaRegCircle size={32} /> {/* Adjust size as needed */}Login
//             </button>
//             {isLoginFormVisible && <LoginForm />}
//         </div>

//     </div>
//   );
// };

// export default HeaderProfil;

