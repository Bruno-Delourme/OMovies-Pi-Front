import { fetchByActorMovies} from "../../../store/action/action";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useEffect, useState } from "react";
import OneMovie from "../../OneMovie/OneMovie";
import { MoviesResponse } from "../../../@types/movie";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'



function ByActor() {
  const dispatch = useAppDispatch();
  const moviesByActor = useAppSelector((state) => state.movies.moviesByActor);
  const loading = useAppSelector((state) => state.movies.loading);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(moviesByActor);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchByActorMovies(searchTerm));
  };

  useEffect(() => {
    setSearchResults(moviesByActor);
  }, [moviesByActor]);


  return (
    <div className="byActorMovie">
      <div className="flex  relative w-2/4" >
          <form onSubmit={handleSubmit} className="form-search-bar">
            <input
                className="search-bar"
                type="text"
                placeholder="Rechercher par acteur..."
                
                onChange={(e) => setSearchTerm(e.target.value)}
              />
          </form>
    
        </div>
        
      <p className="title-configuration">Acteur: {searchTerm}</p>

      <div className="relative">
      {loading ? (
        <p>Chargement...</p>
      ) : moviesByActor.movies? (
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
            <div className="movies-container-design">
            {moviesByActor.movies.map((movie, index) => (
                      <div key={index} className="movies-path-design">
                      <OneMovie
                      {...movie}
                      poster_path={movie.poster_path}
                      id={movie.id}
                      title={movie.title}
                      overview={movie.overview}
                      release_date={movie.release_date}
                      vote_average={movie.vote_average}
                      adult={false}
                      original_title={""}
                      original_language={""}
                      cast_id={0}
                      character={""}
                      name={""}
                    /> 
              </div>  
            ))}
            </div>
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
        <p>Chercher un acteur</p>
      )}
      </div>
    </div>
  );
  
}

export default ByActor;



