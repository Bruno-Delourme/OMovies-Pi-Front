
import "./KeywordBar.scss";
import React from "react";
import { useAppDispatch } from "../../hooks/redux";

import { fetchRomanceMovies } from "../../store/action/action";

import { useNavigate } from "react-router-dom";

function KeywordBar() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const handleRomanceClick = () => {
        dispatch(fetchRomanceMovies()); // Fetch data
        navigate('/movies/romance'); // Redirect to the route
      };


    return (
        <div className="keywordbar">
            <button className="keywordbar-btn" id="romance-btn" onClick={handleRomanceClick} >Romance</button>
            <button className="keywordbar-btn" id="comedie-btn">Comédie</button>
            <button className="keywordbar-btn" id="marvel-btn" >Marvel</button>
            <button className="keywordbar-btn" id="sciencefiction-btn" >science fiction</button>
            <button className="keywordbar-btn" id="anime-btn" >Animé</button>
        </div>
    );
}

export default KeywordBar;