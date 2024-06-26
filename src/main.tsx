import React from "react";
 import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/index";
import App from "./Components/App/App";
import "./index.css";
import Error from "./Components/Error/error";
import Home from "./Components/Home/Home";
import List from "./Components/List/List";
import Group from "./Components/Group/Group";
import MemberSpace from "./Components/MemberSpace/MemberSpace";
import ResultKeywordBar from "./Components/ResultKeywordBar/ResultKeywordBar";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import MovieDetailsModal from "./Components/MovieDetails/MovieDetailsModal";
import MovieSearchBar from "./Components/Header/SearchBar/MovieSearchBar";
import SearchBar from "./Components/Header/SearchBar/SearchBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/group/:id", element: <Group /> },
      { path: "/list/:id", element: <List /> },
      // { path: "/profil/:id", element: <MemberSpace /> },
      { path: "/movies/romance/*", element: <ResultKeywordBar /> },
      { path: "/moviesRating/romance/*", element: <ResultKeywordBar /> },

      { path: "/movies/familial/*", element: <ResultKeywordBar /> },
      { path: "/moviesRating/familial/*", element: <ResultKeywordBar /> },

      { path: "/movies/action/*", element: <ResultKeywordBar /> },
      { path: "/moviesRating/action/*", element: <ResultKeywordBar /> },

      { path: "/movies/science-fiction/*", element: <ResultKeywordBar /> },
      { path: "/moviesRating/science-fiction/*", element: <ResultKeywordBar /> },

      { path: "/movies/documentaire/*", element: <ResultKeywordBar /> },
      { path: "/moviesRating/documentaire/*", element: <ResultKeywordBar /> },

      { path: "/movie/:id", element: <MovieDetails /> },
      { path: "/movie/searchbar/:id", element: <MovieSearchBar /> },


    ]},
]);

//using (!), i explain to TypeScript that i'm sure that value  that document.getElementById("root") sent is not  null ou undefined.
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);