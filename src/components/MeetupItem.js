import { useContext } from "react";

import Card from "./Card";
import classes from "./MeetupItem.module.css"
import { FavoritesContext } from "../store/favorites-context";


const MeetupItem = ({ id, title, image, address, description }) => {

    // import FavoritesContext
    const favoritesCtx = useContext(FavoritesContext)
    const { favorites, favoritesCount, addFavorite, removeFavorite, isFavorite } = favoritesCtx

    // favorite handler toggle
    function favoriteStatusHandler() {
        if (isFavorite(id)) {
            removeFavorite(id)
        } else {
            addFavorite({
                id: id,
                title: title,
                image: image,
                address: address,
                description: description
            })
        }
    }

    return <li className={ classes.item }>
        <Card>
            <div className={ classes.image }>
                <img src={ image } alt={ title } />
            </div>
            <div className={ classes.content }>
                <h3>{ title }</h3>
                <address>{ address }</address>
                <p>{ description }</p>
            </div>
            <div className={ classes.actions }>
                <button onClick={favoriteStatusHandler}>
                    {isFavorite(id) ? "Remove from Favorites" : "To Favorites"}
                </button>
            </div>
        </Card>
    </li>
}

export default MeetupItem;