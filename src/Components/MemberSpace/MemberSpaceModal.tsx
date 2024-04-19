// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import MemberSpace from './MemberSpace';
// import { useEffect, useState } from 'react';
// import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import {  deleteUser, updateUser } from '../../store/action/action';
// import HeaderProfil from './HeaderProfil/HeaderProfil';
// import { UserFormData } from '../../@types/user';

// const MovieDetailsModal = ({ userId }) => {
//   return (
//     <div className="login-form">
//       <div className="inline-flex items-center justify-between w-full">
//         <p className="login-form-message p-4">
//           Bienvenue
//         </p>
//         <label htmlFor="userProfil_modal" className="btn">
//           Mon Profil
//         </label>
//         <input type="checkbox" id="userProfil_modal" className="modal-toggle" />
//         <div id="userProfil_modal" className="modal" role="dialog">       
//           <div className="modal-box">
//             {/* Utilisez Routes et Route pour afficher le contenu de la route */}
//             <Routes>
//               <Route path="/" element={<MemberSpace userId={userId} />} />
//             </Routes>
//             <label className="modal-backdrop" htmlFor="userProfil_modal">Close</label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetailsModal;