import React, { useState, useEffect } from "react";
import "./SearchBar.scss";


type Movie = {
  title: string;
  poster_path?: string;
};

function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Movie[]>([]);

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
            poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path || ''}` // Assurez-vous de remplacer `poster_path` par la clé correcte pour l'URL de la miniature dans vos données
          };
        });

        setSuggestions(
          moviesWithPosterPath.length === 1
            ? moviesWithPosterPath
            : moviesWithPosterPath.slice(0, 5)
        );
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
  }, [query]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Il faudra ajouter la logique pour exécuter la recherche
      alert(`Recherche pour: ${query}`); // Exemple de logique de validation
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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />

        <button className="search-button">
          <img src="public/clapperboard.png" alt="Search" />
        </button>

        {suggestions.length > 0 && (
          <ul
            className={`suggestions-list ${
              suggestions.length > 0 ? "active" : ""
            }`}
          >
            {suggestions.map((movie, index) => (
              <li key={index}>
                <div>
                  <img src={movie.poster_path} alt={movie.title} /> {/* Ajoutez la miniature */}
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
