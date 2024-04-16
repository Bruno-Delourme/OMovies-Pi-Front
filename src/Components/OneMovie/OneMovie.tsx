import React, { useState } from 'react';
import { Movie } from "../../../src/@types/movie";
import '../../index.css'; 
import './OneMovie.scss';
import { Link } from 'react-router-dom';

function OneMovie({ id, title, poster_path, overview, name, genre_ids, release_date, vote_average }: Partial<Movie>) {
    const [animate, setAnimate] = React.useState(false);

//function to activate the animation on pointer    
  const toggleAnimation = () => {
      setAnimate(!animate);
};

//function to desactivate the animation on pointer
  const handlePointerLeave = () => {
    setAnimate(false);
};


const containerClass = animate ? "onemoviecontainer animate" : "onemoviecontainer";

  return (
    <div className={containerClass} onPointerEnter={toggleAnimation} onPointerLeave={handlePointerLeave}> 
    
    {poster_path && <Link to={`/movie/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className="max-w-xs rounded-md" />
      </Link>} 
      <h2>{title}</h2>
      <p>{overview}</p>
    </div>
  );
}

export default OneMovie;