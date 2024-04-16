import { fetchNewMovies } from "../../../store/action/action";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useEffect, useRef } from "react";
import OneMovie from "../../OneMovie/OneMovie";
import { MoviesResponse } from "../../../@types/movie";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

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
  <div id="newMovies">
    <p className="title-configuration">Nouveautés</p>
    <div className="relative">
      
      {loading ? (
      <p>Chargement...</p>
      ) : newMovies.movies ? (
        <div className="NewMovie">
          <div className="NewMovieScroll carousel-item carousel overflow-x-auto">
            {<button className="scroll-left-configuration"
            onClick={() => {
              const scrollContainerNew = document.querySelector('.NewMovieScroll');
              if (scrollContainerNew) {
                scrollContainerNew.scrollLeft -= 1200;
              }
            }}
            >
              <ChevronLeftIcon className="chevron-design"/>
            </button>}
            <span className="flex gap-8 m-8 rounded-full">
            {newMovies.movies.map((movie) => (
              <OneMovie
                poster_path={movie.poster_path}
                key={movie.id}
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                release_date={movie.release_date}
                vote_average={movie.vote_average} adult={false} original_title={""} original_language={""} cast_id={0} character={""} name={""} genre_ids={0}              />   
            ))}
            </span>
            <button className="scroll-right-configuration"
            onClick={() => {
              const scrollContainerNew = document.querySelector('.NewMovieScroll');
              if (scrollContainerNew) {
                scrollContainerNew.scrollLeft += 1200;
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


export default NewMovies;

