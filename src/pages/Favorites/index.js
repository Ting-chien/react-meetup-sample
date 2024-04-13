import { useContext } from "react";

import MeetupList from "../../components/MeetupList";
import { FavoritesContext } from "../../store/favorites-context";


const FavoritesPage = () => {

    const favoritesCtx = useContext(FavoritesContext)

    return <div>
        <h1>Favorites Page</h1>
        { favoritesCtx.favoritesCount === 0
        ? <p>You got no favorites yet. Please add one.</p> 
        : <MeetupList meetups={favoritesCtx.favorites} />
        }
    </div>
}

export default FavoritesPage;