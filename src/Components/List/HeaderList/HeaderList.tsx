
// import { useState } from 'react';
// import { FaRegCircle } from "react-icons/fa";
// import LoginForm from "../../Header/LoginForm/LoginForm";
// import SearchBar from "../../Header/SearchBar/SearchBar";
// import SubscribeForm from "../../Header/SubscribeForm/SuscribeForm";
// import Group from "../../Group/Group";
// import { FaPeopleGroup } from "react-icons/fa6";
// import { GrUserNew } from "react-icons/gr";
// import { Link } from "react-router-dom";
// import { useAppSelector } from '../../../hooks/redux';



import Layout from "../../Layout/Layout";
import Header from "../../Header/Header";
import SearchBar from "../../Header/SearchBar/SearchBar";

function HeaderList() {
    return (
        <div className="BodyAllProject">
        <Layout>
            <Header />
            <SearchBar />
        </Layout>
        </div>
    );
}

export default HeaderList;

// const HeaderList = () => {
//   const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
//   const toggleLoginForm = () => setIsLoginFormVisible(!isLoginFormVisible);

//   const userId = useAppSelector((state) => state.user.id);
//   console.log(userId);

//   return (
//     <div className="black-banner">
//     <Link to="/"><img src={LogoPandaRoux} className="LogoPandaRoux" alt="Logo" /></Link>
//     <SearchBar />
//     <div className="flex flex-col gap-1vh">
//       {userId !== 0 && (
//         <div>
//           <Link to={`/group/${userId}`}>
//             <button className="acces-buttons" id="group-btn" onClick={Group}>
//               <FaPeopleGroup size={32} />
//             </button>
//           </Link>

//           <Link to={`/list/${userId}`}>
//             <button className="acces-buttons" id="list-btn" >
//               btn list
//             </button>
//           </Link>
//         </div>
//       )}

//       {userId === 0 && (
//         <>
//             <button className="acces-buttons-disabled" id="group-btn-disabled" onClick={Group}>
//               <FaPeopleGroup size={32} />
//             </button>
          
//             <button className="acces-buttons-disabled" id="list-btn-disabled">
//               btn list
//             </button>
//         </>
//       )}

//       <div className="pt-4">
//       <label htmlFor="loggin_modal" className="btn">
//       <FaRegCircle size={32} />
//       </label>
//       <input type="checkbox" id="loggin_modal" className="modal-toggle" />
//       <div id="loggin_modal" className="modal" role="dialog">       
//         <div className="bg-white rounded-lg absolute p-4">
//           <div className="inline-flex">
//             <LoginForm /> 
//           </div>
//         </div>
//         <label className="modal-backdrop" htmlFor="loggin_modal">Close</label>
//       </div>
//     </div> 
//     </div>
//   </div>
// );
// };

// export default HeaderList;

