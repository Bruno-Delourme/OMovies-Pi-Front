import commentReducer from "./comments";
import moviesReducer from "./movies";
import userReducer from "./user";

const reducer = {
    movies: moviesReducer,
    user: userReducer,
    comment: commentReducer
};

export default reducer;