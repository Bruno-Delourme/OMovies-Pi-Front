
import { useAppDispatch } from "../../hooks/redux";
import { fetchActionMovies, fetchRomanceMovies, fetchScienceFictionMovies, fetchDocumentaireMovies, fetchFamilialMovies } from "../../store/action/action";

import { useNavigate } from "react-router-dom";

function KeywordBar() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const handleRomanceClick = () => {
        dispatch(fetchRomanceMovies()); // Fetch data
        navigate('/movies/romance'); // Redirect to the route
      };

    const handleFamilialClick = () => {
        dispatch(fetchFamilialMovies()); // Fetch data
        navigate('/movies/familial'); // Redirect to the route
      };

    const handleActionClick = () => {
        dispatch(fetchActionMovies()); // Fetch data
        navigate('/movies/action'); // Redirect to the route
      };

      const handleScienceFictionClick = () => {
        dispatch(fetchScienceFictionMovies()); // Fetch data
        navigate('/movies/science-fiction'); // Redirect to the route
      };

      const handleDocumentaireClick = () => {
        dispatch(fetchDocumentaireMovies()); // Fetch data
        navigate('/movies/documentaire'); // Redirect to the route
      };

    return (
      <div className="keywordbar ">
      <button className="genre-btn text-white bg-red-400" onClick={handleRomanceClick}>Romance</button>
      <button className="genre-btn text-white bg-stone-950" onClick={handleFamilialClick}>Familial</button>
      <button className="genre-btn text-white bg-orange-700" onClick={handleActionClick}>Action</button>
      <button className="genre-btn text-white bg-yellow-950" onClick={handleScienceFictionClick}>Science Fiction</button>
      <button className="genre-btn text-black bg-white" onClick={handleDocumentaireClick}>Documentaire</button>
      </div>
    );
}

export default KeywordBar;