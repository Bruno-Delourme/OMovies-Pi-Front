import React from 'react';
import { Movie } from "../../../src/@types/movie";
import '../../index.css'; 

function OneMovie({ id, title, poster_path, overview, name, genre_ids, release_date, vote_average }: Partial<Movie>) {
    return (
        <div className="group movie-details-container">
            <div className="movie-details">
                {poster_path && (
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className="movie-poster"/>
                )}
                <div className="details group-hover:block hidden">
                    <div className="details-background">
                        <h2>{title}</h2>
                        <p>Release Date: {release_date}</p>
                        <p>{genre_ids}</p>
                        <p>Cast: {name}</p>
                        <p>{overview}</p>
                        <p>Vote Average: {vote_average}</p>
                    </div>
                </div>
            </div>
            <div className="button-movieDetails opacity-0 group-hover:opacity-100 flex justify-around" style={{ transition: 'opacity .3s ease' }}>
                <button><img src="/thumbs-up.svg" alt="Like" /></button>
                <button><img src="/circle-plus.svg" alt="Add" /></button>
                <button><img src="/presentation.svg" alt="Present" /></button>
            </div>
        </div>
    );
}

export default OneMovie;