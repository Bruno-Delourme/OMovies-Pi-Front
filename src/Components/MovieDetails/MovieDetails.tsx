import { Link, useParams} from 'react-router-dom';
import { useAppSelector } from '../../../src/hooks/redux';
import { Movie } from '../../../src/@types/movie';
import OneMovie from '../../Components/OneMovie/OneMovie';
import Header from '../Header/Header';
import KeywordBar from '../KeywordBar/KeywordBar';
import Footer from '../Footer/Footer';
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
      <Header />
      <KeywordBar />
        <div className="max-h-full max-w-full flex flex-wrap justify-center pb-4">
          <div className="flex">
            {/* <Link to={`/`}> */}
            {movie && (
              <OneMovie poster_path={movie.poster_path} />
            )}
          </div>
          <div className="text-white space-y-2 pt-4 max-w-screen-lg">
              <h1 className="font-bold text-4xl pl-20 pb-12">{movie.title}</h1>
              <p className="font-semibold underline pl-4 text-xl">Résumé :</p>
              <p className="pt-4 pl-10 text-lg">{movie.overview}</p>
              <p className="font-extralight pt-4 pl-4">Release Date: {movie.release_date}</p>
              <p className="pt-4 font-bold text-xl pl-4">Vote Average: {movie.vote_average}</p>
              {/* </Link> */}
          </div>
        </div>
        <Footer />
      </div>
      );
}
export default MovieDetails;