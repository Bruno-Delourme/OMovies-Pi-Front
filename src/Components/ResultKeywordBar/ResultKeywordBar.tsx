import Header from "../Header/Header";
import OneMovie from "../OneMovie/OneMovie";
import KeywordBar from "../KeywordBar/KeywordBar";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import React, { useEffect, useState } from 'react';
import { fetchFamilialMovies, fetchActionMovies, fetchRomanceMovies, fetchMoviesByRating } from "../../store/action/action";



import { MoviesResponse, Movie } from "../../../src/@types/movie";
import "./ResultKeywordBar.scss";



const LogoAward = "../../../public/award.svg";




function ResultKeywordBar() {
  const dispatch = useAppDispatch();

  const [showAwardButton, setShowAwardButton] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");

  const romanceMovies = useAppSelector((state) => state.movies.romanceMovies) as unknown as MoviesResponse;
  const familialMovies = useAppSelector((state) => state.movies.familialMovies) as unknown as MoviesResponse;
  const actionMovies = useAppSelector((state) => state.movies.actionMovies) as unknown as MoviesResponse;
  const ScienceFictionMovies = useAppSelector((state) => state.movies.ScienceFictionMovies) as unknown as MoviesResponse;
  const documentaireMovies = useAppSelector((state) => state.movies.documentaireMovies) as unknown as MoviesResponse;


  const moviesByRating = useAppSelector((state) => state.movies.moviesByRating) as unknown as MoviesResponse;

 
  /*
useAppSelector((state) => state.movies.marvelMovies) : to access the global state of the app.
The function passed as a parameter (state) allows accessing a specific part of the state romanceMovies, familialMovies ..

as unknown : TypeScript cannot directly convert one type to another without an intermediate step. 
Here, as unknown is used to tell TypeScript to temporarily consider the type as unknown.

as MoviesResponse : the unknown type is converted to MoviesResponse, which is the expected interface for the movies data.
  */

  const loading = useAppSelector((state) => state.movies.loading);

  useEffect(() => {
    if (location.pathname === "/movies/romance") {
      //send an action to the Redux store, fetch and update the state with movies data based on the current URL path
      dispatch(fetchRomanceMovies());
      setShowAwardButton(true);
    } else if (location.pathname === "/movies/comedie") {
      dispatch(fetchFamilialMovies());
      setShowAwardButton(true);
    } else if (location.pathname === "/movies/marvel") {
      dispatch(fetchActionMovies());
      setShowAwardButton(true);
  }
  }, [dispatch, location.pathname]);

  const moviesToDisplay =
  location.pathname === "/movies/romance"
    ? romanceMovies
    : location.pathname === "/movies/familial"
    ? familialMovies
    : location.pathname === "/movies/action"
    ? actionMovies
    : location.pathname === "/movies/science-fiction"
    ? ScienceFictionMovies
    : location.pathname === "/movies/documentaire"
    ? documentaireMovies
    : null;


  console.log(romanceMovies);


/***************  PARTIE RATING PAR GENRE ***********************************************************/
//est appelée lorsque l'utilisateur clique sur un genre
const handleGenreClick = (genre: string) => {
  setSelectedGenre(genre);
  setShowAwardButton(true);
};

//ici on met à jour la variable selectedGenre avec le genre sélectionné
/*
 handleAwardClick ne sera appelée que si selectedGenre n'est pas vide. Si selectedGenre est vide, un message d'erreur sera affiché dans la console.

const handleAwardClick = () => {
  if (typeof selectedGenre!== 'undefined' && selectedGenre.length > 0 && typeof fetchMoviesByRating === 'function') {
    dispatch(fetchMoviesByRating(selectedGenre));
    setShowAwardButton(false); // Set showAwardButton to false after dispatching the fetchMoviesByRating action
  } else {
    console.error(`La variable selectedGenre n'est pas définie ou ne contient pas de valeur.`);
  }
};*/

//selectedGenre aura toujours une valeur par défaut, qui est une chaîne vide.
// handleAwardClick ne sera appelée que si selectedGenre n'est pas vide. Si selectedGenre est vide, un message d'erreur sera affiché dans la console.
const handleAwardClick = () => {
  if (typeof selectedGenre!== 'undefined' && selectedGenre.length > 0 && typeof fetchMoviesByRating === 'function') {
    dispatch(fetchMoviesByRating(selectedGenre));
    setShowAwardButton(false); // Set showAwardButton to false after dispatching the fetchMoviesByRating action
  } else {
    console.error(`La variable selectedGenre n'est pas définie ou ne contient pas de valeur.`);
  }
};


  return (
    <>
      <Header />
      <KeywordBar />
      {loading && <p>Loading movies...</p>}

      {showAwardButton && (
        <img
        src={LogoAward}
        alt="Award Button"
        onClick={() => handleAwardClick()} 
        className="award-button"
      />
      )}



            {moviesToDisplay?.movies && !loading && (
        <div className="resultKeywordBar-container">

          {moviesToDisplay.movies.map((movie) => (
            <OneMovie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
              release_date={movie.release_date}
              vote_average={movie.vote_average} adult={false} original_title={""} original_language={""} cast_id={0} character={""} name={""} genre_ids={0}            />
          ))}
        </div>
      )}

      {moviesByRating?.movies &&!loading && (
        <div className="resultKeywordBar-container">
        {moviesByRating.movies.map((movie) => (
          <OneMovie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            overview={movie.overview}
            release_date={movie.release_date}
            vote_average={movie.vote_average} adult={false} original_title={""} original_language={""} cast_id={0} character={""} name={""} genre_ids={0} />
        ))}
      </div>
      )}

      {!moviesToDisplay?.movies?.length && !loading && (
        <p>No movies found.</p>
      )}

    </>
  );
}

export default ResultKeywordBar;
