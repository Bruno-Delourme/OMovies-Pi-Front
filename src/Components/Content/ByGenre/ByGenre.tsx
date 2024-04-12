import "./ByGenre.scss";

import { fetchByGenreMovies } from "../../../store/action/action";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useEffect } from "react";
import OneMovie from "../../OneMovie/OneMovie";
import { MoviesResponse } from "../../../@types/movie";

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

function ByGenre() {
  const dispatch = useAppDispatch();

  const moviesByGenre = useAppSelector((state) => state.movies.moviesByGenre)  as unknown as MoviesResponse;

  const loading = useAppSelector((state) => state.movies.loading);

  useEffect(() => {
    dispatch(fetchByGenreMovies());
    //console.log(moviesByGenre);
  }, [dispatch]);

  return (
    <div className="genreMovies">
        <h1 className="titleSuggestion">By genre : action</h1>
      {loading ? (
        <p>Chargement...</p>
      ) : moviesByGenre.movies ? (
        <div>
          {moviesByGenre.movies.map((movie) => (
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
      ) : (
        <p>Aucun film trouvé</p>
      )}
    </div>
  );
}

export default ByGenre;

 

    