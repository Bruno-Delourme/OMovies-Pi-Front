
import "./NewMovies.scss"

import { fetchNewMovies } from "../../../store/action/action";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useEffect } from "react";
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
  <div className="newMovies">
    <p className="title-configuration">Nouveautés</p>
    <div className="o">
      {loading ? (
      <p>Chargement...</p>
      ) : newMovies.movies ? (
        <div className=" carousel carousel-center max-w-full rounded-box overflow-x-auto">
          {/* <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
        <ChevronLeftIcon className="h-12 w-12" />
        </button> */}
        <div className="carousel-item">
          {newMovies.movies.map((movie) => (
            <OneMovie
              poster_path={movie.poster_path}
              key={movie.id}
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
            />   
          ))}
        </div>  
          {/* <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
        <ChevronRightIcon className="h-12 w-12" />
          </button> */}
        </div>
    
        ) : (
          <p>Aucun film trouvé</p>
      )}
    </div>
  </div>
);
}


export default NewMovies;

//   return (
//     <>
//       <div className="relative flex items-center"> 
//         <div id="slider"className="w-full h-full overflow-x-scroll scroll whitespace-nonwrap scroll-smooth">
//           {newMovies.movies.map((movie) => (
//           <img
//           className="w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" 
//           src="src/assets/pandaRoux2.png"
//           alt="/" 
//           />  
//         ))}
//         </div>
//       </div>
//     </>
//   );
// }


