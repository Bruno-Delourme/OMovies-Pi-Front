import { createReducer } from "@reduxjs/toolkit";
import { Movie } from "../../@types/movie";


import { fetchRomanceMovies, setRomanceMovies } from "../action/action";



interface MoviesState {
    romanceMovies: Movie[];
    loading: boolean;
    error: string | null;
  }
  
  export const initialState: MoviesState = {
    romanceMovies: [],
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
        state.romanceMovies = action.payload; // Update state with fetched movies
      })
      .addCase(fetchRomanceMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies"; 
      })
      .addCase(setRomanceMovies, (state, action) => {
        state.romanceMovies = action.payload; // Update state for other movie categories 
      });
  });
  
  export default moviesReducer;