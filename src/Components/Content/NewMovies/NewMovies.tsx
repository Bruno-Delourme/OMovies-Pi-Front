
import "./NewMovies.scss"

import { fetchNewMovies } from "../../../store/action/action";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useEffect } from "react";
import OneMovie from "../../OneMovie/OneMovie";
import { MoviesResponse } from "../../../@types/movie";


function NewMovies() {
    const dispatch = useAppDispatch();

    const newMovies = useAppSelector((state) => state.movies.newMovies) as unknown as MoviesResponse;
  /*
useAppSelector((state) => state.movies.marvelMovies) : to access the global state of the app.
The function passed as a parameter (state) allows accessing a specific part of the state newMovies

as unknown : TypeScript cannot directly convert one type to another without an intermediate step. 
Here, as unknown is used to tell TypeScript to temporarily consider the type as unknown.

as MoviesResponse : the unknown type is converted to MoviesResponse, which is the expected interface for the movies data.
  */
const loading = useAppSelector((state) => state.movies.loading);


useEffect(() => {
  dispatch(fetchNewMovies());
}, [dispatch]);

return (
  <div className="newMovies">
    <h1 className="titleNewMovie">Nouveautés</h1>
    {loading ? (
      <p>Chargement...</p>
    ) : newMovies.movies ? (
      <div>
        {newMovies.movies.map((movie) => (
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

export default NewMovies;
