import HeaderGroup from "./HeaderGroup/HeaderGroup";
import { FaCheck } from "react-icons/fa";
import './Group.scss';
// Import de l'image qui représente un groupe de personnes
const logoGroup = "../../assets/users-round.png";

function Group() {
    const handleClick = () => {
        console.log("Bouton cliqué");
    }

    return (
        <div className="group-page">
          {/* Utilisation de l'image au lieu de l'icône FaPeopleGroup */}
          <button className="acces-buttons" id="group-btn" onClick={handleClick}>
            <img src={logoGroup} alt="Group Icon" style={{ width: 32, height: 32 }}/>
          </button>
          <HeaderGroup />
          <main className="content-grid">
            <div className="grid-item">
              <div className="image-container">
                <img src="path/to/your/image.jpg" alt="Description" />
              </div>
              <div className="checkmark-container">
                <FaCheck size={24} /> {/* Exemple d'ajout d'un icône de checkmark */}
              </div>
            </div>
          </main>
        </div>
    );
}

export default Group;
