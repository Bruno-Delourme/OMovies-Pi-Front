import { createReducer } from "@reduxjs/toolkit";
import { Movie } from "../../@types/movie";
import { fetchMovieById, searchMovies } from "../action/action";
import { SearchMoviesResponse } from "../../@types/searchMovies";



  interface SearchMovieState {
    selectedMovie: Movie | null;
    searchResults: SearchMoviesResponse | null; // Mettez à jour ce type
    loading: boolean;
    error: string | null;
  }
  
  
  const initialState: SearchMovieState = {
    selectedMovie: null, 
    searchResults: null,
    loading: false,
    error: null,
  };
  
  const searchMovieReducer = createReducer(initialState, (builder) => {
    builder

          // Fetch movie by ID
          .addCase(fetchMovieById.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchMovieById.fulfilled, (state, action) => {
            state.loading = false;
            state.selectedMovie = action.payload; // Update state with fetched movie
          })
          .addCase(fetchMovieById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch movie";
          })

          
      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload; 
        console.log(state.searchResults);
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Une erreur s'est produite lors de la recherche de films.";
      });
  });
  
  export default searchMovieReducer;