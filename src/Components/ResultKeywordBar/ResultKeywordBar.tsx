/* eslint-disable react/jsx-key */

import { useNavigate } from "react-router-dom";   

import Header from "../Header/Header";
import OneMovie from "../OneMovie/OneMovie";
import KeywordBar from "../KeywordBar/KeywordBar";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import  { useEffect } from 'react';
import { fetchFamilialMovies, fetchActionMovies, fetchRomanceMovies, fetchScienceFictionMovies, fetchDocumentaireMovies, fetchRomanceRatingMovies, fetchFamilialRatingMovies, fetchActionRatingMovies, fetchScienceFictionRatingMovies, fetchDocumentaireRatingMovies } from "../../store/action/action";

import { MoviesResponse, Movie } from "../../../src/@types/movie";

import { useLocation } from "react-router-dom"; // to get actual location and show movies needed

function ResultKeywordBar() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate(); // use AP history of react to update URL on click on Rating buttons 

  const romanceMovies = useAppSelector((state) => state.movies.romanceMovies) as unknown as MoviesResponse;
  const romanceMoviesRating = useAppSelector((state) => state.movies.romanceMoviesRating) as unknown as MoviesResponse;

  const familialMovies = useAppSelector((state) => state.movies.familialMovies) as unknown as MoviesResponse;
  const familialMoviesRating = useAppSelector((state) => state.movies.familialMoviesRating) as unknown as MoviesResponse;

  const actionMovies = useAppSelector((state) => state.movies.actionMovies) as unknown as MoviesResponse;
  const actionMoviesRating = useAppSelector((state) => state.movies.actionMoviesRating) as unknown as MoviesResponse;

  const ScienceFictionMovies = useAppSelector((state) => state.movies.ScienceFictionMovies) as unknown as MoviesResponse;
  const ScienceFictionMoviesRating = useAppSelector((state) => state.movies.ScienceFictionMoviesRating) as unknown as MoviesResponse;

  const documentaireMovies = useAppSelector((state) => state.movies.documentaireMovies) as unknown as MoviesResponse;
  const documentaireMoviesRating = useAppSelector((state) => state.movies.documentaireMoviesRating) as unknown as MoviesResponse;
  
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
    } 
    if (location.pathname === "/moviesRating/romance") {
      //send an action to the Redux store, fetch and update the state with movies data based on the current URL path
      dispatch(fetchRomanceRatingMovies());  
    } 

    else if (location.pathname === "/movies/familial") {
      dispatch(fetchFamilialMovies());
    }
    else if (location.pathname === "/moviesRating/familial") {
      dispatch(fetchFamilialRatingMovies());
    }
    
    else if (location.pathname === "/movies/action") {
      dispatch(fetchActionMovies());
    }
    else if (location.pathname === "/moviesRating/action") {
      dispatch(fetchActionRatingMovies());
    }

    else if (location.pathname === "/movies/science-fiction") {
      dispatch(fetchScienceFictionMovies());
    }
    else if (location.pathname === "/moviesRating/science-fiction") {
      dispatch(fetchScienceFictionRatingMovies());
    }

    else if (location.pathname === "/movies/documentaire") {
      dispatch(fetchDocumentaireMovies());
    }
    else if (location.pathname === "/moviesRating/documentaire") {
      dispatch(fetchDocumentaireRatingMovies());
    }

  }, [dispatch, location.pathname]);


  const handleRomanceRatingClick = () => {
    dispatch(fetchRomanceRatingMovies()); // Fetch data
    navigate("/moviesRating/romance"); // Update URL
  };

  const handleFamilialRatingClick = () => {
    dispatch(fetchFamilialRatingMovies()); 
    navigate("/moviesRating/familial"); 
  };

  const handleActionRatingClick = () => {
    dispatch(fetchActionRatingMovies());
    navigate("/moviesRating/action"); 
  };

  const handleScienceFictionRatingClick = () => {
    dispatch(fetchScienceFictionRatingMovies()); 
    navigate("/moviesRating/science-fiction"); 
  };

  const handleDocumentaireRatingClick = () => {
    dispatch(fetchDocumentaireRatingMovies()); 
    navigate("/moviesRating/documentaire"); 
  };

  
  const moviesToDisplay =
    location.pathname === "/movies/romance"
    ? romanceMovies
    : location.pathname === "/moviesRating/romance"
    ? romanceMoviesRating

    : location.pathname === "/movies/familial"
    ? familialMovies
    : location.pathname === "/moviesRating/familial"
    ? familialMoviesRating

    : location.pathname === "/movies/action"
    ? actionMovies
    : location.pathname === "/moviesRating/action"
    ? actionMoviesRating

    : location.pathname === "/movies/science-fiction"
    ? ScienceFictionMovies
    : location.pathname === "/moviesRating/science-fiction"
    ? ScienceFictionMoviesRating

    : location.pathname === "/movies/documentaire"
    ? documentaireMovies
    : location.pathname === "/moviesRating/documentaire"
    ? documentaireMoviesRating
    : null;




  console.log(romanceMovies)

  return (
    <div>
      <Header />
      <KeywordBar />
      {location.pathname === "/movies/romance" && (
        <button className="genre-btn text-white bg-red-400" onClick={handleRomanceRatingClick}>Romance Rating</button>
      )}
      {location.pathname === "/movies/familial" && (
        <button className="genre-btn text-white bg-stone-950" onClick={handleFamilialRatingClick} >Familial Rating</button>
      )}
      {location.pathname === "/movies/action" && (
        <button className="genre-btn text-white bg-orange-700" onClick={handleActionRatingClick} >Action Rating</button>
      )}
      {location.pathname === "/movies/science-fiction" && (
        <button className="genre-btn text-white bg-yellow-950" onClick={handleScienceFictionRatingClick}>Science Fiction Rating</button>
      )}
      {location.pathname === "/movies/documentaire" && (
        <button className="genre-btn text-black bg-white" onClick={handleDocumentaireRatingClick}>Documentaire Rating</button>
      )}

      {loading && <p>Loading movies...</p>}

      {moviesToDisplay?.movies && !loading && (
        <div className="flex flex-wrap w-full justify-evenly">
          {moviesToDisplay.movies.map((movie) => (
            <div className="p-1 max-w-72">
              {/* resultKeywordBar-container ou flex flex-wrap w-full justify-evenly */}
              <OneMovie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                overview={movie.overview}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
                adult={false}
                original_title={""}
                original_language={""}
                cast_id={0}
                character={""}
                name={""}             
              />
            </div>
          ))}
        </div>
      )},

      {!moviesToDisplay?.movies?.length && !loading && (
        <p>No movies found.</p>
      )}
    </div>
    
  );
  
};

export default ResultKeywordBar;