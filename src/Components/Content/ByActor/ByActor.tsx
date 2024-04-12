
import "./ByActor.scss";

import { fetchByActorMovies} from "../../../store/action/action";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useEffect } from "react";
import OneMovie from "../../OneMovie/OneMovie";
import { MoviesResponse } from "../../../@types/movie";

function ByActor() {
  const dispatch = useAppDispatch();

  const moviesByActor = useAppSelector((state) => state.movies.moviesByActor)  as unknown as MoviesResponse;

  const loading = useAppSelector((state) => state.movies.loading);

  useEffect(() => {
    dispatch(fetchByActorMovies());
console.log(moviesByActor);
  }, [dispatch]);

  return (
    <div className="genreMovies">
<h1 className="titleSuggestion">ByActor: by default Cillian Murphy</h1>
      {loading ? (
        <p>Chargement...</p>
      ) : moviesByActor.movies ? (
        <div>
          {moviesByActor.movies.map((movie) => (
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
      ) : (
        <p>Aucun film trouvé</p>
      )}
    </div>
  );
  
}

export default ByActor;



