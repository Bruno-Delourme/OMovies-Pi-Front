import { fetchByActorMovies} from "../../../store/action/action";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useEffect } from "react";
import OneMovie from "../../OneMovie/OneMovie";
import { MoviesResponse } from "../../../@types/movie";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

function ByActor() {
  const dispatch = useAppDispatch();

  const moviesByActor = useAppSelector((state) => state.movies.moviesByActor)  as unknown as MoviesResponse;

  const loading = useAppSelector((state) => state.movies.loading);

  useEffect(() => {
    dispatch(fetchByActorMovies());
console.log(moviesByActor);
  }, [dispatch]);

  return (
    <div className="byActorMovie">
<p className="title-configuration">ByActor: by default Cillian Murphy</p>
      <div className="relative">
      {loading ? (
        <p>Chargement...</p>
      ) : moviesByActor.movies ? (
        <div className="ByActor"> 
          <div className="ByActorScroll carousel-item carousel overflow-x-auto">
          {<button className="scroll-left-configuration"
            onClick={() => {
              const scrollContainerByActor = document.querySelector('.ByActorScroll');
              if (scrollContainerByActor) {
                scrollContainerByActor.scrollLeft -= 1200;
              }
            }}
            >
              <ChevronLeftIcon className="chevron-design"/>
            </button>}
            <span className="flex gap-8 m-8 rounded-full">
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
          </span>
          <button className="scroll-right-configuration"
            onClick={() => {
              const scrollContainerByActor = document.querySelector('.ByActorScroll');
              if (scrollContainerByActor) {
                scrollContainerByActor.scrollLeft += 1200;
              }
            }}
            >
              <ChevronRightIcon className="chevron-design"/>
            </button>
        </div>
        </div>
      ) : (
        <p>Aucun film trouvé</p>
      )}
      </div>
    </div>
  );
  
}

export default ByActor;



