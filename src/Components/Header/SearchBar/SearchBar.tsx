import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const clapperboard = "../../../src/assets/clapperboard.png";

type Movie = {
  id: number;
  title: string;
  poster_path?: string;
};

function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [showMoviesByActor, setShowMoviesByActor] = useState<boolean>(false);
  const [showMoviesByKeyword, setShowMoviesByKeyword] =
    useState<boolean>(false);
  const [moviesByActor, setMoviesByActor] = useState<Movie[]>([]);
  const [moviesByKeyword, setMoviesByKeyword] = useState<Movie[]>([]);

 
  useEffect(() => {
    const fetchMovies = async () => {
      if (query.length > 2) {
        const url = `http://localhost:3000/api/searchBar?query=${query}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log("DATA MOVIE SEARCH should have id ", data.moviesByTitle);
        // Vérifiez si data.moviesByTitle existe avant de faire le mapping
        if (data.moviesByTitle) {
          const moviesWithPosterPath = data.moviesByTitle.map(
            (movie: Movie) => ({
              ...movie,
              poster_path: movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : clapperboard,
            })
          );

          setSuggestions(moviesWithPosterPath.slice(0, 5));
        } else {
          setSuggestions([]);
        }

        // Traitement et mise à jour de moviesByActor
        if (data.moviesByActor) {
          const actorMoviesWithPoster = extractMovies(data.moviesByActor).map(
            (movie: Movie) => ({
              ...movie,
              poster_path: movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : clapperboard,
            })
          );
          setMoviesByActor(actorMoviesWithPoster.slice(0, 5));
        } else {
          setMoviesByActor([]);
        }

        // Traitement et mise à jour de par mot-clés
        if (data.moviesByKeyword) {
          const keywordMoviesWithPoster = extractMovies(
            data.moviesByKeyword
          ).map((movie: Movie) => ({
            ...movie,
            poster_path: movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : clapperboard,
          }));
          setMoviesByKeyword(keywordMoviesWithPoster.slice(0, 5));
        } else {
          setMoviesByKeyword([]);
        }

        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchMovies();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const extractMovies = (moviesArray: any[]) => {
    return Array.isArray(moviesArray)
      ? moviesArray.flatMap((category) =>
          Array.isArray(category) ? Object.values(category).flat() : []
        )
      : [];
  };
  console.log(suggestions);
  return (
    <>
      <div
        className={`flex items-center relative w-2/4 ${
          showSuggestions ? "active" : ""
        }`}
      >
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

        <ul className={`suggestions-list ${showSuggestions ? "" : "hidden"}`}>
          {/* Films suggérés par titre */}
          {suggestions.map((movie, index) => (
            // eslint-disable-next-line react/jsx-key
            <Link to={`/movie/searchbar/${movie.id}`}>
              <li key={index} className="film-choice">
                <div className="flex items-center">
                  <img
                    src={movie.poster_path}
                    alt={movie.title}
                    className="w-16 h-auto mr-2"
                  />
                  <span className="text-black ">{movie.title}</span>
                </div>
              </li>
            </Link>
            //<Link to={`/movie/${movie.id}`}>
            //   <li key={index} className="film-choice" >
            //   <div className="flex items-center">
            //     <img
            //       src={movie.poster_path}
            //       alt={movie.title}
            //       className="w-16 h-auto mr-2"
            //     />
            //     <span className="text-black ">{movie.title}</span>
            //   </div>
            // </li>
            //</Link>
          ))}
          {/* Option pour afficher les films suggérés par acteur */}
          <li
            className="clickable text-black cursor-pointer"
            onClick={() => setShowMoviesByActor(!showMoviesByActor)}
          >
            Movies By Actor
          </li>
          {showMoviesByActor &&
            moviesByActor.map((movie, index) => (
              <li
                key={index}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <div className="flex items-center">
                  <img
                    src={movie.poster_path}
                    alt={movie.title}
                    className="w-16 h-auto mr-2"
                  />
                  <span className="text-black">{movie.title}</span>
                </div>
              </li>
            ))}
          {/* Option pour afficher les films suggérés par mot-clé */}
          <li
            className="clickable text-black cursor-pointer"
            onClick={() => setShowMoviesByKeyword(!showMoviesByKeyword)}
          >
            Movies By Keyword
          </li>
          {showMoviesByKeyword &&
            moviesByKeyword.map((movie, index) => (
              <li
                key={index}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <div className="flex items-center">
                  <img
                    src={movie.poster_path}
                    alt={movie.title}
                    className="w-16 h-auto mr-2"
                  />
                  <span className="text-black">{movie.title}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default SearchBar;
