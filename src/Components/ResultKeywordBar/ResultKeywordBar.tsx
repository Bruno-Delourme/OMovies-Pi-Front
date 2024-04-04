import Header from "../Header/Header";
import OneMovie from "../OneMovie/OneMovie";
import KeywordBar from "../KeywordBar/KeywordBar";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import React, { useEffect } from 'react';
import { fetchRomanceMovies } from "../../store/action/action";

function ResultKeywordBar() {
  const dispatch = useAppDispatch();
  const romanceMovies = useAppSelector((state) => state.movies.romanceMovies);
  const loading = useAppSelector((state) => state.movies.loading);
  useEffect(() => {
    dispatch(fetchRomanceMovies()); // Fetch romance movies on component mount
  }, [dispatch]); // Include dispatch in the dependency array
  console.log(romanceMovies)
    return (
      <>
        <Header />
        <KeywordBar />
        {loading && <p>Loading movies...</p>}
        {romanceMovies?.length > 0 && !loading && (
          <div>
            {romanceMovies.map((movie) => (
              <OneMovie {...movie} />
            ))}
          </div>
        )}
        {romanceMovies?.length === 0 && !loading && (
          <p>No romance movies found.</p>
        )}
      </>
    );
}
export default ResultKeywordBar;

