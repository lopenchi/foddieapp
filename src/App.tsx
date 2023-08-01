import './App.css'
import {getAllIngredientsName} from "./services/IngredientService.ts"
import {JSX} from "react";
import {Outlet, useLoaderData} from "react-router-dom";
import {FavoriteContextProvider} from "./contexts/FavoriteContext.tsx";
import {Ingredient, List} from "./types.ts";
import Favorites from "./components/favorite/Favorites.tsx";
import {SideBar} from "./components/sidebar/SideBar.tsx";

export async function loader(): Promise<List[]> {
    return await getAllIngredientsName();
}

const App = (): JSX.Element => {
    const ingredients = useLoaderData() as Ingredient[];

    return (
        <FavoriteContextProvider>
            <h1 className="text-5xl"> Foodie App </h1>

            <div className={"flex"}>
                <SideBar ingredients={ingredients}/>
                <div id="detail" className={"container flex items-center"}>
                    <Outlet/>
                </div>
                <Favorites/>
            </div>
        </FavoriteContextProvider>
    )
}

export default App
