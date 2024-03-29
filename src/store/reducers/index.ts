import moviesReducer from "./movies";
import userReducer from "./user";

const reducer = {
    movies: moviesReducer,
    user: userReducer,
};

export default reducer;