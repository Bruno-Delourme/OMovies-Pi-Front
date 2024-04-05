import Header from "../Header/Header";
import OneMovie from "../OneMovie/OneMovie";
import KeywordBar from "../KeywordBar/KeywordBar";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import  { useEffect } from 'react';
import { fetchComedieMovies, fetchRomanceMovies } from "../../store/action/action";

import { RomanceMoviesResponse } from "../../../src/@types/movie";

import { useLocation } from "react-router-dom"; // to get actual location and show movies needed

function ResultKeywordBar() {
  const dispatch = useAppDispatch();
  const location = useLocation();


  const romanceMovies = useAppSelector((state) => state.movies.romanceMovies) as unknown as RomanceMoviesResponse;
  const comedyMovies = useAppSelector((state) => state.movies.comedieMovies) as unknown as RomanceMoviesResponse;

  const loading = useAppSelector((state) => state.movies.loading);

  useEffect(() => {
    if (location.pathname === "/movies/romance") {
      dispatch(fetchRomanceMovies());
    } else if (location.pathname === "/movies/comedie") {
      dispatch(fetchComedieMovies());
    }
  }, [dispatch, location.pathname]);

  const moviesToDisplay = location.pathname === "/movies/romance" ? romanceMovies : comedyMovies;



  console.log(romanceMovies)

  return (
    <>
      <Header />
      <KeywordBar />
      {loading && <p>Loading movies...</p>}

            {moviesToDisplay?.results && !loading && (
        <div>
          {moviesToDisplay.results.map((movie) => (
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

      {!moviesToDisplay?.results?.length && !loading && (
        <p>No movies found.</p>
      )}
    </>
  );
}

export default ResultKeywordBar;



/*

    return (
        <>
          <Header />
          <KeywordBar />
    
          {loading && <p>Loading movies...</p>}
    
          {romanceMovies?.length > 0 && !loading && (
            <div>
              {romanceMovies.map((movie) => (
                <OneMovie key={movie.id} {...movie} />
              ))}
            </div>
          )}
    
          {romanceMovies?.length === 0 && !loading && (
            <p>No romance movies found.</p>
          )}
        </>
      );

*/


/*
 return (
        <>
          <Header />
          <KeywordBar />
    
          {romanceMovies?.length > 0 && ( // Check for movies and their length
            <div>
              {romanceMovies.map((movie) => (
                <ul><li key={movie.id} {...movie} /></ul>
                
              ))}
            </div>
          )}
    
          {romanceMovies?.length === 0 && ( // Display a message if no movies
            <p>No movies found.</p>
          )}
        </>
      );

*/
