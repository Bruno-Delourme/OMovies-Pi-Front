import Header from "../Header/Header";

import OneMovie from "../OneMovie/OneMovie";
import KeywordBar from "../KeywordBar/KeywordBar";
import { useAppSelector } from "../../hooks/redux";



function ResultKeywordBar() {
    const romanceMovies = useAppSelector((state) => state.movies.romanceMovies);
    const loading = useAppSelector((state) => state.movies.loading);

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
}

export default ResultKeywordBar;





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
