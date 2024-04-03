
import "./KeywordBar.scss";

function KeywordBar() {
    return (
        <div className="keywordbar">
            <button className="keywordbar-btn" id="romance-btn">Romance</button>
            <button className="keywordbar-btn" id="comedie-btn">Comédie</button>
            <button className="keywordbar-btn" id="marvel-btn" >Marvel</button>
            <button className="keywordbar-btn" id="sciencefiction-btn" >science fiction</button>
            <button className="keywordbar-btn" id="anime-btn" >Animé</button>
        </div>
    );
}

export default KeywordBar;