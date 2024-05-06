import commentReducer from "./comments";
import likeReducer from "./like";
import moviesReducer from "./movies";
import searchMovieReducer from "./searchMovie";
import userReducer from "./user";

const reducer = {
    movies: moviesReducer,
    user: userReducer,
    comment: commentReducer,
    like: likeReducer,
    searchMovie: searchMovieReducer,
};

export default reducer;