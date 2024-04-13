import { createContext, useState } from "react";


// 變數宣告
const FavoritesContext = createContext({
    favorites: [],
    favoritesCount: 0,
    addFavorite: (meetup) => {},
    removeFavorite: (id) => {},
    isFavorite: (id) => {}
});

// Context 元件
const FavoritesContextProvider = (props) => {

    // 宣告 favorites 的狀態
    const [favorites, setFavorites] = useState([])

    // 新增我的最愛的函數
    function addFavorite(meetup) {
        setFavorites((prevData) => {
            return prevData.concat(meetup)
        })
    }

    // 移除我的最愛的函數
    function removeFavorite(id) {
        setFavorites((prevData) => {
            return prevData.filter(meetup => meetup.id !== id)
        })
    }

    // 是否為我的最愛函數
    function isFavorite(id) {
        return favorites.some(meetup => meetup.id === id)
    }

    const context = {
        favorites: favorites,
        favoritesCount: favorites.length,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
        isFavorite: isFavorite
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
};

export { FavoritesContext, FavoritesContextProvider};