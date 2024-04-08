import { createReducer } from "@reduxjs/toolkit";
import { Movie } from "../../@types/movie";


import { fetchDocumentaireMovies, fetchFamilialMovies, fetchActionMovies, fetchRomanceMovies, fetchScienceFictionMovies, setRomanceMovies } from "../action/action";



interface MoviesState {
    romanceMovies: Movie[];
    familialMovies: Movie[];
    actionMovies: Movie[];
    ScienceFictionMovies: Movie[],
    documentaireMovies: Movie[],
    loading: boolean;
    error: string | null;
  }
  
  export const initialState: MoviesState = {
    romanceMovies: [],
    familialMovies: [],
    actionMovies: [],
    documentaireMovies: [],
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
      //Familial movies
      .addCase(fetchFamilialMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFamilialMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.familialMovies = action.payload; // Update state with fetched Familial movies
      })
      .addCase(fetchFamilialMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies"; 
      })

      //Action movies
      .addCase(fetchActionMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchActionMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.actionMovies = action.payload; // Update state with fetched marvel movies
      })
      .addCase(fetchActionMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies"; 
      })


      //science-fiction movies
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
      .addCase(fetchDocumentaireMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDocumentaireMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.documentaireMovies = action.payload; // Update state with fetched comedie movies
      })
      .addCase(fetchDocumentaireMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies"; 
      })


      .addCase(setRomanceMovies, (state, action) => {
        state.romanceMovies = action.payload; // Update state for other movie categories 
      });
  });
  
  export default moviesReducer;