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
    <div className="byGenreMovies">
        <p className="title-configuration">By genre : action</p>
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
            <span className="flex gap-8 m-8 rounded-full">
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
            </span>
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

 

    