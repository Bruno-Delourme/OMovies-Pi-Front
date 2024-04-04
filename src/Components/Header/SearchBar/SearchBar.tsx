import React, { useState, useEffect } from "react";
import "./SearchBar.scss";

const clapperboard = "../../../clapperboard.png"


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
        const uniqueMovies = data.results.reduce(
          (acc: Movie[], current: Movie) => {
            const x = acc.find((item: Movie) => item.title === current.title);
            if (!x) {
              return [...acc, current]; // Ajoutez l'objet de film unique
            } else {
              return acc;
            }
          },
          [] as Movie[]
        );

        // Mettez à jour les films avec l'URL de la miniature
        const moviesWithPosterPath = uniqueMovies.map((movie: Movie) => {
          return {
            ...movie,
            poster_path: `https://image.tmdb.org/t/p/w500${
              movie.poster_path || ""
            }` // Assurez-vous de remplacer `poster_path` par la clé correcte pour l'URL de la miniature dans vos données
          };
        });

        setSuggestions(
          moviesWithPosterPath.length === 1
            ? moviesWithPosterPath
            : moviesWithPosterPath.slice(0, 5)
        );

        setShowSuggestions(true); // Afficher les suggestions
      } else {
        setSuggestions([]);
        setShowSuggestions(false); // Masquer les suggestions si la longueur de la recherche est insuffisante
      }
    };

    // Afin de définir un délai pour réduire le nombre de requêtes lors de la frappe
    const timeoutId = setTimeout(() => {
      fetchMovies();
    }, 500);

    // Annuler le délai si l'utilisateur continue d'écrire
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <>
      <div
        className={`searchBar-container ${
          showSuggestions ? "active" : ""
        }`}
      >
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

        {showSuggestions && (
          <ul
            className={`suggestions-list ${
              showSuggestions ? "active" : ""
            }`}
          >
            {suggestions.map((movie, index) => (
              <li key={index}>
                <div>
                  <img src={movie.poster_path} alt={movie.title} />{" "}
                  {/* Ajoutez la miniature */}
                  <span>{movie.title}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default SearchBar;