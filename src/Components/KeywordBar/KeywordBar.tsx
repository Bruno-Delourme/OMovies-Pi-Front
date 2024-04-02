
import "./KeywordBar.scss";

function KeywordBar() {
    return (
        <div className="div-keywordbar">
            <button className="btn-romance">Romance</button>
            <button className="btn-comédie">Comédie</button>
            <button className="btn-marvel">Marvel</button>
            <button className="btn-sciencefiction">science fiction</button>
            <button className="btn-anime">Animé</button>
        </div>
    );
}

export default KeywordBar;