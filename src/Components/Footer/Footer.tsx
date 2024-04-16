import "./Footer.scss";

function Footer() {
    return (
        <>
            <h1 className="title-configuration bg-black p-32">Ceci est un footer</h1>
            <div>
                <p>Besoin d'informations ?</p>
                <button>Nous contacter {/* au click sur le btn, ouvrir une modal pour envoyer un mail a omovies@gmail.com,  le corps du mail affiche le pseudo et l'email du user connecter */} </button>
            </div>
            <div className="comment">
                <button>Laisser nous un commentaire {/* au click sur le btn, ouvrir une modal pour laisser un commentaire ,  pseudo a afficher avec le commantaire */} </button>
                <p>Liste des commentaires </p>
            </div>
            <div className="like">
                <p>Liker si vous aimer notre site</p>
                <button>Liker</button>
            </div>
            <p className="team">Team O'MOVIES : Bruno, Gwendoline, Fadwa, Mathias </p>
        </>
    );
}

export default Footer;