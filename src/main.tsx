import { Provider } from 'react-redux';

import React from 'react';
// importe ReactDom to inject our application into the DOM
import ReactDOM from 'react-dom/client';

//Import  Provider for routes
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './Components/App/App.tsx';
import './index.css';

import store from "./store/index.tsx";
import Error from "./Components/Error/error.tsx";
import Home from "./Components/Home/Home.tsx";
import List from "./Components/List/List.tsx";
import Group from "./Components/Group/Group.tsx";
import MemberSpace from "./Components/MemberSpace/MemberSpace.tsx";
import Movie from "./Components/Content/Movie/Movie.tsx";




//define router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    // loader: moviesLoader,
    children : [
      {index: true, element: <Home />},
      {path: "/movie/:id", element: <Movie />},



      {path: "/group/:id", element: <Group />},  // check if need add loader later
      {path: "/list/:id", element: <List />}, // check if need add loader later

    ],
  },
]);

// create root for my app (using HTML Element)

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

// inject our app into DOM
root.render(
  <Provider store = {store}>
    <RouterProvider router = {router} />
  </Provider>,
);
