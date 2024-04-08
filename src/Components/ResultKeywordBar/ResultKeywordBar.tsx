import Header from "../Header/Header";
import OneMovie from "../OneMovie/OneMovie";
import KeywordBar from "../KeywordBar/KeywordBar";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import React, { useEffect } from 'react';
import { fetchComedieMovies, fetchMarvelMovies, fetchRomanceMovies } from "../../store/action/action";

import { MoviesResponse } from "../../../src/@types/movie";

import { useLocation } from "react-router-dom"; // to get actual location and show movies needed

function ResultKeywordBar() {
  const dispatch = useAppDispatch();
  const location = useLocation();


  const romanceMovies = useAppSelector((state) => state.movies.romanceMovies) 
  const comedyMovies = useAppSelector((state) => state.movies.comedieMovies) 
  const marvelMovies = useAppSelector((state) => state.movies.marvelMovies) 
  const ScienceFictionMovies = useAppSelector((state) => state.movies.ScienceFictionMovies) 
  const animeMovies = useAppSelector((state) => state.movies.animeMovies) 

  
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
      dispatch(fetchComedieMovies());
    } else if (location.pathname === "/movies/marvel") {
      dispatch(fetchMarvelMovies());
  }
  }, [dispatch, location.pathname]);

  const moviesToDisplay =
    location.pathname === "/movies/romance"
      ? romanceMovies
      : location.pathname === "/movies/comedie"
      ? comedyMovies
      : location.pathname === "/movies/marvel"
      ? marvelMovies
      : location.pathname === "/movies/sciencefiction"
      ? ScienceFictionMovies
      : location.pathname === "/movies/anime"
      ? animeMovies
      : null;



  console.log(romanceMovies)

  return (
    <>
      <Header />
      <KeywordBar />
      {loading && <p>Loading movies...</p>}

      {moviesToDisplay && !loading && (
        <div>
          {moviesToDisplay.map((movie) => (
            <React.Fragment key={movie.id}> {/* React.Fragment used only to regroup or wrap many element child without adding a knot to DOM ( i used it only for key)*/}
              <OneMovie
              
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
            />
            </React.Fragment>
            
          ))}
        </div>
      )}

      {!moviesToDisplay?.length && !loading && (
        <p>No movies found.</p>
      )}
    </>
  );
}

export default ResultKeywordBar;