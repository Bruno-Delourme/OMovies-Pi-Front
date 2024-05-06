 import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import moviesReducer from "./reducers/movies";
import commentReducer from "./reducers/comments";
import likeReducer from "./reducers/like";
import userReducer from "./reducers/user";

import searchMovieReducer from "./reducers/searchMovie";

const store = configureStore({
    reducer: {
      user: userReducer,
      comment: commentReducer,
      movies: moviesReducer,
      like: likeReducer,
      searchMovie: searchMovieReducer,
    },
  });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

