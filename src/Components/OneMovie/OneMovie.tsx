
import { useDispatch } from 'react-redux';
import { selectMovie } from "../../store/action/action";
import { Movie } from "../../@types/movie";
import { Cast } from "../../@types/movie";


function OneMovie(movie: Movie) { // Utilisez le type Movie directement ici
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectMovie(movie)); // Dispatch l'action avec l'objet movie complet
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />}
      
      <h2>{movie.title}</h2>
      <h2>{movie.cast}</h2>
      <p>Release Date: {movie.release_date}</p>
      <p>{movie.overview}</p>
      
    </div>
  );
}

export default OneMovie;
