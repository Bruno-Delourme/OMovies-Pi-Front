import { Provider } from 'react-redux';


// import ReactDom to inject our application into the DOM
import ReactDOM from 'react-dom/client';

//Import  Provider for routes
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './Components/App/App';
import './index.css';

import store from "./store/index";
import Error from "./Components/Error/error";
import Home from "./Components/Home/Home";
import List from "./Components/List/List";
import Group from "./Components/Group/Group";
import MemberSpace from "./Components/MemberSpace/MemberSpace";
import ResultKeywordBar from './Components/ResultKeywordBar/ResultKeywordBar';
import OneMovie from './Components/OneMovie/OneMovie';



//define router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    // loader: moviesLoader,
    children : [
      {index: true, element: <Home />},
      {path: "/group/:id", element: <Group />},  // check if need add loader later
      {path: "/list/:id", element: <List />}, // check if need add loader later

      {path: "/movies/romance", element: <ResultKeywordBar  />}, // Render ResultKeywordBar for this route
      {path: "/movies/familial", element: <ResultKeywordBar  />}, // Render ResultKeywordBar for this route
      {path: "/movies/action", element: <ResultKeywordBar  />}, // Render ResultKeywordBar for this route
      {path: "/movies/science-fiction", element: <ResultKeywordBar  />}, // Render ResultKeywordBar for this route
      {path: "/movies/documentaire", element: <ResultKeywordBar  />}, // Render ResultKeywordBar for this route

      {path: "/movie/:id", element: <OneMovie id={0} title={''} overview={''} release_date={''} vote_average={0}  />}, 
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
