import { Link, useParams} from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import { Movie } from '../../../@types/movie';
import OneMovie from '../../OneMovie/OneMovie';
import Header from '../../Header/Header';
import KeywordBar from '../../KeywordBar/KeywordBar';
import Footer from '../../Footer/Footer';


function MovieSearchBar({ title, poster_path, overview, name, genre_ids, release_date, vote_average }: Partial<Movie>) {
  //Get id from URL using useParams
  //convert string id (get from url) to number using parseInt().
  const { id } = useParams<{ id: string }>();
  const movieId = parseInt(id, 10);

  // Get selectedMovie from Redux store

  const selectedMovie = useAppSelector((state) => state.searchMovie.selectedMovie); 

  // Use selectedMovie instead of movie
  if (!selectedMovie) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="">
      <Header />
      <KeywordBar />
      <div className="max-h-full max-w-full flex flex-wrap justify-center pb-4">
        <div className="flex">
          <OneMovie poster_path={selectedMovie.poster_path} />
        </div>
        <div className="text-white space-y-2 pt-4 max-w-screen-lg">
          <h1 className="font-bold text-4xl pl-20 pb-12">{selectedMovie.title}</h1>
          <p className="font-semibold underline pl-4 text-xl">Résumé :</p>
          <p className="pt-4 pl-10 text-lg">{selectedMovie.overview}</p>
          <p className="font-extralight pt-4 pl-4">Release Date: {selectedMovie.release_date}</p>
          <p className="pt-4 font-bold text-xl pl-4">Vote Average: {selectedMovie.vote_average}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MovieSearchBar;
