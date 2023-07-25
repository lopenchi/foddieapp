import {createContext, PropsWithChildren, useContext, useState} from 'react';
import {AppContextType, Ingredient} from "../types.ts";

const AppContext = createContext<AppContextType>({
    favorites: [],
    addFavorite: () => {
    },
    removeFavorite: () => {
    },
    resetFavorites: () => {
    },
});

export const FavoriteContextProvider = ({children}: PropsWithChildren) => {
    const [favorites, setFavorites] = useState<Ingredient[]>([]);

    const context: AppContextType = {
        favorites,
        addFavorite(ingredient: Ingredient) {
            setFavorites(favorites.concat([ingredient]));
            console.log ("Added Ingredient to favorites!");
        },
        removeFavorite(ingredient: Ingredient) {
            // Create a new version of the favorites
            // that doesn't include this ingredientID.
            const nextFavorites: Ingredient[] = favorites.filter(f => f.id !== ingredient.id);
            setFavorites(nextFavorites);
        },
        resetFavorites() {
            console.log("Reset favorites!");
            setFavorites([]);
        },
    };

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export function useFavoriteContext() {
    return useContext(AppContext);
}
