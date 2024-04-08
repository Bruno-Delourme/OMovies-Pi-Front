
import "./KeywordBar.scss";
import React from "react";
import { useAppDispatch } from "../../hooks/redux";
import { fetchActionMovies, fetchRomanceMovies, fetchScienceFictionMovies, fetchDocumentaireMovies, fetchFamilialMovies } from "../../store/action/action";

import { useNavigate } from "react-router-dom";

function KeywordBar() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const handleRomanceClick = () => {
        dispatch(fetchRomanceMovies()); // Fetch data
        navigate('/movies/romance'); // Redirect to the route
      };

    const handleFamilialClick = () => {
        dispatch(fetchFamilialMovies()); // Fetch data
        navigate('/movies/familial'); // Redirect to the route
      };

    const handleActionClick = () => {
        dispatch(fetchActionMovies()); // Fetch data
        navigate('/movies/action'); // Redirect to the route
      };

      const handleScienceFictionClick = () => {
        dispatch(fetchScienceFictionMovies()); // Fetch data
        navigate('/movies/science-fiction'); // Redirect to the route
      };

      const handleDocumentaireClick = () => {
        dispatch(fetchDocumentaireMovies()); // Fetch data
        navigate('/movies/documentaire'); // Redirect to the route
      };

    return (
        <div className="keywordbar">
            <button className="keywordbar-btn" id="romance-btn" onClick={handleRomanceClick} >Romance</button>
            <button className="keywordbar-btn" id="comedie-btn" onClick={handleFamilialClick} >Familial</button>
            <button className="keywordbar-btn" id="action-btn" onClick={handleActionClick}>Action</button>
            <button className="keywordbar-btn" id="sciencefiction-btn" onClick={handleScienceFictionClick} >science fiction</button>
            <button className="keywordbar-btn" id="documentaire-btn" onClick={handleDocumentaireClick}  >Documentaire</button>
        </div>
    );
}

export default KeywordBar;