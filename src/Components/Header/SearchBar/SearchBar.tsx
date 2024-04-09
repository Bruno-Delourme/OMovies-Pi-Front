import React, { useState, useEffect } from "react";
import "./SearchBar.scss";

const clapperboard = "../../../src/assets/clapperboard.png";

// Définition du type pour un film
type Movie = {
  title: string;
  poster_path?: string;
};

function SearchBar() {
  // État pour la requête de recherche entrée par l'utilisateur
  const [query, setQuery] = useState<string>("");
  // État pour stocker les suggestions de films basées sur la requête
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  // Booléen pour contrôler l'affichage de la liste de suggestions
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  // Contrôle l'affichage des suggestions de films par acteur
  const [showMoviesByActor, setShowMoviesByActor] = useState<boolean>(false);
  // Contrôle l'affichage des suggestions de films par mot-clé
  const [showMoviesByKeyword, setShowMoviesByKeyword] = useState<boolean>(false);
  // Stocke les films suggérés par acteur
  const [moviesByActor, setMoviesByActor] = useState<Movie[]>([]);
  // Stocke les films suggérés par mot-clé
  const [moviesByKeyword, setMoviesByKeyword] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (query.length > 2) { // On ne lance la recherche que si la requête fait plus de 2 caractères
        const url = `http://localhost:3000/api/searchBar?query=${query}`;
        const response = await fetch(url); // Appel API
        const data = await response.json(); // Conversion de la réponse en JSON pour Gwendo

        // Traitement et mise à jour de moviesByTitle
        const moviesWithPosterPath = data.moviesByTitle.map((movie: Movie) => ({
          ...movie,
          poster_path: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : clapperboard,
        }));

        setSuggestions(moviesWithPosterPath.slice(0, 5));// Limite à 5 suggestions
        
        // Traitement et mise à jour de moviesByActor
        const actorMoviesWithPoster = extractMovies(data.moviesByActor).map((movie: Movie) => ({
          ...movie,
          poster_path: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : clapperboard,
        }));
        setMoviesByActor(actorMoviesWithPoster.slice(0, 5));

        // Traitement et mise à jour de par mot-clés
        const keywordMoviesWithPoster = extractMovies(data.moviesByKeyword).map((movie: Movie) => ({
          ...movie,
          poster_path: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : clapperboard,
        }));
        setMoviesByKeyword(keywordMoviesWithPoster.slice(0, 5));

        setShowSuggestions(true);// Affiche les suggestions
      } else {
        setSuggestions([]);
        setShowSuggestions(false);// Cache les suggestions si la requête est trop courte
      }
    };

    const timeoutId = setTimeout(() => {
      fetchMovies();
    }, 500); // Lance la récupération des films après un délai pour limiter les appels API lors de la saisie

    return () => clearTimeout(timeoutId);
  }, [query]);// L'effet se relance à chaque modification de la requête

  // Fonction pour extraire les films
  const extractMovies = (moviesArray: any[]) => {
    return Array.isArray(moviesArray) ? moviesArray.flatMap(category =>
      Array.isArray(category) ? Object.values(category).flat() : []
    ) : [];
  };

  return (
    <>
      <div className={`flex items-center relative ${showSuggestions ? "active" : ""}`}>
        
        <input
        className="search-bar"
        type="text" 
        placeholder="Rechercher un titre de film..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
        />

        <button className="button-searchBar">
          <img src={clapperboard} alt="Search" />
        </button>
        
        <ul className={`.suggestions-list ${showSuggestions ? "" : "hidden"}`}>
          {/* Films suggérés par titre */}
          {suggestions.map((movie, index) => (
            <li  key={index} className="flex items-center px-4 py-2 hover:bg-gray-100">
              <div>
                <img src={movie.poster_path} alt={movie.title} className="w-12 h-auto mr-2"/>
                <span>{movie.title}</span>
              </div>
            </li>
          ))}
          {/* Option pour afficher les films suggérés par acteur */}
          <li className="clickable" onClick={() => setShowMoviesByActor(!showMoviesByActor)}>Movies By Actor</li>
          {showMoviesByActor && moviesByActor.map((movie, index) => (
            <li key={index} className="details">
              <div>
                <img src={movie.poster_path} alt={movie.title} />
                <span>{movie.title}</span>
              </div>
            </li>
          ))}
          {/* Option pour afficher les films suggérés par mot-clé */}
          <li className="clickable" onClick={() => setShowMoviesByKeyword(!showMoviesByKeyword)}>Movies By Keyword</li>
          {showMoviesByKeyword && moviesByKeyword.map((movie, index) => (
            <li key={index} className="details">
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
