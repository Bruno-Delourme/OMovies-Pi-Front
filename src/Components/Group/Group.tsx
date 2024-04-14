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

          <HeaderGroup />
          <main className="content-grid">
            <div className="grid-item">

            </div>
          </main>
        </div>
    );
}

export default Group;
