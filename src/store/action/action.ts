import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Movie } from "../../@types/movie";

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
        //console.log(movies);
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

    // user List movies 







// ACTION USER

    //Interface USER
    interface FormField {
      value: string;
      name: "pseudo" | "password";
    }
    interface FormData{
      pseudo: string;
      email: string;
      date_of_birth: string;
      password: string;
    }

    // USER
    const CHANGE_FIELD = "CHANGE_FIELD";
    export const changeField = createAction<FormField>(CHANGE_FIELD);


    // Subscribe user 

const REGISTER = "REGISTER"; // Ajout pour l'enregistrement de l'utilisateur
export const register = createAsyncThunk<
  {
        date_of_birth: string;
    email: string;
    datedenaissance: string;
    pseudo: string;
    logged: boolean;
    token: string;
  },
  FormData
>(REGISTER, async (FormData) => {
  const response = await axiosInstance.post("/user", FormData);
  return response.data;
});



    // Login user
    const LOGIN = "LOGIN";
    export const login = createAsyncThunk<
      { pseudo: string; logged: boolean; token: string},
      FormData
    >(LOGIN, async (formData) => {
      const response = await axiosInstance.post("/login", formData);
      console.log(response.data.data.utilisateur);
      return response.data.data;
    
    });


    // Check token 
    const CHECK_TOKEN = "CHECK_TOKEN";
    export const CheckToken = createAction(CHECK_TOKEN);

    // Logout 
    const LOGOUT = "LOGOUT";
    export const logout = createAction(LOGOUT);





