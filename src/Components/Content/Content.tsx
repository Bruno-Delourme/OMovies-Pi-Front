import React from "react";

import NewMovie from "./NewMovies/NewMovies";
import Suggestion from "./Suggesions/Suggestions";
import SuggestionForYou from "./SuggestionsForYou/SuggestionsForYou";
import ByMood from "./ByMood/ByMood";
import ByGenre from "./ByGenre/ByGenre";
import ByActor from "./ByActor/ByActor";

function Content() {
    return (
        <><NewMovie /><Suggestion /><SuggestionForYou /><ByMood /><ByGenre /><ByActor /></>
        
    );
}

export default Content;