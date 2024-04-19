import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails';


const movieDetailsModal = () => {
  return (
    <div className="login-form">
      <div className="inline-flex items-center justify-between w-full">
        <p className="login-form-message p-4">
          Bienvenue
        </p>
        <label htmlFor="movieDetailsModal" className="btn">
          Mon Profil
        </label>
        <input type="checkbox" id="movieDetailsModal" className="modal-toggle" />
        <div id="movieDetailsModal" className="modal" role="dialog">       
          <div className="modal-box">
            
            <Routes>
              <Route path="/movie/:id" element={<MovieDetails/>} />
            </Routes>
            <label className="modal-backdrop" htmlFor="movieDetailsModal">Close</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default movieDetailsModal;