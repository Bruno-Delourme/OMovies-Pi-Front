import React, { useState, useEffect } from "react";
import "./SearchBar.scss";
import clapperboardIcon from "../../../assets/clapperboard.png";

type Movie = {
  id: number;
  title: string;
  release_date: string;
};

//fonction pour avoir de l'auto suggestion pour le titre du film (pour l'instant) + validation de la recherche par le bouton "validation img"
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (searchTerm.length > 2) {
        // Uniquement si la saisie a au moins 3 caractères
        const url = `https://api.themoviedb.org/3/search/movie?api_key=51f618f32abf234bda3c45a35fcc9a30&query=${searchTerm}`;
        const response = await fetch(url);
        const data = await response.json();
        setSuggestions(data.results.slice(0, 5));
      } else {
        setSuggestions([]);
      }
    };

    // Afin de définir un délai pour réduire le nombre de requêtes lors de la frappe
    const timeoutId = setTimeout(() => {
      fetchMovies();
    }, 500);

    // Annuler le délai si l'utilisateur continue de taper
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <>
      <div className={`search-bar-container ${suggestions.length > 0 ? 'active' : ''}`}>
        <input
          type="text"
          placeholder="Rechercher un film..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <button className="search-button">
          <img src={clapperboardIcon} alt="Search" />
        </button>

        {suggestions.length > 0 && (
          <ul className={`suggestions-list ${suggestions.length > 0 ? 'active' : ''}`}>
            {suggestions.map((movie, index) => (
              <li key={index}>
                {movie.title} 
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default SearchBar;
