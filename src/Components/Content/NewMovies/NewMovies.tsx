
import "./NewMovies.scss"

import { fetchNewMovies } from "../../../store/action/action";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useEffect } from "react";
import OneMovie from "../../OneMovie/OneMovie";



function NewMovies() {
    const dispatch = useAppDispatch();

    const newMovies = useAppSelector((state) => state.movies.newMovies)

    useEffect(() => {
        dispatch(fetchNewMovies());
      }, [dispatch]);

      

      return (
        <div className="newMovies">
          <h1 className="titleNewMovie">Nouveautés</h1>
          
        </div>
      );

}

export default NewMovies;

/*
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



  <ul>
            {newMovies.results.map((movie) => (
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
          </ul>

  */