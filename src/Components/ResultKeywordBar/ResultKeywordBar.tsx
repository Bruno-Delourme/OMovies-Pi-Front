import Header from "../Header/Header";
import OneMovie from "../OneMovie/OneMovie";
import KeywordBar from "../KeywordBar/KeywordBar";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import React, { useEffect } from 'react';
import { fetchFamilialMovies, fetchActionMovies, fetchRomanceMovies } from "../../store/action/action";

import { MoviesResponse } from "../../../src/@types/movie";
import "./ResultKeywordBar.scss";

import { useLocation } from "react-router-dom"; // to get actual location and show movies needed

function ResultKeywordBar() {
  const dispatch = useAppDispatch();
  const location = useLocation();


  const romanceMovies = useAppSelector((state) => state.movies.romanceMovies) as unknown as MoviesResponse;
  const familialMovies = useAppSelector((state) => state.movies.familialMovies) as unknown as MoviesResponse;
  const actionMovies = useAppSelector((state) => state.movies.actionMovies) as unknown as MoviesResponse;
  const ScienceFictionMovies = useAppSelector((state) => state.movies.ScienceFictionMovies) as unknown as MoviesResponse;
  const documentaireMovies = useAppSelector((state) => state.movies.documentaireMovies) as unknown as MoviesResponse;

  
  /*
useAppSelector((state) => state.movies.marvelMovies) : to access the global state of the app.
The function passed as a parameter (state) allows accessing a specific part of the state marvelMovies, comedieMovies ..

as unknown : TypeScript cannot directly convert one type to another without an intermediate step. 
Here, as unknown is used to tell TypeScript to temporarily consider the type as unknown.

as MoviesResponse : the unknown type is converted to MoviesResponse, which is the expected interface for the movies data.
  */

  const loading = useAppSelector((state) => state.movies.loading);

  useEffect(() => {
    if (location.pathname === "/movies/romance") {
      //send an action to the Redux store, fetch and update the state with movies data based on the current URL path
      dispatch(fetchRomanceMovies());
    } else if (location.pathname === "/movies/comedie") {
      dispatch(fetchFamilialMovies());
    } else if (location.pathname === "/movies/marvel") {
      dispatch(fetchActionMovies());
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



  console.log(romanceMovies)

  return (
    <>
      <Header />
      <KeywordBar />
      {loading && <p>Loading movies...</p>}

            {moviesToDisplay?.movies && !loading && (
        <div className="ResultContainer">
          {moviesToDisplay.movies.map((movie) => (
            <OneMovie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
            />
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
