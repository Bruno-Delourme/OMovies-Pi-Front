import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Movie } from "../../@types/movie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9000/api",
});

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
const FETCH_SUGGESTION_MOVIES = "FETCH_SUGGESTION__MOVIES";
export const fetchSuggestionMovies = createAsyncThunk<Movie[]>(
  FETCH_SUGGESTION_MOVIES,
  async () => {
    const response = await axiosInstance.get("/popularMovies");
    const movies = response.data as Movie[];
    return movies;
  }
);

// Movies By genre 
const FETCH_BYGENRE_MOVIES = "FETCH_BYGENRE__MOVIES";
export const fetchByGenreMovies = createAsyncThunk<Movie[]>(
  FETCH_BYGENRE_MOVIES,
  async () => {
    const response = await axiosInstance.get("/popularMovies");
    const movies = response.data as Movie[];
    return movies;
  }
);

// Movies By actor 
const FETCH_BYACTOR_MOVIES = "FETCH_BYACTOR__MOVIES";
export const fetchByActorMovies = createAsyncThunk<Movie[]>(
  FETCH_BYACTOR_MOVIES,
  async () => {
    const response = await axiosInstance.get("/popularMovies");
    const movies = response.data as Movie[];
    return movies;
  }
);

//Interface USER
interface FormField {
  value: string;
  name: "pseudo" | "password";
}
interface FormData{
  pseudo: string;
  password:string
}

//Ajout pour le USER
const CHANGE_FIELD = "CHANGE_FIELD";
export const changeField = createAction<FormField>(CHANGE_FIELD);

// Login user 
const LOGIN = "LOGIN";
export const login = createAsyncThunk<
  { pseudo: string; logged: boolean; token: string },
  FormData
>(LOGIN, async (formData) => {
  const response = await axiosInstance.post("/login", formData);
  return response.data;
  console.log(response);
});

// Check token 
const CHECK_TOKEN = "CHECK_TOKEN";
export const CheckToken = createAction(CHECK_TOKEN);

// Logout 
const LOGOUT = "LOGOUT";
export const logout = createAction(LOGOUT);