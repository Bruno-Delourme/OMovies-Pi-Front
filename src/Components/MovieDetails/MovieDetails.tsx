import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../src/hooks/redux';
import { Movie } from '../../../src/@types/movie';
import OneMovie from '../../Components/OneMovie/OneMovie';

function MovieDetails() {

    //Get id from URL using useParams
    //convert string id (get from url) to number using parseInt().
    const { id } = useParams<{ id: string }>();
    const movieId = parseInt(id, 10);
    
    //Get info movie from store Redux id of movie
    const movies = useAppSelector((state) => state.movies.newMovies.movies);
    const movie = movies.find((movie: Movie) => movie.id === movieId);

    return (
        <div>
          {movie && (
            <OneMovie
              id={movie.id}
              title={movie.title}
              original_title={movie.original_title}
              poster_path={movie.poster_path}
              overview={movie.overview}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
            />
          )}
        </div>
      );
}
export default MovieDetails;
