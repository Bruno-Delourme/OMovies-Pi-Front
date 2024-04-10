
import React, { useEffect } from "react";
import {useAppSelector } from "../../hooks/redux";


import NewMovie from "./NewMovies/NewMovies";
import Suggestion from "./Suggestions/Suggestions";
import SuggestionForYou from "./SuggestionsForYou/SuggestionsForYou";
import ByMood from "./ByMood/ByMood";
import ByGenre from "./ByGenre/ByGenre";
import ByActor from "./ByActor/ByActor";
import { Outlet, useLocation } from "react-router-dom";

function Content() {


    
    const romanceMovies = useAppSelector((state) => state.movies.romanceMovies);
    const loading = useAppSelector((state) => state.movies.loading);
    const error = useAppSelector((state) => state.movies.error);

    /* check if need add this part of code ???
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
      

    */



    return (
        <>
            <NewMovie /><Suggestion /><SuggestionForYou /><ByMood /><ByGenre /><ByActor />
             <Outlet /> {/* Render ResultKeywordBar when movies are available */}

        </>
        
    );
}

export default Content;

function checkToken(): any {
    throw new Error("Function not implemented.");
}
