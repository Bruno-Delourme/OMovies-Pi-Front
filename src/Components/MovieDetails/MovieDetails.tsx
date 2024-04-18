import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../src/hooks/redux';
import { Movie } from '../../../src/@types/movie';
import OneMovie from '../../Components/OneMovie/OneMovie';

function MovieDetails({ title, poster_path, overview, name, genre_ids, release_date, vote_average }: Partial<Movie>) {

    //Get id from URL using useParams
    //convert string id (get from url) to number using parseInt().
    const { id } = useParams<{ id: string }>();
    const movieId = parseInt(id, 10);
    
    //Get info movie from store Redux id of movie
    const movies = useAppSelector((state) => state.movies.newMovies.movies);
    const movie = movies.find((movie: Movie) => movie.id === movieId);

    return (
        <div className="">
          <div>
            <button>retour</button>
            {movie && (
              <OneMovie poster_path={movie.poster_path} />
            )}
            <div>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
             <p>Release Date: {movie.release_date}</p>
              <p>Vote Average: {movie.vote_average}</p>
            </div>

          </div>
          
      </div>
      );
}
export default MovieDetails;