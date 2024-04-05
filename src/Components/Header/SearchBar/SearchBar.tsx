import React, { useState, useEffect } from "react";
import "./SearchBar.scss";

const clapperboard = "src/assets/clapperboard.png";

// Définition du type pour un film
type Movie = {
  title: string;
  poster_path?: string;
};

function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovies = async () => {
      if (query.length > 2) {
        const url = `http://localhost:3000/api/searchBar?query=${query}`;
        const response = await fetch(url);
        const data = await response.json();

        // "data" me renvoi un tableau qui contient 3 objets. (moviesByTitle, moviesByKeyword, moviesByActor )
        // console.log("data", data); ✔

        console.log("PAR TITRE", data.moviesByTitle);

        console.log("PAR MOT CLEF", data.moviesByKeyword);

        console.log("PAR ACTEUR", data.moviesByActor);

        // Création d'un nouveau tableau pour stocker les titres uniques
        const titles = new Set();
        const uniqueMovies = data.moviesByTitle.filter((movie: Movie) => {
          const duplicate = titles.has(movie.title);
          titles.add(movie.title);
          return !duplicate;
        });

        // Mise à jour des films avec l'URL de l'affiche et gestion des affiches manquantes
        const moviesWithPosterPath = uniqueMovies.map((movie: Movie) => ({
          ...movie,
          poster_path: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : clapperboard, // Utilisation d'une image par défaut si poster_path est absent
        }));

        setSuggestions(
          moviesWithPosterPath.length === 1
            ? moviesWithPosterPath
            : moviesWithPosterPath.slice(0, 5)
        );

        setShowSuggestions(true); // Affiche les suggestions
      } else {
        setSuggestions([]);
        setShowSuggestions(false); // Masque les suggestions si la longueur de la recherche est insuffisante
      }
    };

    const timeoutId = setTimeout(() => {
      fetchMovies();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <>
      <div className={`searchBar-container ${showSuggestions ? "active" : ""}`}>
        <input
          className="search-input"
          type="text"
          placeholder="Rechercher un film..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button">
          <img src={clapperboard} alt="Search" />
        </button>

        <ul className={`suggestions-list ${showSuggestions ? "active" : ""}`}>
          {suggestions.map((movie, index) => (
            <li key={index}>
              <div>
                <img src={movie.poster_path} alt={movie.title} />
                <span>{movie.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchBar;
