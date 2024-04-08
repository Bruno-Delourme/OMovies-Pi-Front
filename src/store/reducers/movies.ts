import { createReducer } from "@reduxjs/toolkit";
import { Movie } from "../../@types/movie";


import { fetchAnimeMovies, fetchComedieMovies, fetchMarvelMovies, fetchRomanceMovies, fetchScienceFictionMovies, setRomanceMovies } from "../action/action";



interface MoviesState {
    romanceMovies: Movie[];
    comedieMovies: Movie[];
    marvelMovies: Movie[];
    ScienceFictionMovies: Movie[],
    animeMovies: Movie[],
    loading: boolean;
    error: string | null;
  }
  
  export const initialState: MoviesState = {
    romanceMovies: [],
    comedieMovies: [],
    marvelMovies: [],
    animeMovies: [],
    ScienceFictionMovies: [],
    loading: false,
    error: null,
  };
  
  const moviesReducer = createReducer(initialState, (builder) => {
    builder
    //Romance movies
      .addCase(fetchRomanceMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRomanceMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.romanceMovies = action.payload; // Update state with fetched romance movies
      })
      .addCase(fetchRomanceMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies"; 
      })
      //Comedie movies
      .addCase(fetchComedieMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComedieMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.comedieMovies = action.payload; // Update state with fetched comedie movies
      })
      .addCase(fetchComedieMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies"; 
      })
      //Marvel movies
      .addCase(fetchMarvelMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMarvelMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.marvelMovies = action.payload; // Update state with fetched comedie movies
      })
      .addCase(fetchMarvelMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies"; 
      })
      //sciencefiction movies
      .addCase(fetchScienceFictionMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchScienceFictionMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.ScienceFictionMovies = action.payload; // Update state with fetched comedie movies
      })
      .addCase(fetchScienceFictionMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies"; 
      })
      //anime movies
      .addCase(fetchAnimeMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnimeMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.animeMovies = action.payload; // Update state with fetched comedie movies
      })
      .addCase(fetchAnimeMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies"; 
      })


      .addCase(setRomanceMovies, (state, action) => {
        state.romanceMovies = action.payload; // Update state for other movie categories 
      });
  });
  
  export default moviesReducer;