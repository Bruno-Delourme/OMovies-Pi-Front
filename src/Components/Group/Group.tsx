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

            <div className="pl-10 text-white text-3xl pt-10 pb-10" >

                <p className="pl-10 text-white text-3xl pt-10 pb-10" >Bienvenue dans  : name groupe </p>


                <div>
                    <ul> Les membres du groupe</ul>
                </div>
                
                <div>
                    Les films du groupe  
                    {/*( avec l'ajout d'icone vote dans l'affiche de chaque film, créer un composant GroupeMovie pour avoir l'icone vote seulement sur les films du groupe ? )*/ }
                </div>

                <button className="btn pl-10" > Supprimer le groupe  </button> {/* - s'affiche seulement pour le createur du groupe */ }
            </div>

        </div>
    );
}

export default Group;
