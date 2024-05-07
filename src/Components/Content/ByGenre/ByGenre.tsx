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
    console.log(moviesByGenre);
  }, [dispatch]);

  return (
    <div className="byGenreMovies">
        <p className="title-configuration">Film d'action</p>
        <div className="relative">
      {loading ? (
        <p>Chargement...</p>
      ) : moviesByGenre.movies ? (
        <div className="ByGenre">
          <div className="ByGenreScroll carousel-item carousel overflow-x-auto">
          {<button className="scroll-left-configuration"
            onClick={() => {
              const scrollContainerByGenre = document.querySelector('.ByGenreScroll');
              if (scrollContainerByGenre) {
                scrollContainerByGenre.scrollLeft -= 1200;
              }
            }}
            >
              <ChevronLeftIcon className="chevron-design"/>
            </button>}
            <div className="movies-container-design">
            {moviesByGenre.movies.map((movie) => (
              <div key={movie.id} className="movies-path-design">
                <OneMovie {...movie} 
                poster_path={movie.poster_path}
                key={movie.id}
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                release_date={movie.release_date}
                vote_average={movie.vote_average} adult={false} original_title={""} original_language={""} cast_id={0} character={""} name={""} genre_ids={0}
                />   
              </div>  
            ))}
            </div>
            <button className="scroll-right-configuration"
            onClick={() => {
              const scrollContainerByGenre = document.querySelector('.ByGenreScroll');
              if (scrollContainerByGenre) {
                scrollContainerByGenre.scrollLeft += 1200;
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

export default ByGenre;

 

    