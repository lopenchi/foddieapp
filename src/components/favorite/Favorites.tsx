import {AppContextType, Ingredient} from "../../types.ts";
import {JSX} from "react";
import {useFavoriteContext} from "../../contexts/FavoriteContext.tsx";

const Favorites = (): JSX.Element => {

    const favoriteContext: AppContextType = useFavoriteContext();

    return (
        <div className={"bg-gray-200 w-96"}>
            <h1 className="text-3xl">Favorites</h1>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <ul>
                {favoriteContext.favorites.map((ingredient: Ingredient) => (
                    <li className={"flex justify-around py-2"} key={ingredient.id}>
                        <span className={"w-12"}>{ingredient.name}</span>
                        <button
                            className="pointer-events-auto rounded-md px-2 py-2 text-center font-medium bg-red-500 text-white hover:bg-red-400"
                            onClick={() => favoriteContext.removeFavorite(ingredient)}
                        >
                            <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path
                                    d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Favorites;
