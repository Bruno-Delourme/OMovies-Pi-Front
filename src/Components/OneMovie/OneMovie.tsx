import React from 'react';
import { Movie } from "../../../src/@types/movie";
import '../../index.css'; 
import { Link } from 'react-router-dom';

// function OneMovie({ id, title, poster_path, overview, name, genre_ids, release_date, vote_average }: Partial<Movie>) {
//     const [animate, setAnimate] = React.useState(false);

function OneMovie({ id, title, poster_path, overview, release_date, vote_average }: Movie) {
  return (
    <div className="onemoviecontainer"> 
    {/* Responsive Container vignette-movie w-1/5 sm:w-1/4 md:w-1/6 lg:w-1/8 xl:w-1/10 p-2*/}
      {poster_path && <Link to={`/movie/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className="max-w-xs rounded-md" />
      </Link>} {/* show img only if poster_path exists */}
      {/* <h2>{title}</h2>
      <p>{overview}</p>
      <p>Release Date: {release_date}</p>
      <p>Vote Average: {vote_average}</p> */}
    </div>
  );
}

export default OneMovie;
