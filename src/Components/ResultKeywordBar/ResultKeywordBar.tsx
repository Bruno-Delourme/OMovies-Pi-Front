import Header from "../Header/Header";
import OneMovie from "../OneMovie/OneMovie";
import KeywordBar from "../KeywordBar/KeywordBar";
<<<<<<< HEAD

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import React, { useEffect } from 'react';
import { fetchRomanceMovies } from "../../store/action/action";


function ResultKeywordBar() {
  
  const dispatch = useAppDispatch();
  const romanceMovies = useAppSelector((state) => state.movies.romanceMovies);
  const loading = useAppSelector((state) => state.movies.loading);

  useEffect(() => {
    dispatch(fetchRomanceMovies()); // Fetch romance movies on component mount
  }, [dispatch]); // Include dispatch in the dependency array
  
  console.log(romanceMovies)
    return (
      <>
        <Header />
        <KeywordBar />
  
        {loading && <p>Loading movies...</p>}
  
        {romanceMovies?.length > 0 && !loading && (
          <div>
            {romanceMovies.map((movie) => (
              <OneMovie {...movie} />
            ))}
          </div>
        )}
  
        {romanceMovies?.length === 0 && !loading && (
          <p>No romance movies found.</p>
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
=======
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import React, { useEffect } from 'react';
import { fetchRomanceMovies } from "../../store/action/action";

function ResultKeywordBar() {
  const dispatch = useAppDispatch();
  const romanceMovies = useAppSelector((state) => state.movies.romanceMovies);
  const loading = useAppSelector((state) => state.movies.loading);
  useEffect(() => {
    dispatch(fetchRomanceMovies()); // Fetch romance movies on component mount
  }, [dispatch]); // Include dispatch in the dependency array
  console.log(romanceMovies)
    return (
      <>
        <Header />
        <KeywordBar />
        {loading && <p>Loading movies...</p>}
        {romanceMovies?.length > 0 && !loading && (
          <div>
            {romanceMovies.map((movie) => (
              <OneMovie {...movie} />
            ))}
          </div>
        )}
        {romanceMovies?.length === 0 && !loading && (
          <p>No romance movies found.</p>
        )}
      </>
    );
}
export default ResultKeywordBar;

>>>>>>> 4b117b6aa7f205101b4077fcbac4eecc1f2c5b85
