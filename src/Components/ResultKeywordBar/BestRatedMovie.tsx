import React, { useEffect, useState } from 'react';
import Header from "../Header/Header";
import KeywordBar from "../KeywordBar/KeywordBar";
import OneMovie from "../OneMovie/OneMovie";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { MoviesResponse, Movie } from "../../@types/movie"; // Assurez-vous du chemin

const logo = "../../../public/square-radical.svg";

function BestRatedMovie() {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(state => state.movies.loading);
    const moviesToDisplay = useAppSelector(state => state.movies.allMovies); // Assurez-vous que le chemin du sélecteur est correct

    const [highlightedMovie, setHighlightedMovie] = useState<Movie | null>(null);

    const findBestRatedMovie = (movies: MoviesResponse): Movie | null => {
        if (movies.movies.length > 0) {
            const sortedMovies = [...movies.movies].sort((a, b) => b.vote_average - a.vote_average);
            return sortedMovies[0];
        }
        return null;
    };

    const handleLogoClick = () => {
        const bestMovie = findBestRatedMovie(moviesToDisplay);
        setHighlightedMovie(bestMovie);
    };

    return (
        <>
            <Header />
            <KeywordBar />
            <img src={logo} alt="Logo" onClick={handleLogoClick} className="logo" />
            {loading && <p>Loading movies...</p>}
            {highlightedMovie && (
                <div className="highlighted-movie">
                    <OneMovie {...highlightedMovie} />
                </div>
            )}
            {moviesToDisplay?.movies && !loading && (
                <div className="resultKeywordBar-container">
                    {moviesToDisplay.movies.map((movie) => (
                        <OneMovie
                            key={movie.id}
                            {...movie}
                        />
                    ))}
                </div>
            )}
            {!moviesToDisplay?.movies?.length && !loading && <p>No movies found.</p>}
        </>
    );
}

export default BestRatedMovie;
