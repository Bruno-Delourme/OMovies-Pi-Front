import HeaderProfil from "./HeaderProfil/HeaderProfil";



function MemberSpace () {
    return (
        <>
            <HeaderProfil />
            <h1>MemberSpace</h1>
            <label>Pseudo</label>
            <input></input>
            <label>Mail</label>
            <input></input>
            <label>Télephone</label>
            <input></input>
            <label>Mot de passe</label>
            <input></input>
            <img></img>
            <button>choisir une autre photo</button>
            <button>Enregistrer</button>
        </>

    );
}

export default MemberSpace;