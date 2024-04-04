
import React from "react";
import { useAppSelector } from "../../hooks/redux";


import NewMovie from "./NewMovies/NewMovies";
import Suggestion from "./Suggestions/Suggestions";
import SuggestionForYou from "./SuggestionsForYou/SuggestionsForYou";
import ByMood from "./ByMood/ByMood";
import ByGenre from "./ByGenre/ByGenre";
import ByActor from "./ByActor/ByActor";
import { Outlet } from "react-router-dom";

function Content() {
    const romanceMovies = useAppSelector((state) => state.movies.romanceMovies);
    const loading = useAppSelector((state) => state.movies.loading);
    const error = useAppSelector((state) => state.movies.error);

    return (
        <>
            <NewMovie /><Suggestion /><SuggestionForYou /><ByMood /><ByGenre /><ByActor />
             <Outlet /> {/* Render ResultKeywordBar when movies are available */}

        </>
        
    );
}

export default Content;