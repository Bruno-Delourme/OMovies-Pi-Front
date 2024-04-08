
import "./KeywordBar.scss";
import React from "react";
import { useAppDispatch } from "../../hooks/redux";
import { fetchAnimeMovies, fetchComedieMovies, fetchMarvelMovies, fetchRomanceMovies, fetchScienceFictionMovies } from "../../store/action/action";

import { useNavigate } from "react-router-dom";

function KeywordBar() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const handleRomanceClick = () => {
        dispatch(fetchRomanceMovies()); // Fetch data
        navigate('/movies/romance'); // Redirect to the route
      };

    const handleComedieClick = () => {
        dispatch(fetchComedieMovies()); // Fetch data
        navigate('/movies/comedie'); // Redirect to the route
      };

    const handleMarvelClick = () => {
        dispatch(fetchMarvelMovies()); // Fetch data
        navigate('/movies/marvel'); // Redirect to the route
      };

      const handleScienceFictionClick = () => {
        dispatch(fetchScienceFictionMovies()); // Fetch data
        navigate('/movies/sciencefiction'); // Redirect to the route
      };

      const handleAnimeClick = () => {
        dispatch(fetchAnimeMovies()); // Fetch data
        navigate('/movies/anime'); // Redirect to the route
      };

    return (
        <div className="keywordbar">
            <button className="keywordbar-btn" id="romance-btn" onClick={handleRomanceClick} >Romance</button>
            <button className="keywordbar-btn" id="comedie-btn" onClick={handleComedieClick} >Comédie</button>
            <button className="keywordbar-btn" id="marvel-btn" onClick={handleMarvelClick}>Marvel</button>
            <button className="keywordbar-btn" id="sciencefiction-btn" onClick={handleScienceFictionClick} >science fiction</button>
            <button className="keywordbar-btn" id="anime-btn" onClick={handleAnimeClick}  >Animé</button>
        </div>
    );
}

export default KeywordBar;