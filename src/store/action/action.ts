import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { Movie } from "../../@types/movie";

//Ajout pour le USER
const CHANGE_FIELD = "CHANGE_FIELD";
const LOGIN = "LOGIN";


const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

//Ajout pour le USER
interface FormField {
  value: string;
  name: "email" | "password";
}
interface FormData{
  email:string,
  password:string
}

export const login = createAsyncThunk<
  { pseudo: string; logged: boolean; token: string },
  FormData
>(LOGIN, async (formData) => {
  const response = await axiosInstance.post("/login", formData);
  return response.data;
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

//Ajout pour le USER
export const changeField = createAction<FormField>(CHANGE_FIELD);
export const setRomanceMovies = createAction<Movie[]>(SET_ROMANCE_MOVIES);
