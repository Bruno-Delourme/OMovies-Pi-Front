import { createReducer } from "@reduxjs/toolkit";
import { Movie, MoviesResponse } from "../../@types/movie";


import { fetchDocumentaireMovies, fetchFamilialMovies, fetchActionMovies, fetchRomanceMovies, fetchScienceFictionMovies, setRomanceMovies, fetchNewMovies, fetchSuggestionMovies, fetchByGenreMovies, fetchByActorMovies } from "../action/action";



interface MoviesState {
    romanceMovies: Movie[];
    familialMovies: Movie[];
    actionMovies: Movie[];
    ScienceFictionMovies: Movie[],
    documentaireMovies: Movie[],
    newMovies:  Movie[],
    suggestionMovies: Movie[],
    moviesByGenre: Movie[],
    moviesByActor: Movie[],
    loading: boolean;
    error: string | null;
  }
  
  export const initialState: MoviesState = {
    romanceMovies: [],
    familialMovies: [],
    actionMovies: [],
    documentaireMovies: [],
    ScienceFictionMovies: [],
    newMovies: [],
    suggestionMovies: [],
    moviesByGenre: [],
    moviesByActor: [],
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
      //Documentaire movies
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

      //New movies
      .addCase(fetchNewMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.newMovies = action.payload; // Update state with fetched new movies
      })
      .addCase(fetchNewMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies"; 
      })

      //suggestion movies ( popular )
      .addCase(fetchSuggestionMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSuggestionMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.suggestionMovies = action.payload; // Update state with fetched suggestion Movies
      })
      .addCase(fetchSuggestionMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies"; 
      })

      // Movies By genre 
      .addCase(fetchByGenreMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchByGenreMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.moviesByGenre = action.payload; // Update state with fetched movies ByGenre
      })
      .addCase(fetchByGenreMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies"; 
      })

      // Movies By actor 
      .addCase(fetchByActorMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchByActorMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.moviesByActor = action.payload; // Update state with fetched Movies By actor 
        console.log(action.payload);
      })
      .addCase(fetchByActorMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies"; 
      })

      // user List movies 

      
      .addCase(setRomanceMovies, (state, action) => {
        state.romanceMovies = action.payload; // Update state for other movie categories 
      });
  });
  
  export default moviesReducer;


  