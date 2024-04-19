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
      { path: "/movies/romance", element: <ResultKeywordBar /> },
      { path: "/movies/familial", element: <ResultKeywordBar /> },
      { path: "/movies/action", element: <ResultKeywordBar /> },
      { path: "/movies/science-fiction", element: <ResultKeywordBar /> },
      { path: "/movies/documentaire", element: <ResultKeywordBar /> },
      { path: "/movie/:id", element: <MovieDetails /> },
      // {path: "/movie", element: <MovieDetailsModal />,
      //   children: [
      //     {
      //       path: ":id",
      //       element: <MovieDetails />,
      //     },
      //   ],
      // },
    ]},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);