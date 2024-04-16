
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import HeaderList from "./HeaderList/HeaderList";

function List() {

    const dispatch = useAppDispatch();

    const user = useAppSelector((state) => state.user);
    
    return (
        <>
            <HeaderList />
            <h1>Bienvenue dans ton espace liste  {user.pseudo}</h1>

            <label>
                Filtrer par genre :
                <input type="text" name="filterByGenre"  />
            </label>

        </>
    );
}

export default List;