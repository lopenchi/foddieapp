export type Ingredient = {
    id: string,
    name: string;
    group: "fruit" | "vegetable" | "protein";
    minAge: number; // months
    photo?: string
}

export type List = {
    id: string,
    name: string,
}

export type AppContextType = {
    favorites: Ingredient[];
    addFavorite: (ingredient: Ingredient) => void;
    removeFavorite: (ingredient: Ingredient) => void;
    resetFavorites: () => void;
};
