import { RootState } from '../index';

import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Movie } from "../../@types/movie";
//import { RootState } from "../../@types/RooteState";


import { UserFormData, UserState } from "../../@types/user";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});
//ACTION MOVIES
    //Romance movies
    const FETCH_ROMANCE_MOVIES = "FETCH_ROMANCE_MOVIES";
    export const fetchRomanceMovies = createAsyncThunk<Movie[]>(
      FETCH_ROMANCE_MOVIES,
      async () => {
        const response = await axiosInstance.get("/movies/romance");
        const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
        //console.log(movies);
        return movies;
      }
    );

                  //Romance movies By rating
                  const FETCH_ROMANCE_RATING_MOVIES = "FETCH_ROMANCE_RATING_MOVIES";
                  export const fetchRomanceRatingMovies = createAsyncThunk<Movie[]>(
                    FETCH_ROMANCE_RATING_MOVIES,
                    async () => {
                      const response = await axiosInstance.get("/moviesRating/romance");
                      const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
                      console.log(movies);
                      return movies;
                    }
                  );

    //Familial movies
    const FETCH_FAMILIAL_MOVIES = "FETCH_FAMILIAL_MOVIES";
    export const fetchFamilialMovies = createAsyncThunk<Movie[]>(
      FETCH_FAMILIAL_MOVIES,
      async () => {
        const response = await axiosInstance.get("/movies/familial");
        const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
        console.log(movies);
        return movies;
      }
    );
                  //Familial movies By rating
                  const FETCH_FAMILIAL_RATING_MOVIES = "FETCH_FAMILIAL_RATING_MOVIES";
                  export const fetchFamilialRatingMovies = createAsyncThunk<Movie[]>(
                    FETCH_FAMILIAL_RATING_MOVIES,
                    async () => {
                      const response = await axiosInstance.get("/moviesRating/familial");
                      const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
                      //console.log(movies);
                      return movies;
                      }
                  );

    // Action movies
    const FETCH_ACTION_MOVIES = "FETCH_ACTION_MOVIES";
    export const fetchActionMovies = createAsyncThunk<Movie[]>(
      FETCH_ACTION_MOVIES,
      async () => {
        const response = await axiosInstance.get("/movies/action");
        const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
        console.log(movies);
        return movies;
      }
    );
                  //Action movies By rating
                  const FETCH_ACTION_RATING_MOVIES = "FETCH_ACTION_RATING_MOVIES";
                  export const fetchActionRatingMovies = createAsyncThunk<Movie[]>(
                    FETCH_ACTION_RATING_MOVIES,
                    async () => {
                      const response = await axiosInstance.get("/moviesRating/action");
                      const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
                      //console.log(movies);
                      return movies;
                    }
                  );


    //science-fiction movies
    const FETCH_SCIENCEFICTION_MOVIES = "FETCH_SCIENCEFICTION_MOVIES";
    export const fetchScienceFictionMovies = createAsyncThunk<Movie[]>(
      FETCH_SCIENCEFICTION_MOVIES,
      async () => {
        const response = await axiosInstance.get("/movies/science-fiction");
        const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
        console.log(movies);
        return movies;
      }
    );
                      //Science-fiction movies By rating
                      const FETCH_SCIENCEFICTION_RATING_MOVIES = "FETCH_SCIENCEFICTION_RATING_MOVIES";
                      export const fetchScienceFictionRatingMovies = createAsyncThunk<Movie[]>(
                        FETCH_SCIENCEFICTION_RATING_MOVIES,
                        async () => {
                          const response = await axiosInstance.get("/moviesRating/science-fiction");
                          const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
                          //console.log(movies);
                          return movies;
                        }
                      );
    // Documentaire movies
    const FETCH_DOCUMENTAIRE_MOVIES = "FETCH_DOCUMENTAIRE_MOVIES";
    export const fetchDocumentaireMovies = createAsyncThunk<Movie[]>(
      FETCH_DOCUMENTAIRE_MOVIES,
      async () => {
        const response = await axiosInstance.get("/movies/documentaire");
        const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
        console.log(movies);
        return movies;
      }
    );
                  //Documentaire movies By rating
                  const FETCH_DOCUMENTAIRE_RATING_MOVIES = "FETCH_DOCUMENTAIRE_RATING_MOVIES";
                  export const fetchDocumentaireRatingMovies = createAsyncThunk<Movie[]>(
                    FETCH_DOCUMENTAIRE_RATING_MOVIES,
                    async () => {
                      const response = await axiosInstance.get("/moviesRating/documentaire");
                      const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
                      //console.log(movies);
                      return movies;
                    }
                  );


    const SET_ROMANCE_MOVIES = "SET_ROMANCE_MOVIES";
    export const setRomanceMovies = createAction<Movie[]>(SET_ROMANCE_MOVIES);



    // Home content
    // New movies
    const FETCH_NEW_MOVIES = "FETCH_NEW_MOVIES";
    export const fetchNewMovies = createAsyncThunk<Movie[]>(
      FETCH_NEW_MOVIES,
      async () => {
        const response = await axiosInstance.get("/newMovies");
        const movies = response.data as Movie[];
        return movies;
      }
    );
    // suggestion movies ( popular )
    const FETCH_SUGGESTION_MOVIES = "FETCH_SUGGESTION_MOVIES";
    export const fetchSuggestionMovies = createAsyncThunk<Movie[]>(
      FETCH_SUGGESTION_MOVIES,
      async () => {
        const response = await axiosInstance.get("/popularMovies");
        const movies = response.data as Movie[];
        //console.log(movies);
        return movies;
      }
    );
    // Movies By genre
    const FETCH_BYGENRE_MOVIES = "FETCH_BYGENRE_MOVIES";
    export const fetchByGenreMovies = createAsyncThunk<Movie[]>(
      FETCH_BYGENRE_MOVIES,
      async () => {
        const response = await axiosInstance.get("/movies/action");
        const movies = response.data as Movie[];
        console.log(movies);
        return movies;
      }
    );
    // Movies By actor
    const FETCH_BYACTOR_MOVIES = "FETCH_BYACTOR_MOVIES";
    export const fetchByActorMovies = createAsyncThunk<Movie[]>(
      FETCH_BYACTOR_MOVIES,
      async () => {
        const response = await axiosInstance.get("/moviesByActor/Cillian%20Murphy");
        const movies = response.data as Movie[];
        console.log(movies);
        return movies;
      }
    );




    // Add movie to favoris
    const ADD_TO_FAVORITE="ADD_TO_FAVORITE";
    export const addToFavorite = createAsyncThunk<Movie, { userId: number, movie: Movie, token: string }>(
      "ADD_TO_FAVORITE",
      async ({ userId, movie, token }) => {
        const response = await axiosInstance.post(
          `/addToFavorite/${userId}`,
          {
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            overview: movie.overview,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const addedMovie = response.data as Movie;
        console.log(addedMovie);
        return addedMovie;
      }
    );
    // delete movie from favoris
    const DELETE_FROM_FAVORITE="DELETE_FROM_FAVORITE";
    export const deleteFromFavorite = createAsyncThunk<void, { userId: number, movieId: number, token: string }>(
      "DELETE_FROM_FAVORITE",
      async ({ userId, movieId, token }) => {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        await axiosInstance.delete(`/deleteFromFavorite/${userId}`, { data: { id: movieId }, ...config });
      }
    );
    // List favorite movies
    const FETCH_FAVORITE_MOVIES = "FETCH_FAVORITE_MOVIES";
    export const fetchFavoriteMovies = createAsyncThunk<Movie[], { userId: number, token: string }>(
      "FETCH_FAVORITE_MOVIES",
      async ({ userId, token }) => {
        const response = await axiosInstance.get(`/showFavorite/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const favoriteMovies = response.data.data as Movie[]; // Accédez au tableau de films à l'intérieur de la propriété "data" de la réponse
        console.log(favoriteMovies);
        return favoriteMovies;
      }
    );
    // Add movie to review
    const ADD_TO_REVIEW="ADD_TO_REVIEW";
    export const addToReview = createAsyncThunk<Movie, { userId: number, movie: Movie, token: string }>(
      "ADD_TO_REVIEW",
      async ({ userId, movie, token }) => {
        const response = await axiosInstance.post(
          `/addToToReview/${userId}`,
          {
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            overview: movie.overview,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const addedMovie = response.data as Movie;
        console.log(addedMovie);
        return addedMovie;
      }
    );
    // delete movie from to review
    const DELETE_FROM_REVIEW="DELETE_FROM_REVIEW";
    export const deleteFromReview = createAsyncThunk<void, { userId: number, movieId: number, token: string }>(
      "DELETE_FROM_REVIEW",
      async ({ userId, movieId, token }) => {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        await axiosInstance.delete(`/deleteFromToReview/${userId}`, { data: { id: movieId }, ...config });
      }
    );
    // show movies to review
      const FETCH_MOVIES_TO_REVIEW = "FETCH_MOVIES_TO_REVIEW";
      export const fetchMoviesToReview = createAsyncThunk<Movie[], { userId: number, token: string }>(
        "FETCH_MOVIES_TO_REVIEW",
        async ({ userId, token }) => {
          const response = await axiosInstance.get(`/showToReview/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const MoviesToReview = response.data.data as Movie[]; // Accédez au tableau de films à l'intérieur de la propriété "data" de la réponse
          console.log(MoviesToReview);
          return MoviesToReview;
        }
      );
// ACTION USER
    //Interface USER
    interface FormField {
      value: string;
      name: "pseudo" | "password";
    }
    interface FormData{
      pseudo: string;
      password: string;
    }
    // USER
    const CHANGE_FIELD = "CHANGE_FIELD";
    export const changeField = createAction<FormField>(CHANGE_FIELD);
    // Check token
    const CHECK_TOKEN = "CHECK_TOKEN";
    export const CheckToken = createAction(CHECK_TOKEN);
    // Subscribe user
    const REGISTER = "REGISTER"; // Ajout pour l'enregistrement de l'utilisateur
    export const register = createAsyncThunk<
      {
        birthday: string;
        email: string;
        pseudo: string;
        password:string;
        logged: boolean;
        token: string;
      },
      FormData
    >(REGISTER, async (FormData) => {
      const response = await axiosInstance.post("/createUser", FormData);
      return response.data;
    });
    // Login user
    const LOGIN = "LOGIN";
    export const login = createAsyncThunk<
      {
        user: any; pseudo: string; logged: boolean; token: string
},
      FormData
    >(LOGIN, async (formData) => {
      const response = await axiosInstance.post("/login", formData);
      console.log(response.data.data.user);
      return response.data.data;
    });
    // Logout
    const LOGOUT = "LOGOUT";
    export const logout = createAction(LOGOUT);
    // Update user
    const UPDATE_USER = "UPDATE_USER";
    // Create async function using createAsyncThunk of Redux Toolkit.
    // The first generic type parameter specifies the data type that the action will return ( UserState),
    // the second generic type parameter specifies the type of the action's argument ( FormData).
    export const updateUser = createAsyncThunk<UserState, UserFormData>(
      UPDATE_USER,
      async (formData: UserFormData, thunkAPI) => {
        const state = thunkAPI.getState() as RootState; // RootState's interface of 2 properties user and movie witch a state genered by  userReducer and movieReducer
        const id = state.user.id;
        const response = await axiosInstance.patch<UserState>(
          `/updateUser/${id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${formData.token}`,
            },
          }
        );
        const user = response.data;
        return user;
      }
    );
    // Delete user
    const DELETE_USER = "DELETE_USER";
    export const deleteUser = createAsyncThunk<void, number>(
      DELETE_USER,
      async (id, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;
        const token = state.user.token;
        await axiosInstance.delete(`/deleteUser/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    );


    //COMMENTS
    //Show comments 
    const FETCHCOMMENTS ="FETCHCOMMENTS"
    export const fetchComments = createAsyncThunk(FETCHCOMMENTS, async () => {
      const response = await axiosInstance.get("/showComment");
      const comments = response.data as Comment[];
      return response.data;
    });
    
    //Add comment 
    const ADDCOMMENT= "ADDCOMMENT"
    export const addComment = createAsyncThunk(ADDCOMMENT, async (comment) => {
      const response = await axiosInstance.post("/createComment/${id}", comment);
      return response.data;
    });
