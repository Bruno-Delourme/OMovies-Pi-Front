import { createReducer } from "@reduxjs/toolkit";
import { Movie } from "../../@types/movie";


import { fetchComedieMovies, fetchRomanceMovies, setRomanceMovies } from "../action/action";



interface MoviesState {
    romanceMovies: Movie[];
    comedieMovies: Movie[];
    loading: boolean;
    error: string | null;
  }
  
  export const initialState: MoviesState = {
    romanceMovies: [],
    comedieMovies: [],
    loading: false,
    error: null,
  };
  
  const moviesReducer = createReducer(initialState, (builder) => {
    builder
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
      .addCase(setRomanceMovies, (state, action) => {
        state.romanceMovies = action.payload; // Update state for other movie categories 
      });
  });
  
  export default moviesReducer;