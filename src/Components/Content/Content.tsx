import React from "react";
import ByActor from "./ByActor/ByActor";
import ByMood from "./ByMood/ByMood";
import NewMovie from "./NewMovies/NewMovies";
import Suggestion from "./Suggesions/Suggestions";
import SuggestionForYou from "./SuggestionsForYou/SuggestionsForYou";
import Movie from "./Movie/Movie";

function Content() {
    return (
        <><ByActor /><ByMood /><Movie /><NewMovie /><Suggestion /><SuggestionForYou /></>
        
    );
}

export default Content;