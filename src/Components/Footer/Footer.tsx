
function Footer() {
    return (
        <div className=" bg-black text-white p-10">
            <div className="">
                <button className="">Besoin d'informations ?</button>
            </div>
            <div className="">
                <button className="">Nous contacter {/* au click sur le btn, ouvrir une modal pour envoyer un mail a omovies@gmail.com,  le corps du mail affiche le pseudo et l'email du user connecter */} </button>
            </div>
            <div className="comment">
                <button className="">Laisser nous un commentaire {/* au click sur le btn, ouvrir une modal pour laisser un commentaire ,  pseudo a afficher avec le commantaire */} </button>
            </div>
            <div>    
                <button className="">Liste des commentaires </button>
            </div>
            <div className="like">
                <p className="">Liker si vous aimer notre site</p>
                <button className="">Liker</button>
            </div>
            <div>
                <div className="team">Team O'MOVIES : Bruno, Gwendoline, Fadwa, Mathias </div>
            </div>
        </div>
    );
}

export default Footer;