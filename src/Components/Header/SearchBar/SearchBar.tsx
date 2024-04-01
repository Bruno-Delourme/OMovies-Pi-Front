import React, { useState, useEffect } from "react";
import "./SearchBar.scss";
import clapperboardIcon from "../../../assets/clapperboard.png";

type Movie = {
  title: string;
};

//fonction pour avoir de l'auto suggestion pour le titre du film (pour l'instant) + validation de la recherche par le bouton "validation img"
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (searchTerm.length > 2) {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=51f618f32abf234bda3c45a35fcc9a30&query=${searchTerm}`;
        const response = await fetch(url);
        const data = await response.json();
        const uniqueMovies = data.results.reduce(
          (acc: Movie[], current: Movie) => {
            const x = acc.find((item: Movie) => item.title === current.title);
            if (!x) {
              return [...acc, current]; // décomposition pour ajouter 'current' à 'acc'
            } else {
              return acc;
            }
          },
          [] as Movie[]
        ); //pour spécifier le type de la valeur initiale

        setSuggestions(
          uniqueMovies.length === 1 ? uniqueMovies : uniqueMovies.slice(0, 5)
        ); // pour que le ttitre ne soit pas répété 5 fois si c'est le même
      } else {
        setSuggestions([]);
      }
    };

    // Afin de définir un délai pour réduire le nombre de requêtes lors de la frappe
    const timeoutId = setTimeout(() => {
      fetchMovies();
    }, 500);

    // Annuler le délai si l'utilisateur continue d'écrire
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Il faudra ajouter la logique pour exécuter la recherche
      alert(`Recherche pour: ${searchTerm}`); // Exemple de logique de validation
    }
  };

  return (
    <>
      <div
        className={`search-bar-container ${
          suggestions.length > 0 ? "active" : ""
        }`}
      >
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
          <ul
            className={`suggestions-list ${
              suggestions.length > 0 ? "active" : ""
            }`}
          >
            {suggestions.map((movie, index) => (
              <li key={index}>{movie.title}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default SearchBar;
