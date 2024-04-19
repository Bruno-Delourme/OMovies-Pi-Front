import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../index';

import { createReducer, createSelector } from "@reduxjs/toolkit";
import { Movie, MoviesResponse } from "../../@types/movie";
import { fetchDocumentaireMovies, fetchFamilialMovies, fetchActionMovies, fetchRomanceMovies, fetchScienceFictionMovies, setRomanceMovies, fetchNewMovies, fetchSuggestionMovies, fetchByGenreMovies, fetchByActorMovies, fetchFavoriteMovies, addToFavorite, deleteFromFavorite, addToReview, deleteFromReview, fetchMoviesToReview, fetchRomanceRatingMovies, fetchFamilialRatingMovies, fetchActionRatingMovies, fetchScienceFictionRatingMovies, fetchDocumentaireRatingMovies } from "../action/action";


export const selectFavoriteMovies = createSelector(
  (state: RootState) => state.movies,
  (movies) => movies.favoriteMovies
);

export const selectMoviesToReview = createSelector(
  (state: RootState) => state.movies,
  (movies) => movies.moviesToReview
);


interface MoviesState {
    romanceMovies: Movie[];
    romanceMoviesRating : Movie[],
    familialMovies: Movie[];
    familialMoviesRating : Movie[],
    actionMovies: Movie[];
    actionMoviesRating : Movie[],
    ScienceFictionMovies: Movie[],
    ScienceFictionMoviesRating : Movie[],
    documentaireMovies: Movie[],
    documentaireMoviesRating : Movie[],
    newMovies:  Movie[],
    suggestionMovies: Movie[],
    moviesByGenre: Movie[],
    moviesByActor: Movie[],
<<<<<<< HEAD
    moviesByRating: Movie[];
=======
    favoriteMovies: Movie[]
    moviesToReview: Movie[],
>>>>>>> d386a469628ed83f73f49f8de58451bf02b3501a
    loading: boolean;
    error: string | null;
  }
  export const initialState: MoviesState = {
    romanceMovies: [],
    romanceMoviesRating : [],
    familialMoviesRating : [],
    familialMovies: [],
    actionMovies: [],
    actionMoviesRating : [],
    documentaireMovies: [],
    documentaireMoviesRating : [],
    ScienceFictionMovies: [],
    ScienceFictionMoviesRating :[],
    newMovies: [],
    suggestionMovies: [],
    moviesByGenre: [],
    moviesByActor: [],
<<<<<<< HEAD
    moviesByRating: [],
=======
    favoriteMovies: [],
    moviesToReview: [],
>>>>>>> d386a469628ed83f73f49f8de58451bf02b3501a
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
          //Romance movies Rating 
          .addCase(fetchRomanceRatingMovies.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchRomanceRatingMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.romanceMoviesRating = action.payload; // Update state with fetched romance movies
            console.log(state.romanceMoviesRating);
          })
          .addCase(fetchRomanceRatingMovies.rejected, (state, action) => {
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
            //Familial movies Rating 
            .addCase(fetchFamilialRatingMovies.pending, (state) => {
              state.loading = true;
              state.error = null;
            })
            .addCase(fetchFamilialRatingMovies.fulfilled, (state, action) => {
              state.loading = false;
              state.familialMoviesRating = action.payload; // Update state with fetched Familial movies
            })
            .addCase(fetchFamilialRatingMovies.rejected, (state, action) => {
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
            //Action movies Rating fetchActionRatingMovies actionMoviesRating
            .addCase(fetchActionRatingMovies.pending, (state) => {
              state.loading = true;
              state.error = null;
            })
            .addCase(fetchActionRatingMovies.fulfilled, (state, action) => {
              state.loading = false;
              state.actionMoviesRating = action.payload; // Update state with fetched marvel movies
            })
            .addCase(fetchActionRatingMovies.rejected, (state, action) => {
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
            //science-fiction movies 
            .addCase(fetchScienceFictionRatingMovies.pending, (state) => {
              state.loading = true;
              state.error = null;
            })
            .addCase(fetchScienceFictionRatingMovies.fulfilled, (state, action) => {
              state.loading = false;
              state.ScienceFictionMoviesRating = action.payload; // Update state with fetched comedie movies
            })
            .addCase(fetchScienceFictionRatingMovies.rejected, (state, action) => {
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
            //Documentaire movies fetchDocumentaireRatingMovies  documentaireMoviesRating
            .addCase(fetchDocumentaireRatingMovies.pending, (state) => {
              state.loading = true;
              state.error = null;
            })
            .addCase(fetchDocumentaireRatingMovies.fulfilled, (state, action) => {
              state.loading = false;
              state.documentaireMoviesRating = action.payload; // Update state with fetched comedie movies
            })
            .addCase(fetchDocumentaireRatingMovies.rejected, (state, action) => {
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
      .addCase(setRomanceMovies, (state, action) => {
        state.romanceMovies = action.payload; // Update state for other movie categories
      })
<<<<<<< HEAD

      //MOVIES BY RATING
      .addCase(fetchMoviesByRating.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMoviesByRating.fulfilled, (state, action) => {
        state.loading = false;
        state.moviesByRating = action.payload; // 
      })
      .addCase(fetchMoviesByRating.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies";
      })

      
    }); 
  
  export default moviesReducer;


  
=======
      // FAVORITE MOVIES
      // Add movie to favorite List
      .addCase(addToFavorite.fulfilled, (state, action) => {
        const addedMovieToFavorite = action.payload;
        state.favoriteMovies.push(addedMovieToFavorite);
        console.log(state.favoriteMovies);
      })
      // Remove movie from favorite list
      .addCase(deleteFromFavorite.fulfilled, (state, action) => {
        //déstructure values userId et movieId from argument arg of action. this values are sent to action deleteFromFavorite when it called
        const { userId, movieId } = action.meta.arg;
        //update favoriteMovies on state slice Redux, filter used to create new array with all movies expect the movie where id = movieId
        state.favoriteMovies = state.favoriteMovies.filter((movie) => movie.id !== movieId);
      })
      // List favorite movies
      .addCase(fetchFavoriteMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavoriteMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.favoriteMovies = action.payload; // Update state with fetched favorite movies
        console.log(action.payload);
        console.log(state.favoriteMovies);
      })
      .addCase(fetchFavoriteMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies";
      })
      // TO REVIEW MOVIES
      // Add movie to review
      .addCase(addToReview.fulfilled, (state, action) => {
      const addedMovieToReview = action.payload;
      state.moviesToReview.push(addedMovieToReview);
      })
      // Remove movie from to review
      .addCase(deleteFromReview.fulfilled, (state, action) => {
      //déstructure values userId et movieId from argument arg of action. this values are sent to action deleteFromFavorite when it called
      const { userId, movieId } = action.meta.arg;
      //update favoriteMovies on state slice Redux, filter used to create new array with all movies expect the movie where id = movieId
      state.moviesToReview = state.moviesToReview.filter((movie) => movie.id !== movieId);
      })
      //show To review movies
      .addCase(fetchMoviesToReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMoviesToReview.fulfilled, (state, action) => {
        state.loading = false;
        state.moviesToReview = action.payload; // Update state with fetched favorite movies
        console.log(action.payload);
        console.log(state.moviesToReview);
      })
      .addCase(fetchMoviesToReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies";
      })
    });
  export default moviesReducer;
>>>>>>> d386a469628ed83f73f49f8de58451bf02b3501a
